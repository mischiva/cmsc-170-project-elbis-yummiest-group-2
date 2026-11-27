import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { SetupKey } from "./types";

// model data
type ModelKey = "knn" | "nb" | "per";
type Matrix = number[][];

const setups: Record<SetupKey, { label: string; cm: Record<ModelKey, Matrix> }> = {
  set1: {
    label: "Set 1: avg temp",
    cm: {
      knn: [[0, 22, 5], [0, 566, 355], [0, 129, 1735]],
      nb: [[6, 16, 5], [16, 601, 304], [3, 289, 1572]],
      per: [[0, 26, 1], [0, 791, 130], [0, 738, 1126]],
    },
  },
  set2: {
    label: "Set 2: max temp",
    cm: {
      knn: [[0, 21, 6], [0, 574, 347], [0, 133, 1731]],
      nb: [[6, 19, 2], [15, 695, 211], [3, 366, 1495]],
      per: [[0, 25, 2], [0, 735, 186], [0, 768, 1096]],
    },
  },
};

const modelNames: Record<ModelKey, string> = { knn: "KNN", nb: "Naive Bayes", per: "Perceptron" };

// figma node ids
const buttonIds: Record<SetupKey, { rect: string; label: string }> = {
  set1: { rect: "36:65", label: "36:66" },
  set2: { rect: "36:67", label: "36:68" },
};
const tableIds: Record<ModelKey, [string, string]> = {
  knn: ["36:79", "36:80"],
  nb: ["36:82", "36:83"],
  per: ["36:86", "36:87"],
};
const matrixIds: Record<ModelKey, string[][]> = {
  knn: [["36:103", "36:104", "36:105"], ["36:107", "36:109", "36:110"], ["36:112", "36:113", "36:115"]],
  nb: [["36:123", "36:124", "36:125"], ["36:127", "36:129", "36:130"], ["36:132", "36:133", "36:135"]],
  per: [["36:143", "36:144", "36:145"], ["36:147", "36:149", "36:150"], ["36:152", "36:153", "36:155"]],
};
const lowShareIds: Record<ModelKey, string> = { knn: "66:5", nb: "66:7", per: "66:9" };
const methodCardIds: Record<ModelKey, string> = { knn: "36:29", nb: "43:73", per: "43:78" };

// poster menu items and their destinations
const navItems: { label: string; textId: string; targetId: string | null }[] = [
  { label: "HOME", textId: "25:7", targetId: null },
  { label: "ABOUT", textId: "25:8", targetId: "11:47" },
  { label: "DATASET", textId: "42:2", targetId: "31:38" },
  { label: "METHODS", textId: "42:3", targetId: "36:23" },
  { label: "SETUP", textId: "42:4", targetId: "43:85" },
  { label: "RESULTS", textId: "42:5", targetId: "36:59" },
  { label: "DISCUSSION", textId: "42:6", targetId: "59:3" },
  { label: "CONCLUSION", textId: "42:7", targetId: "42:35" },
  { label: "REFERENCES", textId: "42:9", targetId: "42:44" },
  { label: "RUN CODE", textId: "99:1", targetId: "run" }, // opens the run code popup
];

const scripts = ["main.py", "naive_bayes.py", "knn.py", "perceptron.py"];
const scriptDescriptions: Record<string, string> = {
  "main.py": "all 3 models + comparison",
  "naive_bayes.py": "Naive Bayes only",
  "knn.py": "KNN only",
  "perceptron.py": "Perceptron only",
};
const pyFiles = ["preprocessor.py", "knn.py", "naive_bayes.py", "perceptron.py", "comparator.py", "main.py"];
const csvFiles = [
  "dataset/batongmalake_lb_Hourly_20010101_20261031_UVIndex_LST.csv",
  "dataset/batongmalake_lb_Daily_20010101_20261031_UVIndex_LST.csv",
];
const runnerBase = import.meta.env.BASE_URL + "runner/";

const modelInfo: Record<ModelKey, { title: string; how: string; detail: string; result: string }> = {
  knn: {
    title: "KNN",
    how: "Finds the most similar past days (after scaling the weather values) and lets them vote on the UV class.",
    detail: "k was picked on the last 20% of the training days: k = 31 for Set 1 and k = 51 for Set 2. The test days were never used for tuning.",
    result: "81.8% accuracy in Set 1 and 82.0% in Set 2. Never predicted the rare class 0.",
  },
  nb: {
    title: "Naive Bayes",
    how: "Learns the average weather and spread of each class, then scores a day against every class and picks the best fit.",
    detail: "Uses log probabilities and treats the weather features as independent of each other, which is not quite true here.",
    result: "77.5% in Set 1 and 78.1% in Set 2. Best macro precision, and the only model that ever predicts class 0.",
  },
  per: {
    title: "Perceptron",
    how: "Three straight-line yes/no classifiers, one per UV class. The most confident one wins.",
    detail: "Learning rate 0.01, up to 500 passes. The classes overlap, so it keeps the pass with the fewest mistakes.",
    result: "68.2% in Set 1 and 65.1% in Set 2, close to the 66.3% baseline.",
  },
};

// find a poster element by its figma id
const q = (id: string) => document.querySelector<HTMLElement>('[data-node-id="' + id + '"]');

// scroll to a section, or to the top if there is no id
function goTo(id: string | null) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = q(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: "smooth" });
}

// measure the text instead of its full box
function textBounds(el: HTMLElement): DOMRect {
  if (el.tagName === "P" && el.children.length === 0) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const r = range.getBoundingClientRect();
    if (r.width > 0) return r;
  }
  return el.getBoundingClientRect();
}

// calculate accuracy and macro precision
function metricsOf(cm: Matrix) {
  let total = 0;
  let correct = 0;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      total += cm[r][c];
      if (r === c) correct += cm[r][c];
    }
  }
  const precs = [0, 1, 2].map((c) => {
    const predicted = cm[0][c] + cm[1][c] + cm[2][c];
    return predicted ? cm[c][c] / predicted : 0;
  });
  return { acc: correct / total, macro: (precs[0] + precs[1] + precs[2]) / 3 };
}

type HotOptions = {
  pad?: number;
  radius?: string;
  tip?: boolean;
  onClick?: () => void;
  onEnter?: (e: MouseEvent) => void;
  onMove?: (e: MouseEvent) => void;
  onLeave?: () => void;
  label?: string;
};

// add an invisible click area over a poster element
function addHotspot(canvas: HTMLElement, el: HTMLElement | null, opts: HotOptions, created: HTMLElement[]) {
  if (!el) return;
  const cr = canvas.getBoundingClientRect();
  const scale = cr.width / canvas.offsetWidth || 1;
  const r = opts.tip || el.tagName === "P" ? textBounds(el) : el.getBoundingClientRect();
  const pad = opts.pad ?? 8;
  const hot = document.createElement("div");
  hot.className = "iv-hot" + (opts.tip ? " iv-tip" : "");
  hot.style.left = (r.left - cr.left) / scale - pad + "px";
  hot.style.top = (r.top - cr.top) / scale - pad + "px";
  hot.style.width = r.width / scale + pad * 2 + "px";
  hot.style.height = r.height / scale + pad * 2 + "px";
  if (opts.radius) hot.style.borderRadius = opts.radius;
  if (opts.label) {
    hot.setAttribute("role", "button");
    hot.setAttribute("aria-label", opts.label);
    hot.tabIndex = 0;
  }
  if (opts.onClick) {
    const click = opts.onClick;
    hot.addEventListener("click", click);
    hot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        click();
      }
    });
  }
  if (opts.onEnter) hot.addEventListener("mouseenter", opts.onEnter);
  if (opts.onMove) hot.addEventListener("mousemove", opts.onMove);
  if (opts.onLeave) hot.addEventListener("mouseleave", opts.onLeave);
  canvas.appendChild(hot);
  created.push(hot);
}

// interaction styles
const css = `
.iv-hot { position:absolute; z-index:30; cursor:pointer; border-radius:14px; transition:background .15s, box-shadow .15s; outline:none; }
.iv-hot:hover, .iv-hot:focus-visible { background:rgba(26,146,199,.13); box-shadow:0 0 0 3px rgba(26,146,199,.4); }
.iv-hot.iv-tip { cursor:help; border-radius:8px; }
.iv-hot.iv-tip:hover { background:rgba(74,37,116,.10); box-shadow:none; }

@keyframes ivBob { 0%,100% { transform:translateY(0); } 50% { transform:translateY(9px); } }
@keyframes ivSun { 0%,100% { transform:scale(1); } 50% { transform:scale(1.035); } }
[data-node-id='3:4593'] { animation: ivBob 7s ease-in-out infinite; }
[data-node-id='3:4596'] { animation: ivBob 8s ease-in-out -2s infinite; }
[data-node-id='3:4599'] { animation: ivBob 9s ease-in-out -4s infinite; }
[data-node-id='3:4602'] { animation: ivSun 6s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  [data-node-id='3:4593'], [data-node-id='3:4596'], [data-node-id='3:4599'], [data-node-id='3:4602'] { animation:none; }
}

.iv-nav { position:fixed; top:12px; left:50%; transform:translate(-50%,-140%); z-index:1000; display:flex; gap:2px; max-width:calc(100vw - 20px); overflow-x:auto;
  padding:6px 12px; border-radius:999px; background:rgba(232,245,250,.96); border:3px solid #0d82b5; box-shadow:0 8px 22px rgba(30,60,110,.25);
  transition:transform .3s ease; }
.iv-nav.show { transform:translate(-50%,0); }
.iv-nav button { font:20px/1 "Jersey 15:Regular", monospace; color:#4a2574; background:none; border:0; padding:8px 12px; border-radius:999px; cursor:pointer; white-space:nowrap; }
.iv-nav button:hover { background:rgba(13,130,181,.18); }

.iv-back { position:fixed; right:18px; bottom:18px; z-index:1000; width:52px; height:52px; border-radius:50%; border:3px solid #fff; background:#4a2574; color:#fff;
  font:26px/1 "Jersey 15:Regular", monospace; cursor:pointer; box-shadow:0 6px 16px rgba(0,0,0,.3); }

.iv-tooltip { position:fixed; z-index:2000; pointer-events:none; max-width:300px; padding:10px 14px; border-radius:16px; background:#4a2574; color:#fff;
  font:17px/1.3 "Libertinus Sans:Regular", sans-serif; box-shadow:0 8px 20px rgba(0,0,0,.3); }

.iv-overlay { position:fixed; inset:0; z-index:3000; background:rgba(30,10,60,.5); display:grid; place-items:center; padding:16px; }
.iv-modal { position:relative; width:min(720px,100%); max-height:calc(100dvh - 32px); overflow:auto; background:#fff; border:2px solid #0d82b5; border-radius:20px; padding:24px;
  color:#292332; font:19px/1.4 "Libertinus Sans:Regular", sans-serif; box-shadow:0 16px 40px rgba(0,0,0,.3); }
.iv-modal h2 { margin:0 0 14px; font:36px/1 "Jersey 25:Regular", monospace; color:#4a2574; }
.iv-modal p { margin:10px 0; }
.iv-close { position:absolute; top:14px; right:14px; width:34px; height:34px; border:0; border-radius:50%; background:transparent; color:#4a2574; font:26px/1 "Jersey 15:Regular", monospace; cursor:pointer; }
.iv-close:hover { background:rgba(13,130,181,.15); }
.iv-row { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin:0 0 10px; }
.iv-select { flex:1 1 220px; min-width:0; font:18px "Libertinus Sans:Regular", sans-serif; padding:8px 12px; border-radius:10px; border:2px solid #0d82b5; background:#fff; color:#4a2574; }
.iv-btn { font:22px/1 "Jersey 15:Regular", monospace; padding:9px 22px; border-radius:10px; border:2px solid #4a2574; background:#4a2574; color:#fff; cursor:pointer; }
.iv-btn:disabled { opacity:.45; cursor:default; }
.iv-btn.ghost { background:#fff; color:#4a2574; }
.iv-status { min-height:24px; margin-bottom:8px; color:#4a2574; font-size:17px; }
.iv-term { height:320px; overflow:auto; margin:0; padding:14px; border-radius:12px; background:#1d1440; color:#cfe9ff; font:13px/1.45 ui-monospace, Menlo, Consolas, monospace; white-space:pre-wrap; }
.iv-warn { background:#fff3c4; color:#5a4a00; padding:10px 14px; border-radius:12px; font-size:16px; margin:0 0 10px; }
`;

// run python in a worker to keep the page responsive
const workerSource = `
importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");
onmessage = async function (e) {
  var files = e.data.files, script = e.data.script;
  try {
    postMessage({ t: "status", m: "Loading Python (first time takes a few seconds)..." });
    var py = await loadPyodide();
    py.setStdout({ batched: function (s) { postMessage({ t: "out", m: s }); } });
    py.setStderr({ batched: function (s) { postMessage({ t: "out", m: s }); } });
    for (var n in files) {
      var path = "/home/pyodide/" + n;
      py.FS.mkdirTree(path.substring(0, path.lastIndexOf("/")));
      py.FS.writeFile(path, files[n]);
    }
    postMessage({ t: "status", m: "Running " + script + " ..." });
    py.runPython("import sys, runpy\\nsys.path.insert(0, '/home/pyodide')\\nrunpy.run_path('/home/pyodide/" + script + "', run_name='__main__')\\n");
    postMessage({ t: "done" });
  } catch (err) {
    postMessage({ t: "err", m: String(err) });
  }
};
`;

// popup for running a python file
function RunModal({ initial, onClose }: { initial: string; onClose: () => void }) {
  const [script, setScript] = useState(initial); // selected file
  // output, status message, and files that could not be loaded
  const [out, setOut] = useState("");
  const [status, setStatus] = useState("Ready.");
  const [running, setRunning] = useState(false);
  const [missing, setMissing] = useState<string[]>([]);
  const workerRef = useRef<Worker | null>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const baseRef = useRef("");
  const startRef = useRef(0);
  const cacheRef = useRef<Record<string, string>>({});
  const termRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [out]);

  useEffect(() => () => {
    window.clearInterval(timerRef.current);
    workerRef.current?.terminate();
  }, []);

  const elapsed = () => Math.round((Date.now() - startRef.current) / 1000) + "s";

  // stop the worker and update the status
  const stop = (message: string) => {
    window.clearInterval(timerRef.current);
    workerRef.current?.terminate();
    workerRef.current = null;
    baseRef.current = "";
    setRunning(false);
    setStatus(message);
  };

  const loadText = async (name: string): Promise<string> => {
    if (cacheRef.current[name] !== undefined) return cacheRef.current[name];
    const r = await fetch(runnerBase + name);
    if (!r.ok) throw new Error(name);
    const text = await r.text();
    // some servers return the home page when a file is missing
    if (/^\s*<!doctype html|^\s*<html/i.test(text)) throw new Error(name);
    cacheRef.current[name] = text;
    return text;
  };

  // load the required files and start the worker
  const run = async () => {
    setRunning(true);
    setOut("");
    setMissing([]);
    setStatus("Loading files...");
    const names = pyFiles.concat(csvFiles);
    const results = await Promise.all(
      names.map((n) => loadText(n).then((t) => ({ n, t, ok: true }), () => ({ n, t: "", ok: false }))),
    );
    const lost = results.filter((r) => !r.ok).map((r) => r.n);
    if (lost.length) {
      setMissing(lost);
      setRunning(false);
      setStatus("Some files could not be loaded.");
      return;
    }
    const files: Record<string, string> = {};
    results.forEach((r) => (files[r.n] = r.t));
    const worker = new Worker(URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" })));
    workerRef.current = worker;
    startRef.current = Date.now();
    timerRef.current = window.setInterval(() => {
      if (baseRef.current) setStatus(baseRef.current + " (" + elapsed() + ")");
    }, 1000);
    worker.onmessage = (e: MessageEvent) => {
      const d = e.data as { t: string; m?: string };
      if (d.t === "out") setOut((o) => o + d.m + "\n");
      else if (d.t === "status") {
        baseRef.current = d.m ?? "";
        setStatus(d.m ?? "");
      } else if (d.t === "done") stop("Finished in " + elapsed() + ".");
      else if (d.t === "err") {
        setOut((o) => o + "\nError:\n" + d.m + "\n");
        stop("Stopped with an error.");
      }
    };
    worker.onerror = (e) => {
      setOut((o) => o + "\nWorker error: " + e.message + "\n");
      stop("Stopped with an error.");
    };
    worker.postMessage({ files, script: scriptPaths[script] ?? script });
  };

  // let the user select a missing file
  const onPick = (list: FileList | null) => {
    if (!list) return;
    Array.from(list).forEach((f) => {
      const rd = new FileReader();
      rd.onload = () => {
        // match the picked file to its folder path, like utilities/preprocessor.py
        const full = pyFiles.concat(csvFiles).find((n) => n.split("/").pop() === f.name) ?? f.name;
        cacheRef.current[full] = String(rd.result);
        setMissing((m) => m.filter((x) => x !== full));
        setStatus("Loaded " + f.name + ". Press Run again.");
      };
      rd.readAsText(f);
    });
  };

  return (
    <div className="iv-overlay" onClick={onClose}>
      <div className="iv-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Run code">
        <button className="iv-close" onClick={onClose} aria-label="Close">x</button>
        <h2>Run code</h2>
        <div className="iv-row">
          <select className="iv-select" value={script} onChange={(e) => setScript(e.target.value)} disabled={running}>
            {scripts.map((s) => (
              <option key={s} value={s}>{s}: {scriptDescriptions[s]}</option>
            ))}
          </select>
          <button className="iv-btn" onClick={run} disabled={running}>Run</button>
          <button className="iv-btn ghost" onClick={() => stop("Stopped after " + elapsed() + ".")} disabled={!running}>Stop</button>
          <button className="iv-btn ghost" onClick={() => setOut("")}>Clear</button>
        </div>
        <div className="iv-status">{status}</div>
        {missing.length > 0 && (
          <div className="iv-warn">
            Could not load: {missing.join(", ")}. Put them in <b>public/runner/</b>, or choose them here:{" "}
            <input type="file" multiple accept=".csv,.py" onChange={(e) => onPick(e.target.files)} />
          </div>
        )}
        <pre className="iv-term" ref={termRef}>{out || "Output shows up here."}</pre>
      </div>
    </div>
  );
}

// popup with details about a model
function InfoModal({ model, onClose }: { model: ModelKey; onClose: () => void }) {
  const info = modelInfo[model];
  return (
    <div className="iv-overlay" onClick={onClose}>
      <div className="iv-modal" style={{ width: "min(640px,100%)" }} onClick={(e) => e.stopPropagation()} role="dialog" aria-label={info.title}>
        <button className="iv-close" onClick={onClose} aria-label="Close">x</button>
        <h2>{info.title}</h2>
        <p>{info.how}</p>
        <p>{info.detail}</p>
        <p><b>Result:</b> {info.result}</p>
      </div>
    </div>
  );
}

// add click areas, popups, and a sticky menu to the poster
export default function Interactive({
  setup,
  onSetupChange,
}: {
  setup: SetupKey;
  onSetupChange: (setup: SetupKey) => void;
}) {
  const [runScript, setRunScript] = useState<string | null>(null);
  const [infoModel, setInfoModel] = useState<ModelKey | null>(null);
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);
  const [showNav, setShowNav] = useState(false);

  // open the code popup or scroll to the selected section
  const openNavItem = (target: string | null) => {
    if (target === "run") setRunScript("main.py");
    else goTo(target);
  };
  const originalLowNote = useRef("");
  // keep the current selection available to hover handlers
  const setupRef = useRef(setups[setup]);
  setupRef.current = setups[setup];

  // add click areas to the poster
  useEffect(() => {
    const canvas = document.querySelector<HTMLElement>(".poster-canvas");
    if (!canvas) return;
    let created: HTMLElement[] = [];
    let cancelled = false;

    const build = () => {
      if (cancelled) return;
      created.forEach((el) => el.remove());
      created = [];

      // menu links
      navItems.forEach((item) =>
        addHotspot(canvas, q(item.textId), { pad: 10, radius: "999px", label: item.label, onClick: () => openNavItem(item.targetId) }, created),
      );

      // feature-set buttons
      (Object.keys(buttonIds) as SetupKey[]).forEach((key) =>
        addHotspot(canvas, q(buttonIds[key].rect), { pad: 0, radius: "24px", label: setups[key].label, onClick: () => onSetupChange(key) }, created),
      );

      // show a cell explanation on hover
      (Object.keys(matrixIds) as ModelKey[]).forEach((model) => {
        matrixIds[model].forEach((row, r) =>
          row.forEach((id, c) => {
            const show = (e: MouseEvent) => {
              const cm = setupRef.current.cm[model];
              const rowTotal = cm[r][0] + cm[r][1] + cm[r][2];
              const count = cm[r][c];
              const pct = rowTotal ? ((count / rowTotal) * 100).toFixed(1) : "0.0";
              const verdict = c < r ? " Predicted too low (risky)." : c > r ? " Predicted higher than reality." : " Correct.";
              setTip({
                x: e.clientX,
                y: e.clientY,
                text: modelNames[model] + ": " + count.toLocaleString() + " of " + rowTotal.toLocaleString() + " real class " + r + " days (" + pct + "%) were predicted as class " + c + "." + verdict,
              });
            };
            addHotspot(canvas, q(id), { pad: 6, tip: true, onEnter: show, onMove: show, onLeave: () => setTip(null) }, created);
          }),
        );
      });

      // open model details from each method card
      (Object.keys(methodCardIds) as ModelKey[]).forEach((model) =>
        addHotspot(canvas, q(methodCardIds[model]), { pad: 0, radius: "45px", label: modelNames[model] + " details", onClick: () => setInfoModel(model) }, created),
      );

      // add run actions to the script names and heading
      ["42:41", "42:42"].forEach((id) => {
        const box = q(id);
        if (!box) return;
        Array.from(box.querySelectorAll<HTMLElement>("p")).forEach((p) =>
          addHotspot(canvas, p, { pad: 6, radius: "12px", label: "Run " + p.textContent, onClick: () => setRunScript((p.textContent ?? "main.py").trim()) }, created),
        );
      });
      addHotspot(canvas, q("43:89"), { pad: 10, radius: "20px", label: "Run code", onClick: () => setRunScript("main.py") }, created);
    };

    build();
    // rebuild click areas after fonts load or the menu changes size
    document.fonts?.ready.then(build);
    document.fonts?.addEventListener("loadingdone", build);
    const t = window.setTimeout(build, 1200);
    const menu = canvas.querySelector('[data-name="Top menu items"]');
    const watcher = menu ? new ResizeObserver(build) : null;
    if (menu) watcher?.observe(menu);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
      document.fonts?.removeEventListener("loadingdone", build);
      watcher?.disconnect();
      created.forEach((el) => el.remove());
    };
  }, []);

  // update the poster when the feature set changes
  useEffect(() => {
    const data = setups[setup];

    (Object.keys(buttonIds) as SetupKey[]).forEach((key) => {
      const rect = q(buttonIds[key].rect);
      const label = q(buttonIds[key].label);
      const active = key === setup;
      if (rect) {
        rect.style.backgroundColor = active ? "#4a2574" : "#e8f5fa";
        rect.style.borderColor = active ? "#4a2574" : "#0d82b5";
      }
      if (label) label.style.color = active ? "#ffffff" : "#4a2574";
    });

    (Object.keys(tableIds) as ModelKey[]).forEach((model) => {
      const m = metricsOf(data.cm[model]);
      const [accEl, macroEl] = tableIds[model].map(q);
      if (accEl) accEl.textContent = m.acc.toFixed(4);
      if (macroEl) macroEl.textContent = m.macro.toFixed(4);
    });

    (Object.keys(matrixIds) as ModelKey[]).forEach((model) =>
      matrixIds[model].forEach((row, r) =>
        row.forEach((id, c) => {
          const el = q(id);
          if (el) el.textContent = String(data.cm[model][r][c]);
        }),
      ),
    );

    // update the share of high-uv days predicted too low
    (Object.keys(lowShareIds) as ModelKey[]).forEach((model) => {
      const cm = data.cm[model];
      const total = cm[2][0] + cm[2][1] + cm[2][2];
      const el = q(lowShareIds[model]);
      if (el) el.textContent = (((cm[2][0] + cm[2][1]) / total) * 100).toFixed(1) + "%";
    });
    const note = q("66:10");
    if (note) {
      if (!originalLowNote.current) originalLowNote.current = note.textContent ?? "Lower is better.";
      note.textContent = setup === "set1" ? originalLowNote.current : originalLowNote.current + " (" + data.label + ")";
    }
  }, [setup]);

  // show the mini menu after scrolling past the top section
  useEffect(() => {
    const onScroll = () => setShowNav(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close popups with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setRunScript(null);
        setInfoModel(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return createPortal(
    <>
      <style>{css}</style>
      <nav className={"iv-nav" + (showNav ? " show" : "")} aria-label="Sections">
        {navItems.map((item) => (
          <button key={item.label} onClick={() => openNavItem(item.targetId)}>{item.label}</button>
        ))}
      </nav>
      {showNav && <button className="iv-back" onClick={() => goTo(null)} aria-label="Back to top">^</button>}
      {tip && (
        <div className="iv-tooltip" style={{ left: Math.min(tip.x + 16, window.innerWidth - 320), top: tip.y + 18 }}>{tip.text}</div>
      )}
      {runScript && <RunModal initial={scripts.includes(runScript) ? runScript : "main.py"} onClose={() => setRunScript(null)} />}
      {infoModel && <InfoModal model={infoModel} onClose={() => setInfoModel(null)} />}
    </>,
    document.body,
  );
}