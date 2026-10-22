import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

const components = ["Floors", "Railings", "Stairs", "Openings", "Cross members", "Structural supports"];

const workflow = [
  { n: "01", t: "Layout", d: "Provide or define the 2D platform layout." },
  { n: "02", t: "Parameters", d: "Apply design dimensions and configuration." },
  { n: "03", t: "Generate", d: "Generate the structure and its components." },
  { n: "04", t: "Assembly", d: "Complete assembly, ready for engineering work." },
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

      <div className="pg-main g02">
        <div className="g02-text">
          <div className="label">Flagship project · GPI India</div>
          <p className="lede">
            An automated platform designer that converts 2D layouts into complete platform assemblies, in
            accordance with EN&nbsp;ISO&nbsp;14122.
          </p>

          <TechnicalCallout title="Modelling time — documented result" tone="mark" ref_="!">
            <div className="big-result mono">
              16–24 <small>HOURS</small> <span aria-hidden="true">→</span> 1–2 <small>MINUTES</small>
            </div>
            <TimeReduction />
          </TechnicalCallout>

          <div className="g02-cols">
            <section>
              <Sec n="2.1">Engineering problem</Sec>
              <p className="prose">
                Modelling an access platform by hand means building every floor panel, railing run, stair,
                opening, cross member and support individually: around 16–24 hours of repetitive CAD work per
                platform assembly.
              </p>
            </section>
            <section>
              <Sec n="2.2">Automation approach</Sec>
              <p className="prose">The designer takes a 2D layout and generates the full assembly from it:</p>
              <ul className="tags comp">
                {components.map((c, i) => (
                  <li key={c} className="tag"><span className="mono muted">{String(i + 1).padStart(2, "0")}</span> {c}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="g02-figs">
          <ProjectImagePlaceholder image="platformAssembly" />
          <div className="figs3">
            <ProjectImagePlaceholder image="platformLayout" />
            <ProjectImagePlaceholder image="platformModel" />
            <ProjectImagePlaceholder image="platformDetail" />
          </div>
        </div>
      </div>

      <div className="pg-foot g02-foot">
        <section>
          <Sec n="2.3">Workflow</Sec>
          <ol className="flow">
            {workflow.map((w) => (
              <li key={w.n}>
                <span className="flow-n mono">{w.n}</span>
                <span className="flow-t">{w.t}</span>
                <span className="flow-d">{w.d}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="g02-std">
          <Sec n="2.4">Result &amp; standards</Sec>
          <p className="prose">
            A complete platform assembly in 1–2 minutes instead of 16–24 hours, built to{" "}
            <span className="tag std">EN ISO 14122</span>.
          </p>
          <p className="label">Compliance and fabrication approval stay with engineering review.</p>
        </section>
      </div>
    </>
  );
}
