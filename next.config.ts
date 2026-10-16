import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/ayse-nur-sahin-matematik" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
