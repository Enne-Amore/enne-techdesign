import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://ennetechdesign.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
