import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import type { SheetMeta } from "@/data/sheets";
import { ResumeDownload } from "./ResumeDownload";

type Props = { sheet: SheetMeta; index: number; total: number };

/**
 * Compact manufacturing-drawing title block, sitting in the bottom-right
 * corner of the sheet. Updates with the active sheet.
 *
 *  ┌──────────────┬────────────┬─────────────────┬──────────┐
 *  │ YD  NAME     │ DISCIPLINE │ CONTACT         │ SHEET    │
 *  │ positioning  ├────────────┤ email / phone / ├──────────┤
 *  │              │ STATUS     │ LinkedIn        │ RESUME ↓ │
 *  └──────────────┴────────────┴─────────────────┴──────────┘
 */
export function TitleBlock({ sheet, index, total }: Props) {
  const { contact } = profile;
  return (
    <div className="titleblock" aria-label="Title block">
      <div className="tb-id">
        <div className="mono-mark" aria-hidden="true">{profile.initials}</div>
        <div>
          <div className="nm">{profile.name}</div>
          <div className="ds">{profile.positioning.replaceAll(" | ", " · ")}</div>
        </div>
      </div>

      <div className="tb-cell tb-disc">
        <span className="label">Discipline</span>
        <div className="v">{profile.discipline}</div>
      </div>

      <div className="tb-cell tb-stat">
        <span className="label">Status</span>
        <div className="v tb-status status-lamp">{profile.status}</div>
        <div className="v sub">{profile.availability}</div>
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

      <div className="tb-cell tb-sheet">
        <span className="label">Sheet</span>
        <div className="v tb-big" aria-live="polite">
          {sheet.code} <span className="muted">·</span> {index + 1}/{total}
        </div>
        <div className="v sub">SCALE {sheet.scale}</div>
      </div>

      <div className="tb-act">
        <ResumeDownload label="Resume" />
      </div>
    </div>
  );
}
