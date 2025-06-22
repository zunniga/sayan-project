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
       {
        protocol: "https",
        hostname: "verycerts.sfo3.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
