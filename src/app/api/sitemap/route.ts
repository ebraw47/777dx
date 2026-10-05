import { NextResponse } from 'next/server';

const baseUrl = 'https://777dx-app.com.pk';

const blogSlugs = [
  '777dx-app-review-2026',
  'how-to-download-install-777dx-apk-pakistan',
  'create-777dx-account-and-login',
  '777dx-deposit-jazzcash-easypaisa-guide',
  '777dx-withdraw-money-guide',
  '777dx-vip-rebate-invite-guide',
  'is-777dx-safe-legal-pakistan',
  'how-to-use-777dx-app-pakistan-guide',
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
          loc: '/777dx-logo.webp',
          title: '777DX Hero Image',
          caption: '777DX gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-777dx',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/777dx-logo.webp',
          title: 'Download 777DX',
          caption: 'Download 777DX APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-777dx', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-777dx', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/777dx-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/777dx-logo.webp',
          title: '777DX for PC',
          caption: 'Play 777DX on PC using Android Emulator',
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
          loc: '/777dx-logo.webp',
          title: 'About 777DX',
          caption: 'Learn about 777DX gaming platform',
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
          loc: '/777dx-logo.webp',
          title: '777DX Blog',
          caption: 'Guides and tutorials for 777DX',
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
