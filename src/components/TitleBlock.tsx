import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import type { SheetMeta } from "@/data/sheets";

type Props = { sheet: SheetMeta; index: number; total: number };

/**
 * Manufacturing-drawing title block in the bottom-right corner of the sheet:
 *
 *  ┌──────────────────────────────────────────────────────────────────────┐
 *  │ Engineer:  NAME                                                      │
 *  ├──────────────┬────────────┬─────────────────────────────────────────┤
 *  │ contact      │ Scale      │ Subject:  SHEET TITLE                   │
 *  │              ├────────────┼──────────┬─────────────────────┬────────┤
 *  │ resume ↓     │ note       │ Paper    │ Dwg. no.     Sheet  │ Rev.   │
 *  └──────────────┴────────────┴──────────┴─────────────────────┴────────┘
 */
export function TitleBlock({ sheet, index, total }: Props) {
  const { contact } = profile;
  return (
    <div className="titleblock" aria-label="Title block">
      <div className="tb-nm">
        <span className="k">Engineer:</span>
        <span className="big">{profile.name}</span>
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
