import { ArrowRight } from "lucide-react";
import { experience, profile } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { Sec, SheetHeader } from "../SheetHeader";
import { TechnicalCallout } from "../TechnicalCallout";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Month index (months since Jan 2026) for "Jun 2026" style strings. */
function mIndex(s: string) {
  if (s === "Present") {
    const [y, m] = profile.issued.split("-").map(Number);
    return (y - 2026) * 12 + (m - 1) + 1;
  }
  const [mon, yr] = s.split(" ");
  return (Number(yr) - 2026) * 12 + MONTHS.indexOf(mon);
}

function Timeline() {
  const end = mIndex("Present");
  const span = end; // axis from Jan 2026
  const ticks = Array.from({ length: span + 1 }, (_, i) => i);
  const ordered = [...experience].reverse();
  return (
    <figure className="tl" aria-label="Employment timeline, January 2026 to present">
      <div className="tl-rows">
        {ordered.map((r) => {
          const a = mIndex(r.start);
          const b = mIndex(r.end);
          return (
            <div className="tl-row" key={r.id}>
              <span className="tl-name mono">{r.employer.toUpperCase()}</span>
              <span className="tl-track">
                <span
                  className={`tl-bar ${r.track === "MECHANICAL DESIGN" ? "mech" : "soft"}`}
                  style={{ left: `${(a / span) * 100}%`, width: `${((b - a) / span) * 100}%` }}
                >
                  {r.start} – {r.end}
                </span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="tl-axis" aria-hidden="true">
        <span className="tl-name" />
        <span className="tl-track">
          {ticks.map((t) => (
            <i key={t} style={{ left: `${(t / span) * 100}%` }}>
              {t < span ? MONTHS[t % 12].toUpperCase() : ""}
            </i>
          ))}
        </span>
      </div>
      <figcaption className="label">Fig. 01.1 — Employment timeline, 2026 · month grid</figcaption>
    </figure>
  );
}

export function G01Experience() {
  return (
    <>
      <SheetHeader sheet={sheets[1]} />

      <Timeline />

      <div className="legend-row">
        <span><i className="sw mech" /> Mechanical design &amp; CAD automation</span>
        <span><i className="sw soft" /> Software engineering</span>
      </div>

      {experience.map((r, idx) => (
        <article key={r.id} className={`role ${r.track === "MECHANICAL DESIGN" ? "mech" : "soft"}`}>
          <div className="role-head">
            <span className="balloon">{idx + 1}</span>
            <div className="role-ttl">
              <span className="label">{r.track}</span>
              <h3>
                {r.employer} <span className="muted">—</span> {r.title}
              </h3>
            </div>
            <div className="role-dates mono">
              {r.start} – {r.end}
            </div>
          </div>

          <div className="role-body">
            <div>
              <Sec n={`1.${idx + 1}.1`}>Summary</Sec>
              <p className="prose">{r.summary}</p>

              <Sec n={`1.${idx + 1}.2`}>Responsibilities &amp; work</Sec>
              <ol className="notes">
                {r.responsibilities.map((x) => <li key={x}>{x}</li>)}
              </ol>
            </div>

            <div className="stack-sm">
              <div>
                <span className="label">{r.track === "SOFTWARE ENGINEERING" ? "Scope" : "Tools & standards"}</span>
                <ul className="tags" style={{ marginTop: "0.45em" }}>
                  {r.tools.map((t) => (
                    <li key={t} className={`tag ${t.startsWith("EN ISO") ? "std" : ""}`}>{t}</li>
                  ))}
                </ul>
              </div>

              {r.outcomes.map((o) => (
                <TechnicalCallout key={o.label} title="Documented outcome" tone="mark">
                  <div className="out-v mono">{o.value}</div>
                  <div className="label">{o.label}</div>
                </TechnicalCallout>
              ))}

              <div className="xrefs">
                <span className="label">Detail sheets</span>
                {r.sheetLinks.map((l) => (
                  <a key={l.id} className="xref" href={`#${l.id}`}>
                    {l.label} <ArrowRight width={12} height={12} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
