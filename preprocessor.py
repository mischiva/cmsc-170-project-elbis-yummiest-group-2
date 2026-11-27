# shared preprocessing + helpers for knn / naive bayes / perceptron
# Alee's lines 1-177 turned into a module, so all 3 algos can just import it.

import math
import os

# folder of this file, so the CSVs are found no matter where the program is run from
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

HOURLY_FILE = os.path.join(BASE_DIR, "batongmalake_lb_Hourly_20010101_20261031_UVIndex_LST.csv")
DAILY_FILE = os.path.join(BASE_DIR, "batongmalake_lb_Daily_20010101_20261031_UVIndex_LST.csv")

# fraction of the (chronologically sorted) days used for training
TRAIN_RATIO = 0.7

FEATURE_SETS = {
    "set1": ["T2M", "PS", "WS2M", "RH2M"],
    "set2": ["T2M_MAX", "PS", "WS2M", "RH2M"],
}


# ====== Reads the CSVs for this project ======
def read_dataset(path):
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
    names = lines[start].strip().split(",")

    # Then for each line after the column name, place them in the rows list
    rows = []
    for line in lines[start + 1:]:
        parts = line.strip().split(",")

        # Skip lines that have incomplete values
        if len(parts) == len(names):
            rows.append(parts)
    return names, rows


# ===== The UV classification if class 0, 1, 2 based on WHO =====
def label(uv):
    # Round to nearest whole number
    uv = int(uv + 0.5)
    if uv <= 2:
        return 0  # No protection required (0-2)
    elif uv <= 7:
        return 1  # Protection required (3-7)
    else:
        return 2  # Extra protection required (8+)


# ===== Builds the whole dataset and returns the train/test split =====
def load_data(feature_names=FEATURE_SETS["set1"], hourly_path=HOURLY_FILE, daily_path=DAILY_FILE):
    # ---- HOURLY: get the highest UV of each day ----
    names, hourly = read_dataset(hourly_path)

    # The highest UV that day will be recorded in this dictionary
    daily_max = {}

    # Track days with inconsistent data to automatically drop it when the daily dataset is read
    bad_days = set()

    # count the hours per day so days with missing hours can be dropped
    hours_per_day = {}

    for r in hourly:
        # r[0] = year; r[1] = month; r[2] = day
        key = (int(r[0]), int(r[1]), int(r[2]))
        hours_per_day[key] = hours_per_day.get(key, 0) + 1

        # r[4] = uv
        uv = float(r[4])

        # The dataset noted that if the uv is -999, it is missing
        if uv == -999:
            bad_days.add(key)
            continue

        # If date not in dictionary yet or if higher UV, change max
        if key not in daily_max or uv > daily_max[key]:
            daily_max[key] = uv

    # days that do not have all 24 hours are also bad
    for key, n in hours_per_day.items():
        if n != 24:
            bad_days.add(key)

    # ---- DAILY: the 6 weather features ----
    names, weather = read_dataset(daily_path)
    idx = [names.index(f) for f in feature_names]

    # Each day will be stored here as (date, [6 features], class)
    data = []

    for r in weather:
        key = (int(r[0]), int(r[1]), int(r[2]))

        # r[4:] = WS2M, T2M, T2M_MAX, T2M_MIN, RH2M, PS
        feats = [float(r[i]) for i in idx]

        # Only keep the day if:
        # 1. it has a max uv from the hourly dataset (so it has a label)
        # 2. it is not in bad_days (no missing hours)
        # 3. none of the 6 features is -999 (missing)
        if key in daily_max and key not in bad_days and -999 not in feats:
            data.append((key, feats, label(daily_max[key])))

    # Sort by date, oldest first
    data.sort()

    # ===== TRAIN/TEST SPLIT (70/30 and chronological) =====
    cut = int(len(data) * TRAIN_RATIO)
    train, test = data[:cut], data[cut:]

    # d[1] = the 6 features (THE INPUTS)
    # d[2] = the UV class for the day (THE ANSWERS)
    X_train = [d[1] for d in train]
    y_train = [d[2] for d in train]
    X_test = [d[1] for d in test]
    y_test = [d[2] for d in test]

    # ===== BASELINE: blind model that always guesses the most common training class =====
    counts = {}
    for y in y_train:
        counts[y] = counts.get(y, 0) + 1
    majority = max(counts, key=counts.get)
    baseline_pred = [majority] * len(y_test)

    return X_train, y_train, X_test, y_test, baseline_pred


# ===== SCALING (normalization) =====
# distance and weight based models (kNN, perceptron) need every feature on the same scale,
# or else pressure (~99) drowns out wind (~1.5)
# the means and stds must come from the TRAINING days only (no peeking at the test days)
def get_scaler(X):
    means = []
    stds = []

    # go through the 6 features one by one
    for j in range(len(X[0])):
        vals = [r[j] for r in X]

        # mean = the average value
        mean = sum(vals) / len(vals)

        # std = how spread out the values are
        var = sum((v - mean) ** 2 for v in vals) / len(vals)
        std = math.sqrt(var)

        # so we never divide by 0
        if std == 0:
            std = 1.0

        means.append(mean)
        stds.append(std)

    return means, stds


# turns every value into "how many standard deviations from the training average"
def scale(X, means, stds):
    return [[(x[j] - means[j]) / stds[j] for j in range(len(x))] for x in X]


# adds x0 = +1 in front of every row (this is what the perceptron bias weight w0 gets multiplied with)
def add_bias(X):
    return [[1.0] + list(x) for x in X]


# ===== ACCURACY (correct predictions / total predictions) =====
def accuracy(y_true, y_pred):
    correct = 0
    for real, guess in zip(y_true, y_pred):
        if real == guess:
            correct += 1
    return correct / len(y_true)


# ===== PRECISION (of the days predicted as class c, how many were really c) =====
def precision(y_true, y_pred, c):
    predicted = 0
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


def macro_precision(y_true, y_pred):
    return sum(precision(y_true, y_pred, c) for c in [0, 1, 2]) / 3


# ===== CONFUSION MATRIX (row = real, col = predicted) =====
def confusion_matrix(y_true, y_pred):
    m = [[0, 0, 0] for _ in range(3)]
    for real, guess in zip(y_true, y_pred):
        m[real][guess] += 1
    return m


# ===== Prints the same result format for every algo =====
def print_report(name, y_test, pred, baseline_pred):
    print("Baseline accuracy:", accuracy(y_test, baseline_pred))
    print(name, "accuracy:", accuracy(y_test, pred))

    for c in [0, 1, 2]:
        print(name, "precision class", c, ":", precision(y_test, pred, c))

    print("Confusion matrix:")
    for row in confusion_matrix(y_test, pred):
        print(row)