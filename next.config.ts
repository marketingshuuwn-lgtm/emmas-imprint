import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    const fontPreloads = ["readex-site", "lemonada-site"]
      .map((font) => `</fonts/${font}.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin=anonymous`)
      .join(", ");
    return ["/", "/plants", "/plants/indoor", "/plants/outdoor", "/plants/offices", "/services"]
      .map((source) => ({
        source,
        missing: [
          { type: "header" as const, key: "rsc" },
          { type: "header" as const, key: "next-router-prefetch" },
        ],
        headers: [{ key: "Link", value: fontPreloads }],
      }));
  },
  async redirects() { return [{ source: "/projects", destination: "/plants", permanent: true }]; },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "thumb.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
