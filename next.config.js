/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
