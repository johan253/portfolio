/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  eslint: {
    dirs: ["src"], // Only run ESLint on the 'src' directory during production builds
  }
};

export default nextConfig;
