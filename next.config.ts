import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Allow <img> tags with external URLs (we use native img for simplicity)
  // This is intentional — next/image would require explicit width/height
};

export default nextConfig;
