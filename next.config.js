/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    env: {
      API_URL: process.env.API_URL || 'https://your-cloud-run-url',
    },
    output: 'export',
  }
  
  module.exports = nextConfig;
  