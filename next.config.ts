import type { NextConfig } from "next";

/**
 * PK365 - Next.js Configuration
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  turbopack: {},
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pk365-app.pk",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy BN55 routes → PK365
      { source: "/download-bn55", destination: "/download-pk365", permanent: true },
      { source: "/deposit-money-in-bn55", destination: "/deposit-money-in-pk365", permanent: true },
      { source: "/withdraw-money-from-bn55", destination: "/withdraw-money-from-pk365", permanent: true },
      { source: "/bn55-for-pc", destination: "/pk365-for-pc", permanent: true },
      { source: "/BN55.webp", destination: "/PK365-Game-Icon.webp", permanent: true },
      // Older brand routes → PK365
      { source: "/download-3-patti-world", destination: "/download-pk365", permanent: true },
      { source: "/deposit-money-in-3-patti-world", destination: "/deposit-money-in-pk365", permanent: true },
      { source: "/withdraw-money-from-3-patti-world", destination: "/withdraw-money-from-pk365", permanent: true },
      { source: "/3-patti-world-for-pc", destination: "/pk365-for-pc", permanent: true },
      { source: "/download-card-rummy", destination: "/download-pk365", permanent: true },
      { source: "/deposit-money-in-card-rummy", destination: "/deposit-money-in-pk365", permanent: true },
      { source: "/withdraw-money-from-card-rummy", destination: "/withdraw-money-from-pk365", permanent: true },
      { source: "/card-rummy-for-pc", destination: "/pk365-for-pc", permanent: true },
      // Legacy blog catch-alls → new blog hub
      { source: "/blog/is-bn55-real-or-fake", destination: "/blog/is-pk365-safe-legal-pakistan", permanent: true },
      { source: "/blog/create-bn55-account-and-login", destination: "/blog/create-pk365-account-and-login", permanent: true },
      { source: "/blog/tips-to-win-big-in-bn55", destination: "/blog/tips-to-win-big-in-pk365", permanent: true },
      { source: "/blog/bn55-app-review-2026", destination: "/blog/pk365-app-review-2026", permanent: true },
      { source: "/blog/bn55-bonuses-vip-guide", destination: "/blog/pk365-welcome-bonus-guide", permanent: true },
      { source: "/blog/how-to-use-bn55-app-pakistan-guide-2026", destination: "/blog/how-to-use-pk365-app-pakistan-guide", permanent: true },
      { source: "/blog/is-bn55-safe-legal-pakistan", destination: "/blog/is-pk365-safe-legal-pakistan", permanent: true },
      { source: "/blog/ways-to-earn-money-with-bn55-2026", destination: "/blog/ways-to-earn-money-with-pk365-2026", permanent: true },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/.well-known/:path*",
        destination: "/.well-known/:path*",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
