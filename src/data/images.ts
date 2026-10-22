/**
 * ─────────────────────────────────────────────────────────────────────────
 *  IMAGE REGISTRY — every project figure on the site is defined here.
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  To replace a placeholder with a real image:
 *    1. Save the file at the `src` path below (inside /public).
 *    2. Set `ready: true` for that entry.
 *    3. Optional: add `full` with a larger version for the click-to-enlarge view.
 *  The figure frame, number and caption stay exactly where they are.
 *
 *  `ratio` is width / height and reserves the layout space, so pick images
 *  close to that aspect (or change the ratio here).
 */

export type FigureDef = {
  fig: string;
  caption: string;
  src: string;
  alt: string;
  ratio: number;
  ready: boolean;
  /** Optional larger file shown when the image is clicked (defaults to src). */
  full?: string;
};

export const images = {
  /* G00 — optional portrait */
  portrait: {
    fig: "FIG. 00",
    caption: "YASHASHWIN DORANALA",
    src: "/images/profile/portrait.jpg",
    full: "/images/profile/portrait-full.jpg",
    alt: "Portrait of Yashashwin Doranala",
    ratio: 4 / 5,
    ready: true,
  },

  /* G02 — Automated Platform Designer */
  platformAssembly: {
    fig: "FIG. 02.1",
    caption: "GENERATED PLATFORM ASSEMBLY",
    src: "/images/platform-designer/generated-assembly.png",
    alt: "Isometric view of a generated platform assembly in Solid Edge: deck with grating, handrails, two staircases, cross members, bracing and support legs",
    ratio: 903 / 616,
    ready: true,
  },
  platformLayout: {
    fig: "FIG. 02.2",
    caption: "INPUT LAYOUT",
    src: "/images/platform-designer/input-layout.jpg",
    full: "/images/platform-designer/input-layout-full.png",
    alt: "2D platform layout in the drawing window: a 9.000 × 2.000 deck with a 900 opening and two 800-wide stairs of 10 × 200 steps",
    ratio: 4 / 3,
    ready: true,
  },
  platformModel: {
    fig: "FIG. 02.3",
    caption: "GENERATED MODEL",
    src: "/images/platform-designer/generated-model.jpg",
    full: "/images/platform-designer/generated-model-full.jpg",
    alt: "Generated 3D platform model in the drawing window's viewer: deck, railings, two stairs, bracing and support legs",
    ratio: 4 / 3,
    ready: true,
  },
  platformDetail: {
    fig: "FIG. 02.4",
    caption: "STAIR DETAIL",
    src: "/images/platform-designer/detail-view.jpg",
    full: "/images/platform-designer/detail-view-full.jpg",
    alt: "Generated stair in Solid Edge: stringers, treads and handrails",
    ratio: 4 / 3,
    ready: true,
  },

  /* G03 — CAD Automation */
  claudeManhole: {
    fig: "FIG. 03.1",
    caption: "MANHOLE BUILT BY CLAUDE",
    src: "/images/cad-automation/claude-manhole.jpg",
    full: "/images/cad-automation/claude-manhole-full.png",
    alt: "Manhole cover assembly modelled in Solid Edge by Claude through the MCP integration: domed cover, clamping arms, hinge and wing-nut handle",
    ratio: 1094 / 602,
    ready: true,
  },
  manholeOverlay: {
    fig: "FIG. 03.2",
    caption: "OVERLAY ON SUPPLIER MODEL",
    src: "/images/cad-automation/manhole-overlay.jpg",
    full: "/images/cad-automation/manhole-overlay-full.png",
    alt: "Assembly overlaying the Claude-built manhole (blue) on the supplier's manhole model (light grey); the two coincide, with both colours showing through where surfaces overlap",
    ratio: 1245 / 698,
    ready: true,
  },

  /* G05 — Academic projects */
  droneAssembly: {
    fig: "FIG. 05.1",
    caption: "DRONE — CAD ASSEMBLY",
    src: "/images/drone-project/cad-assembly.png",
    alt: "CAD assembly of the coaxial photo-surveying drone",
    ratio: 4 / 3,
    ready: false,
  },
  dronePrototype: {
    fig: "FIG. 05.2",
    caption: "DRONE — PROTOTYPE",
    src: "/images/drone-project/prototype.jpg",
    alt: "Prototype of the coaxial photo-surveying drone",
    ratio: 4 / 3,
    ready: false,
  },
  gearModel: {
    fig: "FIG. 05.3",
    caption: "LANDING GEAR — FE MODEL",
    src: "/images/fea-analysis/fe-model.png",
    alt: "Finite-element model of the aircraft landing gear",
    ratio: 4 / 3,
    ready: false,
  },
  gearModes: {
    fig: "FIG. 05.4",
    caption: "LANDING GEAR — ANALYSIS RESULTS",
    src: "/images/fea-analysis/results.png",
    alt: "Analysis results for the aircraft landing gear",
    ratio: 4 / 3,
    ready: false,
  },
  solarGeometry: {
    fig: "FIG. 05.5",
    caption: "SOLAR COLLECTOR — GEOMETRY / MESH",
    src: "/images/cfd-solar/geometry-mesh.png",
    alt: "Geometry and mesh of the solar-thermal collector CFD model",
    ratio: 4 / 3,
    ready: false,
  },
  solarContours: {
    fig: "FIG. 05.6",
    caption: "SOLAR COLLECTOR — CFD RESULTS",
    src: "/images/cfd-solar/results.png",
    alt: "CFD results for the solar-thermal collector",
    ratio: 4 / 3,
    ready: false,
  },
} satisfies Record<string, FigureDef>;

export type ImageKey = keyof typeof images;
