# preprocessing, split, baseline, scaling and metrics all come from preprocessor.py
from utilities.preprocessor import load_data, print_report, get_scaler, scale

# the k values we will try (odd so there are fewer ties)
K_LIST = [1, 3, 5, 7, 9, 11, 15, 21, 31, 41, 51]

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


# ===============================================================
# ===== KNN: CHOOSING k =====
# k = how many neighbors vote
# too small (1) = too sensitive to noise, too big = too blurry
# we try several k and keep the one with the best accuracy on days the model did not train on
# we cannot use the test days for this, so we cut the LAST 20% of the training days (validation)
# it is still chronological: sub-train is older than validation
def choose_k(X_train, y_train, verbose=True):
    cut2 = int(len(X_train) * 0.8)
    X_sub, y_sub = X_train[:cut2], y_train[:cut2]
    X_val, y_val = X_train[cut2:], y_train[cut2:]

    # scale using the sub-train days only
    m_sub, s_sub = get_scaler(X_sub)
    X_sub_s = scale(X_sub, m_sub, s_sub)
    X_val_s = scale(X_val, m_sub, s_sub)

    # for each k, count how many validation days it got right
    right = {k: 0 for k in K_LIST}

    for x, answer in zip(X_val_s, y_val):
        # sort the neighbors only ONCE per day, then reuse it for every k
        neighbors = sorted_neighbors(X_sub_s, y_sub, x)

        for k in K_LIST:
            if vote(neighbors, k) == answer:
                right[k] += 1

    best_k = K_LIST[0]
    for k in K_LIST:
        val_acc = right[k] / len(y_val)
        if verbose:
            print("k =", k, "| validation accuracy:", val_acc)

        if val_acc > right[best_k] / len(y_val):
            best_k = k

    if verbose:
        print("Best k:", best_k)

    return best_k


# ===============================================================
# ENTRY POINT (called by main.py)
# kNN has no real "training", it just remembers the training days
# so we only scale them (using the full training days) and keep them
# takes the shared train/test days and returns the predicted class of every test day
def run_knn(X_train, y_train, X_test, verbose=True):
    best_k = choose_k(X_train, y_train, verbose)

    means, stds = get_scaler(X_train)
    X_train_s = scale(X_train, means, stds)

    # the test days are scaled using the TRAINING means and stds
    X_test_s = scale(X_test, means, stds)

    knn_pred = []
    for x in X_test_s:
        neighbors = sorted_neighbors(X_train_s, y_train, x)
        knn_pred.append(vote(neighbors, best_k))

    return knn_pred


# only runs when this file is run directly (python knn.py), not when it is imported
if __name__ == "__main__":
    X_train, y_train, X_test, y_test, baseline_pred = load_data()

    knn_pred = run_knn(X_train, y_train, X_test)

    print_report("KNN", y_test, knn_pred, baseline_pred)
