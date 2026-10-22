import type { NextConfig } from "next";

// Static export: `npm run build` writes a fully static site to /out
// that can be hosted on GitHub Pages, Netlify, Vercel, S3, etc.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
