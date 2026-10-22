import { education, profile, skills } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { Sec, SheetHeader } from "../SheetHeader";

export function G06Skills() {
  return (
    <>
      <SheetHeader sheet={sheets[6]} />

      <section>
        <Sec n="6.1">Technical skills schedule</Sec>
        <table className="tbl">
          <thead>
            <tr>
              <th scope="col">Ref</th>
              <th scope="col">Group</th>
              <th scope="col">Tools &amp; methods</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((s) => (
              <tr key={s.ref}>
                <td className="ref">{s.ref}</td>
                <td className="grp">{s.group}</td>
                <td>
                  <ul className="tags">
                    {s.items.map((i) => (
                      <li key={i} className={`tag ${i.startsWith("EN ISO") ? "std" : ""}`}>{i}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="label" style={{ marginTop: "0.6em" }}>Tools listed as on resume · no self-rated proficiency levels</p>
      </section>

      <div className="g2" style={{ marginTop: "2em" }}>
        <section>
          <Sec n="6.2">Education</Sec>
          <table className="tbl">
            <thead>
              <tr>
                <th scope="col">Institution</th>
                <th scope="col">Qualification</th>
                <th scope="col">Dates</th>
              </tr>
            </thead>
            <tbody>
              {education.map((e) => (
                <tr key={e.id}>
                  <td className="grp">{e.institution}</td>
                  <td>
                    {e.qualification}
                    {e.id === "liverpool" && (
                      <div className="label edu-note">Coursework only — degree not completed</div>
                    )}
                  </td>
                  <td className="mono" style={{ whiteSpace: "nowrap" }}>{e.dates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <Sec n="6.3">Languages &amp; interests</Sec>
          <table className="tbl">
            <tbody>
              <tr>
                <td className="grp">Languages</td>
                <td><ul className="tags">{profile.languages.map((l) => <li key={l} className="tag">{l}</li>)}</ul></td>
              </tr>
              <tr>
                <td className="grp">Interests</td>
                <td><ul className="tags">{profile.interests.map((l) => <li key={l} className="tag">{l}</li>)}</ul></td>
              </tr>
              <tr>
                <td className="grp">Standards</td>
                <td>
                  <ul className="tags">
                    <li className="tag std">EN ISO 13920</li>
                    <li className="tag std">EN ISO 14122</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
