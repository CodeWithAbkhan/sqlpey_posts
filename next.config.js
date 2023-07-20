/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["sqlpey.com","images.unsplash.com"],
  },
};

module.exports = nextConfig;
