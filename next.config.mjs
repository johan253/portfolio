/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*"
      },
      {
        source: "/docs/:path*",
        destination: "http://127.0.0.1:8000/docs/:path*"
      },
      {
        source: "/openapi.json",
        destination: "http://127.0.0.1:8000/openapi.json"
      }
    ];
  }
};

export default nextConfig;
