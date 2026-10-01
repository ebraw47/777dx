import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'pk365-deposit-jazzcash-easypaisa-guide';
const TITLE = 'PK365 Deposit Guide: JazzCash & EasyPaisa Step by Step';
const DESCRIPTION =
  'Add money to PK365 using JazzCash or EasyPaisa in Pakistan. Minimum amounts, verification tips, and what to do if balance does not update. 18+ entertainment.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 deposit', 'JazzCash PK365', 'EasyPaisa PK365', 'PK365 recharge', 'add money PK365'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-deposit-bonus.webp', width: 1200, height: 630, alt: 'PK365 deposit' }],
  },
};

export default function Pk365DepositGuidePage() {
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
          <span className="text-gray-300">Deposit Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+</p>

        <div className="relative w-full max-w-lg mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game-deposit-bonus.webp" alt="PK365 deposit and bonus screen" fill className="object-contain" sizes="512px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            Depositing on PK365 means moving PKR from your JazzCash or EasyPaisa wallet into your in-app balance. For a visual walkthrough on our main site, see{' '}
            <Link href="/deposit-money-in-pk365" className="text-accent hover:underline font-semibold">How to deposit money in PK365</Link>.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">JazzCash deposit</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Login to PK365 → Wallet / Deposit.</li>
              <li>Select <strong className="text-white">JazzCash</strong> and enter amount (check in-app minimum, often a few hundred PKR).</li>
              <li>Confirm the JazzCash account number shown matches your wallet.</li>
              <li>Approve the transaction in the JazzCash app or via USSD if prompted.</li>
              <li>Wait 1–10 minutes; pull down to refresh balance.</li>
            </ol>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">EasyPaisa deposit</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Choose <strong className="text-white">EasyPaisa</strong> on the deposit screen.</li>
              <li>Enter amount and verify merchant details before paying.</li>
              <li>Complete payment in the EasyPaisa app; keep the receipt screenshot.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">If money does not show</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment left your wallet but balance unchanged after 30 minutes → contact support with TXN ID.</li>
              <li>Wrong amount entered → some gateways cannot auto-reverse; support may need 24–48 hours.</li>
              <li>Deposit from a wallet not in your name → may block future withdrawals.</li>
            </ul>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">Responsible gaming:</strong> Deposit only what you can afford to lose. Bonuses may require turnover before withdrawal—read promo rules in{' '}
            <Link href="/blog/pk365-welcome-bonus-guide" className="text-accent hover:underline">our bonus guide</Link>.
          </div>

          <DownloadButton label="OPEN PK365 & DEPOSIT" />
        </div>
      </article>
    </>
  );
}
