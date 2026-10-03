import type { NextConfig } from "next";

/**
 * JZ666 - Next.js Configuration
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
        hostname: "jz666apk.com.pk",
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
      // Legacy PK365 routes → JZ666
      { source: "/download-pk365", destination: "/download-jz666", permanent: true },
      { source: "/deposit-money-in-pk365", destination: "/deposit-money-in-jz666", permanent: true },
      { source: "/withdraw-money-from-pk365", destination: "/withdraw-money-from-jz666", permanent: true },
      { source: "/pk365-for-pc", destination: "/jz666-for-pc", permanent: true },
      { source: "/PK365-Game-Icon.webp", destination: "/JZ666-Game-Icon.webp", permanent: true },
      { source: "/blog/pk365-app-review-2026", destination: "/blog/jz666-app-review-2026", permanent: true },
      { source: "/blog/how-to-download-install-pk365-apk-pakistan", destination: "/blog/how-to-download-install-jz666-apk-pakistan", permanent: true },
      { source: "/blog/create-pk365-account-and-login", destination: "/blog/create-jz666-account-and-login", permanent: true },
      { source: "/blog/pk365-deposit-jazzcash-easypaisa-guide", destination: "/blog/jz666-deposit-jazzcash-easypaisa-guide", permanent: true },
      { source: "/blog/pk365-withdraw-money-guide", destination: "/blog/jz666-withdraw-money-guide", permanent: true },
      { source: "/blog/pk365-welcome-bonus-guide", destination: "/blog/jz666-vip-rebate-bonus-guide", permanent: true },
      { source: "/blog/is-pk365-safe-legal-pakistan", destination: "/blog/is-jz666-safe-legal-pakistan", permanent: true },
      { source: "/blog/how-to-use-pk365-app-pakistan-guide", destination: "/blog/how-to-use-jz666-app-pakistan-guide", permanent: true },
      { source: "/blog/ways-to-earn-money-with-pk365-2026", destination: "/blog/jz666-vip-rebate-bonus-guide", permanent: true },
      { source: "/blog/tips-to-win-big-in-pk365", destination: "/blog/how-to-use-jz666-app-pakistan-guide", permanent: true },
      // Older brand routes → JZ666
      { source: "/download-bn55", destination: "/download-jz666", permanent: true },
      { source: "/deposit-money-in-bn55", destination: "/deposit-money-in-jz666", permanent: true },
      { source: "/withdraw-money-from-bn55", destination: "/withdraw-money-from-jz666", permanent: true },
      { source: "/bn55-for-pc", destination: "/jz666-for-pc", permanent: true },
      { source: "/BN55.webp", destination: "/JZ666-Game-Icon.webp", permanent: true },
      { source: "/download-3-patti-world", destination: "/download-jz666", permanent: true },
      { source: "/deposit-money-in-3-patti-world", destination: "/deposit-money-in-jz666", permanent: true },
      { source: "/withdraw-money-from-3-patti-world", destination: "/withdraw-money-from-jz666", permanent: true },
      { source: "/3-patti-world-for-pc", destination: "/jz666-for-pc", permanent: true },
      { source: "/download-card-rummy", destination: "/download-jz666", permanent: true },
      { source: "/deposit-money-in-card-rummy", destination: "/deposit-money-in-jz666", permanent: true },
      { source: "/withdraw-money-from-card-rummy", destination: "/withdraw-money-from-jz666", permanent: true },
      { source: "/card-rummy-for-pc", destination: "/jz666-for-pc", permanent: true },
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
