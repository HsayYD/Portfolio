/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PROFILE DATA: single source of truth for all resume details.
 *  Source: Yashashwin_Doranala_Resume.docx. Edit here; nothing else needs
 *  to change when the resume is updated.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Yashashwin Doranala",
  initials: "YD",
  positioning: "Mechanical Design Engineer | CAD Automation | Engineering Software",
  discipline: "Mechanical Design & Engineering Automation",
  status: "OPEN TO OPPORTUNITIES",
  availability: "Available to join immediately",

  summary:
    "Mechanical design engineer with hands-on experience in Solid Edge, sheet-metal manufacturing drawings and assembly documentation, combined with software development and CAD automation skills. I built an in-house platform design tool that cut modelling time from 16–24 hours to under 2 minutes.",

  interests: ["Mechanical design", "Design automation", "CAD customisation"],

  contact: {
    email: "Yashdoranala@gmail.com",
    phone: "+91-7993767444",
    phoneHref: "tel:+917993767444",
    linkedin: "https://www.linkedin.com/in/yashashwin-doranala",
    linkedinLabel: "linkedin.com/in/yashashwin-doranala",
  },

  /** Resume PDF inside /public. Replace the file to update the download. */
  resumePath: "/resume/Yashashwin-Doranala-Resume.pdf",

  languages: ["English", "Hindi", "Telugu", "Spanish"],

  siteUrl: "https://yashashwin-portfolio.vercel.app",
};

/* ── Experience ──────────────────────────────────────────────────────── */

export type Role = {
  id: string;
  track: "MECHANICAL DESIGN" | "SOFTWARE ENGINEERING";
  employer: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  responsibilities: string[];
  tools: string[];
  outcomes: { value: string; label: string }[];
  sheetLinks: { id: string; label: string }[];
};

export const experience: Role[] = [
  {
    id: "gpi",
    track: "MECHANICAL DESIGN",
    employer: "GPI India",
    title: "Associate Engineer II",
    start: "Jun 2026",
    end: "Present",
    summary:
      "Design, drafting and manufacturing documentation for equipment across GPI’s batter-line process, plus CAD automation tools that remove repetitive modelling work.",
    responsibilities: [
      "Modelled and drafted equipment across GPI’s batter-line process, including powder hoppers, batter tanks and associated assemblies, translating lead engineers’ specifications into detailed 3D models, fully defined 2D manufacturing drawings, sections, detail views and assembly documentation.",
      "Prepared manufacturing documentation including special-component drawings, laser-cut DXF files created in ProgeCAD and sheet-metal bend drawings in Solid Edge; uploaded them to Ridder iQ ERP to support fabrication and assembly.",
      "Created and maintained Bills of Materials in Ridder iQ ERP with associated CAD and manufacturing files, supporting accurate documentation and traceability.",
      "Followed lead-engineer specifications and drawing standards, including EN ISO 13920 for general tolerances on welded constructions.",
      "Developed an MCP integration for Claude with Solid Edge COM automation, letting engineers describe requirements in natural language and generate tailored 3D CAD models.",
      "Developed an automated platform designer that converts 2D layouts into complete platform assemblies in accordance with EN ISO 14122.",
    ],
    tools: ["Solid Edge", "ProgeCAD", "Ridder iQ ERP", "Solid Edge COM API", "MCP", "EN ISO 13920", "EN ISO 14122"],
    outcomes: [{ value: "16–24 h → 1–2 min", label: "Platform modelling time" }],
    sheetLinks: [
      { id: "g02", label: "G02 Platform Designer" },
      { id: "g03", label: "G03 CAD Automation" },
    ],
  },
  {
    id: "samsi",
    track: "SOFTWARE ENGINEERING",
    employer: "SAMSI Techno",
    title: "Software Engineer",
    start: "Jan 2026",
    end: "Jun 2026",
    summary:
      "Built a full-stack SaaS platform from scratch for idea management and product discovery.",
    responsibilities: [
      "Built configurable work items and forms, workflow-driven approvals and workspace collaboration.",
      "Added AI-powered insights that summarise ideas and identify related items.",
      "Owned end-to-end development across frontend UI, backend APIs, database design, authentication, AI features and deployment.",
    ],
    tools: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL 18", "pgvector", "OpenAI", "Socket.IO", "Docker", "nginx"],
    outcomes: [],
    sheetLinks: [{ id: "g04", label: "G04 Software Engineering" }],
  },
];

/* ── Education ───────────────────────────────────────────────────────── */

export type Education = {
  id: string;
  institution: string;
  qualification: string;
  dates: string;
  status: string;
};

export const education: Education[] = [
  {
    id: "mit",
    institution: "Manipal Institute of Technology",
    qualification: "B.Tech, Mechanical Engineering",
    dates: "2020 – 2024",
    status: "Awarded",
  },
  {
    id: "liverpool",
    institution: "University of Liverpool, UK",
    qualification: "MSc Aerospace Engineering coursework",
    dates: "2024 – 2025",
    status: "Studies interrupted",
  },
  {
    id: "tphs",
    institution: "Torrey Pines High School",
    qualification: "High school",
    dates: "2020 – 2024",
    status: "",
  },
];

/* ── Skills ──────────────────────────────────────────────────────────── */

export type SkillGroup = { ref: string; group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    ref: "S1",
    group: "CAD & 3D modelling",
    items: ["Solid Edge", "ProgeCAD", "SolidWorks", "Creo", "CATIA V5", "Autodesk Fusion", "3D modelling"],
  },
  {
    ref: "S2",
    group: "Manufacturing drawings & sheet metal",
    items: [
      "2D manufacturing drawings",
      "Sections & detail views",
      "Sheet metal",
      "Special-part drawings",
      "DXF & bend drawings",
      "EN ISO 13920",
    ],
  },
  {
    ref: "S3",
    group: "Assembly documentation & BOM management",
    items: ["Assembly documentation", "BOM management", "Ridder iQ ERP (engineering files & BOMs)", "EN ISO 14122"],
  },
  {
    ref: "S4",
    group: "CAD automation & programming",
    items: ["Solid Edge COM API automation", "C#", "Python", "C"],
  },
  {
    ref: "S5",
    group: "FEA, CFD & simulation",
    items: ["ANSYS Fluent", "ANSYS Mechanical", "Abaqus", "MATLAB (FEA)", "SU2"],
  },
  {
    ref: "S6",
    group: "Full-stack development",
    items: ["TypeScript / JavaScript", "Next.js"],
  },
];

/* ── Academic projects ───────────────────────────────────────────────── */

export type AcademicProject = {
  id: string;
  ref: string;
  title: string;
  context: string;
  dates: string;
  objective: string;
  approach: string;
  tools: string[];
  keyWork: string[];
  result: string | null;
  figures: string[]; // keys into images.ts
};

export const academicProjects: AcademicProject[] = [
  {
    id: "drone",
    ref: "P1",
    title: "Coaxial Photo-Surveying Drone",
    context: "Design, manufacture and test · University of Liverpool",
    dates: "Sep 2024 – Apr 2025",
    objective: "Design, manufacture and test a coaxial-rotor drone for photographic surveying, from customer requirements and UK standards.",
    approach: "Full CAD definition and GD&T drawings, hand-built MATLAB FE models for critical parts, then manufacture and avionics integration.",
    tools: ["Creo", "Autodesk Fusion", "MATLAB", "Pixhawk"],
    keyWork: [
      "Created full 3D CAD assemblies and GD&T manufacturing drawings; coordinated 3D printing, CNC and laser cutting.",
      "Wrote MATLAB finite-element models (stiffness matrices, boundary conditions, nodal displacements and stresses) for the critical load-bearing parts.",
      "Integrated a Pixhawk flight controller with GPS, ESCs, BLDC motors and swashplate servos; prepared the design reports and BOM.",
    ],
    result: null,
    figures: ["dronePrototype"],
  },
  {
    id: "landing-gear",
    ref: "P2",
    title: "FEA and Vibration Study of Aircraft Landing Gear",
    context: "Structural dynamics study",
    dates: "Sep 2024 – Nov 2024",
    objective: "Assess stresses and vibration behaviour of an aircraft landing gear to locate critical members and resonance risks.",
    approach: "Custom MATLAB FEA code for static, modal and transient analysis, verified against Abaqus.",
    tools: ["MATLAB", "Abaqus"],
    keyWork: [
      "Built custom MATLAB FEA code for static, modal and transient analysis.",
      "Checked stresses, mode shapes and frequencies against Abaqus.",
    ],
    result: "Identified the critical members and resonance risks.",
    figures: [],
  },
  {
    id: "solar",
    ref: "P3",
    title: "3D CFD Study of Concentrated Solar-Thermal Collectors",
    context: "B.Tech thesis",
    dates: "Jan 2024 – Jun 2024",
    objective: "Improve the thermo-hydraulic performance of a parabolic trough absorber.",
    approach: "ANSYS Fluent model of an absorber with grooves and ribs: RNG k-ε turbulence, two-phase nanofluid, user-defined functions.",
    tools: ["ANSYS Fluent", "UDFs"],
    keyWork: [
      "Modelled grooved and ribbed absorber geometries in 3D.",
      "Simulated two-phase nanofluid flow with RNG k-ε turbulence and custom UDFs.",
    ],
    result: "Improved geometry with nanofluids achieved up to 8.8× higher performance evaluation criterion.",
    figures: ["solarGeometry", "solarContours"],
  },
];
