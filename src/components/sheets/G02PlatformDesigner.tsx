import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

/** What the rules engine works out from the 2D layout. */
const computes = [
  "Toeplate lengths & corner details",
  "Cross-member positions & interlocking slots",
  "Baluster spacing & railing cuts",
  "Stair geometry from height & pitch (ISO 14122-3)",
  "Support legs & bracing",
  "Grating outline",
];

/** Fixed position-number ranges used in the build plan. */
const ranges = [
  { r: "1–29", g: "Platform" },
  { r: "30–59", g: "Railing" },
  { r: "60–89", g: "Stairs" },
];

const pipeline = [
  { n: "01", t: "Layout", d: "Platform drawn in the 2D drawing window." },
  { n: "02", t: "Rules engine", d: "Works out every part on the window's own server; checks each value against EN ISO 14122." },
  { n: "03", t: "Build plan", d: "Every part with template, dimensions, cuts and 3D position; merged, named and numbered." },
  { n: "04", t: "Solid Edge add-in", d: "Builds the parts and the mated assembly inside Solid Edge, with a progress window." },
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
          {/* top: what it is, the problem, the result */}
          <div className="g02-top">
            <div className="g02-col">
              <div>
                <div className="label">Flagship project · GPI India</div>
                <p className="lede">
                  An automated platform designer that turns a 2D layout into a complete Solid Edge platform
                  assembly, built to EN&nbsp;ISO&nbsp;14122.
                </p>
              </div>
              <section>
                <Sec n="2.1">Engineering problem</Sec>
                <p className="prose">
                  Modelling an access platform by hand means building every floor panel, railing run, stair,
                  opening, cross member and support individually: around 16–24 hours of repetitive CAD work per
                  assembly.
                </p>
              </section>
            </div>

            <TechnicalCallout title="Modelling time · documented result" tone="mark" ref_="!">
              <div className="big-result mono">
                16–24 <small>HOURS</small> <span aria-hidden="true">→</span> 1–2 <small>MINUTES</small>
              </div>
              <TimeReduction />
            </TechnicalCallout>
          </div>

          {/* below: how it works */}
          <section className="how">
            <Sec n="2.2">How it works</Sec>
            <div className="how-steps">
              <div className="how-step">
                <h4><span className="balloon">A</span> Rules engine</h4>
                <p>Runs on the drawing window&apos;s own server and works out the complete platform from the layout:</p>
                <ul className="how-list">
                  {computes.map((c) => <li key={c}>{c}</li>)}
                </ul>
                <p className="how-note">Every value is checked against <span className="tag std">EN ISO 14122</span></p>
              </div>

              <div className="how-step">
                <h4><span className="balloon">B</span> Build plan</h4>
                <p>
                  Lists every part with its template, dimensions, cuts and exact 3D position. Identical parts are
                  merged into one part file, and every part gets a standard name and a position number:
                </p>
                <div className="pos-ranges" aria-label="Position number ranges">
                  {ranges.map((x) => (
                    <span key={x.r}><b className="mono">{x.r}</b> {x.g}</span>
                  ))}
                </div>
              </div>

              <div className="how-step">
                <h4><span className="balloon">C</span> Solid Edge add-in</h4>
                <p>
                  Builds the plan in Solid Edge&apos;s own process: copies a parametric template for each unique part
                  (toeplate, cross member, baluster, stair tread…), sets variables such as length and lip cuts, and
                  adds notches and mitres. It then places and mates every part as in the reference assemblies, locks
                  each stair as a rigid set, and adds PathFinder groups and display configurations.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* right: figures */}
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
          <Sec n="2.3">Build pipeline</Sec>
          <ol className="flow">
            {pipeline.map((w) => (
              <li key={w.n}>
                <span className="flow-n mono">{w.n}</span>
                <span className="flow-t">{w.t}</span>
                <span className="flow-d">{w.d}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="g02-std">
          <Sec n="2.4">Rebuilds &amp; recovery</Sec>
          <ul className="how-list tight">
            <li>Layout and build plan are saved next to the assembly, so the design can be reopened and edited.</li>
            <li>Rebuilds reuse unchanged parts: if only the support changed, only the support is rebuilt.</li>
            <li>A build record is written before each build, so a half-finished build can be recovered after a crash.</li>
          </ul>
        </section>
      </div>
    </>
  );
}
