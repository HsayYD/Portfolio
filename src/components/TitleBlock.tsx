import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import type { SheetMeta } from "@/data/sheets";

type Props = { sheet: SheetMeta; index: number; total: number };

/** Projection symbol (truncated cone: end view + side view). */
function ProjectionSymbol() {
  return (
    <svg viewBox="0 0 64 28" width="64" height="28" aria-hidden="true" className="tb-proj">
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="14" r="5" />
      <path d="M2 14H26M14 2V26" className="cl" />
      <path d="M34 6L60 10V18L34 22Z" />
      <path d="M30 14H63" className="cl" />
    </svg>
  );
}

/**
 * Manufacturing-drawing title block in the bottom-right corner of the sheet,
 * laid out like a production title block:
 *
 *  ┌ REV │ DESCRIPTION / STATUS                │ DRAWN │ DATE │ CHK │ DATE ┐
 *  ├──────────────────────────────────────────────────┬───────────────────┤
 *  │ Engineer:  NAME                                  │  logo / identity  │
 *  ├──────────────┬────────────┬──────────────────────┤                   │
 *  │ contact      │ Scale      │ Proj.                │                   │
 *  │              ├────────────┴──────────────────────┴───────────────────┤
 *  │              │ Subject:  SHEET TITLE                                 │
 *  │              ├────────────┬──────────┬─────────────────────┬─────────┤
 *  │ resume ↓     │ note       │ Paper    │ Drawing no.  Sheet  │ Rev     │
 *  └──────────────┴────────────┴──────────┴─────────────────────┴─────────┘
 */
export function TitleBlock({ sheet, index, total }: Props) {
  const { contact } = profile;
  return (
    <div className="titleblock" aria-label="Title block">
      {/* revision / status strip */}
      <table className="tb-strip">
        <tbody>
          <tr className="data">
            <td>{profile.release.rev}</td>
            <td className="desc">
              <span className="status-lamp">{profile.status}</span> — {profile.availability.toUpperCase()}
            </td>
            <td>{profile.initials}</td>
            <td>{profile.release.date}</td>
            <td />
            <td />
          </tr>
          <tr className="heads">
            <th scope="col">REV.</th>
            <th scope="col" className="desc">DESCRIPTION / STATUS</th>
            <th scope="col">DRAWN BY</th>
            <th scope="col">DRAW DATE</th>
            <th scope="col">CHECKED</th>
            <th scope="col">DATE</th>
          </tr>
        </tbody>
      </table>

      <div className="tb-nm">
        <span className="k">Engineer:</span>
        <span className="big">{profile.name}</span>
      </div>

      <div className="tb-lg">
        <div className="lg-row">
          <span className="mono-mark" aria-hidden="true">{profile.initials}</span>
          <span className="lg-sep" aria-hidden="true" />
          <span className="lg-txt">
            Mechanical Design
            <br />
            CAD Automation
            <br />
            Engineering Software
          </span>
        </div>
        <div className="lg-url">{profile.siteUrl.replace("https://", "")}</div>
      </div>

      <div className="tb-ct">
        <span className="k">Contact</span>
        <dl>
          <dt>E-mail</dt>
          <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
          <dt>Phone</dt>
          <dd><a href={contact.phoneHref}>{contact.phone}</a></dd>
          <dt>LinkedIn</dt>
          <dd>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              /in/yashashwin-doranala<span className="sr-only"> (opens in new tab)</span>
            </a>
          </dd>
        </dl>
        <a className="tb-dl" href={profile.resumePath} download="Yashashwin-Doranala-Resume.pdf">
          <Download aria-hidden="true" /> Download resume
          <span className="sr-only"> (PDF)</span>
        </a>
      </div>

      <div className="tb-sc">
        <span className="k">Scale</span>
        <span className="big">{sheet.scale}</span>
        <span className="k sm">Units: mm</span>
      </div>

      <div className="tb-pj">
        <span className="k">Proj.</span>
        <ProjectionSymbol />
      </div>

      <div className="tb-sb">
        <span className="k">Subject:</span>
        <span className="big" aria-live="polite">{sheet.title}</span>
      </div>

      <div className="tb-nt">
        This drawing package is the work of {profile.name}. All details per current resume.
      </div>

      <div className="tb-ps">
        <span className="k">Paper size</span>
        <span className="huge">A<sub>1</sub></span>
      </div>

      <div className="tb-dn">
        <span className="k">Dwg. no.</span>
        <span className="sht">Sheet {index + 1} of {total}</span>
        <span className="huge">{sheet.code}</span>
      </div>

      <div className="tb-rv">
        <span className="k">Rev.</span>
        <span className="huge">{profile.release.rev}</span>
      </div>
    </div>
  );
}
