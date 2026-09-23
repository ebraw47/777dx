import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'ways-to-earn-money-with-pk365-2026';
const TITLE = 'Ways to Earn Money with PK365 in 2026 (Realistic Guide)';
const DESCRIPTION =
  'Realistic PK365 earning paths for Pakistan: gameplay, bonuses, referrals—not get-rich promises. JazzCash payouts, risks, and 18+ responsible gaming.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['earn money PK365', 'PK365 referral', 'PK365 income Pakistan', 'PK365 bonuses 2026'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-invite.webp', width: 1200, height: 630, alt: 'PK365 invite and earn' }],
  },
};

export default function WaysToEarnPk365Page() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game-invite.webp" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://pk365-app.pk' },
          { name: 'Blog', url: 'https://pk365-app.pk/blog' },
          { name: TITLE, url: CANONICAL },
        ]}
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Earn with PK365</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+ · Not financial advice</p>

        <div className="relative w-full max-w-lg mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game-invite.webp" alt="PK365 invite friends earn rewards" fill className="object-contain" sizes="512px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            PK365 marketing talks about earning, but most users spend more than they withdraw. These are the actual mechanisms—each carries loss risk and legal ambiguity in Pakistan.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Gameplay (Teen Patti, slots, sports)</h2>
            <p>Winning sessions can increase balance, but the house edge and variance mean long-term loss is common. Treat stakes as ticket prices for entertainment—not salary.</p>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Promotions & daily tasks</h2>
            <p>
              Login rewards, recharge rebates, and mission chips add small value but often require turnover before cash-out. Read{' '}
              <Link href="/blog/pk365-welcome-bonus-guide" className="text-accent hover:underline">bonus guide</Link>.
            </p>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Referral invites</h2>
            <p>Share your in-app invite link. You may earn when friends register and meet activity thresholds. Do not spam groups or mislead people about &quot;guaranteed money.&quot;</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cashing out</h2>
            <p>
              Earnings only matter when they reach your JazzCash or EasyPaisa wallet. Test with a small{' '}
              <Link href="/withdraw-money-from-pk365" className="text-accent hover:underline">withdrawal</Link> before scaling deposits.
            </p>
          </section>

          <div className="bg-[#083000] border border-[#104008] rounded-xl p-6 text-sm">
            <strong className="text-white">Reality check:</strong> There is no stable &quot;job&quot; here. 18+ only. Play at your own risk; never borrow money to play.
          </div>

          <DownloadButton label="OPEN PK365" />
          <p>
            <Link href="/blog/tips-to-win-big-in-pk365" className="text-accent hover:underline">Bankroll tips</Link>
            {' · '}
            <Link href="/blog/is-pk365-safe-legal-pakistan" className="text-accent hover:underline">Safety guide</Link>
          </p>
        </div>
      </article>
    </>
  );
}
