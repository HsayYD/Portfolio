"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

type Shown = { src: string; caption: string; alt: string };

/**
 * Full-size image viewer. Any element with `data-full` (rendered by
 * ProjectImagePlaceholder) opens it on click. Closes with Esc, the close
 * button or a click outside the image. Mounted once, outside the scaled
 * sheet, so it always covers the whole window.
 */
export function Lightbox() {
  const [shown, setShown] = useState<Shown | null>(null);
  const [closing, setClosing] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-full]");
      if (!el) return;
      e.preventDefault();
      opener.current = el;
      setClosing(false);
      setShown({ src: el.dataset.full!, caption: el.dataset.caption ?? "", alt: el.dataset.alt ?? "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Play the short exit animation first; unmount when it ends. With reduced
  // motion there is no scale, but the fade still runs, so animationend fires.
  const close = useCallback(() => setClosing(true), []);

  useEffect(() => {
    if (!shown) return;
    closeRef.current?.focus();
    // Capture phase: stop sheet shortcuts (arrows, F, digits) while open.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab") { e.preventDefault(); e.stopPropagation(); }
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      opener.current?.focus();
    };
  }, [shown, close]);

  if (!shown) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shown.caption}
      data-closing={closing ? "" : undefined}
      onClick={close}
      onAnimationEnd={(e) => { if (closing && e.target === e.currentTarget) setShown(null); }}
    >
      <button ref={closeRef} type="button" className="lb-close" onClick={close} aria-label="Close image">
        <X aria-hidden="true" />
      </button>
      <figure className="lb-fig" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={shown.src} alt={shown.alt} />
        <figcaption>{shown.caption}</figcaption>
      </figure>
    </div>
  );
}
