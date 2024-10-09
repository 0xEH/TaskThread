/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
