import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // static HTML export for Cloudflare Pages
  trailingSlash: true,    // required for CF Pages directory routing
  images: {
    unoptimized: true,    // no image optimization server in static export
  },
};

export default nextConfig;
