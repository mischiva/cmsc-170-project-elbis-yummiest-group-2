# preprocessing, split, baseline and metrics all come from preprocessor.py
from preprocessor import (load_data, print_report, scale_train_test, add_bias,
                          best_class, CLASSES, FEATURE_SETS)

# safety limit so training stops even if the data is not linearly separable
# (weather -> UV class is not perfectly separable, so we will usually hit this)
MAX_ITERATIONS = 500

# same learning rate idea as the exercise
LEARNING_RATE = 0.01


# PERCEPTRON FUNCTIONS (from the previous exercise)
# v = x0*w0 + x1*w1 + ... + xm*wm
def compute_v(x, w):
    v = 0
    for i in range(len(x)):
        v += x[i] * w[i]
    return v


# y = 1 if v >= 0, otherwise -1
def classify(v):
    if v >= 0:
        return 1.0
    return -1.0


# new w = current w + learning rate * x * (d - y)
def update_weights(w, x, learning_rate, d, y):
    return [w[i] + learning_rate * x[i] * (d - y) for i in range(len(w))]


# TRAINING ONE PERCEPTRON
# a single perceptron only answers yes/no (+1 / -1), but we have 3 classes
# so we train 3 perceptrons, one per class ("one-vs-rest"):
#   perceptron 0: is this day class 0 or not?
#   perceptron 1: is this day class 1 or not?
#   perceptron 2: is this day class 2 or not?
# d = +1 if the day belongs to that class, -1 if not
def train_one(X, y, target, learning_rate):
    w = [0.0] * len(X[0])

    # the weather data is not linearly separable, so the plain perceptron
    # never stops changing and the last weights may be bad
    # so we remember the weights that had the fewest mistakes on the training days
    best_w = w
    best_errors = None

    for i in range(MAX_ITERATIONS):
        errors = 0

        for x, answer in zip(X, y):
            d = 1.0 if answer == target else -1.0
            v = compute_v(x, w)
            out = classify(v)

            # if wrong classification, weights must be adjusted
            if out != d:
                w = update_weights(w, x, learning_rate, d, out)
                errors += 1

        # one full pass with no mistakes = converged (data was separable)
        if errors == 0:
            return w, i + 1, True

        if best_errors is None or errors < best_errors:
            best_errors = errors
            best_w = w

    return best_w, MAX_ITERATIONS, False


# train all 3 perceptrons, returns {class: weights}
def train(X, y, learning_rate, verbose=True):
    model = {}
    for c in CLASSES:
        w, iterations, converged = train_one(X, y, c, learning_rate)
        model[c] = w
        if verbose:
            if converged:
                print("Class", c, "perceptron converged after", iterations, "iterations")
            else:
                print("Class", c, "perceptron did not converge after", iterations,
                      "iterations (data not linearly separable), using the best weights found")
    return model


# PREDICTION
# each perceptron gives a v, the biggest v wins
# (the winner is the most sure that the day is its class)
def predict_one(model, x):
    return best_class({c: compute_v(x, w) for c, w in model.items()})


def predict(model, X):
    return [predict_one(model, x) for x in X]


# ENTRY POINT (called by main.py)
# takes the shared train/test days and returns the predicted class of every test day
def run_perceptron(X_train, y_train, X_test, verbose=True):
    # scale using the training days only, then use the same means/stds on the test days
    X_train_s, X_test_s = scale_train_test(X_train, X_test)
    X_train_s = add_bias(X_train_s)
    X_test_s = add_bias(X_test_s)

    model = train(X_train_s, y_train, LEARNING_RATE, verbose)

    if verbose:
        for c in CLASSES:
            print("Final weights class", c, ":", ["%.2f" % wi for wi in model[c]])

    return predict(model, X_test_s)


# only runs when this file is run directly (python perceptron.py), not when it is imported
if __name__ == "__main__":
    X_train, y_train, X_test, y_test, baseline_pred = load_data(FEATURE_SETS["set1"])

    print("Training days:", len(X_train), "| Test days:", len(X_test))
    print("Learning rate =", LEARNING_RATE)

    perceptron_pred = run_perceptron(X_train, y_train, X_test)

    print_report("Perceptron", y_test, perceptron_pred, baseline_pred)
