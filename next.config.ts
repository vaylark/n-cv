import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Esto permite cualquier imagen de assets.aceternity.com
        search: '',
      },
      {
        protocol: 'https',
        hostname: "api.microlink.io",
        port: '',
        pathname: '/**',
        search: ''
      }
    ],
    loader: 'custom',
    loaderFile: './lib/cloudinaryLoader.ts'
  },
};

export default nextConfig;
