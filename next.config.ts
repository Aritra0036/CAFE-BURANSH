import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: "/CAFE-BURANSH",     // 👈 Replace with actual repo name
  assetPrefix: "/CAFE-BURANSH",
};

export default nextConfig;
