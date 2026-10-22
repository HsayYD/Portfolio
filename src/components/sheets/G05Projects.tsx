import { academicProjects } from "@/data/profile";
import { images, type ImageKey } from "@/data/images";
import { sheets } from "@/data/sheets";
import { ProjectImagePlaceholder } from "../ProjectImagePlaceholder";
import { Sec, SheetHeader } from "../SheetHeader";

export function G05Projects() {
  return (
    <>
      <SheetHeader sheet={sheets[5]} />

      <div className="pg-main g05">
        {academicProjects.map((p) => (
          <article key={p.id} className="proj box">
            <div className="box-head">
              <div className="proj-ttl">
                <span className="balloon">{p.ref}</span>
                <div>
                  <h3>{p.title}</h3>
                  <span className="label">{p.context} · {p.dates}</span>
                </div>
              </div>
            </div>
            {(() => {
              // A portrait photo fills the space at the bottom of the card.
              const portrait = p.figures.find((f) => images[f as ImageKey].ratio < 1) as ImageKey | undefined;
              const below = p.figures.filter((f) => f !== portrait) as ImageKey[];
              const keyWork = (
                <ol className="notes">{p.keyWork.map((k) => <li key={k}>{k}</li>)}</ol>
              );
              return (
                <>
                  <dl className="spec">
                    <dt>Objective</dt>
                    <dd>{p.objective}</dd>
                    <dt>Approach</dt>
                    <dd>{p.approach}</dd>
                    <dt>Tools</dt>
                    <dd>
                      <ul className="tags">{p.tools.map((t) => <li key={t} className="tag">{t}</li>)}</ul>
                    </dd>
                    <dt>Key work</dt>
                    <dd>{keyWork}</dd>
                    {p.result && (
                      <>
                        <dt className="res">Result</dt>
                        <dd className="res">{p.result}</dd>
                      </>
                    )}
                  </dl>
                  {portrait && (
                    <div className="proj-portrait">
                      <ProjectImagePlaceholder image={portrait} />
                    </div>
                  )}
                  {below.length > 0 && (
                    <div className="proj-figs">
                      {below.map((f) => <ProjectImagePlaceholder key={f} image={f} ratio={16 / 9} />)}
                    </div>
                  )}
                </>
              );
            })()}
          </article>
        ))}
      </div>

      <div className="pg-foot g05-foot">
        <Sec n="5.1">Across the projects</Sec>
        <table className="tbl">
          <tbody>
            <tr>
              <td className="grp">Software</td>
              <td><ul className="tags">{["Creo", "Autodesk Fusion", "MATLAB", "Abaqus", "ANSYS Fluent"].map((t) => <li key={t} className="tag">{t}</li>)}</ul></td>
            </tr>
            <tr>
              <td className="grp">Methods</td>
              <td><ul className="tags">{["GD&T drawings", "Custom FEA code", "Modal & transient analysis", "CFD (RNG k-ε, UDFs)", "3D printing · CNC · laser cutting"].map((t) => <li key={t} className="tag">{t}</li>)}</ul></td>
            </tr>
            <tr>
              <td className="grp">Hardware</td>
              <td><ul className="tags">{["Pixhawk", "GPS", "ESCs", "BLDC motors", "Swashplate servos"].map((t) => <li key={t} className="tag">{t}</li>)}</ul></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
