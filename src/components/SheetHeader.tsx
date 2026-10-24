import { ArrowRight } from "lucide-react";
import { sheets, type SheetMeta } from "@/data/sheets";

/** Header strip at the top of every sheet: code, title, drawing metadata. */
export function SheetHeader({ sheet, as = "h2" }: { sheet: SheetMeta; as?: "h1" | "h2" }) {
  const H = as;
  const i = sheets.findIndex((s) => s.id === sheet.id);
  // "Continued on sheet": the drafting convention doubles as the way forward,
  // so visitors who never notice the tab bar still find the next sheet.
  const next = sheets[(i + 1) % sheets.length];
  const last = i === sheets.length - 1;
  return (
    <header className="sh-head">
      <div className="code" aria-hidden="true">{sheet.code}</div>
      <div className="ttl">
        <span className="label">{sheet.scope}</span>
        <H>
          <span className="sr-only">Sheet {sheet.code}: </span>
          {sheet.title}
        </H>
      </div>
      <div className="meta">
        <div>
          <span className="label">Sheet</span>
          <div className="v">{i + 1} of {sheets.length}</div>
        </div>
        <div>
          <span className="label">Scale</span>
          <div className="v">{sheet.scale}</div>
        </div>
        <a className="sh-next" href={`#${next.id}`}>
          <span className="label">{last ? "Back to start" : "Continued on"}</span>
          <span className="v">
            {next.code} · {next.tab}
            <ArrowRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </header>
  );
}

/** Section heading with a boxed reference number and extension line. */
export function Sec({ n, children, id }: { n: string; children: React.ReactNode; id?: string }) {
  return (
    <h3 className="sec" id={id}>
      <span className="ref">{n}</span>
      {children}
    </h3>
  );
}
