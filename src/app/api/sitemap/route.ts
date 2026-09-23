import { NextResponse } from 'next/server';

const baseUrl = 'https://pk365-app.pk';

const blogSlugs = [
  'pk365-app-review-2026',
  'how-to-download-install-pk365-apk-pakistan',
  'create-pk365-account-and-login',
  'pk365-deposit-jazzcash-easypaisa-guide',
  'pk365-withdraw-money-guide',
  'pk365-welcome-bonus-guide',
  'is-pk365-safe-legal-pakistan',
  'how-to-use-pk365-app-pakistan-guide',
  'ways-to-earn-money-with-pk365-2026',
  'tips-to-win-big-in-pk365',
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
          loc: '/PK365-Game-Icon.webp',
          title: 'PK365 Hero Image',
          caption: 'PK365 gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-pk365',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/PK365-Game-Icon.webp',
          title: 'Download PK365',
          caption: 'Download PK365 APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-pk365', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-pk365', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/pk365-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/PK365-Game-Icon.webp',
          title: 'PK365 for PC',
          caption: 'Play PK365 on PC using Android Emulator',
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
          loc: '/PK365-Game-Icon.webp',
          title: 'About PK365',
          caption: 'Learn about PK365 gaming platform',
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
          loc: '/PK365-Game-Icon.webp',
          title: 'PK365 Blog',
          caption: 'Guides and tutorials for PK365',
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
