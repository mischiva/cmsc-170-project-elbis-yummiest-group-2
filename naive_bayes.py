# ====== Reads the CSVs for this project ======
def read_dataset(path):
    # ====== PRE-PROCESSING THE DATASET ======

    # Open the CSV file
    with open(path, "r") as f:
        lines = f.readlines()

    # Ignore everything above -END HEADER-
    # Record the next line after it (which contains column names)
    for i, line in enumerate(lines):
        if line.strip() == "-END HEADER-":
            start = i + 1
            break

    # Store the column names in a list 
    # ['YEAR', 'MO', 'DY', 'HR', 'ALLSKY_SFC_UV_INDEX']
    names = lines[start].strip().split(",")

    # Then for each line after the column name, place them in the rows list
    # [['2026', '1', '1', '0', '0.0'], ['2026', '1', '1', '1', '0.0'], ...]
    rows=[]
    for line in lines[start+1:]:
        parts = line.strip().split(",")

        # Skip lines that have incomplete values
        if len(parts) == len(names):
            rows.append(parts)
    return names, rows

# ===============================================================
# Read the HOURLY - BATONG MALAKE dataset
names, hourly = read_dataset("batongmalake_lb_Hourly_20260101_20261031_UVIndex_LST.csv")

# The highest UV that day will be recorded in this dictionary
daily_max = {}

# Track days with inconsistent data to automatically drop it when the daily dataset is read
bad_days = set()

for r in hourly:
    # r[0] = year; r[1] = month; r[2] = day
    key = (int(r[0]), int(r[1]), int(r[2]))

    # r[4] = uv
    uv = float(r[4])

    # The dataset noted that if the uv is -999, it is missing
    # So, skip it
    if uv == -999:
        bad_days.add(key)
        continue

    # If date not in dictionary yet or if higher UV, change max
    if key not in daily_max or uv > daily_max[key]:
        daily_max[key] = uv

# The UV classification if class 0, 1, 2 based on WHO
def label(uv):
    # Round to nearest whole number
    uv = int(uv + 0.5)
    if uv <= 2:
        return 0 # No protection required (0-2)
    elif uv <= 7:
        return 1 # Protection required (3-7)
    else:
        return 2 # Extra protection required (8+)

# ===============================================================
# Read the DAILY - BATONG MALAKE dataset
# This one has the 6 weather features
names, weather = read_dataset("batongmalake_lb_Daily_20260101_20261031_UVIndex_LST.csv")

# Each day will be stored here as (date, [6 features], class)
data = []

for r in weather:
    # r[0] = year; r[1] = month; r[2] = day
    key = (int(r[0]), int(r[1]), int(r[2]))

    # r[4:] = WS2M, T2M, T2M_MAX, T2M_MIN, RH2M, PS
    feats = [float(x) for x in r[4:]]

    # Only keep the day if:
    # 1. it has a max uv from the hourly dataset (so it has a label)
    # 2. it is not in bad_days (no missing hours)
    # 3. none of the 6 features is -999 (missing)
    if key in daily_max and key not in bad_days and -999 not in feats:
        # Label it using the max uv of that day
        data.append((key, feats, label(daily_max[key])))

# Sort by data by oldest date first
data.sort()