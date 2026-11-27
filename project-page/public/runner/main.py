# main file: loads the data ONCE, runs the 3 models on the SAME train/test days,
# then compares them
# run this with:  python main.py

from utilities.preprocessor import (load_data, print_report, FEATURE_SETS,
                                    accuracy, macro_precision)
from algorithms.naive_bayes import run_nb
from algorithms.knn import run_knn
from algorithms.perceptron import run_perceptron
from utilities.comparator import compare


def run_set(set_name, feature_names):
    print("\n" + "#" * 70)
    print("FEATURE SET:", set_name, "->", feature_names)
    print("#" * 70)

    # one shared split, so every model is tested on the same test days (fair comparison)
    X_train, y_train, X_test, y_test, baseline_pred = load_data(feature_names)
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

    preds = {"baseline": baseline_pred, "naive-bayes": nb_pred,
             "knn": knn_pred, "perceptron": perceptron_pred}
    return {name: (accuracy(y_test, p), macro_precision(y_test, p))
            for name, p in preds.items()}


def main():
    results = {}
    for set_name, feature_names in FEATURE_SETS.items():
        results[set_name] = run_set(set_name, feature_names)

    print("\n" + "=" * 70)
    print("SUMMARY  (acc = accuracy, prec = macro precision)")
    print("=" * 70)
    print(f"{'model':<14}", end="")
    for set_name in results:
        print(f"{set_name + ' acc':>12}{set_name + ' prec':>12}", end="")
    print()
    for model in ["naive-bayes", "knn", "perceptron", "baseline"]:
        print(f"{model:<14}", end="")
        for set_name in results:
            acc, prec = results[set_name][model]
            print(f"{acc:>12.4f}{prec:>12.4f}", end="")
        print()


if __name__ == "__main__":
    main()