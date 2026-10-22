import { profile } from "./profile";

export type SheetMeta = {
  /** URL hash / DOM id, e.g. "g02" */
  id: string;
  /** Short code shown on the tab, e.g. "G02" */
  code: string;
  /** Tab label */
  tab: string;
  /** Full drawing title shown in the title block */
  title: string;
  /** Short subtitle / scope line */
  scope: string;
  drawingNo: string;
  scale: string;
};

const raw: Omit<SheetMeta, "drawingNo">[] = [
  { id: "g00", code: "G00", tab: "GENERAL", title: "GENERAL ARRANGEMENT", scope: "Introduction & overview", scale: "1:1" },
  { id: "g01", code: "G01", tab: "EXPERIENCE", title: "PROFESSIONAL EXPERIENCE", scope: "Employment record", scale: "1:1" },
  { id: "g02", code: "G02", tab: "PLATFORM DESIGNER", title: "AUTOMATED PLATFORM DESIGNER", scope: "Flagship project", scale: "NTS" },
  { id: "g03", code: "G03", tab: "CAD AUTOMATION", title: "NATURAL-LANGUAGE CAD AUTOMATION", scope: "Claude MCP × Solid Edge COM", scale: "NTS" },
  { id: "g04", code: "G04", tab: "SOFTWARE ENGINEERING", title: "SOFTWARE ENGINEERING", scope: "Full-stack SaaS platform", scale: "NTS" },
  { id: "g05", code: "G05", tab: "ENGINEERING PROJECTS", title: "ENGINEERING PROJECTS", scope: "Academic design & analysis", scale: "NTS" },
  { id: "g06", code: "G06", tab: "SKILLS & EDUCATION", title: "SKILLS & EDUCATION", scope: "Tools, methods & qualifications", scale: "1:1" },
  { id: "g07", code: "G07", tab: "CONTACT", title: "CONTACT & AVAILABILITY", scope: "Get in touch", scale: "1:1" },
];

export const sheets: SheetMeta[] = raw.map((s, i) => ({
  ...s,
  drawingNo: `${profile.drawingPrefix}-${String(i + 1).padStart(3, "0")}`,
}));

export const sheetIndex = (id: string) => sheets.findIndex((s) => s.id === id);
