import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH?.replace(/\/$/, "") ?? "";

const nextConfig: NextConfig = {
  output: isGitHubPagesBuild ? "export" : undefined,
  trailingSlash: isGitHubPagesBuild ? true : undefined,
  basePath: githubPagesBasePath || undefined,
  assetPrefix: githubPagesBasePath || undefined,
  images: isGitHubPagesBuild ? { unoptimized: true } : undefined,
  typescript: isGitHubPagesBuild
    ? { tsconfigPath: "tsconfig.github-pages.json" }
    : undefined,
};

export default nextConfig;
