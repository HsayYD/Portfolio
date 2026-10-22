import { Download } from "lucide-react";
import { profile } from "@/data/profile";

type Props = { variant?: "primary" | "plain"; label?: string; className?: string };

/** Downloads the resume PDF stored at profile.resumePath (inside /public). */
export function ResumeDownload({ variant = "primary", label = "Download resume", className = "" }: Props) {
  return (
    <a
      href={profile.resumePath}
      download="Yashashwin-Doranala-Resume.pdf"
      className={`btn ${variant === "primary" ? "primary" : ""} ${className}`}
    >
      <Download aria-hidden="true" />
      {label}
      <span className="sr-only"> (PDF)</span>
    </a>
  );
}
