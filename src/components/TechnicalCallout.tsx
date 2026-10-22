import type { ReactNode } from "react";

type Props = {
  title: string;
  ref_?: string;
  tone?: "default" | "accent" | "mark";
  children: ReactNode;
  className?: string;
};

/** A boxed drawing note with a labelled header strip. */
export function TechnicalCallout({ title, ref_, tone = "default", children, className = "" }: Props) {
  return (
    <aside className={`callout ${tone === "default" ? "" : tone} ${className}`}>
      <div className="c-head">
        {ref_ && <span className={`balloon ${tone === "accent" ? "accent" : ""}`}>{ref_}</span>}
        {title}
      </div>
      <div className="c-body">{children}</div>
    </aside>
  );
}
