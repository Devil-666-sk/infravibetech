/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  // ✅ Ignore ESLint errors during Vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Performance Optimizations
  swcMinify: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  experimental: {
    modern: true,
  },
};

module.exports = nextConfig;
