import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Removed for dynamic features (admin panel)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
