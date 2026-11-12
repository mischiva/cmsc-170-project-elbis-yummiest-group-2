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
    names = lines[start].strip().split(",")

    # Then for each line after the column name, place them in the rows list
    rows = []
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

# d[1] = the 6 features (THE INPUTS)
# d[2] = the UV class for the day (THE ANSWERS)
X_train = [d[1] for d in train]
y_train = [d[2] for d in train]
X_test  = [d[1] for d in test]
y_test  = [d[2] for d in test]

# ===============================================================
# blind model that does not look at the weather at all
# finds the most common class in the training days and that becomes the baseline
# the algorithm has to score higher than this blind guesser to be useful

# Count how many training days each class has
counts = {}
for y in y_train:
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
# ===== KNN: SCALING THE FEATURES =====
# kNN works with distances, so a feature with big numbers (pressure ~ 99)
# would drown out a feature with small numbers (wind ~ 1.5)
# fix: turn every feature into "how many standard deviations from the average"
# the average and spread come from the TRAINING days only
# (if we used the test days, the model would be peeking at the answers)
import math

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


def scale(X, means, stds):
    return [[(x[j] - means[j]) / stds[j] for j in range(len(x))] for x in X]

# ===============================================================
# ===== KNN: DISTANCE =====
# how far apart are two days (straight-line / Euclidean distance)
# small = the two days had similar weather
# we skip the square root because the closest day stays the closest without it
def distance(a, b):
    total = 0
    for j in range(len(a)):
        total += (a[j] - b[j]) ** 2
    return total

# ===============================================================
# ===== KNN: SORTED NEIGHBORS OF ONE DAY =====
# measure the distance from one day to EVERY training day
# then return the training answers (classes) sorted from the nearest to the farthest
def sorted_neighbors(X_tr, y_tr, x):
    # list of (distance, class of that training day)
    dists = []
    for row, answer in zip(X_tr, y_tr):
        dists.append((distance(row, x), answer))

    # smallest distance first
    dists.sort()

    # we only need the classes, in order of nearest to farthest
    return [answer for d, answer in dists]

# ===============================================================
# ===== KNN: VOTE =====
# look at the k nearest days and let them vote, the class with the most votes wins
# neighbors = classes sorted nearest to farthest
def vote(neighbors, k):
    votes = {}
    first_seen = {}

    for pos in range(k):
        c = neighbors[pos]
        votes[c] = votes.get(c, 0) + 1

        # remember where we first saw this class (0 = the nearest day)
        if c not in first_seen:
            first_seen[c] = pos

    best_c = None

    for c in votes:
        # a class wins if it has more votes
        # if tied, the class that has the nearer neighbor wins
        if best_c is None or votes[c] > votes[best_c] or (votes[c] == votes[best_c] and first_seen[c] < first_seen[best_c]):
            best_c = c

    return best_c

# CHOOSING k
# k = how many neighbors vote
# too small (1) = too sensitive to noise, too big = too blurry
# we try several k and keep the one with the best accuracy on days the model did not train on
# we cannot use the test days for this, so we cut the LAST 20% of the training days (validation)
# it is still chronological: sub-train is older than validation

cut2 = int(len(X_train) * 0.8)
X_sub, y_sub = X_train[:cut2], y_train[:cut2]
X_val, y_val = X_train[cut2:], y_train[cut2:]

# scale using the sub-train days only
m_sub, s_sub = get_scaler(X_sub)
X_sub_s = scale(X_sub, m_sub, s_sub)
X_val_s = scale(X_val, m_sub, s_sub)

# the k values we will try (odd so there are fewer ties)
k_list = [1, 3, 5, 7, 9, 11, 15, 21, 31, 41, 51]

# for each k, count how many validation days it got right
right = {k: 0 for k in k_list}

for x, answer in zip(X_val_s, y_val):
    # sort the neighbors only ONCE per day, then reuse it for every k
    neighbors = sorted_neighbors(X_sub_s, y_sub, x)

    for k in k_list:
        if vote(neighbors, k) == answer:
            right[k] += 1

best_k = k_list[0]
for k in k_list:
    val_acc = right[k] / len(y_val)
    print("k =", k, "| validation accuracy:", val_acc)

    if val_acc > right[best_k] / len(y_val):
        best_k = k

print("Best k:", best_k)

# ===============================================================
# ===== KNN: PREDICTION ON THE TEST DAYS =====
# kNN has no real "training", it just remembers the training days
# so we only scale them (using the full training days) and keep them

means, stds = get_scaler(X_train)
X_train_s = scale(X_train, means, stds)

# the test days are scaled using the TRAINING means and stds
X_test_s = scale(X_test, means, stds)

knn_pred = []
for x in X_test_s:
    neighbors = sorted_neighbors(X_train_s, y_train, x)
    knn_pred.append(vote(neighbors, best_k))

print("Baseline accuracy:", accuracy(y_test, baseline_pred))
print("KNN accuracy:", accuracy(y_test, knn_pred))

# precision of each class
for c in [0, 1, 2]:
    print("KNN precision class", c, ":", precision(y_test, knn_pred, c))

print("Confusion matrix:")
for row in confusion_matrix(y_test, knn_pred):
    print(row)