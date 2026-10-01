import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'pk365-welcome-bonus-guide';
const TITLE = 'PK365 Welcome Bonus Guide: Daily Offers, Referrals & Wagering';
const DESCRIPTION =
  'Understand PK365 welcome bonus, daily rewards, and referral perks (often themed around Rs 365). Wagering rules and realistic expectations for Pakistan players. 18+.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 welcome bonus', 'PK365 daily bonus', 'PK365 referral', 'PK365 wagering', 'PK365 Rs 365 bonus'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-deposit-bonus.webp', width: 1200, height: 630, alt: 'PK365 bonuses' }],
  },
};

export default function Pk365WelcomeBonusPage() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game-deposit-bonus.webp" />
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
          <span className="text-gray-300">Bonus Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+</p>

        <div className="relative w-full max-w-lg mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game-deposit-bonus.webp" alt="PK365 welcome and deposit bonus" fill className="object-contain" sizes="512px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            PK365 promotions often use the &quot;365&quot; branding—welcome packages, daily login gifts, recharge rebates, and invite-friend rewards. Amounts change by season; always read the live text inside the app before claiming.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Types of bonuses</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-white">Welcome / first deposit:</strong> Extra balance or rebate on your first recharge—usually tied to minimum deposit.</li>
              <li><strong className="text-white">Daily missions:</strong> Login, play X rounds, or deposit small amounts for chips or cash-like rewards.</li>
              <li><strong className="text-white">Referral:</strong> Share your invite link; earn when friends register and play. See{' '}
                <Link href="/blog/ways-to-earn-money-with-pk365-2026" className="text-accent hover:underline">earning guide</Link>.</li>
              <li><strong className="text-white">VIP tiers:</strong> Higher turnover can unlock better rebates—still not a guarantee of profit.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Wagering (turnover) caution</h2>
            <p className="mb-4">
              Bonus money is rarely withdrawable immediately. You may need to bet the bonus (or bonus + deposit) several times on eligible games. Slots and certain tables count differently—check promo FAQ in-app.
            </p>
            <div className="bg-[#002c27] border border-[#FFA500]/40 rounded-xl p-5 text-sm">
              <strong className="text-[#FFA500]">Example pattern (illustrative only):</strong> Rs 365 bonus with 10× turnover means Rs 3,650 in qualifying bets before that bonus portion can cash out. Real multipliers vary—never assume without reading terms.
            </div>
          </section>

          <section className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">Smart habits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Claim only promos you understand.</li>
              <li>Screenshot offer pages with dates.</li>
              <li>After deposit, track whether balance is &quot;real&quot; or &quot;bonus&quot; in wallet details.</li>
            </ul>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">18+ responsible gaming:</strong> Bonuses encourage more play; set limits. Entertainment only—legal status in Pakistan is unclear.
          </div>

          <DownloadButton label="CLAIM OFFERS IN APP" />
          <p>
            <Link href="/deposit-money-in-pk365" className="text-accent hover:underline">Deposit money in PK365</Link>
            {' · '}
            <Link href="/blog/pk365-withdraw-money-guide" className="text-accent hover:underline">Withdraw guide</Link>
          </p>
        </div>
      </article>
    </>
  );
}
