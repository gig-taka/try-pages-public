/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/try-pages-public",
  assetPrefix: "/try-pages-public/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
