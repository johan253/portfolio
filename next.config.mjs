/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: 
          isDev
            ? "http://127.0.0.1:8000/api/:path*"
            : "/api/"
      },
      {
        source: "/docs",
        destination: 
          isDev
            ? "http://127.0.0.1:8000/api/docs"
            : "/api/docs"
      },
      {
        source: "/openapi.json",
        destination: 
          isDev
            ? "http://127.0.0.1:8000/api/openapi.json"
            : "/api/openapi.json"
      }
    ];
  }
};

export default nextConfig;
