# comparator: knn vs naive bayes vs perceptron
# compares the accuracy and precision of the 3 algos OK
# the algos themselves already exist, so this just takes their predictions
# IMPORTANT: all 3 must be tested on the SAME test days, same yTest, or else it's not fair

# accuracy: correct predictions / total predictions
def accuracy(yTrue, yPred):
    correct = 0

    for real, guess in zip(yTrue, yPred):
        # if the guess is right, add 1, yay
        if real == guess:
            correct += 1

    return correct / len(yTrue)


# precision 
def precision(yTrue, yPred, c):
    # days the model said were that class
    predicted = 0

    correct = 0

    for real, guess in zip(yTrue, yPred):
        if guess == c:
            predicted += 1
            if real == c:
                correct += 1

    # to avoid dividing by 0
    if predicted == 0:
        return 0.0

    return correct / predicted


# macro precision: average of the precision of class 0, 1, 2
# we need ONE number per model so it's easier to compare, like so much easier
def macroPrecision(yTrue, yPred):
    total = 0

    for c in [0, 1, 2]:
        total += precision(yTrue, yPred, c)

    return total / 3


# compare
# yTrue = the real classes of the test days
# preds = {model name: its predictions}
# example: {"KNN": knnPred, "Naive Bayes": nbPred, "Perceptron": perceptronPred}
def compare(yTrue, preds):
    print("COMPARISON")

    # header row
    print("Model".ljust(14), "Accuracy".ljust(10), "Prec 0".ljust(10), "Prec 1".ljust(10), "Prec 2".ljust(10), "Macro Prec")
    print("-" * 68)

    # one row per model, so we also save the scores to find the winner later
    accs = {}
    macros = {}
    for name in preds:
        accs[name] = accuracy(yTrue, preds[name])
        macros[name] = macroPrecision(yTrue, preds[name])

        row = [name.ljust(14), str(round(accs[name], 4)).ljust(10)]
        for c in [0, 1, 2]:
            row.append(str(round(precision(yTrue, preds[name], c), 4)).ljust(10))
        row.append(str(round(macros[name], 4)))
        print(*row)

    print()

    # the best of each if there's a tie then every tied model gets printed
    bestAcc = max(accs.values())
    bestMacro = max(macros.values())
    print("Highest accuracy:", [n for n in accs if accs[n] == bestAcc], round(bestAcc, 4))
    print("Highest macro precision:", [n for n in macros if macros[n] == bestMacro], round(bestMacro, 4))

# ang paggamit nito ay compare using yTest and the dict {"KNN": knnPred, "Naive Bayes": nbPred, "Perceptron": perceptronPred}