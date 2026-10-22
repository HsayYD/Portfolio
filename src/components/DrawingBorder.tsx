const COLS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const ROWS = ["A", "B", "C", "D", "E", "F"];

/** Zone references and centring marks drawn around the sheet edge. */
export function DrawingBorder() {
  return (
    <div aria-hidden="true">
      <div className="zones top">{COLS.map((c) => <span key={c}>{c}</span>)}</div>
      <div className="zones bottom">{COLS.map((c) => <span key={c}>{c}</span>)}</div>
      <div className="zones left">{ROWS.map((r) => <span key={r}>{r}</span>)}</div>
      <div className="zones right">{ROWS.map((r) => <span key={r}>{r}</span>)}</div>
      <i className="center-mark t" />
      <i className="center-mark b" />
      <i className="center-mark l" />
      <i className="center-mark r" />
    </div>
  );
}
