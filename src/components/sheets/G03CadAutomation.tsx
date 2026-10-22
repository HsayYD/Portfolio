import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

const nodes = [
  { ref: "A", t: "Engineer", d: "Describes requirements in natural language.", ill: "e.g. “a mounting bracket, 6 mm plate, four M10 holes”" },
  { ref: "B", t: "Claude", d: "Interprets the request.", ill: "Resolves dimensions and features from the description" },
  { ref: "C", t: "MCP integration", d: "Bridges Claude to the CAD system.", ill: "Exposes modelling operations as tools" },
  { ref: "D", t: "Solid Edge COM API", d: "Solid Edge automation interface.", ill: "Part, sketch and feature calls" },
  { ref: "E", t: "3D CAD model", d: "Tailored model generated in Solid Edge.", ill: "Ready for review and drawing" },
];

export function G03CadAutomation() {
  return (
    <>
      <SheetHeader sheet={sheets[3]} />

      <div className="pg-main g03">
        <div className="g03-top">
          <div className="label">GPI India · Claude MCP × Solid Edge COM automation</div>
          <p className="lede">
            An MCP integration for Claude with Solid Edge COM automation: engineers describe requirements in
            natural language and get tailored 3D CAD models.
          </p>
        </div>

        <figure className="sysd">
          <ol className="sys-flow">
            {nodes.map((n) => (
              <li key={n.ref}>
                <div className="sys-node">
                  <span className="balloon">{n.ref}</span>
                  <strong>{n.t}</strong>
                  <span>{n.d}</span>
                </div>
                <div className="sys-ill">{n.ill}</div>
              </li>
            ))}
          </ol>
          <figcaption className="sys-legend">
            <span><i className="sw solid" /> Documented capability</span>
            <span><i className="sw dashed" /> Illustrative detail</span>
            <span className="label">Fig. 03.0 — Natural-language to CAD data flow</span>
          </figcaption>
        </figure>

        <div className="g03-cols">
          <section>
            <Sec n="3.1">Concept</Sec>
            <ol className="notes two">
              <li><b>Natural-language requirements</b>: the engineer states what the part needs to be instead of building it feature by feature.</li>
              <li><b>Automation bridge using MCP</b>: the Model Context Protocol connects Claude to the CAD tooling.</li>
              <li><b>Solid Edge COM API</b>: Solid Edge is driven programmatically through its COM automation interface.</li>
              <li><b>CAD model generation</b>: the result is a tailored 3D model inside Solid Edge.</li>
            </ol>
          </section>
          <TechnicalCallout title="Why it matters" tone="accent" ref_="i">
            <p style={{ margin: 0 }}>
              Repetitive modelling is a large share of design time. Describing intent in plain language reduces
              that repetition and makes CAD automation usable by engineers who don&apos;t write automation code.
            </p>
            <ul className="tags" style={{ marginTop: "0.7em" }}>
              {["Claude", "MCP", "Solid Edge", "Solid Edge COM API"].map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
            <p className="label" style={{ margin: "0.6em 0 0" }}>Developed at GPI India · not a commercially released product</p>
          </TechnicalCallout>
        </div>
      </div>

      <div className="pg-foot g03-foot">
        <ProjectImagePlaceholder image="claudeManhole" />
        <ProjectImagePlaceholder image="manholeOverlay" />
        <section className="g03-val">
          <Sec n="3.3">Validation</Sec>
          <p className="prose">
            To prove its Solid Edge capability, Claude modelled a manhole to a supplier&apos;s specification. Placed in
            one assembly with the supplier&apos;s own model, the two coincide: where surfaces overlap, both colours
            show through, confirming the Claude-built part (blue) matches the supplier geometry.
          </p>
        </section>
      </div>
    </>
  );
}
