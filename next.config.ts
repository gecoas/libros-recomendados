import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? "/libros-recomendados" : undefined,
  assetPrefix: isGithubPages ? "/libros-recomendados/" : undefined,
  trailingSlash: isGithubPages ? true : undefined,
};

export default nextConfig;
