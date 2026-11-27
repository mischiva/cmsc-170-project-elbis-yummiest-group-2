# comparator: knn vs naive bayes vs perceptron
# compares the accuracy and precision of the 3 algos OK
# the algos themselves already exist, so this just takes their predictions
# IMPORTANT: all 3 must be tested on the SAME test days, same y_true, or else it's not fair

# accuracy, precision and macro precision are shared, they come from preprocessor.py
# macro precision = ONE number per model so it's easier to compare, like so much easier
from preprocessor import accuracy, precision, macro_precision, CLASSES


# compare
# y_true = the real classes of the test days
# preds = {model name: its predictions}
# example: {"KNN": knn_pred, "Naive Bayes": nb_pred, "Perceptron": perceptron_pred}
def compare(y_true, preds):
    print("COMPARISON")

    # header row
    print("Model".ljust(14), "Accuracy".ljust(10), "Prec 0".ljust(10), "Prec 1".ljust(10), "Prec 2".ljust(10), "Macro Prec")
    print("-" * 68)

    # one row per model, so we also save the scores to find the winner later
    accs = {}
    macros = {}
    for name in preds:
        accs[name] = accuracy(y_true, preds[name])
        macros[name] = macro_precision(y_true, preds[name])

        row = [name.ljust(14), str(round(accs[name], 4)).ljust(10)]
        for c in CLASSES:
            row.append(str(round(precision(y_true, preds[name], c), 4)).ljust(10))
        row.append(str(round(macros[name], 4)))
        print(*row)

    print()

    # the best of each if there's a tie then every tied model gets printed
    best_acc = max(accs.values())
    best_macro = max(macros.values())
    print("Highest accuracy:", [n for n in accs if accs[n] == best_acc], round(best_acc, 4))
    print("Highest macro precision:", [n for n in macros if macros[n] == best_macro], round(best_macro, 4))
