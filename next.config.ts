import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
        
      },
    ],
    unoptimized: true,
  },
  experimental: {
    // Increase server action body size limit to allow image uploads
    serverActions: {
      // Accept up to 10 MB request bodies for Server Actions
      bodySizeLimit: "10mb",
    },
  }
};

export default nextConfig;
