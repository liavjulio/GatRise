import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Build optimization - disable experimental optimizeCss for now
  // experimental: {
  //   optimizeCss: true,
  // },
  
  // Output optimization - remove for Vercel deployment
  // output: 'standalone',
};

export default nextConfig;
