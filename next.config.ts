import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel manages its own output format — do NOT set output: "standalone".
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
