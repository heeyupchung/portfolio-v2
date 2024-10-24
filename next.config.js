/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-v2",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;