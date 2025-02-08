/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Any request to `/api/...`
        destination: "http://localhost:8000/:path*", // Redirect to backend
      },
    ];
  },
};

module.exports = nextConfig;
