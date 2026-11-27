# experiment: same pipeline as main.py, different feature subsets
# feature order: 0 WS2M, 1 T2M, 2 T2M_MAX, 3 T2M_MIN, 4 RH2M, 5 PS
from preprocessor import load_data, print_report
from algorithms.naive_bayes import run_nb
from algorithms.knn import run_knn
from algorithms.perceptron import run_perceptron
from comparator import compare

SETUPS = [
    ("ALL THREE TEMPS", [0, 1, 2, 3, 4, 5]),
    ("AVG TEMP ONLY (T2M)", [0, 1, 4, 5]),
    ("MAX TEMP ONLY (T2M_MAX)", [0, 2, 4, 5]),
    ("MIN TEMP ONLY (T2M_MIN)", [0, 3, 4, 5]),
]

for name, cols in SETUPS:
    X_train, y_train, X_test, y_test, baseline_pred = load_data()
    X_train = [[x[j] for j in cols] for x in X_train]
    X_test = [[x[j] for j in cols] for x in X_test]

    print("\n" + "#" * 60)
    print("#####", name, "| columns:", cols)
    print("#" * 60)
    print("Training days:", len(X_train), "| Test days:", len(X_test))

    print("\n===== NAIVE BAYES =====")
    nb_pred = run_nb(X_train, y_train, X_test)
    print_report("NB", y_test, nb_pred, baseline_pred)

    print("\n===== KNN =====")
    knn_pred = run_knn(X_train, y_train, X_test)
    print_report("KNN", y_test, knn_pred, baseline_pred)

    print("\n===== PERCEPTRON =====")
    perceptron_pred = run_perceptron(X_train, y_train, X_test)
    print_report("Perceptron", y_test, perceptron_pred, baseline_pred)

    print()
    compare(y_test, {"KNN": knn_pred, "Naive Bayes": nb_pred, "Perceptron": perceptron_pred})
