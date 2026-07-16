import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  images: {
    qualities: [75, 82, 88, 90, 92],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/team/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/the-banking-five/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/the-banking-five",
        destination: "/mai-tan-thanh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
