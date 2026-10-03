import { NextResponse } from 'next/server';

const baseUrl = 'https://jz666apk.com.pk';

const blogSlugs = [
  'jz666-app-review-2026',
  'how-to-download-install-jz666-apk-pakistan',
  'create-jz666-account-and-login',
  'jz666-deposit-jazzcash-easypaisa-guide',
  'jz666-withdraw-money-guide',
  'jz666-vip-rebate-bonus-guide',
  'is-jz666-safe-legal-pakistan',
  'how-to-use-jz666-app-pakistan-guide',
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
          loc: '/JZ666-Game-Icon.webp',
          title: 'JZ666 Hero Image',
          caption: 'JZ666 gaming platform showcase',
        },
      ],
    },
    {
      url: '/download-jz666',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/JZ666-Game-Icon.webp',
          title: 'Download JZ666',
          caption: 'Download JZ666 APK for Android',
        },
      ],
    },
    { url: '/deposit-money-in-jz666', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    { url: '/withdraw-money-from-jz666', lastMod: now, changeFreq: 'weekly', priority: 0.9 },
    {
      url: '/jz666-for-pc',
      lastMod: now,
      changeFreq: 'weekly',
      priority: 0.9,
      images: [
        {
          loc: '/JZ666-Game-Icon.webp',
          title: 'JZ666 for PC',
          caption: 'Play JZ666 on PC using Android Emulator',
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
          loc: '/JZ666-Game-Icon.webp',
          title: 'About JZ666',
          caption: 'Learn about JZ666 gaming platform',
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
          loc: '/JZ666-Game-Icon.webp',
          title: 'JZ666 Blog',
          caption: 'Guides and tutorials for JZ666',
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
