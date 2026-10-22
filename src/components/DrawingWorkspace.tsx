"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Moon, Sun, ZoomIn, ZoomOut } from "lucide-react";
import { profile } from "@/data/profile";
import { sheets } from "@/data/sheets";
import { DrawingSheet } from "./DrawingSheet";
import { SheetTabs } from "./SheetTabs";

/** Zoom steps relative to "fit the whole sheet in the window". */
const ZOOMS = [1, 1.25, 1.5, 2];
/** Fixed sheet size in CSS px — every sheet is laid out on this page. */
export const PAGE_W = 1680;
export const PAGE_H = 1000;

const subscribeHash = (cb: () => void) => {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
};
const subscribeWs = (cb: () => void) => {
  window.addEventListener("yd-workspace", cb);
  return () => window.removeEventListener("yd-workspace", cb);
};
const isLightWs = () => document.documentElement.dataset.workspace === "light";

const indexFromHash = () => {
  const id = window.location.hash.replace("#", "").toLowerCase();
  const i = sheets.findIndex((s) => s.id === id);
  return i < 0 ? 0 : i;
};

/**
 * Application shell: toolbar, workspace with the drawing sheet, sheet tabs
 * and status bar. Owns the active sheet (synced with the URL hash so sheets
 * are linkable and the back button works), zoom and workspace shade.
 */
export function DrawingWorkspace({ panels }: { panels: Record<string, ReactNode> }) {
  const active = useSyncExternalStore(subscribeHash, indexFromHash, () => 0);
  const lightWs = useSyncExternalStore(subscribeWs, isLightWs, () => false);
  const [zoom, setZoom] = useState(1);
  const [fit, setFit] = useState(1);
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
      if (w > 0 && h > 0) setFit(Math.min(w / PAGE_W, h / PAGE_H));
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
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, select]);

  const zi = ZOOMS.indexOf(zoom);

  const toggleWorkspace = () => {
    const next = !lightWs;
    if (next) document.documentElement.dataset.workspace = "light";
    else delete document.documentElement.dataset.workspace;
    try { localStorage.setItem("yd-workspace", next ? "light" : "dark"); } catch {}
    window.dispatchEvent(new Event("yd-workspace"));
  };

  const s = sheets[active];

  return (
    <div className="app">
      <a href="#content" className="skip-link">Skip to sheet content</a>

      <header className="toolbar">
        <span className="app-mark" aria-hidden="true">{profile.initials}</span>
        <span className="file">
          <b>{profile.name}</b>
          <span className="hide-sm"> — Engineering drawing package · </span>
          <span className="hide-sm">portfolio.dft</span>
        </span>
        <span className="spacer" />

        <div className="group hide-sm" role="group" aria-label="Zoom">
          <button type="button" className="tool-btn" onClick={() => setZoom(ZOOMS[zi - 1])} disabled={zi <= 0} aria-label="Zoom out">
            <ZoomOut width={15} height={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="tool-btn zoom-readout"
            onClick={() => setZoom(1)}
            title="Fit sheet to window"
            aria-label={zoom === 1 ? "Zoom: fit to window" : `Zoom ${Math.round(zoom * 100)} percent, fit to window`}
          >
            {zoom === 1 ? "FIT" : `${Math.round(zoom * 100)}%`}
          </button>
          <button type="button" className="tool-btn" onClick={() => setZoom(ZOOMS[zi + 1])} disabled={zi >= ZOOMS.length - 1} aria-label="Zoom in">
            <ZoomIn width={15} height={15} aria-hidden="true" />
          </button>
        </div>

        <span className="sep hide-sm" aria-hidden="true" />

        <button
          type="button"
          className="tool-btn"
          onClick={toggleWorkspace}
          aria-pressed={lightWs}
          aria-label="Light workspace"
          title={lightWs ? "Dark workspace" : "Light workspace"}
        >
          {lightWs ? <Moon width={15} height={15} aria-hidden="true" /> : <Sun width={15} height={15} aria-hidden="true" />}
        </button>

        <span className="sep" aria-hidden="true" />

        <div className="group" role="group" aria-label="Sheet navigation">
          <button type="button" className="tool-btn" onClick={() => select(active - 1)} disabled={active === 0} aria-label="Previous sheet">
            <ChevronLeft width={16} height={16} aria-hidden="true" />
          </button>
          <span className="zoom-readout" aria-live="polite">
            {s.code}
          </span>
          <button type="button" className="tool-btn" onClick={() => select(active + 1)} disabled={active === sheets.length - 1} aria-label="Next sheet">
            <ChevronRight width={16} height={16} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`workspace ${zoom > 1 ? "zoomed" : ""}`}
        ref={wsRef}
        style={{ ["--s" as string]: String(fit * zoom) }}
      >
        <DrawingSheet sheets={sheets} active={active} panels={panels} />
      </div>

      <SheetTabs sheets={sheets} active={active} onSelect={select} />

      <footer className="statusbar">
        <span>SHEET <b>{s.code}</b> · {active + 1}/{sheets.length}</span>
        <span className="grow">{profile.status} · {profile.availability.toUpperCase()}</span>
        <span>
          <kbd>←</kbd> <kbd>→</kbd> SHEETS · <kbd>0</kbd>–<kbd>7</kbd> JUMP
        </span>
      </footer>
    </div>
  );
}
