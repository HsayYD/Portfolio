import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";
import type { SheetMeta } from "@/data/sheets";
import { DrawingBorder } from "./DrawingBorder";
import { TitleBlock } from "./TitleBlock";

type Props = {
  sheets: SheetMeta[];
  active: number;
  panels: Record<string, ReactNode>;
};

/**
 * The paper sheet: a fixed-size landscape page (scaled to fit the window by
 * the workspace) with zone border, double-line frame, the active sheet's
 * content and the title block in the bottom-right corner. Nothing on the
 * sheet scrolls. Every sheet's content is rendered (indexable, printable);
 * only the active one is visible.
 *
 * On phones the page is not scaled: content stacks and the page scrolls,
 * and the title block becomes a collapsible panel at the top.
 */
export function DrawingSheet({ sheets, active, panels }: Props) {
  return (
    <div className="sheet-sizer">
      <div className="sheet">
        <DrawingBorder />
        <div className="frame">
          <main id="content" className="content" tabIndex={-1}>
            <details className="tb-mobile">
              <summary>
                <span className="label tbm-label">Contact</span>
                <span className="pill">{profile.availability}</span>
                <ChevronDown className="chev" width={16} height={16} aria-hidden="true" />
              </summary>
              <TitleBlock />
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

          <aside className="titleblock-wrap">
            <TitleBlock />
          </aside>
        </div>
      </div>
    </div>
  );
}
