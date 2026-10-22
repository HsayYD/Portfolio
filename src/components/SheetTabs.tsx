"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SheetMeta } from "@/data/sheets";

type Props = {
  sheets: SheetMeta[];
  active: number;
  onSelect: (index: number) => void;
};

/** CAD-style sheet tabs along the bottom edge, with prev/next controls. */
export function SheetTabs({ sheets, active, onSelect }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  // Keep the active tab in view (matters on narrow screens).
  useEffect(() => {
    refs.current[active]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  const move = (to: number) => {
    const i = (to + sheets.length) % sheets.length;
    onSelect(i);
    refs.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); move(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); move(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(sheets.length - 1); }
  };

  return (
    <nav className="tabbar" aria-label="Drawing sheets">
      <button
        type="button"
        className="nav-btn"
        onClick={() => onSelect(active - 1)}
        disabled={active === 0}
        aria-label="Previous sheet"
        title="Previous sheet  ( ← )"
      >
        <ChevronLeft aria-hidden="true" />
      </button>

      <div className="tabs" role="tablist" aria-label="Sheets" onKeyDown={onKey}>
        {sheets.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="tab"
            id={`tab-${s.id}`}
            aria-selected={i === active}
            aria-controls={`sheet-${s.id}`}
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => onSelect(i)}
          >
            <span className="code">{s.code}</span>
            <span className="ttl">{s.tab}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="nav-btn"
        onClick={() => onSelect(active + 1)}
        disabled={active === sheets.length - 1}
        aria-label="Next sheet"
        title="Next sheet  ( → )"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </nav>
  );
}
