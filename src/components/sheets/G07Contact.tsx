import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { ResumeDownload } from "../ResumeDownload";
import { Sec, SheetHeader } from "../SheetHeader";

export function G07Contact() {
  const { contact } = profile;
  return (
    <>
      <SheetHeader sheet={sheets[7]} />

      <div className="contact">
        <div className="contact-main">
          <div className="status-plate">
            <span className="label">Status</span>
            <span className="status-lamp mono">{profile.status}</span>
            <span className="muted">{profile.availability}</span>
          </div>

          <h3 className="contact-h">Let&apos;s talk about your next mechanical design or automation project.</h3>
          <p className="prose">
            I&apos;m looking for roles in mechanical design, CAD automation and engineering software — teams where
            solid drawings and well-built tools both matter. Recruiters and engineering managers are welcome to get
            in touch directly.
          </p>

          <div className="g00-actions">
            <a className="btn primary" href={`mailto:${contact.email}?subject=${encodeURIComponent("Opportunity — Mechanical Design / CAD Automation")}`}>
              <Mail aria-hidden="true" /> Email me
            </a>
            <ResumeDownload variant="plain" />
          </div>
        </div>

        <div>
          <Sec n="7.1">Contact schedule</Sec>
          <table className="tbl contact-tbl">
            <tbody>
              <tr>
                <th scope="row"><Mail aria-hidden="true" /> Email</th>
                <td><a className="link mono" href={`mailto:${contact.email}`}>{contact.email}</a></td>
              </tr>
              <tr>
                <th scope="row"><Phone aria-hidden="true" /> Phone</th>
                <td><a className="link mono" href={contact.phoneHref}>{contact.phone}</a></td>
              </tr>
              <tr>
                <th scope="row"><ArrowUpRight aria-hidden="true" /> LinkedIn</th>
                <td>
                  <a className="link mono" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    {contact.linkedinLabel}<span className="sr-only"> (opens in new tab)</span>
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Resume</th>
                <td><a className="link mono" href={profile.resumePath} download>Yashashwin-Doranala-Resume.pdf</a></td>
              </tr>
            </tbody>
          </table>

          <Sec n="7.2">Open to discussing</Sec>
          <ol className="notes">
            <li>Mechanical design — 3D modelling, manufacturing drawings, sheet metal and assembly documentation.</li>
            <li>CAD automation and customisation — Solid Edge COM API, design tools, AI-assisted modelling.</li>
            <li>Engineering software — tools that sit between CAD, ERP and the people using them.</li>
          </ol>
        </div>
      </div>

      <p className="end-note label">— End of drawing package · {sheets.length} sheets —</p>
    </>
  );
}
