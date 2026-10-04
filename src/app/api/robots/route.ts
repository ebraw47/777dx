import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://sk777app.com.pk';

  const robotsTxt = `# robots.txt for sk777app.com.pk

User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Allow: /download-sk777
Allow: /deposit-money-in-sk777
Allow: /withdraw-money-from-sk777
Allow: /sk777-for-pc
Allow: /about-us
Allow: /blog
Allow: /contact-us
Allow: /privacy
Allow: /disclaimer

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
