import { sheets } from "@/data/sheets";
import { Sec, SheetHeader } from "../SheetHeader";

const engineering = [
  <>
    <b>Strictly layered codebase:</b> a 50+ module service layer isolates all database access from the transport
    layer. No SQL lives in Server Actions or API routes, so business logic stays reusable and testable.
  </>,
  <>
    <b>Dual entry points over the same services:</b> CSRF-protected Server Actions for the web app and
    token-authenticated API routes for external, mobile and webhook traffic, with shared TypeScript interfaces
    keeping request/response shapes in step.
  </>,
  <>
    <b>Workflow engine:</b> user-driven transitions in linear, step and free modes, plus multi-level approvals that
    resolve approvers through the author&apos;s reporting-manager chain.
  </>,
  <>
    <b>Real-time whiteboard:</b> Konva + Socket.IO microservice with live multi-user editing and 15+ template
    libraries (agile, design thinking, root cause, SDLC…).
  </>,
];

const ai = [
  "Hypothesis generation",
  "Experiment design",
  "Demand clustering",
  "Smart suggestions",
  "Auto-tagging",
  "Forecasting",
  "Semantic retrieval",
];

const devops = [
  <>
    <b>Self-contained Docker Compose stack</b> (app, whiteboard service, PostgreSQL 18 + pgvector, nginx gateway,
    pgAdmin) running alongside a separate legacy stack on shared infrastructure with zero coupling.
  </>,
  <>
    <b>Blue/green deployments</b> behind nginx with request-time DNS resolution for zero-downtime releases; one
    URL-agnostic image runs behind an IP or a production domain without a rebuild.
  </>,
  <>
    <b>Knex migrations</b>, including squashing 275 migrations into a clean baseline, with automatic migrate-on-boot
    against fresh databases.
  </>,
];

const stack = [
  "Next.js 16", "React 19", "TypeScript", "MUI 7", "PostgreSQL 18", "pgvector", "Knex",
  "Socket.IO", "Konva", "OpenAI", "Docker", "nginx", "JWT / bcrypt",
];

const figures = [
  { v: "50+", l: "service modules" },
  { v: "18", l: "AI features" },
  { v: "15+", l: "whiteboard templates" },
];

function Architecture() {
  return (
    <figure className="arch" aria-label="Architecture: web and external clients, Server Actions and API routes, service layer, PostgreSQL with pgvector, whiteboard microservice and OpenAI, all behind an nginx gateway in Docker Compose">
      <div className="arch-deploy">
        <span className="label arch-tag">Docker Compose · nginx gateway (blue/green)</span>
        <div className="arch-layer split2 even">
          <div><span className="label">C1</span><strong>Web app</strong></div>
          <div><span className="label">C2</span><strong>External · mobile · webhooks</strong></div>
        </div>
        <div className="arch-link" aria-hidden="true" />
        <div className="arch-layer split2 even">
          <div className="col"><strong>Server Actions</strong><span className="muted">type-safe · CSRF-protected</span></div>
          <div className="col"><strong>API route handlers</strong><span className="muted">token-authenticated</span></div>
        </div>
        <div className="arch-link" aria-hidden="true" />
        <div className="arch-mod svc">
          <span className="label">services/*</span>
          <strong>Service layer · 50+ modules</strong>
          <span>All business logic and database access · workflow &amp; approval engine</span>
        </div>
        <div className="arch-link" aria-hidden="true" />
        <div className="arch-row">
          <div className="arch-layer col"><strong>PostgreSQL 18</strong><span className="muted">pgvector · Knex migrations</span></div>
          <div className="arch-layer col"><strong>Whiteboard service</strong><span className="muted">Socket.IO · Konva</span></div>
          <div className="arch-layer col"><strong>OpenAI</strong><span className="muted">AI features</span></div>
        </div>
      </div>
      <figcaption className="label" style={{ marginTop: "0.5em" }}>
        Fig. 04.0 — System architecture (simplified)
      </figcaption>
    </figure>
  );
}

export function G04Software() {
  return (
    <>
      <SheetHeader sheet={sheets[4]} />

      <div className="pg-main g04">
        <section>
          <div className="label">SAMSI Techno · Software Engineer · Jan 2026 – Jun 2026</div>
          <p className="lede g04-lede">
            Designed and shipped a multi-tenant B2B SaaS platform: work-item management, configurable workflows,
            collaborative whiteboarding and AI-assisted product and delivery tooling.
          </p>
          <Sec n="4.1">System architecture</Sec>
          <Architecture />
        </section>

        <section>
          <Sec n="4.2">Architecture &amp; engineering</Sec>
          <ol className="notes g04-notes">
            {engineering.map((x, i) => <li key={i}>{x}</li>)}
          </ol>
          <Sec n="4.3">AI features</Sec>
          <p className="g04-p">
            An 18-feature AI roadmap on OpenAI and pgvector vector search, including:
          </p>
          <ul className="tags">{ai.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
        </section>

        <section>
          <Sec n="4.4">DevOps &amp; deployment</Sec>
          <ol className="notes g04-notes">
            {devops.map((x, i) => <li key={i}>{x}</li>)}
          </ol>
        </section>
      </div>

      <div className="pg-foot g04-foot">
        <dl className="kfig" aria-label="Key figures">
          {figures.map((f) => (
            <div key={f.l}>
              <dt className="mono">{f.v}</dt>
              <dd>{f.l}</dd>
            </div>
          ))}
        </dl>
        <section>
          <Sec n="4.5">Stack</Sec>
          <ul className="tags">{stack.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
        </section>
      </div>
    </>
  );
}
