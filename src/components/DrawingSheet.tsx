import { forwardRef, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type { SheetMeta } from "@/data/sheets";
import { DrawingBorder } from "./DrawingBorder";
import { TitleBlock } from "./TitleBlock";

type Props = {
  sheets: SheetMeta[];
  active: number;
  panels: Record<string, ReactNode>;
};

/**
 * The paper sheet: zone border, double-line frame, scrolling content area
 * and a bottom band holding the general notes and the bottom-right title
 * block. Every sheet's content is rendered (so it
 * is indexable and printable); only the active one is visible.
 */
export const DrawingSheet = forwardRef<HTMLDivElement, Props>(function DrawingSheet(
  { sheets, active, panels },
  contentRef,
) {
  const sheet = sheets[active];
  return (
    <div className="sheet">
      <DrawingBorder />
      <div className="frame">
        <main id="content" ref={contentRef} className="content" tabIndex={-1}>
          {/* Title block collapses into this panel on small screens */}
          <details className="tb-mobile">
            <summary>
              <span className="label" style={{ fontSize: 10 }}>Title block</span>
              <b>{sheet.code}</b>
              <span className="muted">· sheet {active + 1}/{sheets.length}</span>
              <ChevronDown className="chev" width={16} height={16} aria-hidden="true" />
            </summary>
            <TitleBlock sheet={sheet} index={active} total={sheets.length} />
          </details>

          {sheets.map((s, i) => (
            <section
              key={s.id}
              id={`sheet-${s.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${s.id}`}
              hidden={i !== active}
              className="sheet-panel enter"
            >
              {panels[s.id]}
            </section>
          ))}
        </main>

        <div className="sheet-band">
          <div className="gen-notes" aria-hidden="true">
            <span className="label">General notes</span>
            <ol>
              <li>Use the sheet tabs below, or the ← → keys, to move between sheets.</li>
              <li>All details per current resume — download from the title block.</li>
              <li>Do not scale drawing.</li>
            </ol>
          </div>
          <aside className="titleblock-wrap">
            <TitleBlock sheet={sheet} index={active} total={sheets.length} />
          </aside>
        </div>
      </div>
    </div>
  );
});
