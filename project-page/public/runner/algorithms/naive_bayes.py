# preprocessing, split, baseline and metrics all come from preprocessor.py
from utilities.preprocessor import load_data, print_report

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
# ENTRY POINT (called by main.py)
# takes the shared train/test days and returns the predicted class of every test day
def run_nb(X_train, y_train, X_test):
    # train on the training days
    model = train_nb(X_train, y_train)

    # guess every test day
    return predict(model, X_test)


# only runs when this file is run directly (python naive_bayes.py), not when it is imported
if __name__ == "__main__":
    X_train, y_train, X_test, y_test, baseline_pred = load_data()

    nb_pred = run_nb(X_train, y_train, X_test)

    print_report("NB", y_test, nb_pred, baseline_pred)
