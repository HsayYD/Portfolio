import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import type { SheetMeta } from "@/data/sheets";
import { ResumeDownload } from "./ResumeDownload";

type Props = { sheet: SheetMeta; index: number; total: number };

/** Manufacturing-drawing style title block; updates with the active sheet. */
export function TitleBlock({ sheet, index, total }: Props) {
  const { contact } = profile;
  return (
    <div className="titleblock" aria-label="Title block">
      <div className="tb-brand">
        <div className="mono-mark" aria-hidden="true">{profile.initials}</div>
        <div className="nm">{profile.name}</div>
        <div className="ds">{profile.positioning.replaceAll(" | ", " · ")}</div>
      </div>

      <div className="tb-title" aria-live="polite">
        <span className="label">Drawing title</span>
        <div className="v">{sheet.title}</div>
      </div>

      <div className="tb-row">
        <div className="tb-cell">
          <span className="label">Drawing no.</span>
          <div className="v tb-dwg">{sheet.drawingNo}</div>
        </div>
        <div className="tb-cell">
          <span className="label">Sheet</span>
          <div className="v tb-dwg">
            {index + 1} OF {total}
          </div>
        </div>
      </div>

      <div className="tb-cell">
        <span className="label">Author</span>
        <div className="v">{profile.name.toUpperCase()}</div>
      </div>

      <div className="tb-cell">
        <span className="label">Discipline</span>
        <div className="v">{profile.discipline}</div>
      </div>

      <div className="tb-row three">
        <div className="tb-cell">
          <span className="label">Rev</span>
          <div className="v">{profile.revision}</div>
        </div>
        <div className="tb-cell">
          <span className="label">Scale</span>
          <div className="v">{sheet.scale}</div>
        </div>
        <div className="tb-cell">
          <span className="label">Issued</span>
          <div className="v">{profile.issued}</div>
        </div>
      </div>

      <div className="tb-cell">
        <span className="label">Status</span>
        <div className="v tb-status status-lamp">{profile.status}</div>
        <div className="v" style={{ fontSize: 11, color: "var(--annot)", marginTop: 2 }}>
          {profile.availability}
        </div>
      </div>

      <div className="tb-cell tb-contact">
        <span className="label">Contact</span>
        <div className="row">
          <Mail aria-hidden="true" />
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
        <div className="row">
          <Phone aria-hidden="true" />
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
        <div className="row">
          <ArrowUpRight aria-hidden="true" />
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn profile<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>

      <div className="tb-actions">
        <ResumeDownload />
      </div>

      <div className="tb-cell tb-rev">
        <span className="label">Revisions</span>
        <table>
          <thead>
            <tr>
              <th scope="col">REV</th>
              <th scope="col">DATE</th>
              <th scope="col">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{profile.revision}</td>
              <td>{profile.issued}</td>
              <td>{profile.revisionNote}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tb-fill" aria-hidden="true" />
      <div className="tb-foot">DO NOT SCALE DRAWING · CONTENT PER RESUME</div>
    </div>
  );
}
