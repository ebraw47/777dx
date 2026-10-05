import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '777DX Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    '777DX blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, VIP, rebate, safety, and responsible 18+ gaming guides.',
  keywords: [
    '777DX blog',
    '777DX guide',
    '777DX review',
    '777DX APK',
    '777DX deposit',
    '777DX withdraw',
    '777DX Pakistan 2026',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: '777DX Blog - Guides, Tips & Reviews 2026',
    description: 'Official 777DX guides for download, payments, VIP, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: '777DX',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/777dx-logo.webp`,
        width: 1200,
        height: 630,
        alt: '777DX Blog',
      },
    ],
  },
};

/** SERP-matched 777DX topics only */
const posts = [
  {
    slug: '777dx-app-review-2026',
    title: '777DX App Review 2026',
    description:
      'Honest review: earning games, JazzCash & EasyPaisa, VIP, rebate, pros, cons, and payout notes for Pakistan.',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'how-to-download-install-777dx-apk-pakistan',
    title: 'How to Download & Install 777DX APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-777dx-account-and-login',
    title: 'How to Create a 777DX Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: '777dx-deposit-jazzcash-easypaisa-guide',
    title: '777DX Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: '777dx-withdraw-money-guide',
    title: '777DX Withdraw Money Guide',
    description: 'Cash out to JazzCash or EasyPaisa — and fix failed requests.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: '777dx-vip-rebate-invite-guide',
    title: '777DX VIP, Rebate & Invite Guide',
    description: 'VIP program, rebate rewards, missions, and invite-and-earn explained.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'is-777dx-safe-legal-pakistan',
    title: 'Is 777DX Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal context, and responsible play.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-777dx-app-pakistan-guide',
    title: 'How to Use 777DX App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">777DX Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, VIP tips, and responsible gaming for 777DX players in Pakistan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-accent' : 'border-gray-700 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>October 2026</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className="text-accent hover:underline font-semibold">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
