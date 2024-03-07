/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      // {
      //   protocol: "https",
      //   hostname: "https://bee-hive.vercel.app",
      // },
      {
        protocol: "https",
        hostname: "https://beehive-production.up.railway.app",
      },
    ],
  },
};

module.exports = nextConfig;
