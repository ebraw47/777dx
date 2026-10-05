import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '777DX Withdraw Money Guide',
  description: 'Cash out 777DX winnings to JazzCash or EasyPaisa — bind your wallet, meet rules, and fix failed requests.',
  keywords: ['777DX withdraw', '777DX withdrawal', '777DX cash out', '777DX EasyPaisa withdraw'],
  alternates: { canonical: `${SITE_URL}/blog/777dx-withdraw-money-guide` },
  openGraph: {
    title: '777DX Withdraw Money Guide',
    description: 'Cash out 777DX winnings to JazzCash or EasyPaisa — bind your wallet, meet rules, and fix failed requests.',
    url: `${SITE_URL}/blog/777dx-withdraw-money-guide`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-withdraw.webp`, width: 1200, height: 630, alt: '777DX Withdraw Money Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="777DX Withdraw Money Guide"
        description="Cash out 777DX winnings to JazzCash or EasyPaisa — bind your wallet, meet rules, and fix failed requests."
        slug="777dx-withdraw-money-guide"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-withdraw.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">777DX Withdraw Money Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">777DX Withdraw Money Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-withdraw.webp" alt="777DX Withdraw Money Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>Players search <strong>777DX withdraw</strong> to move winnings to JazzCash or EasyPaisa. Methods and limits can change — trust the Withdraw screen in your app.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Withdrawal steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Withdraw and bind a wallet in your own name if required.</li>
          <li>Enter the amount within the shown min/max.</li>
          <li>Complete PIN / OTP checks.</li>
          <li>Submit and save the request ID.</li>
          <li>Wait for processing — often minutes to a few hours.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Common blockers</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Unfinished wagering / turnover on bonuses</li>
          <li>Wallet name mismatch</li>
          <li>Wrong PIN or outdated bound account</li>
        </ul>
        <p>More detail: <Link href="/withdraw-money-from-777dx" className="text-accent hover:underline">Withdraw money from 777DX</Link>.</p>
    
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
