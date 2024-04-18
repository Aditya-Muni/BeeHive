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
        hostname: "beehive-hmb1.onrender.com",
      },
    ],
  },
};

module.exports = nextConfig;
