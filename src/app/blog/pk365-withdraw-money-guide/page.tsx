import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'pk365-withdraw-money-guide';
const TITLE = 'PK365 Withdraw Money Guide: JazzCash, EasyPaisa & Fixes';
const DESCRIPTION =
  'Withdraw PK365 winnings to JazzCash or EasyPaisa in Pakistan. Limits, verification, and common failure reasons explained. 18+ play at your own risk.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 withdraw', 'PK365 JazzCash withdrawal', 'PK365 EasyPaisa cash out', 'PK365 payout failed'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-withdraw-methods.webp', width: 1200, height: 630, alt: 'PK365 withdraw' }],
  },
};

export default function Pk365WithdrawGuidePage() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game-withdraw-methods.webp" />
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
          <span className="text-gray-300">Withdraw Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+</p>

        <div className="relative w-full max-w-lg mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game-withdraw-methods.webp" alt="PK365 withdrawal methods" fill className="object-contain" sizes="512px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            Cash-out uses the same local wallets you deposit with. Our detailed page{' '}
            <Link href="/withdraw-money-from-pk365" className="text-accent hover:underline font-semibold">withdraw money from PK365</Link> matches the in-app flow; this article focuses on Pakistani user pitfalls.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Standard withdrawal steps</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>PK365 → Withdraw → pick JazzCash or EasyPaisa.</li>
              <li>Enter wallet number (must match registered name where possible).</li>
              <li>Enter amount within daily limits shown in-app.</li>
              <li>Confirm OTP or payment password if asked.</li>
              <li>Status moves from Processing → Success; funds hit wallet usually within minutes to a few hours.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Common reasons withdrawals fail</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-white">Bonus not wagered:</strong> Active welcome or rebate promo may lock part of balance until turnover is met.</li>
              <li><strong className="text-white">Wrong wallet number:</strong> Double-check 03XX format; one wrong digit sends support tickets.</li>
              <li><strong className="text-white">Minimum not reached:</strong> App shows minimum withdraw (varies by channel).</li>
              <li><strong className="text-white">Multiple accounts:</strong> Duplicate registrations often trigger review holds.</li>
              <li><strong className="text-white">Maintenance windows:</strong> Retry after an hour if gateway is busy on match days.</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">Realistic expectations</h2>
            <p>Withdrawals are not guaranteed profit—many players deposit more than they withdraw. Keep records and never pay &quot;processing fees&quot; to strangers on social media to unlock payouts.</p>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">18+ entertainment:</strong> Legal ambiguity applies in Pakistan; you assume all financial risk when playing.
          </div>

          <DownloadButton label="WITHDRAW IN PK365" />
          <p>
            <Link href="/blog/pk365-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">Deposit guide</Link>
            {' · '}
            <Link href="/blog/is-pk365-safe-legal-pakistan" className="text-accent hover:underline">Safety & legal notes</Link>
          </p>
        </div>
      </article>
    </>
  );
}
