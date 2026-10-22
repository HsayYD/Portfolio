import { ArrowRight } from "lucide-react";
import { education, experience, profile } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { PlatformIsometric } from "../PlatformIsometric";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { ResumeDownload } from "../ResumeDownload";
import { Sec, SheetHeader } from "../SheetHeader";

const disciplines = [
  {
    n: "1",
    title: "Mechanical Design",
    text: "3D models, fully defined manufacturing drawings, sheet-metal bend drawings, DXF files, BOMs and assembly documentation in Solid Edge.",
    xref: "g01",
  },
  {
    n: "2",
    title: "CAD Automation",
    text: "Tools that generate CAD directly — an automated platform designer and a Claude MCP integration driving Solid Edge through its COM API.",
    xref: "g03",
  },
  {
    n: "3",
    title: "Software Engineering",
    text: "Full-stack product work: built a SaaS platform end to end, from frontend UI and APIs to database design, authentication, AI features and deployment.",
    xref: "g04",
  },
];

export function G00General() {
  const current = experience[0];
  const degree = education[0];
  return (
    <>
      <SheetHeader sheet={sheets[0]} />

      <div className="g00">
        <div className="g00-intro">
          <div className="label">Engineer of record</div>
          <h1 className="name-plate">
            <span>Yashashwin</span>
            <span>Doranala</span>
          </h1>
          <div className="dim-line" aria-hidden="true">
            <i /><span>MECHANICAL × AUTOMATION × SOFTWARE</span><i />
          </div>
          <p className="positioning">
            Mechanical Design Engineer <span>|</span> CAD Automation <span>|</span> Engineering Software
          </p>
          <div className="prose">
            <p>{profile.summary}</p>
          </div>

          <div className="g00-actions">
            <a className="btn primary" href="#g02">
              View flagship project — G02
              <ArrowRight aria-hidden="true" />
            </a>
            <ResumeDownload variant="plain" />
          </div>

          <TechnicalHighlight />
        </div>

        <div className="g00-view">
          <PlatformIsometric />
        </div>

        <aside className="g00-side">
          <ProjectImagePlaceholder image="portrait" />
          <table className="tbl kv">
            <caption className="sr-only">Key facts</caption>
            <tbody>
              <tr><th scope="row">Current role</th><td>{current.title}, {current.employer}<br /><span className="muted mono">{current.start} – {current.end}</span></td></tr>
              <tr><th scope="row">Education</th><td>{degree.qualification}<br /><span className="muted">{degree.institution}</span></td></tr>
              <tr><th scope="row">Status</th><td><span className="status-lamp">{profile.availability}</span></td></tr>
            </tbody>
          </table>
        </aside>
      </div>

      <Sec n="0.1">Disciplines</Sec>
      <ol className="disc">
        {disciplines.map((d) => (
          <li key={d.n}>
            <div className="disc-head">
              <span className="balloon accent">{d.n}</span>
              <h4>{d.title}</h4>
            </div>
            <p>{d.text}</p>
            <a className="xref" href={`#${d.xref}`}>
              See {d.xref.toUpperCase()} <ArrowRight width={12} height={12} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>

      <Sec n="0.2">Sheet index</Sec>
      <ol className="sheet-index">
        {sheets.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>
              <span className="mono">{s.code}</span>
              <span>{s.title}</span>
              <span className="muted">{s.scope}</span>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
}

function TechnicalHighlight() {
  return (
    <a href="#g02" className="hl" aria-label="Platform modelling time reduced from 16 to 24 hours to 1 to 2 minutes — see sheet G02">
      <span className="label">Key result · automated platform designer</span>
      <span className="hl-row">
        <span className="hl-before">16–24 h</span>
        <ArrowRight aria-hidden="true" />
        <span className="hl-after">1–2 min</span>
      </span>
      <span className="label">Modelling time per platform assembly</span>
    </a>
  );
}
