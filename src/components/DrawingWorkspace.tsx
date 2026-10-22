"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { profile } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { DrawingSheet } from "./DrawingSheet";
import { Lightbox } from "./Lightbox";
import { SheetTabs } from "./SheetTabs";

/**
 * The sheet is laid out at a fixed height of PAGE_H px; its width follows the
 * screen's proportions (within limits) so the sheet fills the whole window.
 */
export const PAGE_H = 1000;
const PAGE_W_MIN = 1510;
const PAGE_W_MAX = 2300;

const toggleFullscreen = () => {
  if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  else document.documentElement.requestFullscreen?.().catch(() => {});
};

const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};

const indexFromHash = () => {
  const id = window.location.hash.replace("#", "").toLowerCase();
  const i = sheets.findIndex((s) => s.id === id);
  return i < 0 ? 0 : i;
};

/**
 * Application shell: the drawing sheet filling the window, sheet tabs and
 * status bar. Owns the active sheet (synced with the URL hash so sheets are
 * linkable and the back button works). F toggles full screen.
 */
export function DrawingWorkspace({ panels }: { panels: Record<string, ReactNode> }) {
  const active = useSyncExternalStore(subscribeHash, indexFromHash, () => 0);
  const [fit, setFit] = useState(1);
  const [pageW, setPageW] = useState(1680);
  const wsRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  /* — fit the fixed-size sheet to the available workspace — */
  useEffect(() => {
    const el = wsRef.current;
    if (!el) return;
    const measure = () => {
      const cs = getComputedStyle(el);
      const w = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const h = el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      if (w <= 0 || h <= 0) return;
      const pw = Math.round(Math.min(PAGE_W_MAX, Math.max(PAGE_W_MIN, (PAGE_H * w) / h)));
      setPageW(pw);
      setFit(Math.min(w / pw, h / PAGE_H));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* — active sheet lives in the URL hash (linkable, back button works) — */
  const select = useCallback((i: number) => {
    if (i < 0 || i >= sheets.length) return;
    const id = sheets[i].id;
    if (window.location.hash !== `#${id}`) window.location.hash = id;
  }, []);

  /* — side effects of a sheet change — */
  useEffect(() => {
    const s = sheets[active];
    document.title = `${s.code} ${s.title} — ${profile.name}`;
    if (first.current) { first.current = false; return; }
    const ws = wsRef.current;
    if (ws) ws.scrollTo({ top: 0, left: 0 });
    // Small screens scroll the page itself: return to the top of the sheet.
    if (window.matchMedia("(max-width: 900px)").matches) {
      window.scrollTo({ top: 0 });
    }
  }, [active]);

  /* — keyboard shortcuts — */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [contenteditable='true'], [role='tablist']")) return;
      if (e.key === "ArrowRight" || e.key === "]") { e.preventDefault(); select(active + 1); }
      else if (e.key === "ArrowLeft" || e.key === "[") { e.preventDefault(); select(active - 1); }
      else if (/^[0-7]$/.test(e.key)) { select(Number(e.key)); }
      else if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, select]);

  const s = sheets[active];

  return (
    <div className="app">
      <a href="#content" className="skip-link">Skip to sheet content</a>

      <div
        className="workspace"
        ref={wsRef}
        style={{ ["--s" as string]: String(fit), ["--page-w" as string]: `${pageW}px` }}
      >
        <DrawingSheet sheets={sheets} active={active} panels={panels} />
      </div>

      <SheetTabs sheets={sheets} active={active} onSelect={select} />

      <Lightbox />

      <footer className="statusbar">
        <span>SHEET <b>{s.code}</b> · {active + 1}/{sheets.length}</span>
        <span className="grow">{profile.status} · {profile.availability.toUpperCase()}</span>
        <span>
          <kbd>←</kbd> <kbd>→</kbd> SHEETS · <kbd>0</kbd>–<kbd>7</kbd> JUMP · <kbd>F</kbd> FULL SCREEN
        </span>
      </footer>
    </div>
  );
}
