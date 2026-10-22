import { Download } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Title block in the bottom-right corner of the sheet: availability status,
 * name and contact details.
 *
 *  ┌──────────────────────────────────┐
 *  │ ● AVAILABLE TO JOIN IMMEDIATELY  │
 *  ├──────────────────────────────────┤
 *  │ Yashashwin Doranala              │
 *  ├──────────┬───────────────────────┤
 *  │ E-mail   │ …                     │
 *  │ Phone    │ …                     │
 *  │ LinkedIn │ …                     │
 *  ├──────────┴───────────────────────┤
 *  │ ↓ Download resume                │
 *  └──────────────────────────────────┘
 */
export function TitleBlock() {
  const { contact } = profile;
  return (
    <div className="titleblock" aria-label="Title block">
      <div className="tb-st">
        <span className="pill">{profile.availability}</span>
      </div>

      <div className="tb-nm">{profile.name}</div>

      <dl className="tb-ct">
        <dt>E-mail</dt>
        <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
        <dt>Phone</dt>
        <dd><a href={contact.phoneHref}>{contact.phone}</a></dd>
        <dt>LinkedIn</dt>
        <dd>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedinLabel}<span className="sr-only"> (opens in new tab)</span>
          </a>
        </dd>
      </dl>

      <div className="tb-act">
        <a className="tb-dl" href={profile.resumePath} download="Yashashwin-Doranala-Resume.pdf">
          <Download aria-hidden="true" /> Download resume
          <span className="sr-only"> (PDF)</span>
        </a>
      </div>
    </div>
  );
}
