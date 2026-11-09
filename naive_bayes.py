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

# ===== The UV classification if class 0, 1, 2 based on WHO =====
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

# ===============================================================
# ===== TRAIN/TEST SPLIT (80/20 and chronological) =====

cut = int(len(data) * 0.8)

# The oldest 80% is for training
# The newest 20% is for testing
train, test = data[:cut], data[cut:]

# GUYS TRUST ME TAMA TO KASI GINISA KAMI DATI SA PJDSC AND 
# YUNG PART NA TO SPECIFICALLY YUNG PINAGALITAN KAMI SO NOW I KNOW
# d[1] = the 6 features (THE INPUTS)
# d[2] = the UV class for the day (THE ANSWERS)
X_train = [d[1] for d in train]
y_train = [d[2] for d in train]
X_test  = [d[1] for d in test]
y_test  = [d[2] for d in test]

# ===============================================================
# blind model that does not look at the weather at all
# finds the most common class in the training days and that becomes the baseline
# for the model
# the algorithm has to score higher than this blind guesser to be useful

# Count how many training days each class has
# {0: ..., 1: ..., 2: ...}
counts = {}
for y in y_train:
    # If the class is not in the dictionary yet, start from 0 then add 1
    counts[y] = counts.get(y, 0) + 1

# The class with the highest count is the majority class
majority = max(counts, key=counts.get)

# Guess the majority class for every test day
baseline_pred = [majority] * len(y_test)

# ===============================================================
# ===== ACCURACY (correct predictions / total predictions) =====
def accuracy(y_true, y_pred):
    correct = 0

    for real, guess in zip(y_true, y_pred):
        # If the guess is right, add 1
        if real == guess:
            correct += 1

    return correct / len(y_true)


# ===== PRECISION (of the days predicted as class *something, how many were really that class) =====
def precision(y_true, y_pred, c):
    # Days the model said were that class 
    predicted = 0

    # Of those days, the ones that really were class that
    correct = 0

    for real, guess in zip(y_true, y_pred):
        if guess == c:
            predicted += 1
            if real == c:
                correct += 1

    # To avoid dividing by 0
    if predicted == 0:
        return 0.0

    return correct / predicted


# ===== CONFUSION MATRIX =====
# row is real
# col is predicted
def confusion_matrix(y_true, y_pred):
    # initial is 3x3 column of 0s
    m = [[0, 0, 0] for _ in range(3)]

    for real, guess in zip(y_true, y_pred):
        # Add 1 to the cell for (real class, predicted class)
        m[real][guess] += 1

    return m

# ===============================================================
# ===== NAIVE BAYES TRAINING =====
# save the typical weather of each class
# for each class (0, 1, 2) we save:
#   1. prior = how common the class is
#   2. means = the average of each of the 6 features
#   3. variances = how spread out each of the 6 features are
import math

def train_nb(X, y):
    # {class: (prior, [6 means], [6 variances])}
    model = {}

    for c in [0, 1, 2]:
        # get only the training days that belong to class c
        rows_c = [x for x, answer in zip(X, y) if answer == c]

        # if no training day has this class, skip it
        if len(rows_c) == 0:
            continue

        # prior = days in this class / all training days
        prior = len(rows_c) / len(X)

        means = []
        variances = []

        # go through the 6 features one by one (j = 0 is WS2M, j = 1 is T2M, ...)
        for j in range(len(X[0])):
            # the value of feature j on every day in this class
            vals = [r[j] for r in rows_c]

            # mean = the average value
            mean = sum(vals) / len(vals)

            # variance = how far the values usually are from the mean
            # small = close to the mean, big = all over the place
            var = sum((v - mean) ** 2 for v in vals) / len(vals)

            means.append(mean)

            # tiny number so the variance is never exactly 0
            variances.append(var + 1e-9)

        model[c] = (prior, means, variances)

    return model

# ===============================================================
# ===== NAIVE BAYES PREDICTION =====
# give each class a score for a day, then pick the highest score

# ===== LOG GAUSSIAN =====
# how likely is the value x for a class with this mean and variance
# the closer x is to the mean, the higher the number
def log_gauss(x, mean, var):
    return -0.5 * math.log(2 * math.pi * var) - ((x - mean) ** 2) / (2 * var)


# ===== PREDICT ONE DAY =====
def predict_one(model, x):
    best_c = None
    best_score = None

    # try every class one by one
    for c, (prior, means, variances) in model.items():
        # start with the prior
        # we use log so the very small numbers do not become 0
        # (your spam lab used Decimal for the same reason)
        score = math.log(prior)

        # add how well each of the 6 features fits this class
        # this is the "naive" part: the 6 features are treated as separate
        for j in range(len(x)):
            score += log_gauss(x[j], means[j], variances[j])

        # scores are negative, the one closer to 0 is higher (-12 beats -15)
        if best_score is None or score > best_score:
            best_c = c
            best_score = score

    # the class with the highest score is the guess
    return best_c


# ===== PREDICT MANY DAYS =====
def predict(model, X):
    return [predict_one(model, x) for x in X]

# ===============================================================

# train on the training days
model = train_nb(X_train, y_train)

# guess every test day 
nb_pred = predict(model, X_test)

print("Baseline accuracy:", accuracy(y_test, baseline_pred))
print("NB accuracy:", accuracy(y_test, nb_pred))

# precision of each class
for c in [0, 1, 2]:
    print("NB precision class", c, ":", precision(y_test, nb_pred, c))

print("Confusion matrix:")
for row in confusion_matrix(y_test, nb_pred):
    print(row)