import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://777dx-app.com.pk';

  const robotsTxt = `# robots.txt for 777dx-app.com.pk

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Allow: /download-777dx
Allow: /deposit-money-in-777dx
Allow: /withdraw-money-from-777dx
Allow: /777dx-for-pc
Allow: /about-us
Allow: /blog
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

Allow: /blog/777dx-app-review-2026
Allow: /blog/how-to-download-install-777dx-apk-pakistan
Allow: /blog/create-777dx-account-and-login
Allow: /blog/777dx-deposit-jazzcash-easypaisa-guide
Allow: /blog/777dx-withdraw-money-guide
Allow: /blog/777dx-vip-rebate-invite-guide
Allow: /blog/is-777dx-safe-legal-pakistan
Allow: /blog/how-to-use-777dx-app-pakistan-guide

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Mobile
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/image-sitemap.xml
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
