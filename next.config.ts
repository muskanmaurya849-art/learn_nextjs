import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.90.243.45", "192.168.1.7", "localhost"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
