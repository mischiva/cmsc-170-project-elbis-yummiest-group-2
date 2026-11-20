# main file: loads the data ONCE, runs the 3 models on the SAME train/test days,
# then compares them
# run this with:  python main.py

from preprocessor import load_data, print_report
from naive_bayes import run_nb
from knn import run_knn
from perceptron import run_perceptron
from comparator import compare


def main():
    # one shared split, so every model is tested on the same test days (fair comparison)
    X_train, y_train, X_test, y_test, baseline_pred = load_data()
    print("Training days:", len(X_train), "| Test days:", len(X_test))

    # each run_* function returns the predicted class of every test day
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


if __name__ == "__main__":
    main()
