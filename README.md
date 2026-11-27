# UV or NOT UV: UV Protection Level Classification (CMSC 170, Group 2, Elbi's Yummiest)

Classifies the daily UV protection level at Batong Malake, Los Baños, Laguna from daily weather data. Three classifiers (Naive Bayes, k-Nearest Neighbors, Perceptron) are written from scratch in plain Python and compared on the same train/test days.

**GitHub Pages: https://mischiva.github.io/cmsc-170-project-elbis-yummiest-group-2/**

## Problem

Each day is labeled with a protection class from its maximum hourly UV index, following the WHO categories:

| Class | Max UV index (rounded) | Meaning |
|-------|------------------------|---------|
| 0 | 0 to 2 | No protection required |
| 1 | 3 to 7 | Protection required |
| 2 | 8 and above | Extra protection required |

Inputs are daily weather features. Two feature sets are compared:

| Set | Features |
|-----|----------|
| `set1` | `T2M`, `PS`, `WS2M`, `RH2M` |
| `set2` | `T2M_MAX`, `PS`, `WS2M`, `RH2M` |

`T2M` is mean temperature, `T2M_MAX` is maximum temperature, `PS` is surface pressure, `WS2M` is wind speed at 2 m, `RH2M` is relative humidity at 2 m.

## Dataset

Both CSV files are from NASA POWER, location Batong Malake, Los Baños, 01/01/2001 to 10/31/2026, local solar time:

- `dataset/batongmalake_lb_Hourly_20010101_20261031_UVIndex_LST.csv`: hourly UV index. Used to get the highest UV of each day (the label).
- `dataset/batongmalake_lb_Daily_20010101_20261031_UVIndex_LST.csv`: daily weather features.

Cleaning rules (in `utilities/preprocessor.py`):

- Values of `-999` are missing. A day with a missing hourly UV value, or fewer than 24 hourly rows, is dropped.
- A day with any missing selected feature is dropped.
- Days are sorted by date and split chronologically, first 70% for training, last 30% for testing.
- A baseline that always predicts the most common training class is reported next to every model.
- For KNN and Perceptron, features are standardized using the training days only.

## Repository contents

| Path | What it is |
|------|------------|
| `project-implementation/main.py` | Runs everything on both feature sets and prints a summary table |
| `project-implementation/algorithms/` | `naive_bayes.py` (`run_nb`), `knn.py` (`run_knn`, picks k using a validation split), `perceptron.py` (`run_perceptron`, one perceptron per class) |
| `project-implementation/utilities/` | `preprocessor.py` (reads the CSVs, labels days, splits train/test, scaling, accuracy, precision, confusion matrix) and `comparator.py` (prints accuracy and precision of the three models side by side) |
| `project-implementation/dataset/` | The two NASA POWER CSV files (hourly and daily) |
| `project-implementation/tests/` | `experiment.py` and `experiment.txt`: earlier experiment on six features and temperature variants, with its saved output |
| `project-page/` | The project web page (React, Vite, Tailwind CSS): `src/`, `public/`, `index.html`, `vite.config.js`, `package.json`. `public/runner/` holds the copies of the Python files and CSVs that the page runs in the browser (Run Code runs `main.py`, `naive_bayes.py`, `knn.py` and `perceptron.py`) |
| `.github/workflows/deploy.yml` | Builds `project-page` and deploys it to GitHub Pages on every push to `main` (GitHub only reads workflows from the repo root) |

## Running the Python code

Requirements: Python 3 (tested on 3.13). No third-party packages are needed (only `math` and `os` from the standard library).

```bash
git clone https://github.com/mischiva/cmsc-170-project-elbis-yummiest-group-2.git
cd cmsc-170-project-elbis-yummiest-group-2/project-implementation
python main.py
```

Use `python3` instead of `python` if that is how Python is called on your machine. The script can be run from any folder because the CSV paths are resolved relative to the script. A full run takes about one minute, mostly from the KNN steps.

To run a single model on one feature set, import it from a Python shell in the `project-implementation` folder:

```python
from utilities.preprocessor import load_data, print_report, FEATURE_SETS
from algorithms.naive_bayes import run_nb

X_train, y_train, X_test, y_test, baseline_pred = load_data(FEATURE_SETS["set1"])
nb_pred = run_nb(X_train, y_train, X_test)
print_report("NB", y_test, nb_pred, baseline_pred)
```

## Reproducing the results

`python main.py` is deterministic (no random numbers, fixed chronological split), so it prints the same numbers every run. Expected summary (acc = accuracy, prec = macro precision over the three classes):

| Model | set1 acc | set1 prec | set2 acc | set2 prec |
|-------|----------|-----------|----------|-----------|
| Naive Bayes | 0.7749 | 0.5797 | 0.7809 | 0.5896 |
| KNN | 0.8183 | 0.5392 | 0.8197 | 0.5397 |
| Perceptron | 0.6817 | 0.4682 | 0.6511 | 0.4449 |
| Baseline (majority class) | 0.6629 | 0.2210 | 0.6629 | 0.2210 |

Class 0 (no protection) is rare in the test days, so per-class precision for class 0 is low or zero for some models. The Perceptron prints a "did not converge" message for each class, because the classes are not linearly separable.

## Running the project web page locally

Requirements: Node.js 22 and npm.

```bash
cd project-page
npm ci
npm run dev
```

Open the local address Vite prints (it includes the `/cmsc-170-project-elbis-yummiest-group-2/` path). The Run Code popup runs the Python files in the browser using Pyodide, which is downloaded from a CDN, so an internet connection is needed. If you change a Python file or CSV in `project-implementation`, copy it to the same path inside `project-page/public/runner/` so the page matches.

To check the production build:

```bash
npm run build
```

The output goes to `dist/`.

## GitHub Pages

https://mischiva.github.io/cmsc-170-project-elbis-yummiest-group-2/

## Task log of member contributions

| Member | Contribution |
|--------|--------------|
|        |              |

## AI disclosure

We used GitHub Copilot to help deploy the GitHub Pages site, because we were having trouble getting the deployment to work.
