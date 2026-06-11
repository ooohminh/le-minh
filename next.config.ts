import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages needs static export; Vercel runs Next.js natively
  output: process.env.VERCEL ? undefined : "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;