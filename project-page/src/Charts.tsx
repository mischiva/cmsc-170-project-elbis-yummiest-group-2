// charts for the results section
// the numbers come from the same confusion matrices used in Interactive.tsx
// (rows = real class, columns = predicted class)

import type { ReactNode } from "react";
import type { SetupKey } from "./types";

type Matrix = number[][];

const matrices: Record<"set1" | "set2", Record<"knn" | "nb" | "per", Matrix>> = {
  set1: {
    knn: [[0, 22, 5], [0, 566, 355], [0, 129, 1735]],
    nb: [[6, 16, 5], [16, 601, 304], [3, 289, 1572]],
    per: [[0, 26, 1], [0, 791, 130], [0, 738, 1126]],
  },
  set2: {
    knn: [[0, 21, 6], [0, 574, 347], [0, 133, 1731]],
    nb: [[6, 19, 2], [15, 695, 211], [3, 366, 1495]],
    per: [[0, 25, 2], [0, 735, 186], [0, 768, 1096]],
  },
};

const modelKeys = ["knn", "nb", "per"] as const;
const modelLabels = { knn: "KNN", nb: "Naive Bayes", per: "Perceptron" };

// colors
const purple = "#4a2574";
const violet = "#8b46da";
const blue = "#0d82b5";
const sun = "#f2b84b";
const lightBlue = "#1a92c7";

// accuracy of one matrix
function accuracyOf(cm: Matrix) {
  let total = 0;
  let correct = 0;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      total += cm[r][c];
      if (r === c) correct += cm[r][c];
    }
  }
  return correct / total;
}

// macro precision of one matrix
function macroOf(cm: Matrix) {
  let sum = 0;
  for (let c = 0; c < 3; c++) {
    const predicted = cm[0][c] + cm[1][c] + cm[2][c];
    sum += predicted ? cm[c][c] / predicted : 0;
  }
  return sum / 3;
}

// precision of one class (of the days predicted as that class, how many were correct)
function precisionOf(cm: Matrix, c: number) {
  const predictedTotal = cm[0][c] + cm[1][c] + cm[2][c];
  return predictedTotal ? cm[c][c] / predictedTotal : 0;
}

// the baseline always guesses class 2, so every set has the same baseline
const baselineCm: Matrix = [[0, 0, 27], [0, 0, 921], [0, 0, 1864]];
const baselineAcc = accuracyOf(baselineCm);
const baselineMacro = macroOf(baselineCm);

type Bar = { value: number; color: string };
type Group = { label: string; bars: Bar[] };
type LegendItem = { label: string; color: string; dashed?: boolean };

type BarChartProps = {
  groups: Group[];
  max: number;
  ticks: number[];
  tickFormat: (v: number) => string;
  valueFormat: (v: number) => string;
  legend: LegendItem[];
  barWidth: number;
  barGap: number;
  baseline?: number;
  showValues?: boolean;
};

const jersey = '"Jersey 25:Regular", monospace';
const libertinus = '"Libertinus Sans:Regular", sans-serif';

// one grouped bar chart 
function BarChart({ groups, max, ticks, tickFormat, valueFormat, legend, barWidth, barGap, baseline, showValues = true }: BarChartProps) {
  const x0 = 50;
  const plotW = 335;
  const yTop = 16;
  const yBottom = 186;
  const plotH = yBottom - yTop;
  const groupW = plotW / groups.length;
  const yOf = (v: number) => yBottom - (v / max) * plotH;

  // legend items placed one after another
  let legendX = 8;
  const legendPlaced = legend.map((item) => {
    const placed = { ...item, x: legendX };
    legendX += 14 + 6 + item.label.length * 8.6 + 14;
    return placed;
  });

  return (
    <svg
      viewBox="0 0 391 250"
      width="391"
      height="250"
      style={{ position: "absolute", left: 10, top: 58, overflow: "visible" }}
      role="img"
    >
      {/* gridlines and y labels */}
      {ticks.map((t) => (
        <g key={t}>
          <line x1={x0} x2={x0 + plotW} y1={yOf(t)} y2={yOf(t)} stroke="#d6e6ee" strokeWidth={2} />
          <text x={x0 - 8} y={yOf(t) + 5} textAnchor="end" fill="#5e5866" fontSize={17} style={{ fontFamily: libertinus }}>
            {tickFormat(t)}
          </text>
        </g>
      ))}

      {/* bars */}
      {groups.map((g, gi) => {
        const totalW = g.bars.length * barWidth + (g.bars.length - 1) * barGap;
        const startX = x0 + gi * groupW + (groupW - totalW) / 2;
        return (
          <g key={g.label}>
            {g.bars.map((b, bi) => {
              const x = startX + bi * (barWidth + barGap);
              const y = yOf(b.value);
              const h = Math.max(yBottom - y, 0);
              return (
                <g key={bi}>
                  <rect x={x} y={y} width={barWidth} height={h} rx={5} fill={b.color} />
                  {showValues && (
                    <text x={x + barWidth / 2} y={y - 6} textAnchor="middle" fill={purple} fontSize={20} style={{ fontFamily: jersey }}>
                      {valueFormat(b.value)}
                    </text>
                  )}
                </g>
              );
            })}
            <text
              x={x0 + gi * groupW + groupW / 2}
              y={yBottom + 26}
              textAnchor="middle"
              fill="#2d2a32"
              fontSize={18}
              style={{ fontFamily: libertinus }}
            >
              {g.label}
            </text>
          </g>
        );
      })}

      {/* x axis line */}
      <line x1={x0} x2={x0 + plotW} y1={yBottom} y2={yBottom} stroke={purple} strokeWidth={3} />

      {/* dashed baseline */}
      {baseline !== undefined && (
        <line x1={x0} x2={x0 + plotW} y1={yOf(baseline)} y2={yOf(baseline)} stroke="#5e5866" strokeWidth={2.5} strokeDasharray="7 5" />
      )}

      {/* legend */}
      {legendPlaced.map((item) => (
        <g key={item.label}>
          {item.dashed ? (
            <line x1={item.x} x2={item.x + 14} y1={236} y2={236} stroke={item.color} strokeWidth={2.5} strokeDasharray="4 3" />
          ) : (
            <rect x={item.x} y={229} width={14} height={14} rx={3} fill={item.color} />
          )}
          <text x={item.x + 20} y={241} fill="#2d2a32" fontSize={17} style={{ fontFamily: libertinus, fontStyle: "italic" }}>
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// card that matches the confusion matrix panels
function Card({ left, title, children }: { left: number; title: string; children: ReactNode }) {
  return (
    <div
      className="absolute bg-white border-5 border-[#0d82b5] border-solid rounded-[45px]"
      style={{ left, top: 4849, width: 411, height: 322 }}
    >
      <p
        className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] m-0 not-italic text-[42px] text-[transparent] to-[#8b46da] whitespace-nowrap"
        style={{ left: 28, top: 8 }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

export default function Charts({ setup }: { setup: SetupKey }) {
  const setLegend: LegendItem[] = [
    { label: "Set 1", color: purple },
    { label: "Set 2", color: lightBlue },
    { label: "Baseline", color: "#5e5866", dashed: true },
  ];

  // accuracy and macro precision
  // one group per model, one bar per feature set
  const accGroups: Group[] = modelKeys.map((m) => ({
    label: modelLabels[m],
    bars: [
      { value: accuracyOf(matrices.set1[m]), color: purple },
      { value: accuracyOf(matrices.set2[m]), color: lightBlue },
    ],
  }));
  const macroGroups: Group[] = modelKeys.map((m) => ({
    label: modelLabels[m],
    bars: [
      { value: macroOf(matrices.set1[m]), color: purple },
      { value: macroOf(matrices.set2[m]), color: lightBlue },
    ],
  }));

  const classColors = [sun, blue, purple];
  const averageColor = violet;
  const precisionGroups: Group[] = modelKeys.map((m) => ({
    label: modelLabels[m],
    bars: [
      { value: precisionOf(matrices[setup][m], 0), color: classColors[0] },
      { value: precisionOf(matrices[setup][m], 1), color: classColors[1] },
      { value: precisionOf(matrices[setup][m], 2), color: classColors[2] },
      { value: macroOf(matrices[setup][m]), color: averageColor },
    ],
  }));
  const precisionLegend: LegendItem[] = [
    { label: "0", color: classColors[0] },
    { label: "1", color: classColors[1] },
    { label: "2", color: classColors[2] },
    { label: "Average", color: averageColor },
  ];

  return (
    <>
      <Card left={77.5} title="ACCURACY">
        <BarChart
          groups={accGroups}
          max={1}
          ticks={[0, 0.5, 1]}
          tickFormat={(v) => String(v)}
          valueFormat={(v) => v.toFixed(2)}
          legend={setLegend}
          barWidth={36}
          barGap={6}
          baseline={baselineAcc}
        />
      </Card>
      <Card left={957.5} title="MACRO PRECISION">
        <BarChart
          groups={macroGroups}
          max={0.8}
          ticks={[0, 0.4, 0.8]}
          tickFormat={(v) => String(v)}
          valueFormat={(v) => v.toFixed(2)}
          legend={setLegend}
          barWidth={36}
          barGap={6}
          baseline={baselineMacro}
        />
      </Card>
      <Card left={517.5} title="PRECISION PER CLASS">
        <BarChart
          groups={precisionGroups}
          max={1}
          ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]}
          tickFormat={(v) => v.toFixed(1)}
          valueFormat={(v) => v.toFixed(2)}
          legend={precisionLegend}
          barWidth={20}
          barGap={3}
          showValues={false}
        />
      </Card>
    </>
  );
}