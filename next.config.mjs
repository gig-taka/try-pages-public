/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : "/try-pages-public";
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "docs",
  basePath: basePath,
  assetPrefix: isDev ? "" : "/try-pages-public/",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
};

export default nextConfig;
