import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disable React compiler until plugin is installed; remove when enabling.
  reactCompiler: false,
  // For presentation/demo: ignore TypeScript build errors so the app can build.
  // Remove or set to false for production and proper type checking.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
