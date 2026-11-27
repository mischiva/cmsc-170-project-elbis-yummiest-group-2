import Charts from "./Charts";
import type { SetupKey } from "./types";

const BASE = `${import.meta.env.BASE_URL}assets`;
const asset = (file: string) => `${BASE}/${file}`;

const ASSETS = {
  vector: asset("2259b.svg"),
  vector1: asset("40854.svg"),
  skyBg: asset("f587c.svg"),
  distantClouds: asset("148c4.svg"),
  blueCloudsTop: asset("3c5b2.svg"),
  vector7: asset("36e74.svg"),
  vector9: asset("6987a.svg"),
  vector8: asset("7227e.svg"),
  vector10: asset("3554e.svg"),
  ellipse9: asset("bd92f.svg"),
  vector6: asset("50280.svg"),
  leftCloud: asset("ad05a.svg"),
  middleCloud: asset("b6f47.svg"),
  rightCloud: asset("37bae.svg"),
  vector2: asset("0a689.svg"),
  sun: asset("a28e0.svg"),
  sparkles: asset("0b80b.svg"),
  blueCloudsTransition: asset("e1dee.svg"),
  dividerWave: asset("6c5ad.svg"),
  vector11: asset("e1c09.svg"),
  vector12: asset("2eac4.svg"),
  rect17: asset("80d47.svg"),
  rect16: asset("0da3a.svg"),
  vector3: asset("2be0d.svg"),
  rect4: asset("3b05b.svg"),
  vector4: asset("9e300.svg"),
  vector5: asset("e16d7.svg"),
  vector13: asset("f4758.svg"),
  vector14: asset("5929c.svg"),
  vector15: asset("6982c.svg"),
  middleCloud1: asset("8c0f4.svg"),
  middleCloud2: asset("060f1.svg"),
  middleCloud3: asset("977fb.svg"),
  middleCloud4: asset("d886f.svg"),
  vector16: asset("533d0.svg"),
  vector17: asset("07694.svg"),
  ruleV: asset("728a7.svg"),
  ruleH1: asset("e3f72.svg"),
  ruleH2: asset("fba9f.svg"),
  ruleH3: asset("9149b.svg"),
  ruleH4: asset("8699c.svg"),
  ruleH5: asset("d39e1.svg"),
  middleCloud5: asset("465db.svg"),
  heroClouds: asset("e1a59.svg"),
};

const REPO_URL = "https://github.com/mischiva/cmsc-170-project-elbis-yummiest-group-2";
const SLIDES_URL = "https://www.canva.com/design/DAHcBpz2ipM/JKFKAYpm8mElJ7wSuCPN7A/edit";

const NAV_LINKS = [
  { id: "25:7", label: "HOME" },
  { id: "25:8", label: "ABOUT" },
  { id: "42:2", label: "DATASET" },
  { id: "42:3", label: "METHODS" },
  { id: "42:4", label: "SETUP" },
  { id: "42:5", label: "RESULTS" },
  { id: "42:6", label: "DISCUSSION" },
  { id: "42:7", label: "CONCLUSION" },
  { id: "42:9", label: "REFERENCES" },
  { id: "99:1", label: "RUN CODE" },
];

const CLASS_COUNTS = [
  { codeId: "36:11", labelId: "36:12", countId: "36:13", code: "0", label: "No protection", count: "27", top: 135 },
  { codeId: "36:14", labelId: "36:15", countId: "36:16", code: "1", label: "Protection", count: "921", top: 218 },
  { codeId: "36:17", labelId: "36:18", countId: "36:19", code: "2", label: "Extra protection", count: "1,864", top: 304 },
];

const SCORE_ROWS = [
  { rowId: "36:77", nameId: "36:78", accId: "36:79", precId: "36:80", name: "KNN", acc: "0.8183", prec: "0.5392", top: 4471, boldAcc: true, shaded: true },
  { rowId: null, nameId: "36:81", accId: "36:82", precId: "36:83", name: "Naive Bayes", acc: "0.7749", prec: "0.5797", top: 4568, boldPrec: true, shaded: false },
  { rowId: "36:84", nameId: "36:85", accId: "36:86", precId: "36:87", name: "Perceptron", acc: "0.6817", prec: "0.4682", top: 4635, shaded: true },
  { rowId: null, nameId: "36:88", accId: "36:89", precId: "36:90", name: "Baseline", acc: "0.6629", prec: "0.2210", top: 4732, shaded: false },
];

type MatrixCell = { id: string; value: string };
type MatrixPanelConfig = {
  panelId: string;
  titleId: string;
  title: string;
  titleClass: string;
  titleStyle?: React.CSSProperties;
  left: number;
  diagTops: [number, number, number];
  diagIds: [string, string, string];
  rows: { rowLabelId: string; rowNum: string; top: number; cells: [MatrixCell, MatrixCell, MatrixCell] }[];
};

const MATRICES: MatrixPanelConfig[] = [
  {
    panelId: "36:96",
    titleId: "61:100",
    title: "KNN",
    titleClass:
      "[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[208.5px] not-italic text-[94.6px] text-[transparent] top-[5000px] whitespace-nowrap",
    titleStyle: {
      backgroundImage:
        "linear-gradient(179.64735977307413deg, rgb(255, 252, 216) 0.43995%, rgb(13, 130, 181) 76.907%)",
    },
    left: 77.5,
    diagTops: [5135, 5187, 5239],
    diagIds: ["36:102", "36:108", "36:114"],
    rows: [
      { rowLabelId: "36:101", rowNum: "0", top: 5142, cells: [{ id: "36:103", value: "0" }, { id: "36:104", value: "22" }, { id: "36:105", value: "5" }] },
      { rowLabelId: "36:106", rowNum: "1", top: 5194, cells: [{ id: "36:107", value: "0" }, { id: "36:109", value: "566" }, { id: "36:110", value: "355" }] },
      { rowLabelId: "36:111", rowNum: "2", top: 5246, cells: [{ id: "36:112", value: "0" }, { id: "36:113", value: "129" }, { id: "36:115", value: "1735" }] },
    ],
  },
  {
    panelId: "36:116",
    titleId: "61:101",
    title: "NAIVE BAYES",
    titleClass:
      "[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[551.5px] not-italic text-[80.944px] text-[transparent] top-[5009px] tracking-[-4.8567px] whitespace-nowrap",
    titleStyle: {
      backgroundImage:
        "linear-gradient(179.58482042623908deg, rgb(255, 252, 216) 1.4046%, rgb(13, 130, 181) 76.759%)",
    },
    left: 517.5,
    diagTops: [5135, 5187, 5239],
    diagIds: ["36:122", "36:128", "36:134"],
    rows: [
      { rowLabelId: "36:121", rowNum: "0", top: 5142, cells: [{ id: "36:123", value: "6" }, { id: "36:124", value: "16" }, { id: "36:125", value: "5" }] },
      { rowLabelId: "36:126", rowNum: "1", top: 5194, cells: [{ id: "36:127", value: "16" }, { id: "36:129", value: "601" }, { id: "36:130", value: "304" }] },
      { rowLabelId: "36:131", rowNum: "2", top: 5246, cells: [{ id: "36:132", value: "3" }, { id: "36:133", value: "289" }, { id: "36:135", value: "1572" }] },
    ],
  },
  {
    panelId: "36:136",
    titleId: "61:102",
    title: "PERCEPTRON",
    titleClass:
      "[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[988.5px] not-italic text-[82.02px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[5009px] tracking-[-6.5616px] whitespace-nowrap",
    left: 957.5,
    diagTops: [5135, 5187, 5239],
    diagIds: ["36:142", "36:148", "36:154"],
    rows: [
      { rowLabelId: "36:141", rowNum: "0", top: 5142, cells: [{ id: "36:143", value: "0" }, { id: "36:144", value: "26" }, { id: "36:145", value: "1" }] },
      { rowLabelId: "36:146", rowNum: "1", top: 5194, cells: [{ id: "36:147", value: "0" }, { id: "36:149", value: "791" }, { id: "36:150", value: "130" }] },
      { rowLabelId: "36:151", rowNum: "2", top: 5246, cells: [{ id: "36:152", value: "0" }, { id: "36:153", value: "738" }, { id: "36:155", value: "1126" }] },
    ],
  },
];

const SETUP_STEPS = [
  { accentId: "36:46", titleId: "36:47", descId: "36:48", top: 3642, height: 78, title: "01  SPLIT BY DATE", desc: "70% train, then 30% test." },
  { accentId: "36:49", titleId: "36:50", descId: "36:51", top: 3734, height: 78, title: "02  FAIR COMPARISON", desc: "Every model sees the same days." },
  { accentId: "36:52", titleId: "36:53", descId: "36:54", top: 3826, height: 78, title: "03  SCORES", desc: "Accuracy and macro precision." },
  { accentId: "36:55", titleId: "36:56", descId: "36:57", top: 3918, height: 106, title: "04  TWO FEATURE SETS", desc: "Set 1 uses avg temp. Set 2 uses the daily high." },
];

const DISCUSSION_CARDS = [
  {
    cardId: "67:7",
    headingId: "67:8",
    bodyId: "59:15",
    left: 0,
    heading: "BEST ACCURACY",
    body: "KNN performs best: 81.8% to 82.0% accuracy, compared with a 66.3% majority-class baseline.",
  },
  {
    cardId: "67:9",
    headingId: "67:10",
    bodyId: "59:16",
    left: 440,
    heading: "LOW-UV LIMIT",
    body: "Low-UV days remain a blind spot. Only 27 appeared in the test set; KNN identified none.",
  },
  {
    cardId: "67:11",
    headingId: "67:12",
    bodyId: "59:19",
    left: 880,
    heading: "PERCEPTRON",
    body: "Perceptron adds little: 68.2% in Set 1 and 65.1% in Set 2, near the 66.3% baseline.",
  },
];

const HIGH_UV_MISSES = [
  { labelId: "66:4", valueId: "66:5", label: "KNN", value: "6.9%", labelLeft: 32, valueLeft: 386 },
  { labelId: "66:6", valueId: "66:7", label: "Naive Bayes", value: "15.7%", labelLeft: 453, valueLeft: 807 },
  { labelId: "66:8", valueId: "66:9", label: "Perceptron", value: "39.6%", labelLeft: 874, valueLeft: 1228 },
];

const LINKS = [
  { name: "GitHub", url: REPO_URL },
  { name: "Slides", url: SLIDES_URL },
];

const MEMBERS = [
  "Calleja, Jodi Antonette",
  "Casa, Justin Celestial",
  "Castro, Allane Lee",
  "Cueto, Raven Nathalie",
];

type SourcePart = string | { url: string };
const SOURCES: { id: string; kind: "web" | "book"; parts: SourcePart[] }[] = [
  { id: "01", kind: "web", parts: ["NASA POWER Data Access Viewer.", { url: "https://power.larc.nasa.gov/data-access-viewer/" }, "and POWER data sources:", { url: "https://power.larc.nasa.gov/docs/methodology/data/sources/" }] },
  { id: "02", kind: "web", parts: ["World Health Organization. (2022). Radiation: The ultraviolet (UV) index.", { url: "https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-%28uv%29-index" }] },
  { id: "03", kind: "web", parts: ["World Health Organization. (2024). Radiation: The known health effects of ultraviolet radiation.", { url: "https://www.who.int/news-room/questions-and-answers/item/radiation-the-known-health-effects-of-ultraviolet-radiation" }] },
  { id: "04", kind: "web", parts: ["Cancer Council Australia. Do you only need sun protection if it is a hot, sunny day?", { url: "https://www.cancer.org.au/iheard/do-you-only-need-sun-protection-if-it-is-a-hot-sunny-day" }] },
  { id: "05", kind: "web", parts: ["Cancer Council. 10 myths about sun protection.", { url: "https://www.cancercouncil.com.au/blog/10-myths-about-sun-protection/" }] },
  { id: "06", kind: "web", parts: ["The Skin Center, St. Luke's Medical Center. (2026, July 1). Why sun protection matters even on rainy days.", { url: "https://www.stlukes.com.ph/news-and-events/news-and-press-release/why-sun-protection-matters-even-on-rainy-days" }] },
  { id: "07", kind: "book", parts: ["Mitchell, T. M. (1997). Machine Learning. McGraw-Hill."] },
  { id: "08", kind: "book", parts: ["Gojo Cruz, J. I. N. (2026). CMSC 170 Lec 13: Machine Learning Overview; Lec 14: Naive Bayes; Lec 15: Linear and Logistic Regression; Lab 04: Naïve Bayes Classifier; Lab 06: Nearest-Neighbor Model (KNN); Lab 08: Linear Classification (Perceptron)."] },
];

function PosterImg({ src, className = "" }: { src: string; className?: string }) {
  return <img alt="" className={`absolute block inset-0 max-w-none size-full ${className}`} src={src} />;
}

function SectionHeader({
  ruleId,
  backingId,
  titleId,
  leftEndpointId,
  rightEndpointId,
  title,
  top,
  backingLeft,
  backingWidth,
}: {
  ruleId: string;
  backingId: string;
  titleId: string;
  leftEndpointId: string;
  rightEndpointId: string;
  title: string;
  top: number;
  backingLeft: number;
  backingWidth: number;
}) {
  return (
    <>
      <div
        className="absolute bg-[#4a2574] h-[4px] left-[74.5px] w-[1291px]"
        style={{ top: top + 35 }}
        data-node-id={ruleId}
        data-name="Section rule"
      />
      <div
        className="absolute bg-white h-[78px]"
        style={{ left: backingLeft, top, width: backingWidth }}
        data-node-id={backingId}
        data-name="Heading backing"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.1] left-[720px] text-[#4a2574] text-[60px] text-center w-[1291px]"
        style={{ top: top + 4, fontVariationSettings: '"wdth" 100' }}
        data-node-id={titleId}
      >
        {title}
      </p>
      <div
        className="absolute bg-[#1a92c7] left-[74.5px] size-[22px]"
        style={{ top: top + 25 }}
        data-node-id={leftEndpointId}
        data-name="Left blue endpoint"
      />
      <div
        className="absolute bg-[#1a92c7] left-[1343.5px] size-[22px]"
        style={{ top: top + 25 }}
        data-node-id={rightEndpointId}
        data-name="Right blue endpoint"
      />
    </>
  );
}

export default function App({ setup }: { setup: SetupKey }) {
  return (
    <div className="poster-canvas bg-white relative" data-node-id="1:2" data-name="meow">
      <div className="poster-artwork">
        <div
          className="absolute flex inset-[11.67%_-11.5%_62.99%_64.6%] items-center justify-center"
          data-node-id="11:101"
          style={{ containerType: "size" }}
        >
          <div className="flex-none h-[hypot(-84.599cqw,1.4863cqh)] rotate-87 w-[hypot(15.401cqw,98.5137cqh)]">
            <div className="relative size-full" data-name="Vector">
              <PosterImg src={ASSETS.vector} />
            </div>
          </div>
        </div>

        <div
          className="absolute flex inset-[27.12%_68.3%_44.46%_-10.59%] items-center justify-center"
          data-node-id="11:102"
          style={{ containerType: "size" }}
        >
          <div className="-rotate-93 -scale-x-100 flex-none h-[hypot(80.7717cqw,-1.14058cqh)] w-[hypot(19.2283cqw,98.8594cqh)]">
            <div className="relative size-full" data-name="Vector">
              <PosterImg src={ASSETS.vector1} />
            </div>
          </div>
        </div>

        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[0.74] left-[713.5px] text-[#4a2574] text-[68.254px] text-center top-[1708px] whitespace-nowrap"
          data-node-id="31:38"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          DATASET
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[0.74] left-[716px] not-italic text-[#4a2574] text-[174.774px] text-center top-[1799px] tracking-[-10.4864px] whitespace-nowrap"
          data-node-id="31:50"
        >
          2001 - 2026
        </p>

        <div className="absolute bg-[#43addb] h-[410px] left-[4px] top-[63px] w-[1440px]" data-node-id="2:12" />

        <div className="absolute h-[450px] left-[-4px] top-[-1px] w-[1448px]" data-node-id="3:3" data-name="Sky • sun and ultraviolet rays">
          <div className="absolute h-[446px] left-0 overflow-clip top-0 w-[1448px]" data-node-id="3:4576" data-name="Frame">
            <div className="absolute inset-[-0.45%_-0.48%_0.1%_-0.97%]" data-node-id="3:4577" data-name="Sky-background">
              <PosterImg src={ASSETS.skyBg} />
            </div>
            <div className="absolute inset-[6.02%_10.04%_50.21%_13.22%]" data-node-id="3:4581" data-name="Distant-clouds">
              <PosterImg src={ASSETS.distantClouds} />
            </div>
            <div className="absolute inset-[40.81%_0_-6.95%_0]" data-node-id="3:4587" data-name="Blue-cloud-banks">
              <PosterImg src={ASSETS.blueCloudsTop} />
            </div>

            <div className="absolute flex inset-[42.03%_11.15%_-30.04%_49.72%] items-center justify-center" data-node-id="28:22" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(13.3239cqw,40.3143cqh)] rotate-[-25.5deg] w-[hypot(86.6761cqw,-59.6857cqh)]">
                <div className="relative size-full">
                  <div className="absolute inset-[-20.36%_-6.56%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.vector7} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex inset-[48.21%_7.96%_-8.41%_76.59%] items-center justify-center" data-node-id="28:24" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(44.6481cqw,77.9942cqh)] rotate-[-25.5deg] w-[hypot(55.3519cqw,-22.0058cqh)]">
                <div className="relative size-full">
                  <div className="absolute inset-[-15.39%_-26.01%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.vector9} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex inset-[35.87%_-3.48%_-20.57%_85.57%] items-center justify-center" data-node-id="28:23" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(61.7208cqw,87.232cqh)] rotate-[-25.91deg] w-[hypot(38.2792cqw,-12.768cqh)]">
                <div className="relative size-full">
                  <div className="absolute inset-[-9.74%_-32.34%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.vector8} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute flex inset-[34.27%_13.28%_-11.91%_44.13%] items-center justify-center" data-node-id="28:25" style={{ containerType: "size" }}>
              <div className="flex-none h-[hypot(-94.8677cqw,80.9106cqh)] rotate-[64.41deg] w-[hypot(5.13234cqw,19.0894cqh)]">
                <div className="relative size-full">
                  <div className="absolute inset-[-5.5%_-48.71%]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.vector10} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-[4.93%_5.18%_26.91%_73.83%]" data-node-id="2:31">
              <div className="absolute inset-[-32.89%]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.ellipse9} />
              </div>
            </div>

            <div className="absolute inset-[35.99%_19.48%_-6.95%_14.92%]" data-node-id="28:20">
              <div className="absolute inset-[-11.28%_-3.76%]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.vector6} />
              </div>
            </div>

            <div className="absolute contents inset-[11.32%_0_57.62%_0]" data-node-id="3:4591" data-name="Hanging-clouds">
              <div className="absolute inset-[15.69%_86.37%_57.62%_0]" data-node-id="3:4593" data-name="Left-cloud">
                <PosterImg src={ASSETS.leftCloud} />
              </div>
              <div className="absolute inset-[15.69%_62.48%_71.33%_28.3%]" data-node-id="3:4596" data-name="Middle-cloud">
                <PosterImg src={ASSETS.middleCloud} />
              </div>
              <div className="absolute inset-[11.32%_0_76.55%_94.66%]" data-node-id="3:4599" data-name="Right-cloud">
                <PosterImg src={ASSETS.rightCloud} />
              </div>
            </div>

            <div className="absolute inset-[0_66.75%_81.84%_6.42%]" data-node-id="3:4592" data-name="Vector">
              <div className="absolute inset-[0_-0.15%]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.vector2} />
              </div>
            </div>

            <div className="absolute inset-[13.9%_8.07%_38.46%_76.73%]" data-node-id="3:4602" data-name="Sun">
              <div className="absolute inset-[-2.15%_-2.08%]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.sun} />
              </div>
            </div>

            <div className="absolute inset-[6.2%_-0.56%_21.22%_0.69%]" data-node-id="3:4623" data-name="Sparkles">
              <PosterImg src={ASSETS.sparkles} />
            </div>
          </div>
        </div>

        {/* Cloud transition leading into Discussion */}
        <div className="absolute h-[496.25px] left-[-46px] top-[5668px] w-[1596px]" data-node-id="61:103" data-name="Blue-cloud-banks">
          <PosterImg src={ASSETS.blueCloudsTransition} />
        </div>

        <div className="absolute h-[72.736px] left-[83px] top-[729px] w-[1280px]" data-node-id="2:35">
          <PosterImg src={ASSETS.dividerWave} />
        </div>
        <div className="absolute h-[72.736px] left-[78.5px] top-[2206px] w-[1280px]" data-node-id="43:58">
          <PosterImg src={ASSETS.dividerWave} />
        </div>

        <div className="absolute flex h-0 items-center justify-center left-[94px] top-[1734px] w-[439px]" data-node-id="31:40">
          <div className="-rotate-90 flex-none">
            <div className="h-[439px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.vector11} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[890px] top-[1734px] w-[462px]" data-node-id="31:41">
          <div className="-rotate-90 flex-none">
            <div className="h-[462px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.vector12} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[72px] size-[23px] top-[1722px]" data-node-id="31:39">
          <PosterImg src={ASSETS.rect17} />
        </div>
        <div className="absolute left-[1340px] size-[23px] top-[1722px]" data-node-id="31:42">
          <PosterImg src={ASSETS.rect17} />
        </div>

        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[0] left-[719.5px] text-[#2d2a32] text-[26.542px] text-center top-[848px] whitespace-nowrap"
          data-node-id="11:64"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[1.3] mb-0 whitespace-pre">{`Can a day's WHO sun-protection level be predicted `}</p>
          <p className="leading-[1.3] whitespace-pre">from the weather a person can feel?</p>
        </div>

        <div className="absolute inset-[0.4%_18%_98.92%_18%]" data-node-id="25:5">
          <div className="absolute inset-[-9.59%_-0.63%]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.rect16} />
          </div>
        </div>

        <div className="absolute flex gap-[18px] items-center left-1/2 -translate-x-1/2 top-[47px]" data-name="Top menu items">
          {NAV_LINKS.map((item) => (
            <p
              key={item.id}
              className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap"
              data-node-id={item.id}
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* ABOUT */}
        <div className="absolute contents left-[74.5px] top-[961px]" data-node-id="31:43" data-name="ABOUT">
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium h-[51.385px] leading-[0.74] left-[402.77px] text-[#4a2574] text-[68.254px] text-center top-[961px] w-[257.781px]"
            data-node-id="11:47"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            ABOUT
          </p>
          <div className="absolute inset-[12.2%_71.19%_87.37%_27.34%]" data-node-id="11:65" data-name="Vector">
            <PosterImg src={ASSETS.vector3} />
          </div>

          {[
            { id: "2:37", left: 74.5, top: 975.11 },
            { id: "11:66", left: 76.51, top: 1596.77 },
            { id: "11:67", left: 706.87, top: 1596.77 },
            { id: "11:49", left: 706.87, top: 975.11 },
          ].map((corner) => (
            <div
              key={corner.id}
              className="absolute h-[23.174px] w-[23.16px]"
              style={{ left: corner.left, top: corner.top }}
              data-node-id={corner.id}
            >
              <PosterImg src={ASSETS.rect4} />
            </div>
          ))}

          <div className="absolute flex h-[568.26px] items-center justify-center left-[86.58px] top-[1012.39px] w-[1.979px]" data-node-id="11:59">
            <div className="flex-none rotate-[-0.2deg]">
              <div className="h-[568.263px] relative w-0">
                <div className="absolute inset-[0_-3px]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.vector4} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex h-0 items-center justify-center left-[110.75px] top-[987.2px] w-[163.127px]" data-node-id="11:62">
            <div className="-rotate-90 flex-none">
              <div className="h-[163.127px] relative w-0">
                <div className="absolute inset-[0_-3px]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.vector5} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute flex h-0 items-center justify-center left-[538.71px] top-[987.2px] w-[157.085px]" data-node-id="11:63">
            <div className="-rotate-90 flex-none">
              <div className="h-[157.085px] relative w-0">
                <div className="absolute inset-[0_-3px]">
                  <img alt="" className="block max-w-none size-full" src={ASSETS.vector13} />
                </div>
              </div>
            </div>
          </div>

          {["11:61", "43:57"].map((id) => (
            <div key={id} className="absolute flex h-0 items-center justify-center left-[111.76px] top-[1608.86px] w-[585.041px]" data-node-id={id}>
              <div className="flex-none rotate-90">
                <div className="h-[585.041px] relative w-0">
                  <div className="absolute inset-[0_-3px]">
                    <img alt="" className="block max-w-none size-full" src={ASSETS.vector14} />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute h-[580.35px] left-[718.95px] top-[1010.37px] w-0" data-node-id="11:60">
            <div className="absolute inset-[0_-2.43px]">
              <img alt="" className="block max-w-none size-full" src={ASSETS.vector15} />
            </div>
          </div>

          <div
            className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] h-[589.418px] leading-[0] left-[121.83px] not-italic text-[#2d2a32] text-[34.255px] text-justify top-[1038.58px] w-[561.881px] whitespace-pre-wrap"
            data-node-id="11:69"
          >
            <p className="mb-0 text-pretty">
              <span className="leading-none">{`UV exposure is a daily health concern in the Philippines. The World Health Organization groups the UV index into protection categories, but a UV reading is only known after it is measured. Ordinary weather variables `}</span>
              <span className="[word-break:break-word] font-['Libertinus_Sans:Italic'] italic leading-none">
                (wind, temperature, humidity, pressure)
              </span>
              <span className="leading-none">{` are far easier to get and forecast.`}</span>
            </p>
            <p className="leading-none mb-0 text-pretty">​</p>
            <p className="leading-none text-pretty">​</p>
          </div>

          <p
            className="[word-break:break-word] absolute font-['Kalnia:Medium'] font-medium h-[175.314px] italic leading-[0] left-[125.85px] text-[#2d2a32] text-[0px] text-justify text-pretty top-[1398.28px] w-[561.881px]"
            data-node-id="18:104"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <span className="font-['Libertinus_Sans:Italic'] leading-none text-[34.255px]">{`given a day's weather, to predict the day's `}</span>
            <span className="font-['Libertinus_Sans:Italic'] leading-none text-[34.255px]">UV protection class, w</span>
            <span className="font-['Libertinus_Sans:Italic'] leading-none text-[34.255px]">
              e implement three meaningfully different methods from scratch, test them on the same days, and compare them.
            </span>
          </p>

          <div
            className="absolute h-[216.624px] left-[765.27px] rounded-[51px] top-[975.11px] w-[589.069px]"
            data-node-id="11:99"
            style={{
              backgroundImage: "linear-gradient(179.8995976677009deg, rgb(176, 219, 236) 0.23713%, rgb(255, 252, 216) 132.4%)",
            }}
          />
          <div
            className="absolute h-[370.779px] left-[765.27px] rounded-[51px] top-[1238.08px] w-[589.069px]"
            data-node-id="25:4"
            style={{
              backgroundImage: "linear-gradient(179.94255534387435deg, rgb(176, 219, 236) 0%, rgb(255, 252, 216) 135.46%)",
            }}
          />

          <div
            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Libertinus_Sans:Regular'] h-[131.989px] justify-center leading-[0] not-italic right-[640.49px] text-[#2d2a32] text-[37.001px] text-justify top-[1100.55px] tracking-[-2.5901px] translate-x-full w-[526.638px] whitespace-pre-wrap"
            data-node-id="22:7"
          >
            <p className="leading-[0.92] mb-0">{`Most people rely on felt conditions like heat, humidity, and wind when deciding if they need sun protection because `}</p>
            <p className="font-['Libertinus_Sans:Bold'] leading-[0.92] mb-0 text-[#200049]">UV radiation itself cannot be felt.</p>
            <p className="leading-[0.92]">​</p>
          </div>

          <div
            className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Libertinus_Sans:Regular'] h-[312.341px] justify-center leading-[0] not-italic right-[650.56px] text-[#2d2a32] text-[36.215px] text-justify top-[1423.47px] tracking-[-1.4486px] translate-x-full w-[541.742px]"
            data-node-id="25:2"
          >
            <p>
              <span className="leading-[0.77]">{`If models trained strictly on 2-meter felt weather measurements predict UV protection levels poorly, it shows that `}</span>
              <span className="[word-break:break-word] font-['Libertinus_Sans:Bold'] leading-[0.77] not-italic text-[#200049]">
                people cannot rely on physical intuition alone and should check the actual UV Index instead
              </span>
              <span className="leading-[0.77]">
                . We also left out satellite solar and cloud variables because humans cannot directly sense them and including them would nearly give away the answer.
              </span>
            </p>
          </div>

          <div className="absolute inset-[14.42%_39.48%_84.73%_50.56%]" data-node-id="28:10" data-name="Middle-cloud">
            <PosterImg src={ASSETS.middleCloud1} />
          </div>
          <div className="absolute inset-[14.37%_5.05%_84.77%_89.09%]" data-node-id="28:16" data-name="Middle-cloud">
            <PosterImg src={ASSETS.middleCloud2} />
          </div>
          <div className="absolute flex inset-[19.53%_4.34%_79.52%_85.31%] items-center justify-center" data-node-id="28:13" style={{ containerType: "size" }}>
            <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Middle-cloud">
                <PosterImg src={ASSETS.middleCloud3} />
              </div>
            </div>
          </div>
        </div>

        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[0.74] left-[976px] not-italic text-[#489cc1] text-[43.879px] text-center top-[1912px] tracking-[-2.6327px] whitespace-nowrap"
          data-node-id="31:54"
          style={{
            textShadow: "-2px -2px 0 #fff, 0 -2px 0 #fff, 2px -2px 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -2px 2px 0 #fff, 0 2px 0 #fff, 2px 2px 0 #fff",
          }}
        >
          UP UNTIL AUG 30
        </p>

        {/* DATASET */}
        <div className="absolute h-[550px] left-[73px] top-[2404px] w-[1291px]" data-node-id="36:2" data-name="Dataset details">
          <p className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[12px] not-italic text-[#4a2574] text-[39px] top-[-16px] w-[740px]" data-node-id="36:4">
            Batong Malake, Los Baños
          </p>
          <div className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[0] left-[69px] not-italic text-[#2d2a32] text-[34px] top-[62px] w-[735px] whitespace-pre-wrap" data-node-id="36:5">
            <p className="leading-[1.1] mb-0">{`Avg temp • Max temp • Humidity `}</p>
            <p className="leading-[1.1]">Wind speed • Pressure</p>
          </div>
          <p className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[32px] not-italic text-[#2d2a32] text-[34px] top-[222px] w-[710px]" data-node-id="36:6">
            Each day is labeled with its UV class from the highest hourly UV. Days with missing values are dropped.
          </p>
          <div className="[word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[0] left-[32px] not-italic text-[#4a2574] text-[36px] top-[366px] w-[720px]" data-node-id="36:7">
            <p className="leading-[1.1] mb-0">Older 70%: 6,559 training days</p>
            <p className="leading-[1.1]">Newer 30%: 2,812 test days</p>
          </div>

          <div className="absolute bg-[#e8f5fa] border-8 border-[#5b20a8] border-solid left-[820px] rounded-[45px] size-[471px] top-[-25px]" data-node-id="36:8" data-name="Class balance card" />
          <p className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[904px] text-[#2d2a32] text-[31px] top-[88px] w-[440px]" data-node-id="36:10">
            Test days
          </p>

          {CLASS_COUNTS.map((row) => (
            <div key={row.codeId} className="[word-break:break-word] absolute contents leading-[1.1] left-[838px] not-italic" style={{ top: row.top }}>
              <p className="absolute font-['Jersey_25:Regular'] left-[838px] text-[#4a2574] text-[52px] w-[50px]" style={{ top: row.top }} data-node-id={row.codeId}>
                {row.code}
              </p>
              <p className="absolute font-['Libertinus_Sans:Regular'] left-[904px] text-[#2d2a32] text-[32px] w-[270px]" style={{ top: row.top + 9 }} data-node-id={row.labelId}>
                {row.label}
              </p>
              <p className="-translate-x-full absolute font-['Jersey_25:Regular'] left-[1274px] text-[#4a2574] text-[45px] text-right w-[95px]" style={{ top: row.top }} data-node-id={row.countId}>
                {row.count}
              </p>
            </div>
          ))}

          <p className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[933px] text-[#4a2574] text-[32px] top-[388px] whitespace-nowrap" data-node-id="36:20">
            Class 0 is very rare.
          </p>

          <div className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[0] left-[32px] text-[#2d2a32] text-[26px] top-[492px] w-[1220px]" data-node-id="36:21">
            <p className="leading-[1.1] mb-0">Source: NASA Langley Research Center, POWER Project.</p>
            <p className="leading-[1.1]">{`Daily and hourly meteorological data • https://power.larc.nasa.gov/`}</p>
          </div>

          <div className="absolute flex inset-[72.73%_-2.87%_13.53%_91.32%] items-center justify-center" data-node-id="43:65" style={{ containerType: "size" }}>
            <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Middle-cloud">
                <PosterImg src={ASSETS.middleCloud4} />
              </div>
            </div>
          </div>

          <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] h-[69px] leading-[1.1] left-[6px] not-italic text-[79.098px] text-[transparent] to-[#8b46da] top-[-83px] w-[807.805px]" data-node-id="36:3">
            DAILY + HOURLY WEATHER
          </p>
          <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[863px] not-italic text-[65.463px] text-[transparent] to-[#8b46da] top-[6px] whitespace-nowrap" data-node-id="36:9">
            CLASS BALANCE
          </p>
        </div>

        {/* METHODS */}
        <SectionHeader
          ruleId="36:25"
          backingId="36:26"
          titleId="36:23"
          leftEndpointId="36:27"
          rightEndpointId="36:28"
          title="METHODS"
          top={3032}
          backingLeft={539.5}
          backingWidth={361}
        />

        <div className="absolute contents left-[75px] top-[3157px]" data-node-id="43:71">
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[75px] rounded-[45px] top-[3157px] w-[411px]" data-node-id="36:29" data-name="KNN method card" />
          <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[204px] not-italic text-[95.171px] text-[transparent] to-[#06394f] top-[3352px] whitespace-nowrap" data-node-id="36:30">
            KNN
          </p>
          <p
            className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[204px] not-italic text-[95.171px] text-[transparent] top-[3352px] whitespace-nowrap"
            data-node-id="43:81"
            style={{ backgroundImage: "linear-gradient(179.6463268490429deg, rgb(255, 252, 216) 0.43995%, rgb(13, 130, 181) 76.907%)" }}
          >
            KNN
          </p>
          <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[0] left-[280px] text-[#2d2a32] text-[35px] text-center top-[3243px] w-[350px] whitespace-pre-wrap" data-node-id="36:31">
            <p className="leading-[1.1] mb-0">{`The closest past days `}</p>
            <p className="leading-[1.1]">vote (k = 31 or 51).</p>
          </div>
        </div>

        <div className="absolute contents left-[955px] top-[3157px]" data-node-id="43:77">
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[955px] rounded-[45px] top-[3157px] w-[411px]" data-node-id="43:78" data-name="KNN method card" />
        </div>
        <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[975px] not-italic text-[87.176px] text-[transparent] to-[#06394f] top-[3355px] tracking-[-6.9741px] whitespace-nowrap" data-node-id="43:79">
          PERCEPTRON
        </p>
        <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[975px] not-italic text-[87.176px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[3355px] tracking-[-6.9741px] whitespace-nowrap" data-node-id="43:82">
          PERCEPTRON
        </p>

        <div className="absolute contents left-[514px] top-[3157px]" data-node-id="43:72">
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[514px] rounded-[45px] top-[3157px] w-[411px]" data-node-id="43:73" data-name="KNN method card" />
          <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[540px] not-italic text-[80.944px] text-[transparent] to-[#06394f] top-[3360px] tracking-[-4.8567px] whitespace-nowrap" data-node-id="43:74">
            NAIVE BAYES
          </p>
          <p
            className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[540px] not-italic text-[80.944px] text-[transparent] top-[3360px] tracking-[-4.8567px] whitespace-nowrap"
            data-node-id="43:83"
            style={{ backgroundImage: "linear-gradient(179.58482042623908deg, rgb(255, 252, 216) 1.4046%, rgb(13, 130, 181) 76.759%)" }}
          >
            NAIVE BAYES
          </p>
        </div>

        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[721px] text-[#2d2a32] text-[35px] text-center top-[3222px] w-[350px]" data-node-id="36:34">
          Picks the class whose typical weather fits the day best.
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[1161px] text-[#2d2a32] text-[35px] text-center top-[3223px] w-[350px]" data-node-id="36:37">
          Three straight-line classifiers where the most confident one wins.
        </p>

        <div className="absolute inset-[38.4%_45.68%_61.2%_52.88%]" data-node-id="43:84" data-name="Vector">
          <PosterImg src={ASSETS.vector16} />
        </div>

        {/* RESULTS */}
        <SectionHeader
          ruleId="36:61"
          backingId="60:2"
          titleId="36:59"
          leftEndpointId="60:3"
          rightEndpointId="60:4"
          title="RESULTS"
          top={4161}
          backingLeft={539.5}
          backingWidth={361}
        />

        <div className="absolute bg-[#4a2574] h-[70px] left-[74.5px] rounded-[24px] top-[4277px] w-[633px]" data-node-id="36:65" data-name="All 6 features view button" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[391px] not-italic text-[37px] text-center text-white top-[4292px] w-[293px]" data-node-id="36:66">
          Set 1: Avg temp
        </p>
        <div className="absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[732.5px] rounded-[24px] top-[4277px] w-[633px]" data-node-id="36:67" data-name="Avg temp only view button" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1049px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]" data-node-id="36:68">
          Set 2: Max temp
        </p>

        <div className="hidden absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[726.5px] rounded-[24px] top-[4277px] w-[313px]" data-node-id="36:69" data-name="Max temp only view button" />
        <p className="hidden -translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[883px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]" data-node-id="36:70">
          Max temp only
        </p>
        <div className="hidden absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[1052.5px] rounded-[24px] top-[4277px] w-[313px]" data-node-id="36:71" data-name="Min temp only view button" />
        <p className="hidden -translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1209px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]" data-node-id="36:72">
          Min temp only
        </p>

        <div className="absolute bg-[#e8f5fa] h-[76px] left-[74.5px] rounded-[18px] top-[4389px] w-[1291px]" data-node-id="36:73" data-name="Score table header" />
        <p className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[110.5px] not-italic text-[#4a2574] text-[41px] top-[4406px] w-[490px]" data-node-id="36:74">
          MODEL
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[794.5px] not-italic text-[#4a2574] text-[41px] text-center top-[4406px] w-[240px]" data-node-id="36:75">
          ACCURACY
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1155.5px] not-italic text-[#4a2574] text-[41px] text-center top-[4406px] w-[350px]" data-node-id="36:76">
          MACRO PRECISION
        </p>

        {SCORE_ROWS.map((row) => (
          <div key={row.nameId}>
            {row.rowId && (
              <div
                className="absolute bg-[#f4f9fb] h-[78px] left-[74.5px] w-[1291px]"
                style={{ top: row.top }}
                data-node-id={row.rowId}
                data-name={`${row.name} row`}
              />
            )}
            <p
              className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[110.5px] not-italic text-[#292332] text-[38px] w-[520px]"
              style={{ top: row.top + 15 }}
              data-node-id={row.nameId}
            >
              {row.name}
            </p>
            <p
              className={`-translate-x-1/2 [word-break:break-word] absolute ${row.boldAcc ? "font-['Libertinus_Sans:Bold'] text-[#4a2574]" : "font-['Libertinus_Sans:Regular'] text-[#292332]"} leading-[1.2] left-[794.5px] not-italic text-[38px] text-center w-[240px]`}
              style={{ top: row.top + 15 }}
              data-node-id={row.accId}
            >
              {row.acc}
            </p>
            <p
              className={`-translate-x-1/2 [word-break:break-word] absolute ${row.boldPrec ? "font-['Libertinus_Sans:Bold'] text-[#4a2574]" : "font-['Libertinus_Sans:Regular'] text-[#292332]"} leading-[1.2] left-[1155.5px] not-italic text-[38px] text-center w-[350px]`}
              style={{ top: row.top + 15 }}
              data-node-id={row.precId}
            >
              {row.prec}
            </p>
          </div>
        ))}

        <Charts setup={setup} />

        {/* CONFUSION MATRICES */}
        <div className="absolute h-0 left-0 top-[381px] w-0" data-name="Confusion matrices">
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[729px] not-italic text-[64px] text-[transparent] text-center to-[#8b46da] top-[4879px] w-[1291px]"
            data-node-id="36:94"
          >
            CONFUSION MATRICES
          </p>
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.2] left-[723px] text-[#5e5866] text-[32px] text-center top-[4935px] w-[1291px]"
            data-node-id="36:95"
          >
            Rows = real class • Columns = predicted class • Class order: 0, 1, 2
          </p>

          {MATRICES.map((panel, idx) => {
            const colBase = panel.left + 135;
            return (
              <div key={panel.panelId}>
                <div
                  className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[322px] rounded-[45px] top-[5005px] w-[411px]"
                  style={{ left: panel.left }}
                  data-node-id={panel.panelId}
                  data-name={`${panel.title} matrix panel`}
                />

                {["0", "1", "2"].map((colNum, ci) => (
                  <p
                    key={colNum}
                    className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
                    style={{ left: colBase + ci * 99 }}
                    data-node-id={
                      idx === 0
                        ? ["36:98", "36:99", "36:100"][ci]
                        : idx === 1
                        ? ["36:118", "36:119", "36:120"][ci]
                        : ["36:138", "36:139", "36:140"][ci]
                    }
                  >
                    {colNum}
                  </p>
                ))}

                {panel.rows.map((r, ri) => (
                  <div key={r.rowLabelId}>
                    <p
                      className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] not-italic text-[#4a2574] text-[31px] text-center w-[50px]"
                      style={{ left: panel.left + 43, top: r.top }}
                      data-node-id={r.rowLabelId}
                    >
                      {r.rowNum}
                    </p>
                    <div
                      className="absolute bg-[#d1e8f2] h-[49px] rounded-[6px] w-[92px]"
                      style={{ left: colBase - 46 + ri * 99, top: panel.diagTops[ri] }}
                      data-node-id={panel.diagIds[ri]}
                      data-name={`${panel.title} diagonal ${ri}`}
                    />
                    {r.cells.map((cell, ci) => (
                      <p
                        key={cell.id}
                        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] not-italic text-[#292332] text-[33px] text-center w-[88px]"
                        style={{ left: colBase + ci * 99, top: r.top }}
                        data-node-id={cell.id}
                      >
                        {cell.value}
                      </p>
                    ))}
                  </div>
                ))}

                <p className={panel.titleClass} style={panel.titleStyle} data-node-id={panel.titleId}>
                  {panel.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* DATASET METRICS */}
        <div
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] h-[240px] leading-[1.15] left-[72px] not-italic text-center top-[1947px] w-[1291px]"
          data-node-id="42:10"
          data-name="Dataset numbers"
        >
          {[
            { numId: "42:11", lblId: "42:12", left: 205.5, num: "9,371", lbl: "USABLE DAYS" },
            { numId: "42:13", lblId: "42:14", left: 645.5, num: "5", lbl: "FELT WEATHER FEATURES" },
            { numId: "42:15", lblId: "42:16", left: 1085.5, num: "3", lbl: "UV CLASSES" },
          ].map((stat) => (
            <div key={stat.numId}>
              <p className="-translate-x-1/2 absolute text-[#4a2574] text-[150px] top-0 w-[411px]" style={{ left: stat.left }} data-node-id={stat.numId}>
                {stat.num}
              </p>
              <p className="-translate-x-1/2 absolute text-[#1a92c7] text-[40px] top-[156px] w-[411px]" style={{ left: stat.left }} data-node-id={stat.lblId}>
                {stat.lbl}
              </p>
            </div>
          ))}
        </div>

        {/* CONCLUSION */}
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.15] left-[79px] not-italic text-[#4a2574] text-[46px] top-[6908px] w-[1220px]"
          data-node-id="42:35"
        >
          Felt weather beats a blind guess, but it is not a safe guide to sun protection.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.15] left-[79px] text-[#2d2a32] text-[37px] top-[7026px] w-[1240px]"
          data-node-id="42:36"
        >
          82% vs 66%, yet wrong about 1 day in 5. Protect around midday every day and check the UV Index.
        </p>

        {/* REFERENCES AND CREDITS */}
        <div className="absolute h-[1160px] left-[79px] top-[7144px] w-[1291px]" data-node-id="42:43" data-name="References and credits">
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[900px] left-0 rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[150px] w-[760px]" data-node-id="67:17" data-name="Sources card" />
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[630px] left-[790px] rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[150px] w-[501px]" data-node-id="67:18" data-name="Members card" />
          <div className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[230px] left-[790px] rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[820px] w-[501px]" data-node-id="61:127" data-name="Links card" />

          <div className="absolute bg-[#4a2574] h-[4px] left-0 top-[31px] w-[1291px]" data-node-id="67:13" data-name="Section rule" />
          <div className="absolute bg-white h-[78px] left-[412px] top-[-4px] w-[467px]" data-node-id="67:14" data-name="Heading backing" />
          <p
            className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.1] left-[645.5px] text-[#4a2574] text-[60px] text-center top-0 whitespace-nowrap"
            data-node-id="42:44"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            REFERENCES
          </p>
          <div className="absolute bg-[#1a92c7] left-0 size-[22px] top-[21px]" data-node-id="67:15" data-name="Left blue endpoint" />
          <div className="absolute bg-[#1a92c7] left-[1269px] size-[22px] top-[21px]" data-node-id="67:16" data-name="Right blue endpoint" />

          {[40, 1212].map((left) => (
            <div key={left} className="absolute flex gap-[4px] top-[84px]" style={{ left }}>
              <span className="block bg-[#1a92c7] size-[12px]" />
              <span className="block bg-[#4a2574] size-[12px]" />
              <span className="block bg-[#1a92c7] size-[12px]" />
            </div>
          ))}

          <ol className="absolute left-[32px] list-none m-0 p-0 top-[245px] w-[696px]" data-node-id="42:47">
            {SOURCES.map((s, i) => (
              <li
                key={s.id}
                className={`flex gap-[18px] items-start py-[9px] ${i < SOURCES.length - 1 ? "border-b-2 border-[#d6e6ee]" : ""}`}
              >
                <span
                  className="flex-none font-['Jersey_25:Regular'] h-[30px] w-[40px] flex items-center justify-center rounded-[7px] text-[22px] leading-none text-white mt-[1px]"
                  style={{ backgroundColor: s.kind === "web" ? "#0d82b5" : "#4a2574" }}
                >
                  {s.id}
                </span>
                <p className="font-['Libertinus_Sans:Italic'] italic leading-[1.2] m-0 text-[#2d2a32] text-[21px] [overflow-wrap:anywhere]">
                  {s.parts.map((part, k) =>
                    typeof part === "string" ? (
                      <span key={k}>{part} </span>
                    ) : (
                      <span key={k} className="text-[#2a7ca3] not-italic">{part.url} </span>
                    ),
                  )}
                </p>
              </li>
            ))}
          </ol>

          <ol className="absolute flex flex-col h-[470px] justify-center left-[822px] list-none m-0 p-0 top-[205px] w-[437px]" data-node-id="42:52">
            {MEMBERS.map((name, i) => (
              <li
                key={name}
                className={`flex gap-[16px] items-baseline py-[24px] ${i < MEMBERS.length - 1 ? "border-b-2 border-[#d6e6ee]" : ""}`}
              >
                <span className="font-['Jersey_25:Regular'] text-[#1a92c7] text-[26px] leading-none w-[38px]">0{i + 1}</span>
                <span className="font-['Libertinus_Sans:Italic'] italic text-[#2d2a32] text-[31px] leading-[1.1]">{name}</span>
              </li>
            ))}
          </ol>

          <p className="absolute border-t-2 border-[#d6e6ee] font-['Libertinus_Sans:Italic'] italic left-[822px] m-0 pt-[18px] text-[#4a2574] text-[27px] text-center top-[690px] w-[437px]">
            Elbi's Yummiest | CMSC 170 W5L
          </p>

          <div className="absolute flex flex-col h-[165px] justify-center left-[822px] top-[870px] w-[437px]" data-node-id="42:55">
            {LINKS.map((l, i) => (
              <a
                key={l.name}
                href={l.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between py-[13px] text-[#2d2a32] no-underline font-['Libertinus_Sans:Regular'] text-[30px] leading-[1.1] ${
                  i < LINKS.length - 1 ? "border-b-2 border-[#d6e6ee] " : ""
                }${l.url ? "hover:text-[#0d82b5]" : ""}`}
              >
                <span>{l.url ? l.name : `${l.name} [add link]`}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a92c7" strokeWidth="2" aria-hidden="true">
                  <path d="M6 18 18 6M8 6h10v10" />
                </svg>
              </a>
            ))}
          </div>

          <div className="absolute bg-white h-[40px] left-[105px] top-[132px] w-[540px]" />
          <div className="absolute bg-white h-[36px] left-[890px] top-[134px] w-[300px]" />
          <div className="absolute bg-white h-[36px] left-[925px] top-[804px] w-[230px]" />

          <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[115px] not-italic text-[172.957px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[80px] tracking-[-13.8365px] whitespace-nowrap" data-node-id="61:125">
            SOURCES
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[1040.5px] not-italic text-[87.389px] text-[transparent] text-center to-[#0d82b5] to-[77.083%] top-[114px] tracking-[-6.9911px] whitespace-nowrap" data-node-id="61:126">
            MEMBERS
          </p>
          <p className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[1040.5px] not-italic text-[87.389px] text-[transparent] text-center to-[#0d82b5] to-[77.083%] top-[784px] tracking-[-6.9911px] whitespace-nowrap" data-node-id="61:128">
            LINKS
          </p>

        {/* bottom line and square marks */}
        <div className="absolute bg-[#4a2574] h-[4px] left-0 top-[1100px] w-[1291px]" />
        <div className="absolute flex left-[606px] top-[1089px]">
          <span className="block bg-[#1a92c7] size-[26px]" />
          <span className="block bg-[#4a2574] size-[26px]" />
          <span className="block bg-[#1a92c7] size-[26px]" />
        </div>
      </div>
      <div className="absolute contents left-[74.5px] top-[3542px]" data-node-id="54:99">
        <div
          className="absolute inset-[47.57%_48.37%_51.52%_48.37%]"
          data-node-id="54:93"
          data-name="Vector"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.vector17} />
        </div>
        <div
          className="absolute bg-white h-[78px] left-[559px] top-[4078px] w-[322px]"
          data-node-id="36:62"
          data-name="Heading backing"
        />
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[826.5px] not-italic text-[#2d2a32] text-[32px] top-[3640px] w-[520px]"
          data-node-id="42:40"
        >
          Pick any method, and hit run! Some may take a few minutes
        </p>
        <div
          className="absolute flex h-[190px] items-center justify-center left-[720.5px] top-[3576px] w-0"
          data-node-id="54:94"
        >
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[190px]" data-name="Heading rule">
              <div className="absolute inset-[-3px_0]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.ruleV} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-[190px] items-center justify-center left-[720.5px] top-[3875px] w-0"
          data-node-id="54:95"
        >
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[190px]" data-name="Heading rule">
              <div className="absolute inset-[-3px_0]">
                <img alt="" className="block max-w-none size-full" src={ASSETS.ruleV} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-0 left-[85.5px] top-[3576px] w-[182px]"
          data-node-id="54:92"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.ruleH1} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[84.5px] top-[4054px] w-[1271px]"
          data-node-id="54:97"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.ruleH2} />
          </div>
        </div>
        <div
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] h-[120px] leading-[0] left-[826.5px] not-italic text-[#4a2574] text-[40px] top-[3751px] w-[528px]"
          data-node-id="42:41"
        >
          <p className="leading-[1.25] mb-0">main.py</p>
          <p className="leading-[1.25]">naive_bayes.py</p>
        </div>
        <div
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] h-[107px] leading-[0] left-[826.5px] not-italic text-[#4a2574] text-[40px] top-[3911px] w-[528px]"
          data-node-id="42:42"
        >
          <p className="leading-[1.25] mb-0">knn.py</p>
          <p className="leading-[1.25]">perceptron.py</p>
        </div>
        <div
          className="absolute bg-[#1a92c7] left-[74.5px] size-[22px] top-[3565px]"
          data-node-id="36:44"
          data-name="Left blue endpoint"
        />
        <div
          className="absolute bg-[#1a92c7] left-[74.5px] size-[22px] top-[4043px]"
          data-node-id="54:96"
          data-name="Left blue endpoint"
        />
        <div
          className="absolute h-0 left-[720.5px] top-[3576px] w-[174px]"
          data-node-id="43:90"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.ruleH3} />
          </div>
        </div>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.15] left-[378.5px] text-[#4a2574] text-[58px] text-center top-[3542px] w-[360px]"
          data-node-id="43:85"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          SETUP
        </p>
        <div
          className="absolute h-0 left-[489.5px] top-[3576px] w-[231px]"
          data-node-id="43:87"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.ruleH4} />
          </div>
        </div>
        <div
          className="absolute bg-[#1a92c7] left-[709.5px] size-[22px] top-[3565px]"
          data-node-id="43:88"
          data-name="Left blue endpoint"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.15] left-[1060.5px] text-[#4a2574] text-[58px] text-center top-[3542px] w-[360px]"
          data-node-id="43:89"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          RUN CODE
        </p>
        <div
          className="absolute h-0 left-[1240.5px] top-[3576px] w-[114px]"
          data-node-id="43:91"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={ASSETS.ruleH5} />
          </div>
        </div>
        <div
          className="absolute bg-[#1a92c7] left-[1343.5px] size-[22px] top-[3565px]"
          data-node-id="36:45"
          data-name="Right blue endpoint"
        />
        <div
          className="absolute bg-[#1a92c7] left-[1343.5px] size-[22px] top-[4043px]"
          data-node-id="54:98"
          data-name="Right blue endpoint"
        />
        <div
          className="absolute bg-[#1a92c7] h-[78px] left-[116.5px] top-[3642px] w-[6px]"
          data-node-id="36:46"
          data-name="Setup accent 0"
        />
        <p
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#4a2574] text-[40px] top-[3640px] w-[520px] whitespace-pre-wrap"
          data-node-id="36:47"
        >{`01  SPLIT BY DATE`}</p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#2d2a32] text-[29px] top-[3685px] w-[520px]"
          data-node-id="36:48"
        >
          70% train, then 30% test.
        </p>
        <div
          className="absolute bg-[#1a92c7] h-[78px] left-[116.5px] top-[3734px] w-[6px]"
          data-node-id="36:49"
          data-name="Setup accent 1"
        />
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#2d2a32] text-[29px] top-[3777px] w-[520px]"
          data-node-id="36:51"
        >
          Every model sees the same days.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#4a2574] text-[40px] top-[3732px] w-[520px] whitespace-pre-wrap"
          data-node-id="36:50"
        >{`02  FAIR COMPARISON`}</p>
        <div
          className="absolute bg-[#1a92c7] h-[106px] left-[116.5px] top-[3918px] w-[6px]"
          data-node-id="36:55"
          data-name="Setup accent 3"
        />
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#2d2a32] text-[29px] top-[3961px] w-[520px]"
          data-node-id="36:57"
        >
          Set 1 uses avg temp. Set 2 uses the daily high.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#4a2574] text-[40px] top-[3916px] w-[520px] whitespace-pre-wrap"
          data-node-id="36:56"
        >04  TWO FEATURE SETS</p>
        <div
          className="absolute bg-[#1a92c7] h-[78px] left-[116.5px] top-[3826px] w-[6px]"
          data-node-id="36:52"
          data-name="Setup accent 2"
        />
        <p
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#4a2574] text-[40px] top-[3824px] w-[520px] whitespace-pre-wrap"
          data-node-id="36:53"
        >{`03  SCORES`}</p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[144.5px] not-italic text-[#2d2a32] text-[29px] top-[3869px] w-[520px]"
          data-node-id="36:54"
        >
          Accuracy and macro precision.
        </p>
        <div
          className="absolute bg-[#1a92c7] left-[709.5px] size-[22px] top-[4043px]"
          data-node-id="52:3"
          data-name="Run Code left endpoint"
        />
        <div
          className="absolute bg-[#1a92c7] h-[376px] left-[798.5px] top-[3642px] w-[6px]"
          data-node-id="52:4"
          data-name="Run Code accent"
        />
      </div>
      <div
        className="absolute h-[730px] left-[79px] top-[6130px] w-[1291px]"
        data-node-id="67:2"
        data-name="Discussion"
      >
        <div
          className="absolute h-[224px] left-0 rounded-[51px] top-[458px] w-[1291px]"
          data-node-id="66:3"
          style={{
            backgroundImage:
              "linear-gradient(180.04605198632714deg, rgb(176, 219, 236) 0.23055%, rgb(251, 254, 255) 107.1%)",
          }}
          data-name="High-UV risk summary"
        />
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[310px] left-[880px] rounded-[45px] top-[110px] w-[411px]"
          data-node-id="67:11"
          data-name="BASELINE COMPARISON card"
        />
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[310px] left-[440px] rounded-[45px] top-[110px] w-[411px]"
          data-node-id="67:9"
          data-name="LOW-UV LIMIT card"
        />
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[310px] left-0 rounded-[45px] top-[110px] w-[411px]"
          data-node-id="67:7"
          data-name="BEST ACCURACY card"
        />
        <div
          className="absolute bg-[#4a2574] h-[4px] left-0 top-[31px] w-[1291px]"
          data-node-id="67:3"
          data-name="Section rule"
        />
        <div
          className="absolute bg-white h-[78px] left-[426px] top-[-4px] w-[439px]"
          data-node-id="67:4"
          data-name="Heading backing"
        />
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.1] left-[645.5px] text-[#4a2574] text-[60px] text-center top-0 whitespace-nowrap"
          data-node-id="59:3"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          DISCUSSION
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[28px] not-italic text-[#2d2a32] text-[32px] text-pretty top-[225px] w-[355px]"
          data-node-id="59:15"
        >
          KNN performs best: 81.8% to 82.0% accuracy, compared with a 66.3% majority-class baseline.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[468px] not-italic text-[#2d2a32] text-[32px] text-pretty top-[225px] w-[355px]"
          data-node-id="59:16"
        >
          Low-UV days remain a blind spot. Only 27 appeared in the test set; KNN identified none.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] not-italic right-[383px] text-[#2d2a32] text-[32px] top-[225px] translate-x-full w-[355px]"
          data-node-id="59:19"
        >
          Perceptron adds little: 68.2% in Set 1 and 65.1% in Set 2, near the 66.3% baseline.
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] not-italic right-[645.5px] text-[60px] text-[transparent] text-center to-[#8b46da] top-[483px] translate-x-1/2 w-[1227px]"
          data-node-id="59:20"
        >
          UV 8+ days predicted too low
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.15] left-[32px] not-italic text-[#2d2a32] text-[34px] top-[566px] w-[240px]"
          data-node-id="66:4"
        >
          KNN
        </p>
        <p
          className="-translate-x-full [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.15] left-[386px] not-italic text-[#4a2574] text-[50px] text-right top-[561px] w-[160px] whitespace-nowrap"
          data-node-id="66:5"
        >
          6.9%
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.15] left-[453px] not-italic text-[#2d2a32] text-[34px] top-[566px] w-[240px]"
          data-node-id="66:6"
        >
          Naive Bayes
        </p>
        <p
          className="-translate-x-full [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.15] left-[807px] not-italic text-[#4a2574] text-[50px] text-right top-[561px] w-[160px] whitespace-nowrap"
          data-node-id="66:7"
        >
          15.7%
        </p>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.15] left-[874px] not-italic text-[#2d2a32] text-[34px] top-[566px] w-[240px]"
          data-node-id="66:8"
        >
          Perceptron
        </p>
        <p
          className="-translate-x-full [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.15] left-[1228px] not-italic text-[#4a2574] text-[50px] text-right top-[561px] w-[160px] whitespace-nowrap"
          data-node-id="66:9"
        >
          39.6%
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[normal] left-[645.5px] text-[#4a2574] text-[28px] text-center top-[632px] w-[1227px]"
          data-node-id="66:10"
        >
          Lower is better.
        </p>
        <div
          className="absolute bg-[#1a92c7] left-0 size-[22px] top-[21px]"
          data-node-id="67:5"
          data-name="Left blue endpoint"
        />
        <div
          className="absolute bg-[#1a92c7] left-[1269px] size-[22px] top-[21px]"
          data-node-id="67:6"
          data-name="Right blue endpoint"
        />
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[28px] not-italic text-[42px] text-[transparent] to-[#8b46da] top-[138px] w-[355px]"
          data-node-id="67:8"
        >
          BEST ACCURACY
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[468px] not-italic text-[42px] text-[transparent] to-[#8b46da] top-[138px] w-[355px]"
          data-node-id="67:10"
        >
          LOW-UV LIMIT
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[908px] not-italic text-[42px] text-[transparent] to-[#8b46da] top-[138px] w-[355px]"
          data-node-id="67:12"
        >
          PERCEPTRON
        </p>
      </div>
      <div
        className="absolute flex inset-[84.67%_0.56%_13.95%_86.39%] items-center justify-center"
        data-node-id="61:120"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Middle-cloud">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={ASSETS.middleCloud5}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex inset-[84.55%_88.13%_14.06%_-1.18%] items-center justify-center"
        data-node-id="61:123"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Middle-cloud">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={ASSETS.middleCloud5}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[210.8px] left-[-74px] top-[331px] w-[1596px]"
        data-node-id="75:130"
        data-name="clouds"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={ASSETS.heroClouds} />
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text font-['Jersey_15:Regular'] h-[476px] leading-[74.04000091552734%] left-[calc(50%+3.79px)] not-italic text-[86px] text-[transparent] text-center text-shadow-[0px_5px_5.1px_rgba(0,0,0,0.2)] top-[491px] w-[1400px]"
        data-node-id="2:28"
        style={{
          backgroundImage:
            "linear-gradient(179.2844403497321deg, rgb(253, 238, 182) 34.258%, rgb(91, 181, 220) 26.712%, rgb(65, 6, 142) 87.682%)",
        }}
      >
        Should You Wear Sunscreen Today?
        <br aria-hidden />
        Predicting WHO Sun-Protection Levels
        <br aria-hidden />
        from Felt Weather in Los Baños, Laguna
      </p>
      </div>
    </div>
  );
}