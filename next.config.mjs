/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_APP_ENV: process.env.APP_ENV,
  },
};

export default nextConfig;
