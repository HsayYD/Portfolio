import { academicProjects } from "@/data/profile";
import type { ImageKey } from "@/data/images";
import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { SheetHeader } from "../SheetHeader";

export function G05Projects() {
  return (
    <>
      <SheetHeader sheet={sheets[5]} />

      <div className="stack">
        {academicProjects.map((p) => (
          <article key={p.id} className="proj box">
            <div className="box-head">
              <div className="proj-ttl">
                <span className="balloon">{p.ref}</span>
                <div>
                  <h3>{p.title}</h3>
                  <span className="label">{p.context}</span>
                </div>
              </div>
              <span className="mono proj-dates">{p.dates}</span>
            </div>

            <div className="proj-body">
              <table className="tbl spec">
                <tbody>
                  <tr><th scope="row">Objective</th><td>{p.objective}</td></tr>
                  <tr><th scope="row">Approach</th><td>{p.approach}</td></tr>
                  <tr>
                    <th scope="row">Software &amp; tools</th>
                    <td>
                      <ul className="tags">{p.tools.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Key technical work</th>
                    <td>
                      <ol className="notes">{p.keyWork.map((k) => <li key={k}>{k}</li>)}</ol>
                    </td>
                  </tr>
                  {p.result && (
                    <tr className="res"><th scope="row">Result</th><td>{p.result}</td></tr>
                  )}
                </tbody>
              </table>

              <div className="proj-figs">
                {p.figures.map((f) => <ProjectImagePlaceholder key={f} image={f as ImageKey} />)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
