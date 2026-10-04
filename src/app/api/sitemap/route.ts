import { NextResponse } from 'next/server';

const baseUrl = 'https://sk777app.com.pk';

const blogSlugs = [
  'sk777-app-review-2026',
  'how-to-download-install-sk777-apk-pakistan',
  'create-sk777-account-and-login',
  'sk777-deposit-jazzcash-easypaisa-guide',
  'sk777-withdraw-money-guide',
  'is-sk777-safe-legal-pakistan',
  'how-to-use-sk777-app-pakistan-guide',
];

export async function GET() {
  type PageType = {
    url: string;
    lastMod: string;
    changeFreq: string;
    priority: number;
    images?: Array<{ loc: string; title: string; caption: string }>;
  };

  const now = new Date().toISOString();

  const mainPages: PageType[] = [
    {
      url: '/',
      lastMod: now,
      changeFreq: 'daily',
      priority: 1.0,
      images: [
        {
          loc: '/SK777-Game-Icon.png',
          title: 'SK777 Hero Image',
          caption: 'SK777 gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-sk777',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/SK777-Game-Icon.png',
          title: 'Download SK777',
          caption: 'Download SK777 APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-sk777', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-sk777', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/sk777-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/SK777-Game-Icon.png',
          title: 'SK777 for PC',
          caption: 'Play SK777 on PC using Android Emulator',
        },
      ],
    },
    {
      url: '/about-us',
      lastMod: now,
      changeFreq: 'monthly',
      priority: 0.7,
      images: [
        {
          loc: '/SK777-Game-Icon.png',
          title: 'About SK777',
          caption: 'Learn about SK777 gaming platform',
        },
      ],
    },
    {
      url: '/blog',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.8,
      images: [
        {
          loc: '/SK777-Game-Icon.png',
          title: 'SK777 Blog',
          caption: 'Guides and tutorials for SK777',
        },
      ],
    },
    { url: '/contact-us', lastMod: now, changeFreq: 'monthly', priority: 0.7 },
    { url: '/privacy', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
    { url: '/disclaimer', lastMod: now, changeFreq: 'yearly', priority: 0.6 },
  ];

  const blogPosts: PageType[] = blogSlugs.map((slug) => ({
    url: `/blog/${slug}`,
    lastMod: now,
    changeFreq: 'monthly',
    priority: 0.8,
  }));

  const allPages = [...mainPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
    <mobile:mobile/>
    ${
      page.images
        ?.map(
          (img) => `
    <image:image>
      <image:loc>${baseUrl}${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
        )
        .join('') || ''
    }
  </url>`
    )
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
