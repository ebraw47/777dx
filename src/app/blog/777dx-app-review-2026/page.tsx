import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '777DX App Review 2026',
  description: 'Honest 777DX review for Pakistan: earning games, JazzCash & EasyPaisa, VIP, rebate, pros, cons, and payout notes.',
  keywords: ['777DX review', '777DX app review 2026', '777DX Pakistan', '777DX game'],
  alternates: { canonical: `${SITE_URL}/blog/777dx-app-review-2026` },
  openGraph: {
    title: '777DX App Review 2026',
    description: 'Honest 777DX review for Pakistan: earning games, JazzCash & EasyPaisa, VIP, rebate, pros, cons, and payout notes.',
    url: `${SITE_URL}/blog/777dx-app-review-2026`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-home.webp`, width: 1200, height: 630, alt: '777DX App Review 2026' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="777DX App Review 2026"
        description="Honest 777DX review for Pakistan: earning games, JazzCash & EasyPaisa, VIP, rebate, pros, cons, and payout notes."
        slug="777dx-app-review-2026"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">777DX App Review 2026</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">777DX App Review 2026</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-home.webp" alt="777DX App Review 2026" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>777DX is a real-money gaming app searched heavily in Pakistan for its lightweight Android APK, local JazzCash and EasyPaisa wallets, VIP rewards, rebate offers, and simple earning-game rounds.</p>
        <h2 className="text-2xl font-bold text-white mt-8">What 777DX offers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Mobile earning games and short rounds suited to mid-range Android phones</li>
          <li>Deposit options that often include JazzCash and EasyPaisa</li>
          <li>Withdraw flows with wallet destinations shown in-app</li>
          <li>VIP program, rebate rewards, missions, and invite-and-earn bonuses when listed</li>
          <li>Night mode and in-app customer support for account help</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Pros</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pakistan-friendly wallet labels when methods are listed</li>
          <li>Small APK size and simple navigation</li>
          <li>Clear deposit, withdraw, VIP, and invite screens</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Cons &amp; cautions</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Not on Google Play — only install from a trusted source such as 777dx-app.com.pk</li>
          <li>Bonus figures are promotional; always read wagering rules</li>
          <li>Withdrawal limits, fees, and times can change — check the live Withdraw screen</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Verdict</h2>
        <p>777DX suits Pakistani players who want a simple earning app with local wallets and loyalty extras like VIP and rebate. Download only from the official button, start with small deposits, and treat every bonus as optional entertainment — not guaranteed income. 18+ only.</p>
        <p>Next: <Link href="/blog/how-to-download-install-777dx-apk-pakistan" className="text-accent hover:underline">install guide</Link> · <Link href="/blog/777dx-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link>.</p>
    
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD 777DX APK" />
        <p className="text-sm text-gray-500 mt-4">
          Official Pakistan site · Play responsibly · 18+ only
        </p>
      </div>
    </article>
  );
}
