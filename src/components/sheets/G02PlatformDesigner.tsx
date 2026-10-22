import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

const components = [
  "Floors",
  "Railings",
  "Stairs",
  "Openings",
  "Cross members",
  "Structural supports",
];

const workflow = [
  { n: "01", t: "Layout", d: "Provide or define the 2D platform layout." },
  { n: "02", t: "Parameters", d: "Apply design dimensions and configuration parameters." },
  { n: "03", t: "Generate", d: "Generate the platform structure and associated components." },
  { n: "04", t: "Assembly", d: "Produce a complete assembly for further engineering work." },
];

function TimeReduction() {
  return (
    <div className="tr" role="img" aria-label="Bar comparison: manual modelling 16 to 24 hours versus automated 1 to 2 minutes">
      <div className="tr-row">
        <span className="label">Manual modelling</span>
        <div className="tr-track">
          <span className="tr-bar before" style={{ width: "100%" }} />
          <span className="tr-bar before-min" style={{ width: "66.7%" }} />
        </div>
        <span className="tr-v mono">16–24 h</span>
      </div>
      <div className="tr-row">
        <span className="label">Automated</span>
        <div className="tr-track">
          <span className="tr-bar after" />
        </div>
        <span className="tr-v mono accent">1–2 min</span>
      </div>
      <div className="tr-row" aria-hidden="true">
        <span />
        <div className="tr-scale">
          {["0", "8 h", "16 h", "24 h"].map((t, i) => (
            <i key={t} style={{ left: `${(i / 3) * 100}%` }}>{t}</i>
          ))}
        </div>
        <span />
      </div>
    </div>
  );
}

export function G02PlatformDesigner() {
  return (
    <>
      <SheetHeader sheet={sheets[2]} />

      <div className="split g02">
        {/* — left: technical explanation — */}
        <div className="stack">
          <div>
            <div className="label">Flagship project · GPI India</div>
            <p className="lede">
              An automated platform designer that converts 2D layouts into complete platform assemblies — in
              accordance with EN&nbsp;ISO&nbsp;14122.
            </p>
          </div>

          <TechnicalCallout title="Modelling time — documented result" tone="mark" ref_="!">
            <div className="big-result mono">
              16–24 <small>HOURS</small> <span aria-hidden="true">→</span> 1–2 <small>MINUTES</small>
            </div>
            <TimeReduction />
          </TechnicalCallout>

          <section>
            <Sec n="2.1">Engineering problem</Sec>
            <p className="prose">
              Modelling an access platform by hand means building every floor panel, railing run, stair, opening,
              cross member and support individually — around 16–24 hours of repetitive CAD work for each
              platform assembly.
            </p>
          </section>

          <section>
            <Sec n="2.2">Automation approach</Sec>
            <p className="prose">
              The designer takes a 2D layout as input and generates the full assembly from it, producing each of
              the platform&apos;s component groups:
            </p>
            <ul className="tags comp">
              {components.map((c, i) => (
                <li key={c} className="tag"><span className="mono muted">{String(i + 1).padStart(2, "0")}</span> {c}</li>
              ))}
            </ul>
          </section>

          <section>
            <Sec n="2.3">Result</Sec>
            <p className="prose">
              A complete platform assembly in 1–2 minutes instead of 16–24 hours, ready for further engineering
              work.
            </p>
          </section>

          <section>
            <Sec n="2.4">Tools &amp; standards</Sec>
            <table className="tbl">
              <tbody>
                <tr><td className="grp">Standard</td><td><span className="tag std">EN ISO 14122</span> <span className="muted">— permanent means of access to machinery</span></td></tr>
                <tr><td className="grp">Input</td><td>2D platform layout</td></tr>
                <tr><td className="grp">Output</td><td>3D platform assembly</td></tr>
              </tbody>
            </table>
            <p className="label" style={{ marginTop: "0.6em" }}>
              Note: compliance and fabrication approval remain with the engineering review process.
            </p>
          </section>
        </div>

        {/* — right: visuals — */}
        <div className="stack">
          <ProjectImagePlaceholder image="platformAssembly" />
          <div className="g3 figs3">
            <ProjectImagePlaceholder image="platformLayout" />
            <ProjectImagePlaceholder image="platformModel" />
            <ProjectImagePlaceholder image="platformDetail" />
          </div>

          <section>
            <Sec n="2.5">Workflow</Sec>
            <ol className="flow">
              {workflow.map((w) => (
                <li key={w.n}>
                  <span className="flow-n mono">{w.n}</span>
                  <span className="flow-t">{w.t}</span>
                  <span className="flow-d">{w.d}</span>
                </li>
              ))}
            </ol>
            <p className="label" style={{ marginTop: "0.6em" }}>Conceptual workflow based on the documented capability.</p>
          </section>
        </div>
      </div>
    </>
  );
}
