import type { Metadata, Viewport } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans-condensed/500.css";
import "@fontsource/ibm-plex-sans-condensed/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./globals.css";
import "./sheets.css";
import { profile } from "@/data/profile";

const description =
  "Yashashwin Doranala — Mechanical Design Engineer specialising in Solid Edge, manufacturing drawings, CAD automation and engineering software. Built an automated platform designer that cuts modelling time from 16–24 hours to 1–2 minutes.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name} — Mechanical Design Engineer | CAD Automation`,
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Mechanical Design Engineer",
    "CAD Automation",
    "Solid Edge",
    "Solid Edge COM API",
    "Manufacturing Drawings",
    "Sheet Metal",
    "EN ISO 14122",
    "Engineering Software",
    "Yashashwin Doranala",
  ],
  openGraph: {
    title: `${profile.name} — Engineering Drawing Package`,
    description,
    type: "profile",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141619",
  width: "device-width",
  initialScale: 1,
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Mechanical Design Engineer",
  email: `mailto:${profile.contact.email}`,
  sameAs: [profile.contact.linkedin],
  knowsAbout: ["Mechanical design", "CAD automation", "Solid Edge", "Manufacturing drawings", "FEA", "CFD", "Full-stack development"],
};

// Restore the saved workspace shade before paint to avoid a flash.
const themeScript = `try{var w=localStorage.getItem("yd-workspace");if(w==="light")document.documentElement.dataset.workspace="light"}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
