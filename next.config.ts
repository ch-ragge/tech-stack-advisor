import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tech-stack-advisor",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

export default nextConfig;
