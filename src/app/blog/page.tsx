import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PK365 Blog - Guides, Tips, Reviews & Tutorials 2026',
  description:
    'PK365 blog for Pakistan: app review, APK install, JazzCash & EasyPaisa deposits, withdrawals, bonuses, safety, and responsible 18+ gaming guides.',
  keywords: [
    'PK365 blog',
    'PK365 guide',
    'PK365 review',
    'PK365 tips',
    'PK365 tutorial',
    'PK365 bonuses',
    'PK365 safe',
    'PK365 Pakistan 2026',
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
    canonical: 'https://pk365-app.pk/blog',
  },
  openGraph: {
    title: 'PK365 Blog - Guides, Tips & Reviews 2026',
    description: 'Official PK365 guides for download, payments, bonuses, and safe play in Pakistan.',
    url: 'https://pk365-app.pk/blog',
    siteName: 'PK365',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pk365-app.pk/PK365-Game-Icon.webp',
        width: 1200,
        height: 630,
        alt: 'PK365 Blog',
      },
    ],
  },
};

const posts = [
  {
    slug: 'pk365-app-review-2026',
    title: 'PK365 App Review 2026',
    description:
      'Complete honest review: features, Teen Patti/slots/sports, JazzCash & EasyPaisa, pros, cons, and payout notes.',
    readTime: '18 min read',
    featured: true,
  },
  {
    slug: 'how-to-download-install-pk365-apk-pakistan',
    title: 'How to Download & Install PK365 APK in Pakistan',
    description: 'Step-by-step Android install: official APK, unknown sources, and troubleshooting.',
    readTime: '10 min read',
    featured: false,
  },
  {
    slug: 'create-pk365-account-and-login',
    title: 'How to Create a PK365 Account and Login',
    description: 'Register with OTP, set a password, and log in safely on your Pakistani number.',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'pk365-deposit-jazzcash-easypaisa-guide',
    title: 'PK365 Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance with local wallets, fix delayed credits, and avoid common deposit mistakes.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'pk365-withdraw-money-guide',
    title: 'PK365 Withdraw Money Guide',
    description: 'Cash out to JazzCash or EasyPaisa and understand why withdrawals sometimes fail.',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'pk365-welcome-bonus-guide',
    title: 'PK365 Welcome Bonus & Daily Rewards Guide',
    description: 'Welcome offers, daily missions, referrals, and wagering rules explained clearly.',
    readTime: '12 min read',
    featured: false,
  },
  {
    slug: 'is-pk365-safe-legal-pakistan',
    title: 'Is PK365 Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal ambiguity, and responsible play.',
    readTime: '14 min read',
    featured: false,
  },
  {
    slug: 'how-to-use-pk365-app-pakistan-guide',
    title: 'How to Use PK365 App in Pakistan: Beginner Guide',
    description: 'End-to-end: download, register, deposit, play, withdraw, and stay in control.',
    readTime: '15 min read',
    featured: false,
  },
  {
    slug: 'ways-to-earn-money-with-pk365-2026',
    title: 'Ways to Earn Money with PK365 in 2026',
    description: 'Gameplay, bonuses, and referrals—realistic expectations for Pakistani players.',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'tips-to-win-big-in-pk365',
    title: 'Tips to Win Big in PK365',
    description: 'Bankroll management, game selection, and responsible strategies—no hype.',
    readTime: '6 min read',
    featured: false,
  },
] as const;

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-accent">PK365 Blog</h1>
      <p className="text-gray-300 mb-8 text-lg">
        Guides, payment help, and responsible gaming tips for PK365 players in Pakistan
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
                ⭐ FEATURED
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <span>📅 September 2026</span>
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
