/**
 * Illustrative isometric line drawing of an access platform — deck with
 * grating, handrails, stair, opening, bracing and columns — with item
 * balloons. Purely generated geometry (no image asset needed).
 */

type V3 = [number, number, number];

const S = 32; // px per unit
const OX = 200;
const OY = 150;
const C = Math.cos(Math.PI / 6);

const p = ([x, y, z]: V3) => `${(OX + (x - y) * C * S).toFixed(1)},${(OY + (x + y) * 0.5 * S - z * S).toFixed(1)}`;
const pt = (v: V3) => p(v).split(",").map(Number) as [number, number];
const line = (a: V3, b: V3) => `M${p(a)}L${p(b)}`;
const poly = (pts: V3[]) => `M${pts.map(p).join("L")}Z`;

const X = 6; // deck length
const Y = 3; // deck width
const H = 2.4; // deck height
const T = 0.18; // deck edge depth
const R = 1.1; // handrail height
const SX0 = 0.5; // stair x start
const SX1 = 1.5; // stair x end
const SRUN = 3.4; // stair horizontal run
const STEPS = 8;

function build() {
  const main: string[] = [];
  const thin: string[] = [];
  const hidden: string[] = [];

  // columns (back ones are hidden behind/below the deck)
  const cols: [number, number, boolean][] = [
    [0, 0, true], [3, 0, true], [X, 0, false],
    [0, Y, false], [3, Y, false], [X, Y, false],
  ];
  for (const [x, y, hid] of cols) (hid ? hidden : main).push(line([x, y, 0], [x, y, H - T]));

  // bracing / cross members on the visible faces
  main.push(line([3, Y, 0.15], [X, Y, H - T - 0.1]));
  main.push(line([X, 0, 0.15], [X, Y, H - T - 0.1]));
  hidden.push(line([0, 0, 0.15], [3, 0, H - T - 0.1]));
  thin.push(line([0, Y, H - T - 0.45], [X, Y, H - T - 0.45]));

  // deck top + edge depth
  main.push(poly([[0, 0, H], [X, 0, H], [X, Y, H], [0, Y, H]]));
  main.push(line([0, Y, H - T], [X, Y, H - T]));
  main.push(line([X, Y, H - T], [X, 0, H - T]));
  main.push(line([0, Y, H], [0, Y, H - T]));
  main.push(line([X, Y, H], [X, Y, H - T]));
  main.push(line([X, 0, H], [X, 0, H - T]));

  // grating hatch
  for (let y = 0.3; y < Y; y += 0.3) thin.push(line([0.08, y, H], [X - 0.08, y, H]));

  // handrails: back (y=0), left (x=0), right (x=X), front (y=Y) with stair opening
  const rail = (a: V3, b: V3, posts: number) => {
    for (const z of [R, R / 2]) main.push(line([a[0], a[1], H + z], [b[0], b[1], H + z]));
    for (let i = 0; i <= posts; i++) {
      const t = i / posts;
      const x = a[0] + (b[0] - a[0]) * t;
      const y = a[1] + (b[1] - a[1]) * t;
      main.push(line([x, y, H], [x, y, H + R]));
    }
    thin.push(line([a[0], a[1], H + 0.1], [b[0], b[1], H + 0.1])); // toe board
  };
  rail([0, 0, 0], [X, 0, 0], 4);
  rail([0, 0, 0], [0, Y, 0], 2);
  rail([X, 0, 0], [X, Y, 0], 2);
  rail([SX1, Y, 0], [X, Y, 0], 3);

  // stair: stringers, treads, risers on outer stringer, handrails
  const step = (i: number): [number, number] => [Y + (SRUN * i) / STEPS, H - (H * i) / STEPS];
  for (const x of [SX0, SX1]) main.push(line([x, Y, H - T], [x, Y + SRUN, 0]));
  for (let i = 1; i <= STEPS; i++) {
    const [y0, z0] = step(i - 1);
    const [y1, z1] = step(i);
    // riser drop then tread
    main.push(line([SX1, y0, z0], [SX1, y0, z1]));
    main.push(line([SX1, y0, z1], [SX1, y1, z1]));
    thin.push(line([SX0, y0, z1], [SX1, y0, z1]));
  }
  for (const x of [SX0, SX1]) {
    main.push(line([x, Y, H + R], [x, Y + SRUN, R]));
    main.push(line([x, Y + SRUN, 0], [x, Y + SRUN, R]));
    main.push(line([x, Y, H], [x, Y, H + R]));
  }

  // ground line
  thin.push(line([-0.4, Y, 0], [X + 0.4, Y, 0]));
  thin.push(line([X, -0.4, 0], [X, Y + 0.4, 0]));

  return { main: main.join(""), thin: thin.join(""), hidden: hidden.join("") };
}

const geo = build();

const balloons: { n: number; at: V3; to: [number, number]; label: string }[] = [
  { n: 1, at: [4.2, 1.6, H], to: [372, 58], label: "Floor grating" },
  { n: 2, at: [3, 0, H + R], to: [262, 22], label: "Handrail" },
  { n: 3, at: [SX1, Y + 2.2, 0.85], to: [74, 290], label: "Staircase" },
  { n: 4, at: [1.0, Y, H], to: [36, 168], label: "Opening" },
  { n: 5, at: [4.6, Y, 1.25], to: [330, 300], label: "Cross member" },
  { n: 6, at: [X, Y, 0.6], to: [400, 236], label: "Structural support" },
];

export function PlatformIsometric({ className = "" }: { className?: string }) {
  return (
    <figure className={`iso ${className}`}>
      <svg viewBox="0 0 440 330" role="img" aria-labelledby="iso-t iso-d">
        <title id="iso-t">Isometric view of an access platform</title>
        <desc id="iso-d">
          Illustrative line drawing of a raised platform with floor grating, handrails, a staircase, an
          opening, cross members and structural support columns.
        </desc>
        <path d={geo.hidden} className="ln-hidden" />
        <path d={geo.thin} className="ln-thin" />
        <path d={geo.main} className="ln-main" />
        {balloons.map((b) => {
          const [x, y] = pt(b.at);
          const [tx, ty] = b.to;
          const dx = tx - x, dy = ty - y, d = Math.hypot(dx, dy);
          const ex = tx - (dx / d) * 10, ey = ty - (dy / d) * 10;
          return (
            <g key={b.n} className="bln">
              <circle cx={x} cy={y} r="1.8" className="dot" />
              <path d={`M${x},${y}L${ex.toFixed(1)},${ey.toFixed(1)}`} className="leader" />
              <circle cx={tx} cy={ty} r="10" className="ring" />
              <text x={tx} y={ty + 3.6} textAnchor="middle">{b.n}</text>
            </g>
          );
        })}
      </svg>
      <figcaption>
        <ol className="iso-legend">
          {balloons.map((b) => (
            <li key={b.n}>
              <span className="balloon">{b.n}</span>
              {b.label}
            </li>
          ))}
        </ol>
        <div className="label" style={{ marginTop: "0.6em" }}>
          View A — isometric · illustrative arrangement · not to scale
        </div>
      </figcaption>
    </figure>
  );
}
