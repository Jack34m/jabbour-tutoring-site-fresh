/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Optional: Enable incremental builds
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
