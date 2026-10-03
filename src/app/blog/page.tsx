import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'JZ666 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'JZ666 blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, VIP/rebate, safety, and responsible 18+ gaming guides.',
  keywords: [
    'JZ666 blog',
    'JZ666 guide',
    'JZ666 review',
    'JZ666 APK',
    'JZ666 deposit',
    'JZ666 withdraw',
    'JZ666 VIP',
    'JZ666 Pakistan 2026',
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
    title: 'JZ666 Blog - Guides, Tips & Reviews 2026',
    description: 'Official JZ666 guides for download, payments, VIP/rebate, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: 'JZ666',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/JZ666-Game-Icon.webp`,
        width: 1200,
        height: 630,
        alt: 'JZ666 Blog',
      },
    ],
  },
};

const posts = [
  {
    slug: 'jz666-app-review-2026',
    title: 'JZ666 App Review 2026',
    description:
      'Honest review: slots, cards, fishing, VIP, rebate, JazzCash & EasyPaisa, pros, cons, and payout notes.',
    readTime: '16 min read',
    featured: true,
  },
  {
    slug: 'how-to-download-install-jz666-apk-pakistan',
    title: 'How to Download & Install JZ666 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-jz666-account-and-login',
    title: 'How to Create a JZ666 Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'jz666-deposit-jazzcash-easypaisa-guide',
    title: 'JZ666 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, QR deposits, fix delayed credits, and avoid mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'jz666-withdraw-money-guide',
    title: 'JZ666 Withdraw Money Guide',
    description: 'Cash out with withdrawal PIN to JazzCash, EasyPaisa, or bank — and fix failed requests.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'jz666-vip-rebate-bonus-guide',
    title: 'JZ666 VIP, Rebate, Mission & Interest Guide',
    description: 'Offers explained: Events, VIP tiers, agent rebate, missions, interest, and redeem codes.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'is-jz666-safe-legal-pakistan',
    title: 'Is JZ666 Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal context, and responsible play.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-jz666-app-pakistan-guide',
    title: 'How to Use JZ666 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">JZ666 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, VIP/rebate explainers, and responsible gaming tips for JZ666 players in Pakistan
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className={`bg-secondary px-8 py-8 rounded-lg hover:shadow-lg transition-all border-2 ${
              post.featured ? 'border-[#FFA500]' : 'border-gray-700 hover:border-accent'
            }`}
          >
            {post.featured && (
              <div className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
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
