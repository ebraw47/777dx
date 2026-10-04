import Link from 'next/link';
import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'SK777 blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, safety, and responsible 18+ gaming guides.',
  keywords: [
    'SK777 blog',
    'SK777 guide',
    'SK777 review',
    'SK777 APK',
    'SK777 deposit',
    'SK777 withdraw',
    'SK777 Pakistan 2026',
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
    title: 'SK777 Blog - Guides, Tips & Reviews 2026',
    description: 'Official SK777 guides for download, payments, and safe play in Pakistan.',
    url: `${SITE_URL}/blog`,
    siteName: 'SK777',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/SK777-Game-Icon.png`,
        width: 1200,
        height: 630,
        alt: 'SK777 Blog',
      },
    ],
  },
};

/** SERP-matched SK777 topics only */
const posts = [
  {
    slug: 'sk777-app-review-2026',
    title: 'SK777 App Review 2026',
    description:
      'Honest review: earning games, JazzCash & EasyPaisa, pros, cons, and payout notes for Pakistan.',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'how-to-download-install-sk777-apk-pakistan',
    title: 'How to Download & Install SK777 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-sk777-account-and-login',
    title: 'How to Create a SK777 Account and Login',
    description: 'Register, set credentials, and log in safely on your Pakistani number.',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'sk777-deposit-jazzcash-easypaisa-guide',
    title: 'SK777 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'sk777-withdraw-money-guide',
    title: 'SK777 Withdraw Money Guide',
    description: 'Cash out with withdrawal PIN to JazzCash or EasyPaisa — and fix failed requests.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'is-sk777-safe-legal-pakistan',
    title: 'Is SK777 Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal context, and responsible play.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-sk777-app-pakistan-guide',
    title: 'How to Use SK777 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '14 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">SK777 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, and responsible gaming tips for SK777 players in Pakistan
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
