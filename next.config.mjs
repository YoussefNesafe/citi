/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'citideveloper.com',
        protocol: 'https',
      }
    ]
  }
};

export default nextConfig;
