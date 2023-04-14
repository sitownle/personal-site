/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mysql2"]
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;
