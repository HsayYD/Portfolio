import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/data/profile";

/** Branded 404: a drawing sheet that wasn't issued, with a way back to G00. */
export default function NotFound() {
  return (
    <main className="nf">
      <div className="sheet nf-sheet">
        <div className="frame nf-frame">
          <div className="nf-body">
            <header className="sh-head">
              <div className="code" aria-hidden="true">404</div>
              <div className="ttl">
                <span className="label">Sheet not issued</span>
                <h1>Drawing not found</h1>
              </div>
            </header>
            <ol className="notes">
              <li>This sheet isn&apos;t part of {profile.name}&apos;s drawing package.</li>
              <li>Check the address, or return to the general arrangement.</li>
            </ol>
            <Link className="btn primary" href="/">
              <ArrowLeft aria-hidden="true" />
              Back to G00 · General
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
