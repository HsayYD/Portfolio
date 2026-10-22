import type { SheetMeta } from "@/data/sheets";

/** Header strip at the top of every sheet: code, title, drawing metadata. */
export function SheetHeader({ sheet, as = "h2" }: { sheet: SheetMeta; as?: "h1" | "h2" }) {
  const H = as;
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
          <span className="label">Drawing no.</span>
          <div className="v">{sheet.drawingNo}</div>
        </div>
        <div>
          <span className="label">Scale</span>
          <div className="v">{sheet.scale}</div>
        </div>
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
