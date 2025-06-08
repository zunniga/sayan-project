import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backunp.auladm.com",
      },
    ],
  },
};

export default nextConfig;
