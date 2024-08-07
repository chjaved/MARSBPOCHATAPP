/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_ZEGO_APP_ID: process.env.ZEGOCLOUD_APP_ID,
      NEXT_PUBLIC_ZEGO_SERVER_ID: process.env.ZEGOCLOUD_SERVER_ID,
    },
    reactStrictMode: false,
    images: {
      domains: ["localhost"],
    },
  };
  
  module.exports = nextConfig;
  