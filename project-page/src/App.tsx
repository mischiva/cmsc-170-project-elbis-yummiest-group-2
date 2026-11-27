const assetPathPrefix = `${import.meta.env.BASE_URL}assets`;
const imgVector = `${assetPathPrefix}/2259b.svg`;
const imgVector1 = `${assetPathPrefix}/40854.svg`;
const imgSkyBackground = `${assetPathPrefix}/f587c.svg`;
const imgDistantClouds = `${assetPathPrefix}/148c4.svg`;
const imgBlueCloudBanks = `${assetPathPrefix}/3c5b2.svg`;
const imgVector7 = `${assetPathPrefix}/36e74.svg`;
const imgVector9 = `${assetPathPrefix}/6987a.svg`;
const imgVector8 = `${assetPathPrefix}/7227e.svg`;
const imgVector10 = `${assetPathPrefix}/3554e.svg`;
const imgEllipse9 = `${assetPathPrefix}/bd92f.svg`;
const imgVector6 = `${assetPathPrefix}/50280.svg`;
const imgLeftCloud = `${assetPathPrefix}/ad05a.svg`;
const imgMiddleCloud = `${assetPathPrefix}/b6f47.svg`;
const imgRightCloud = `${assetPathPrefix}/37bae.svg`;
const imgVector2 = `${assetPathPrefix}/0a689.svg`;
const imgSun = `${assetPathPrefix}/a28e0.svg`;
const imgSparkles = `${assetPathPrefix}/0b80b.svg`;
const imgBlueCloudBanks1 = `${assetPathPrefix}/e1dee.svg`;
const imgGroup1 = `${assetPathPrefix}/6c5ad.svg`;
const imgVector11 = `${assetPathPrefix}/e1c09.svg`;
const imgVector12 = `${assetPathPrefix}/2eac4.svg`;
const imgRectangle17 = `${assetPathPrefix}/80d47.svg`;
const imgRectangle16 = `${assetPathPrefix}/0da3a.svg`;
const imgVector3 = `${assetPathPrefix}/2be0d.svg`;
const imgRectangle4 = `${assetPathPrefix}/3b05b.svg`;
const imgVector4 = `${assetPathPrefix}/9e300.svg`;
const imgVector5 = `${assetPathPrefix}/e16d7.svg`;
const imgVector13 = `${assetPathPrefix}/f4758.svg`;
const imgVector14 = `${assetPathPrefix}/5929c.svg`;
const imgVector15 = `${assetPathPrefix}/6982c.svg`;
const imgMiddleCloud1 = `${assetPathPrefix}/8c0f4.svg`;
const imgMiddleCloud2 = `${assetPathPrefix}/060f1.svg`;
const imgMiddleCloud3 = `${assetPathPrefix}/977fb.svg`;
const imgMiddleCloud4 = `${assetPathPrefix}/d886f.svg`;
const imgVector16 = `${assetPathPrefix}/533d0.svg`;
const imgVector17 = `${assetPathPrefix}/07694.svg`;
const imgHeadingRule = `${assetPathPrefix}/728a7.svg`;
const imgHeadingRule1 = `${assetPathPrefix}/e3f72.svg`;
const imgHeadingRule2 = `${assetPathPrefix}/fba9f.svg`;
const imgHeadingRule3 = `${assetPathPrefix}/9149b.svg`;
const imgHeadingRule4 = `${assetPathPrefix}/8699c.svg`;
const imgHeadingRule5 = `${assetPathPrefix}/d39e1.svg`;
const imgMiddleCloud5 = `${assetPathPrefix}/465db.svg`;
const imgClouds = `${assetPathPrefix}/e1a59.svg`;

const GITHUB_URL = "https://github.com/mischiva/cmsc-170-project-elbis-yummiest-group-2";
const SLIDES_URL = "https://www.canva.com/design/DAHcBpz2ipM/JKFKAYpm8mElJ7wSuCPN7A/edit"; 

// shown in the links card
const links = [
  { name: "GitHub", url: GITHUB_URL },
  { name: "Slides", url: SLIDES_URL },
];

// shown in the members card
const members = ["Calleja, Jodi Antonette", "Casa, Justin Celestial", "Castro, Allane Lee", "Cueto, Raven Nathalie"];

// each source part can be text or a link
const sources = [
  { id: "01", kind: "web", parts: ["NASA POWER Data Access Viewer.", { url: "https://power.larc.nasa.gov/data-access-viewer/" }, "and POWER data sources:", { url: "https://power.larc.nasa.gov/docs/methodology/data/sources/" }] },
  { id: "02", kind: "web", parts: ["World Health Organization. (2022). Radiation: The ultraviolet (UV) index.", { url: "https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-%28uv%29-index" }] },
  { id: "03", kind: "web", parts: ["World Health Organization. (2024). Radiation: The known health effects of ultraviolet radiation.", { url: "https://www.who.int/news-room/questions-and-answers/item/radiation-the-known-health-effects-of-ultraviolet-radiation" }] },
  { id: "04", kind: "web", parts: ["Cancer Council Australia. Do you only need sun protection if it is a hot, sunny day?", { url: "https://www.cancer.org.au/iheard/do-you-only-need-sun-protection-if-it-is-a-hot-sunny-day" }] },
  { id: "05", kind: "web", parts: ["Cancer Council. 10 myths about sun protection.", { url: "https://www.cancercouncil.com.au/blog/10-myths-about-sun-protection/" }] },
  { id: "06", kind: "web", parts: ["The Skin Center, St. Luke's Medical Center. (2026, July 1). Why sun protection matters even on rainy days.", { url: "https://www.stlukes.com.ph/news-and-events/news-and-press-release/why-sun-protection-matters-even-on-rainy-days" }] },
  { id: "07", kind: "book", parts: ["Mitchell, T. M. (1997). Machine Learning. McGraw-Hill."] },
  { id: "08", kind: "book", parts: ["Gojo Cruz, J. I. N. (2026). CMSC 170 Lec 13: Machine Learning Overview; Lec 14: Naive Bayes; Lec 15: Linear and Logistic Regression; Lab 04: Naïve Bayes Classifier; Lab 06: Nearest-Neighbor Model (KNN); Lab 08: Linear Classification (Perceptron)."] },
];

export default function App() {
  return (
    <div className="poster-canvas bg-white relative" data-node-id="1:2" data-name="meow">
      <div
        className="absolute flex inset-[11.67%_-11.5%_62.99%_64.6%] items-center justify-center"
        data-node-id="11:101"
        style={{ containerType: "size" }}
      >
        <div className="flex-none h-[hypot(-84.599cqw,1.4863cqh)] rotate-87 w-[hypot(15.401cqw,98.5137cqh)]">
          <div className="relative size-full" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
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
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
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
      <div
        className="absolute bg-[#43addb] h-[410px] left-[4px] top-[63px] w-[1440px]"
        data-node-id="2:12"
      />
      <div
        className="absolute h-[450px] left-[-4px] top-[-1px] w-[1448px]"
        data-node-id="3:3"
        data-name="Sky • sun and ultraviolet rays"
      >
        <div
          className="absolute h-[446px] left-0 overflow-clip top-0 w-[1448px]"
          data-node-id="3:4576"
          data-name="Frame"
        >
          <div
            className="absolute inset-[-0.45%_-0.48%_0.1%_-0.97%]"
            data-node-id="3:4577"
            data-name="Sky-background"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgSkyBackground}
            />
          </div>
          <div
            className="absolute inset-[6.02%_10.04%_50.21%_13.22%]"
            data-node-id="3:4581"
            data-name="Distant-clouds"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgDistantClouds}
            />
          </div>
          <div
            className="absolute inset-[40.81%_0_-6.95%_0]"
            data-node-id="3:4587"
            data-name="Blue-cloud-banks"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgBlueCloudBanks}
            />
          </div>
          <div
            className="absolute flex inset-[42.03%_11.15%_-30.04%_49.72%] items-center justify-center"
            data-node-id="28:22"
            style={{ containerType: "size" }}
          >
            <div className="flex-none h-[hypot(13.3239cqw,40.3143cqh)] rotate-[-25.5deg] w-[hypot(86.6761cqw,-59.6857cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-20.36%_-6.56%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector7} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex inset-[48.21%_7.96%_-8.41%_76.59%] items-center justify-center"
            data-node-id="28:24"
            style={{ containerType: "size" }}
          >
            <div className="flex-none h-[hypot(44.6481cqw,77.9942cqh)] rotate-[-25.5deg] w-[hypot(55.3519cqw,-22.0058cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-15.39%_-26.01%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector9} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex inset-[35.87%_-3.48%_-20.57%_85.57%] items-center justify-center"
            data-node-id="28:23"
            style={{ containerType: "size" }}
          >
            <div className="flex-none h-[hypot(61.7208cqw,87.232cqh)] rotate-[-25.91deg] w-[hypot(38.2792cqw,-12.768cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-9.74%_-32.34%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector8} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute flex inset-[34.27%_13.28%_-11.91%_44.13%] items-center justify-center"
            data-node-id="28:25"
            style={{ containerType: "size" }}
          >
            <div className="flex-none h-[hypot(-94.8677cqw,80.9106cqh)] rotate-[64.41deg] w-[hypot(5.13234cqw,19.0894cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-5.5%_-48.71%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector10} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[4.93%_5.18%_26.91%_73.83%]" data-node-id="2:31">
            <div className="absolute inset-[-32.89%]">
              <img alt="" className="block max-w-none size-full" src={imgEllipse9} />
            </div>
          </div>
          <div className="absolute inset-[35.99%_19.48%_-6.95%_14.92%]" data-node-id="28:20">
            <div className="absolute inset-[-11.28%_-3.76%]">
              <img alt="" className="block max-w-none size-full" src={imgVector6} />
            </div>
          </div>
          <div
            className="absolute contents inset-[11.32%_0_57.62%_0]"
            data-node-id="3:4591"
            data-name="Hanging-clouds"
          >
            <div
              className="absolute inset-[15.69%_86.37%_57.62%_0]"
              data-node-id="3:4593"
              data-name="Left-cloud"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgLeftCloud}
              />
            </div>
            <div
              className="absolute inset-[15.69%_62.48%_71.33%_28.3%]"
              data-node-id="3:4596"
              data-name="Middle-cloud"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgMiddleCloud}
              />
            </div>
            <div
              className="absolute inset-[11.32%_0_76.55%_94.66%]"
              data-node-id="3:4599"
              data-name="Right-cloud"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgRightCloud}
              />
            </div>
          </div>
          <div
            className="absolute inset-[0_66.75%_81.84%_6.42%]"
            data-node-id="3:4592"
            data-name="Vector"
          >
            <div className="absolute inset-[0_-0.15%]">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
          <div
            className="absolute inset-[13.9%_8.07%_38.46%_76.73%]"
            data-node-id="3:4602"
            data-name="Sun"
          >
            <div className="absolute inset-[-2.15%_-2.08%]">
              <img alt="" className="block max-w-none size-full" src={imgSun} />
            </div>
          </div>
          <div
            className="absolute inset-[6.2%_-0.56%_21.22%_0.69%]"
            data-node-id="3:4623"
            data-name="Sparkles"
          >
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSparkles} />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-[67.4%_-7.64%_27.49%_-3.19%]"
        data-node-id="61:103"
        data-name="Blue-cloud-banks"
      >
        <img
          alt=""
          className="absolute block inset-0 max-w-none size-full"
          src={imgBlueCloudBanks1}
        />
      </div>
      <div className="absolute h-[72.736px] left-[83px] top-[729px] w-[1280px]" data-node-id="2:35">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
      </div>
      <div
        className="absolute h-[72.736px] left-[78.5px] top-[2206px] w-[1280px]"
        data-node-id="43:58"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
      </div>
      <div
        className="absolute flex h-0 items-center justify-center left-[94px] top-[1734px] w-[439px]"
        data-node-id="31:40"
      >
        <div className="-rotate-90 flex-none">
          <div className="h-[439px] relative w-0">
            <div className="absolute inset-[0_-3px]">
              <img alt="" className="block max-w-none size-full" src={imgVector11} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute flex h-0 items-center justify-center left-[890px] top-[1734px] w-[462px]"
        data-node-id="31:41"
      >
        <div className="-rotate-90 flex-none">
          <div className="h-[462px] relative w-0">
            <div className="absolute inset-[0_-3px]">
              <img alt="" className="block max-w-none size-full" src={imgVector12} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[72px] size-[23px] top-[1722px]" data-node-id="31:39">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle17} />
      </div>
      <div className="absolute left-[1340px] size-[23px] top-[1722px]" data-node-id="31:42">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle17} />
      </div>
      <div
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[0] left-[719.5px] text-[#2d2a32] text-[26.542px] text-center top-[848px] whitespace-nowrap"
        data-node-id="11:64"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[1.3] mb-0 whitespace-pre">{`Can a day's WHO sun-protection level be predicted `}</p>
        <p className="leading-[1.3] whitespace-pre">
          from the weather a person can feel?
        </p>
      </div>
      <div className="absolute inset-[0.4%_18%_98.92%_18%]" data-node-id="25:5">
        <div className="absolute inset-[-9.59%_-0.63%]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle16} />
        </div>
      </div>
      {/* the menu stays centered as items change */}
      <div className="absolute flex gap-[18px] items-center left-1/2 -translate-x-1/2 top-[47px]" data-name="Top menu items">
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="25:7">HOME</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="25:8">ABOUT</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:2">DATASET</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:3">METHODS</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:4">SETUP</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:5">RESULTS</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:6">DISCUSSION</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:7">CONCLUSION</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="42:9">REFERENCES</p>
          <p className="font-['Jersey_15:Regular'] leading-none not-italic text-[#4a2574] text-[22px] text-shadow-[0px_2px_2px_rgba(0,0,0,0.2)] whitespace-nowrap" data-node-id="99:1">RUN CODE</p>
      </div>
      <div
        className="absolute contents left-[74.5px] top-[961px]"
        data-node-id="31:43"
        data-name="ABOUT"
      >
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium h-[51.385px] leading-[0.74] left-[402.77px] text-[#4a2574] text-[68.254px] text-center top-[961px] w-[257.781px]"
          data-node-id="11:47"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          ABOUT
        </p>
        <div
          className="absolute inset-[12.2%_71.19%_87.37%_27.34%]"
          data-node-id="11:65"
          data-name="Vector"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
        </div>
        <div
          className="absolute h-[23.174px] left-[74.5px] top-[975.11px] w-[23.16px]"
          data-node-id="2:37"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <div
          className="absolute h-[23.174px] left-[76.51px] top-[1596.77px] w-[23.16px]"
          data-node-id="11:66"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <div
          className="absolute h-[23.174px] left-[706.87px] top-[1596.77px] w-[23.16px]"
          data-node-id="11:67"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <div
          className="absolute h-[23.174px] left-[706.87px] top-[975.11px] w-[23.16px]"
          data-node-id="11:49"
        >
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgRectangle4} />
        </div>
        <div
          className="absolute flex h-[568.26px] items-center justify-center left-[86.58px] top-[1012.39px] w-[1.979px]"
          data-node-id="11:59"
        >
          <div className="flex-none rotate-[-0.2deg]">
            <div className="h-[568.263px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={imgVector4} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-0 items-center justify-center left-[110.75px] top-[987.2px] w-[163.127px]"
          data-node-id="11:62"
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[163.127px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-0 items-center justify-center left-[538.71px] top-[987.2px] w-[157.085px]"
          data-node-id="11:63"
        >
          <div className="-rotate-90 flex-none">
            <div className="h-[157.085px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={imgVector13} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-0 items-center justify-center left-[111.76px] top-[1608.86px] w-[585.041px]"
          data-node-id="11:61"
        >
          <div className="flex-none rotate-90">
            <div className="h-[585.041px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={imgVector14} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex h-0 items-center justify-center left-[111.76px] top-[1608.86px] w-[585.041px]"
          data-node-id="43:57"
        >
          <div className="flex-none rotate-90">
            <div className="h-[585.041px] relative w-0">
              <div className="absolute inset-[0_-3px]">
                <img alt="" className="block max-w-none size-full" src={imgVector14} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute h-[580.35px] left-[718.95px] top-[1010.37px] w-0"
          data-node-id="11:60"
        >
          <div className="absolute inset-[0_-2.43px]">
            <img alt="" className="block max-w-none size-full" src={imgVector15} />
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
          <span className="font-['Libertinus_Sans:Italic'] leading-none text-[34.255px]">
            UV protection class, w
          </span>
          <span className="font-['Libertinus_Sans:Italic'] leading-none text-[34.255px]">
            e implement three meaningfully different methods from scratch, test them on the same
            days, and compare them.
          </span>
        </p>
        <div
          className="absolute h-[216.624px] left-[765.27px] rounded-[51px] top-[975.11px] w-[589.069px]"
          data-node-id="11:99"
          style={{
            backgroundImage:
              "linear-gradient(179.8995976677009deg, rgb(176, 219, 236) 0.23713%, rgb(255, 252, 216) 132.4%)",
          }}
        />
        <div
          className="absolute h-[370.779px] left-[765.27px] rounded-[51px] top-[1238.08px] w-[589.069px]"
          data-node-id="25:4"
          style={{
            backgroundImage:
              "linear-gradient(179.94255534387435deg, rgb(176, 219, 236) 0%, rgb(255, 252, 216) 135.46%)",
          }}
        />
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Libertinus_Sans:Regular'] h-[131.989px] justify-center leading-[0] not-italic right-[640.49px] text-[#2d2a32] text-[37.001px] text-justify top-[1100.55px] tracking-[-2.5901px] translate-x-full w-[526.638px] whitespace-pre-wrap"
          data-node-id="22:7"
        >
          <p className="leading-[0.92] mb-0">{`Most people rely on felt conditions like heat, humidity, and wind when deciding if they need sun protection because `}</p>
          <p className="font-['Libertinus_Sans:Bold'] leading-[0.92] mb-0 text-[#200049]">
            UV radiation itself cannot be felt.
          </p>
          <p className="leading-[0.92]">​</p>
        </div>
        <div
          className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Libertinus_Sans:Regular'] h-[312.341px] justify-center leading-[0] not-italic right-[650.56px] text-[#2d2a32] text-[36.215px] text-justify top-[1423.47px] tracking-[-1.4486px] translate-x-full w-[541.742px]"
          data-node-id="25:2"
        >
          <p>
            <span className="leading-[0.77]">{`If models trained strictly on 2-meter felt weather measurements predict UV protection levels poorly, it shows that `}</span>
            <span className="[word-break:break-word] font-['Libertinus_Sans:Bold'] leading-[0.77] not-italic text-[#200049]">
              people cannot rely on physical intuition alone and should check the actual UV Index
              instead
            </span>
            <span className="leading-[0.77]">
              . We also left out satellite solar and cloud variables because humans cannot directly
              sense them and including them would nearly give away the answer.
            </span>
          </p>
        </div>
        <div
          className="absolute inset-[14.42%_39.48%_84.73%_50.56%]"
          data-node-id="28:10"
          data-name="Middle-cloud"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgMiddleCloud1}
          />
        </div>
        <div
          className="absolute inset-[14.37%_5.05%_84.77%_89.09%]"
          data-node-id="28:16"
          data-name="Middle-cloud"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgMiddleCloud2}
          />
        </div>
        <div
          className="absolute flex inset-[19.53%_4.34%_79.52%_85.31%] items-center justify-center"
          data-node-id="28:13"
          style={{ containerType: "size" }}
        >
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Middle-cloud">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgMiddleCloud3}
              />
            </div>
          </div>
        </div>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[0.74] left-[976px] not-italic text-[#489cc1] text-[43.879px] text-center top-[1912px] tracking-[-2.6327px] whitespace-nowrap"
        data-node-id="31:54"
        style={{
          textShadow:
            "-2px -2px 0 #fff, 0 -2px 0 #fff, 2px -2px 0 #fff, -2px 0 0 #fff, 2px 0 0 #fff, -2px 2px 0 #fff, 0 2px 0 #fff, 2px 2px 0 #fff",
        }}
      >
        UP UNTIL AUG 30
      </p>
      <div
        className="absolute h-[550px] left-[73px] top-[2404px] w-[1291px]"
        data-node-id="36:2"
        data-name="Dataset details"
      >
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[12px] not-italic text-[#4a2574] text-[39px] top-[-16px] w-[740px]"
          data-node-id="36:4"
        >
          Batong Malake, Los Baños
        </p>
        <div
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[0] left-[69px] not-italic text-[#2d2a32] text-[34px] top-[62px] w-[735px] whitespace-pre-wrap"
          data-node-id="36:5"
        >
          <p className="leading-[1.1] mb-0">{`Avg temp • Max temp • Humidity `}</p>
          <p className="leading-[1.1]">Wind speed • Pressure</p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.1] left-[32px] not-italic text-[#2d2a32] text-[34px] top-[222px] w-[710px]"
          data-node-id="36:6"
        >
          Each day is labeled with its UV class from the highest hourly UV. Days with missing values
          are dropped.
        </p>
        <div
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[0] left-[32px] not-italic text-[#4a2574] text-[36px] top-[366px] w-[720px]"
          data-node-id="36:7"
        >
          <p className="leading-[1.1] mb-0">Older 70%: 6,559 training days</p>
          <p className="leading-[1.1]">Newer 30%: 2,812 test days</p>
        </div>
        <div
          className="absolute bg-[#e8f5fa] border-8 border-[#5b20a8] border-solid left-[820px] rounded-[45px] size-[471px] top-[-25px]"
          data-node-id="36:8"
          data-name="Class balance card"
        />
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[904px] text-[#2d2a32] text-[31px] top-[88px] w-[440px]"
          data-node-id="36:10"
        >
          Test days
        </p>
        <div
          className="[word-break:break-word] absolute contents leading-[1.1] left-[838px] not-italic top-[135px]"
          data-node-id="43:64"
        >
          <p
            className="absolute font-['Jersey_25:Regular'] left-[838px] text-[#4a2574] text-[52px] top-[135px] w-[50px]"
            data-node-id="36:11"
          >
            0
          </p>
          <p
            className="absolute font-['Libertinus_Sans:Regular'] left-[904px] text-[#2d2a32] text-[32px] top-[144px] w-[270px]"
            data-node-id="36:12"
          >
            No protection
          </p>
          <p
            className="-translate-x-full absolute font-['Jersey_25:Regular'] left-[1274px] text-[#4a2574] text-[45px] text-right top-[135px] w-[95px]"
            data-node-id="36:13"
          >
            27
          </p>
        </div>
        <div
          className="[word-break:break-word] absolute contents leading-[1.1] left-[838px] not-italic top-[218px]"
          data-node-id="43:63"
        >
          <p
            className="absolute font-['Jersey_25:Regular'] left-[838px] text-[#4a2574] text-[52px] top-[218px] w-[50px]"
            data-node-id="36:14"
          >
            1
          </p>
          <p
            className="absolute font-['Libertinus_Sans:Regular'] left-[904px] text-[#2d2a32] text-[32px] top-[227px] w-[270px]"
            data-node-id="36:15"
          >
            Protection
          </p>
          <p
            className="-translate-x-full absolute font-['Jersey_25:Regular'] left-[1274px] text-[#4a2574] text-[45px] text-right top-[218px] w-[95px]"
            data-node-id="36:16"
          >
            921
          </p>
        </div>
        <div
          className="[word-break:break-word] absolute contents leading-[1.1] left-[838px] not-italic top-[304px]"
          data-node-id="43:62"
        >
          <p
            className="absolute font-['Jersey_25:Regular'] left-[838px] text-[#4a2574] text-[52px] top-[304px] w-[50px]"
            data-node-id="36:17"
          >
            2
          </p>
          <p
            className="absolute font-['Libertinus_Sans:Regular'] left-[904px] text-[#2d2a32] text-[32px] top-[313px] w-[270px]"
            data-node-id="36:18"
          >
            Extra protection
          </p>
          <p
            className="-translate-x-full absolute font-['Jersey_25:Regular'] left-[1274px] text-[#4a2574] text-[45px] text-right top-[304px] w-[95px]"
            data-node-id="36:19"
          >
            1,864
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[933px] text-[#4a2574] text-[32px] top-[388px] whitespace-nowrap"
          data-node-id="36:20"
        >
          Class 0 is very rare.
        </p>
        <div
          className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[0] left-[32px] text-[#2d2a32] text-[26px] top-[492px] w-[1220px]"
          data-node-id="36:21"
        >
          <p className="leading-[1.1] mb-0">Source: NASA Langley Research Center, POWER Project.</p>
          <p className="leading-[1.1]">{`Daily and hourly meteorological data • https://power.larc.nasa.gov/`}</p>
        </div>
        <div
          className="absolute flex inset-[72.73%_-2.87%_13.53%_91.32%] items-center justify-center"
          data-node-id="43:65"
          style={{ containerType: "size" }}
        >
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Middle-cloud">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgMiddleCloud4}
              />
            </div>
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] h-[69px] leading-[1.1] left-[6px] not-italic text-[79.098px] text-[transparent] to-[#8b46da] top-[-83px] w-[807.805px]"
          data-node-id="36:3"
        >
          DAILY + HOURLY WEATHER
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Jersey_25:Regular'] from-[#4a2574] leading-[1.1] left-[863px] not-italic text-[65.463px] text-[transparent] to-[#8b46da] top-[6px] whitespace-nowrap"
          data-node-id="36:9"
        >
          CLASS BALANCE
        </p>
      </div>
      <div
        className="absolute bg-[#4a2574] h-[4px] left-[74.5px] top-[3067px] w-[1291px]"
        data-node-id="36:25"
        data-name="Section rule"
      />
      <div
        className="absolute bg-white h-[78px] left-[539.5px] top-[3032px] w-[361px]"
        data-node-id="36:26"
        data-name="Heading backing"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.1] left-[720px] text-[#4a2574] text-[60px] text-center top-[3036px] w-[1291px]"
        data-node-id="36:23"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        METHODS
      </p>
      <div
        className="absolute bg-[#1a92c7] left-[74.5px] size-[22px] top-[3057px]"
        data-node-id="36:27"
        data-name="Left blue endpoint"
      />
      <div
        className="absolute bg-[#1a92c7] left-[1343.5px] size-[22px] top-[3057px]"
        data-node-id="36:28"
        data-name="Right blue endpoint"
      />
      <div className="absolute contents left-[75px] top-[3157px]" data-node-id="43:71">
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[75px] rounded-[45px] top-[3157px] w-[411px]"
          data-node-id="36:29"
          data-name="KNN method card"
        />
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[204px] not-italic text-[95.171px] text-[transparent] to-[#06394f] top-[3352px] whitespace-nowrap"
          data-node-id="36:30"
        >
          KNN
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[204px] not-italic text-[95.171px] text-[transparent] top-[3352px] whitespace-nowrap"
          data-node-id="43:81"
          style={{
            backgroundImage:
              "linear-gradient(179.6463268490429deg, rgb(255, 252, 216) 0.43995%, rgb(13, 130, 181) 76.907%)",
          }}
        >
          KNN
        </p>
        <div
          className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[0] left-[280px] text-[#2d2a32] text-[35px] text-center top-[3243px] w-[350px] whitespace-pre-wrap"
          data-node-id="36:31"
        >
          <p className="leading-[1.1] mb-0">{`The closest past days `}</p>
          <p className="leading-[1.1]">vote (k = 31 or 51).</p>
        </div>
      </div>
      <div className="absolute contents left-[955px] top-[3157px]" data-node-id="43:77">
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[955px] rounded-[45px] top-[3157px] w-[411px]"
          data-node-id="43:78"
          data-name="KNN method card"
        />
      </div>
      <p
        className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[975px] not-italic text-[87.176px] text-[transparent] to-[#06394f] top-[3355px] tracking-[-6.9741px] whitespace-nowrap"
        data-node-id="43:79"
      >
        PERCEPTRON
      </p>
      <p
        className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[975px] not-italic text-[87.176px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[3355px] tracking-[-6.9741px] whitespace-nowrap"
        data-node-id="43:82"
      >
        PERCEPTRON
      </p>
      <div className="absolute contents left-[514px] top-[3157px]" data-node-id="43:72">
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[248px] left-[514px] rounded-[45px] top-[3157px] w-[411px]"
          data-node-id="43:73"
          data-name="KNN method card"
        />
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#0d82b5] leading-[1.1] left-[540px] not-italic text-[80.944px] text-[transparent] to-[#06394f] top-[3360px] tracking-[-4.8567px] whitespace-nowrap"
          data-node-id="43:74"
        >
          NAIVE BAYES
        </p>
        <p
          className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[540px] not-italic text-[80.944px] text-[transparent] top-[3360px] tracking-[-4.8567px] whitespace-nowrap"
          data-node-id="43:83"
          style={{
            backgroundImage:
              "linear-gradient(179.58482042623908deg, rgb(255, 252, 216) 1.4046%, rgb(13, 130, 181) 76.759%)",
          }}
        >
          NAIVE BAYES
        </p>
      </div>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[721px] text-[#2d2a32] text-[35px] text-center top-[3222px] w-[350px]"
        data-node-id="36:34"
      >
        Picks the class whose typical weather fits the day best.
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.1] left-[1161px] text-[#2d2a32] text-[35px] text-center top-[3223px] w-[350px]"
        data-node-id="36:37"
      >
        Three straight-line classifiers where the most confident one wins.
      </p>
      <div
        className="absolute inset-[38.4%_45.68%_61.2%_52.88%]"
        data-node-id="43:84"
        data-name="Vector"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
      </div>
      <div
        className="absolute bg-[#4a2574] h-[4px] left-[74.5px] top-[4196px] w-[1291px]"
        data-node-id="36:61"
        data-name="Section rule"
      />
      <div
        className="absolute bg-white h-[78px] left-[539.5px] top-[4161px] w-[361px]"
        data-node-id="60:2"
        data-name="Results heading backing"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Kalnia:Medium'] font-medium leading-[1.1] left-[720px] text-[#4a2574] text-[60px] text-center top-[4165px] w-[1291px]"
        data-node-id="36:59"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        RESULTS
      </p>
      <div
        className="absolute bg-[#4a2574] h-[70px] left-[74.5px] rounded-[24px] top-[4277px] w-[633px]"
        data-node-id="36:65"
        data-name="All 6 features view button"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[391px] not-italic text-[37px] text-center text-white top-[4292px] w-[293px]"
        data-node-id="36:66"
      >
        Set 1: Avg temp
      </p>
      <div
        className="absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[732.5px] rounded-[24px] top-[4277px] w-[633px]"
        data-node-id="36:67"
        data-name="Avg temp only view button"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1049px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]"
        data-node-id="36:68"
      >
        Set 2: Max temp
      </p>
      <div
        className="hidden absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[726.5px] rounded-[24px] top-[4277px] w-[313px]"
        data-node-id="36:69"
        data-name="Max temp only view button"
      />
      <p
        className="hidden -translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[883px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]"
        data-node-id="36:70"
      >
        Max temp only
      </p>
      <div
        className="hidden absolute bg-[#e8f5fa] border-3 border-[#0d82b5] border-solid h-[70px] left-[1052.5px] rounded-[24px] top-[4277px] w-[313px]"
        data-node-id="36:71"
        data-name="Min temp only view button"
      />
      <p
        className="hidden -translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1209px] not-italic text-[#4a2574] text-[37px] text-center top-[4292px] w-[293px]"
        data-node-id="36:72"
      >
        Min temp only
      </p>
      <div
        className="absolute bg-[#e8f5fa] h-[76px] left-[74.5px] rounded-[18px] top-[4389px] w-[1291px]"
        data-node-id="36:73"
        data-name="Score table header"
      />
      <p
        className="[word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[110.5px] not-italic text-[#4a2574] text-[41px] top-[4406px] w-[490px]"
        data-node-id="36:74"
      >
        MODEL
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[794.5px] not-italic text-[#4a2574] text-[41px] text-center top-[4406px] w-[240px]"
        data-node-id="36:75"
      >
        ACCURACY
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Jersey_25:Regular'] leading-[1.1] left-[1155.5px] not-italic text-[#4a2574] text-[41px] text-center top-[4406px] w-[350px]"
        data-node-id="36:76"
      >
        MACRO PRECISION
      </p>
      <div
        className="absolute bg-[#f4f9fb] h-[78px] left-[74.5px] top-[4471px] w-[1291px]"
        data-node-id="36:77"
        data-name="KNN row"
      />
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[110.5px] not-italic text-[#292332] text-[38px] top-[4486px] w-[520px]"
        data-node-id="36:78"
      >
        KNN
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[794.5px] not-italic text-[#4a2574] text-[38px] text-center top-[4486px] w-[240px]"
        data-node-id="36:79"
      >
        0.8183
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1155.5px] not-italic text-[#292332] text-[38px] text-center top-[4486px] w-[350px]"
        data-node-id="36:80"
      >
        0.5392
      </p>
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[110.5px] not-italic text-[#292332] text-[38px] top-[4568px] w-[520px]"
        data-node-id="36:81"
      >
        Naive Bayes
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[794.5px] not-italic text-[#292332] text-[38px] text-center top-[4568px] w-[240px]"
        data-node-id="36:82"
      >
        0.7749
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1155.5px] not-italic text-[#4a2574] text-[38px] text-center top-[4568px] w-[350px]"
        data-node-id="36:83"
      >
        0.5797
      </p>
      <div
        className="absolute bg-[#f4f9fb] h-[78px] left-[74.5px] top-[4635px] w-[1291px]"
        data-node-id="36:84"
        data-name="Perceptron row"
      />
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[110.5px] not-italic text-[#292332] text-[38px] top-[4650px] w-[520px]"
        data-node-id="36:85"
      >
        Perceptron
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[794.5px] not-italic text-[#292332] text-[38px] text-center top-[4650px] w-[240px]"
        data-node-id="36:86"
      >
        0.6817
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1155.5px] not-italic text-[#292332] text-[38px] text-center top-[4650px] w-[350px]"
        data-node-id="36:87"
      >
        0.4682
      </p>
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[110.5px] not-italic text-[#292332] text-[38px] top-[4732px] w-[520px]"
        data-node-id="36:88"
      >
        Baseline
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[794.5px] not-italic text-[#292332] text-[38px] text-center top-[4732px] w-[240px]"
        data-node-id="36:89"
      >
        0.6629
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1155.5px] not-italic text-[#292332] text-[38px] text-center top-[4732px] w-[350px]"
        data-node-id="36:90"
      >
        0.2210
      </p>
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
      <div
        className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[322px] left-[77.5px] rounded-[45px] top-[5005px] w-[411px]"
        data-node-id="36:96"
        data-name="KNN matrix panel"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[212.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:98"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[311.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:99"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[410.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:100"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[120.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5142px] w-[50px]"
        data-node-id="36:101"
      >
        0
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[166.5px] rounded-[6px] top-[5135px] w-[92px]"
        data-node-id="36:102"
        data-name="KNN diagonal 0"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[212.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:103"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[311.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:104"
      >
        22
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[410.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:105"
      >
        5
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[120.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5194px] w-[50px]"
        data-node-id="36:106"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[212.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:107"
      >
        0
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[265.5px] rounded-[6px] top-[5187px] w-[92px]"
        data-node-id="36:108"
        data-name="KNN diagonal 1"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[311.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:109"
      >
        566
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[410.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:110"
      >
        355
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[120.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5246px] w-[50px]"
        data-node-id="36:111"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[212.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:112"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[311.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:113"
      >
        129
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[364.5px] rounded-[6px] top-[5239px] w-[92px]"
        data-node-id="36:114"
        data-name="KNN diagonal 2"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[410.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:115"
      >
        1735
      </p>
      <div
        className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[322px] left-[517.5px] rounded-[45px] top-[5005px] w-[411px]"
        data-node-id="36:116"
        data-name="Naive Bayes matrix panel"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[652.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:118"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[751.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:119"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[850.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:120"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[560.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5142px] w-[50px]"
        data-node-id="36:121"
      >
        0
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[606.5px] rounded-[6px] top-[5135px] w-[92px]"
        data-node-id="36:122"
        data-name="Naive Bayes diagonal 0"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[652.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:123"
      >
        6
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[751.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:124"
      >
        16
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[850.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:125"
      >
        5
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[560.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5194px] w-[50px]"
        data-node-id="36:126"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[652.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:127"
      >
        16
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[705.5px] rounded-[6px] top-[5187px] w-[92px]"
        data-node-id="36:128"
        data-name="Naive Bayes diagonal 1"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[751.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:129"
      >
        601
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[850.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:130"
      >
        304
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[560.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5246px] w-[50px]"
        data-node-id="36:131"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[652.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:132"
      >
        3
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[751.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:133"
      >
        289
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[804.5px] rounded-[6px] top-[5239px] w-[92px]"
        data-node-id="36:134"
        data-name="Naive Bayes diagonal 2"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[850.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:135"
      >
        1572
      </p>
      <div
        className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[322px] left-[957.5px] rounded-[45px] top-[5005px] w-[411px]"
        data-node-id="36:136"
        data-name="Perceptron matrix panel"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1092.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:138"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1191.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:139"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1290.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5088px] w-[88px]"
        data-node-id="36:140"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1000.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5142px] w-[50px]"
        data-node-id="36:141"
      >
        0
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[1046.5px] rounded-[6px] top-[5135px] w-[92px]"
        data-node-id="36:142"
        data-name="Perceptron diagonal 0"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1092.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:143"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1191.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:144"
      >
        26
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1290.5px] not-italic text-[#292332] text-[33px] text-center top-[5142px] w-[88px]"
        data-node-id="36:145"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1000.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5194px] w-[50px]"
        data-node-id="36:146"
      >
        1
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1092.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:147"
      >
        0
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[1145.5px] rounded-[6px] top-[5187px] w-[92px]"
        data-node-id="36:148"
        data-name="Perceptron diagonal 1"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1191.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:149"
      >
        791
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1290.5px] not-italic text-[#292332] text-[33px] text-center top-[5194px] w-[88px]"
        data-node-id="36:150"
      >
        130
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.2] left-[1000.5px] not-italic text-[#4a2574] text-[31px] text-center top-[5246px] w-[50px]"
        data-node-id="36:151"
      >
        2
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1092.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:152"
      >
        0
      </p>
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1191.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:153"
      >
        738
      </p>
      <div
        className="absolute bg-[#d1e8f2] h-[49px] left-[1244.5px] rounded-[6px] top-[5239px] w-[92px]"
        data-node-id="36:154"
        data-name="Perceptron diagonal 2"
      />
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Libertinus_Sans:Regular'] leading-[1.2] left-[1290.5px] not-italic text-[#292332] text-[33px] text-center top-[5246px] w-[88px]"
        data-node-id="36:155"
      >
        1126
      </p>
      <div
        className="absolute bg-[#1a92c7] left-[74.5px] size-[22px] top-[4186px]"
        data-node-id="60:3"
        data-name="Left blue endpoint"
      />
      <div
        className="absolute bg-[#1a92c7] left-[1343.5px] size-[22px] top-[4186px]"
        data-node-id="60:4"
        data-name="Right blue endpoint"
      />
      <p
        className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[208.5px] not-italic text-[94.6px] text-[transparent] top-[5000px] whitespace-nowrap"
        data-node-id="61:100"
        style={{
          backgroundImage:
            "linear-gradient(179.64735977307413deg, rgb(255, 252, 216) 0.43995%, rgb(13, 130, 181) 76.907%)",
        }}
      >
        KNN
      </p>
      <p
        className="[word-break:break-word] absolute bg-clip-text font-['Jersey_25:Regular'] leading-[1.1] left-[551.5px] not-italic text-[80.944px] text-[transparent] top-[5009px] tracking-[-4.8567px] whitespace-nowrap"
        data-node-id="61:101"
        style={{
          backgroundImage:
            "linear-gradient(179.58482042623908deg, rgb(255, 252, 216) 1.4046%, rgb(13, 130, 181) 76.759%)",
        }}
      >
        NAIVE BAYES
      </p>
      <p
        className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[988.5px] not-italic text-[82.02px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[5009px] tracking-[-6.5616px] whitespace-nowrap"
        data-node-id="61:102"
      >
        PERCEPTRON
      </p>
      <div
        className="[word-break:break-word] absolute font-['Jersey_25:Regular'] h-[240px] leading-[1.15] left-[72px] not-italic text-center top-[1947px] w-[1291px]"
        data-node-id="42:10"
        data-name="Dataset numbers"
      >
        <p
          className="-translate-x-1/2 absolute left-[205.5px] text-[#4a2574] text-[150px] top-0 w-[411px]"
          data-node-id="42:11"
        >
          9,371
        </p>
        <p
          className="-translate-x-1/2 absolute left-[205.5px] text-[#1a92c7] text-[40px] top-[156px] w-[411px]"
          data-node-id="42:12"
        >
          USABLE DAYS
        </p>
        <p
          className="-translate-x-1/2 absolute left-[645.5px] text-[#4a2574] text-[150px] top-0 w-[411px]"
          data-node-id="42:13"
        >
          5
        </p>
        <p
          className="-translate-x-1/2 absolute left-[645.5px] text-[#1a92c7] text-[40px] top-[156px] w-[411px]"
          data-node-id="42:14"
        >
          FELT WEATHER FEATURES
        </p>
        <p
          className="-translate-x-1/2 absolute left-[1085.5px] text-[#4a2574] text-[150px] top-0 w-[411px]"
          data-node-id="42:15"
        >
          3
        </p>
        <p
          className="-translate-x-1/2 absolute left-[1085.5px] text-[#1a92c7] text-[40px] top-[156px] w-[411px]"
          data-node-id="42:16"
        >
          UV CLASSES
        </p>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Bold'] leading-[1.15] left-[79px] not-italic text-[#4a2574] text-[46px] top-[6508px] w-[1220px]"
        data-node-id="42:35"
      >
        Felt weather beats a blind guess, but it is not a safe guide to sun protection.
      </p>
      <p
        className="[word-break:break-word] absolute font-['Libertinus_Sans:Italic'] italic leading-[1.15] left-[79px] text-[#2d2a32] text-[37px] top-[6626px] w-[1240px]"
        data-node-id="42:36"
      >
        82% vs 66%, yet wrong about 1 day in 5. Protect around midday every day and check the UV Index.
      </p>
      {/* sources, members, and links */}
      <div
        className="absolute h-[1160px] left-[79px] top-[6744px] w-[1291px]"
        data-node-id="42:43"
        data-name="References and credits"
      >
        {/* the three cards */}
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[900px] left-0 rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[150px] w-[760px]"
          data-node-id="67:17"
          data-name="Sources card"
        />
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[630px] left-[790px] rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[150px] w-[501px]"
          data-node-id="67:18"
          data-name="Members card"
        />
        <div
          className="absolute bg-white border-5 border-[#0d82b5] border-solid h-[230px] left-[790px] rounded-[45px] shadow-[8px_8px_0_#8dc6e2] top-[820px] w-[501px]"
          data-node-id="61:127"
          data-name="Links card"
        />

        {/* heading and top line */}
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

        {/* square marks below the line */}
        <div className="absolute flex gap-[4px] left-[40px] top-[84px]">
          <span className="block bg-[#1a92c7] size-[12px]" />
          <span className="block bg-[#4a2574] size-[12px]" />
          <span className="block bg-[#1a92c7] size-[12px]" />
        </div>
        <div className="absolute flex gap-[4px] left-[1212px] top-[84px]">
          <span className="block bg-[#1a92c7] size-[12px]" />
          <span className="block bg-[#4a2574] size-[12px]" />
          <span className="block bg-[#1a92c7] size-[12px]" />
        </div>

        {/* source badges use blue for websites and purple for books */}
        <ol className="absolute left-[32px] list-none m-0 p-0 top-[245px] w-[696px]" data-node-id="42:47">
          {sources.map((s, i) => (
            <li
              key={s.id}
              className={"flex gap-[18px] items-start py-[9px] " + (i < sources.length - 1 ? "border-b-2 border-[#d6e6ee]" : "")}
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

        {/* member list */}
        <ol className="absolute flex flex-col h-[470px] justify-center left-[822px] list-none m-0 p-0 top-[205px] w-[437px]" data-node-id="42:52">
          {members.map((name, i) => (
            <li
              key={name}
              className={"flex gap-[16px] items-baseline py-[24px] " + (i < members.length - 1 ? "border-b-2 border-[#d6e6ee]" : "")}
            >
              <span className="font-['Jersey_25:Regular'] text-[#1a92c7] text-[26px] leading-none w-[38px]">0{i + 1}</span>
              <span className="font-['Libertinus_Sans:Italic'] italic text-[#2d2a32] text-[31px] leading-[1.1]">{name}</span>
            </li>
          ))}
        </ol>

        {/* group name */}
        <p className="absolute border-t-2 border-[#d6e6ee] font-['Libertinus_Sans:Italic'] italic left-[822px] m-0 pt-[18px] text-[#4a2574] text-[27px] text-center top-[690px] w-[437px]">
          Elbi's Yummiest | CMSC 170 W5L
        </p>

        {/* links from the list above */}
        <div className="absolute flex flex-col h-[165px] justify-center left-[822px] top-[870px] w-[437px]" data-node-id="42:55">
          {links.map((l, i) => (
            <a
              key={l.name}
              href={l.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "flex items-center justify-between py-[13px] text-[#2d2a32] no-underline font-['Libertinus_Sans:Regular'] text-[30px] leading-[1.1] " +
                (i < links.length - 1 ? "border-b-2 border-[#d6e6ee] " : "") +
                (l.url ? "hover:text-[#0d82b5]" : "")
              }
            >
              <span>{l.url ? l.name : l.name + " [add link]"}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a92c7" strokeWidth="2" aria-hidden="true">
                <path d="M6 18 18 6M8 6h10v10" />
              </svg>
            </a>
          ))}
        </div>

        {/* white blocks cover the border behind each card title */}
        <div className="absolute bg-white h-[40px] left-[105px] top-[132px] w-[540px]" />
        <div className="absolute bg-white h-[36px] left-[890px] top-[134px] w-[300px]" />
        <div className="absolute bg-white h-[36px] left-[925px] top-[804px] w-[230px]" />
        <p
          className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[115px] not-italic text-[172.957px] text-[transparent] to-[#0d82b5] to-[77.083%] top-[80px] tracking-[-13.8365px] whitespace-nowrap"
          data-node-id="61:125"
        >
          SOURCES
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[1040.5px] not-italic text-[87.389px] text-[transparent] text-center to-[#0d82b5] to-[77.083%] top-[114px] tracking-[-6.9911px] whitespace-nowrap"
          data-node-id="61:126"
        >
          MEMBERS
        </p>
        <p
          className="-translate-x-1/2 [word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Jersey_25:Regular'] from-[#fffcd8] from-[15.625%] leading-[1.1] left-[1040.5px] not-italic text-[87.389px] text-[transparent] text-center to-[#0d82b5] to-[77.083%] top-[784px] tracking-[-6.9911px] whitespace-nowrap"
          data-node-id="61:128"
        >
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
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector17} />
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
                <img alt="" className="block max-w-none size-full" src={imgHeadingRule} />
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
                <img alt="" className="block max-w-none size-full" src={imgHeadingRule} />
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
            <img alt="" className="block max-w-none size-full" src={imgHeadingRule1} />
          </div>
        </div>
        <div
          className="absolute h-0 left-[84.5px] top-[4054px] w-[1271px]"
          data-node-id="54:97"
          data-name="Heading rule"
        >
          <div className="absolute inset-[-3px_0]">
            <img alt="" className="block max-w-none size-full" src={imgHeadingRule2} />
          </div>
        </div>
        <div
          className="[word-break:break-word] absolute font-['Jersey_25:Regular'] h-[160px] leading-[0] left-[826.5px] not-italic text-[#4a2574] text-[40px] top-[3751px] w-[528px]"
          data-node-id="42:41"
        >
          <p className="leading-[1.25] mb-0">main.py</p>
          <p className="leading-[1.25] mb-0">experiment.py</p>
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
            <img alt="" className="block max-w-none size-full" src={imgHeadingRule3} />
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
            <img alt="" className="block max-w-none size-full" src={imgHeadingRule4} />
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
            <img alt="" className="block max-w-none size-full" src={imgHeadingRule5} />
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
        className="absolute h-[730px] left-[79px] top-[5730px] w-[1291px]"
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
        className="absolute flex inset-[79.64%_0.56%_18.98%_86.39%] items-center justify-center"
        data-node-id="61:120"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Middle-cloud">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgMiddleCloud5}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute flex inset-[79.52%_88.13%_19.09%_-1.18%] items-center justify-center"
        data-node-id="61:123"
        style={{ containerType: "size" }}
      >
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="relative size-full" data-name="Middle-cloud">
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgMiddleCloud5}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute h-[210.8px] left-[-74px] top-[331px] w-[1596px]"
        data-node-id="75:130"
        data-name="clouds"
      >
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgClouds} />
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
  );
}