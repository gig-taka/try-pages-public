/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : "/try-pages-public";
const nextConfig = () => {
  const env = {
    BUILD_DATETIME: new Date().toString(),
  };
  return {
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
    env,
  };
};
export default nextConfig;
