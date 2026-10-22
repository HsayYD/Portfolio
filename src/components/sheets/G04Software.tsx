import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

const modules = [
  { ref: "M1", t: "Work items & forms", d: "Configurable work items and forms" },
  { ref: "M2", t: "Approvals", d: "Workflow-driven approvals" },
  { ref: "M3", t: "Workspaces", d: "Workspace collaboration" },
  { ref: "M4", t: "AI insights", d: "Summarise ideas, identify related items" },
];

export function G04Software() {
  return (
    <>
      <SheetHeader sheet={sheets[4]} />

      <div className="split rev">
        <div className="stack">
          <div>
            <div className="label">SAMSI Techno · Software Engineer · Jan 2026 – Jun 2026</div>
            <p className="lede">
              A full-stack SaaS platform for idea management and product discovery — built from scratch, owned end
              to end.
            </p>
          </div>

          <section>
            <Sec n="4.1">System architecture</Sec>
            <figure className="arch" aria-label="Architecture: frontend, API and authentication, feature modules, database, deployment">
              <div className="arch-deploy">
                <span className="label arch-tag">Deployment</span>
                <div className="arch-layer">
                  <span className="label">L1</span>
                  <strong>Frontend UI</strong>
                </div>
                <div className="arch-link" aria-hidden="true" />
                <div className="arch-layer split2">
                  <div><span className="label">L2</span><strong>Backend APIs</strong></div>
                  <div><span className="label">L2·A</span><strong>Authentication</strong></div>
                </div>
                <div className="arch-link" aria-hidden="true" />
                <div className="arch-mods">
                  {modules.map((m) => (
                    <div key={m.ref} className="arch-mod">
                      <span className="label">{m.ref}</span>
                      <strong>{m.t}</strong>
                      <span>{m.d}</span>
                    </div>
                  ))}
                </div>
                <div className="arch-link" aria-hidden="true" />
                <div className="arch-layer">
                  <span className="label">L3</span>
                  <strong>Database</strong>
                  <span className="muted">schema design</span>
                </div>
              </div>
              <figcaption className="label" style={{ marginTop: "0.6em" }}>
                Fig. 04.0 — Logical architecture (simplified; layers as documented)
              </figcaption>
            </figure>
          </section>
        </div>

        <div className="stack">
          <section>
            <Sec n="4.2">Product</Sec>
            <p className="prose">
              Teams capture ideas as configurable work items, route them through workflow-driven approvals and
              collaborate in shared workspaces. AI-powered insights summarise ideas and surface related items.
            </p>
          </section>

          <section>
            <Sec n="4.3">Implementation</Sec>
            <p className="prose">Owned end-to-end development across every layer of the product:</p>
            <ul className="tags">
              {["Frontend UI", "Backend APIs", "Database design", "Authentication", "AI features", "Deployment"].map((t) => (
                <li key={t} className="tag">{t}</li>
              ))}
            </ul>
          </section>

          <TechnicalCallout title="Outcome" tone="accent" ref_="✓">
            <p style={{ margin: 0 }}>
              A working SaaS platform built from scratch. The same full-stack skills now feed directly into
              engineering automation — the platform designer and the Solid Edge MCP integration.
            </p>
          </TechnicalCallout>

          <div className="g2">
            <ProjectImagePlaceholder image="appDashboard" />
            <ProjectImagePlaceholder image="appWorkflow" />
          </div>
        </div>
      </div>
    </>
  );
}
