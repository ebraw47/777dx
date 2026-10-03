import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use JZ666 App in Pakistan: Beginner Guide',
  description: 'Beginner walkthrough for JZ666 in Pakistan: download, register, deposit, play slots/cards/fishing, withdraw safely.',
  keywords: [
    'how to use JZ666',
    'JZ666 beginner guide',
    'JZ666 Pakistan guide',
    'JZ666 tutorial'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-use-jz666-app-pakistan-guide` },
  openGraph: {
    title: 'How to Use JZ666 App in Pakistan: Beginner Guide',
    description: 'Beginner walkthrough for JZ666 in Pakistan: download, register, deposit, play slots/cards/fishing, withdraw safely.',
    url: `${SITE_URL}/blog/how-to-use-jz666-app-pakistan-guide`,
    siteName: 'JZ666',
    type: 'article',
    images: [{ url: `${SITE_URL}/jz666-game-home.webp`, width: 1200, height: 630, alt: 'How to Use JZ666 App in Pakistan: Beginner Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Use JZ666 App in Pakistan: Beginner Guide'
        description='Beginner walkthrough for JZ666 in Pakistan: download, register, deposit, play slots/cards/fishing, withdraw safely.'
        slug="how-to-use-jz666-app-pakistan-guide"
        datePublished="2026-10-04"
        image={`${SITE_URL}/jz666-game-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Use JZ666 App in Pakistan: Beginner Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Use JZ666 App in Pakistan: Beginner Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · JZ666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/jz666-game-home.webp" alt="How to Use JZ666 App in Pakistan: Beginner Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>This beginner guide covers the full JZ666 loop for Pakistani Android users — from first install to a careful first withdrawal.</p>
        <h2 className="text-2xl font-bold text-white mt-8">1. Download &amp; install</h2>
        <p>Get the APK from <Link href="/download-jz666" className="text-accent hover:underline">the download page</Link>, allow a one-time unknown-source install, then open the app.</p>
        <h2 className="text-2xl font-bold text-white mt-8">2. Register &amp; explore</h2>
        <p>Create an account, open Home (Hot / Slot / Cards / Mini Games / Fishing), and check Offers before spending money.</p>
        <h2 className="text-2xl font-bold text-white mt-8">3. Deposit (optional)</h2>
        <p>Use JazzCash or EasyPaisa only when listed. Start small. Guide: <Link href="/blog/jz666-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">JZ666 deposit</Link>.</p>
        <h2 className="text-2xl font-bold text-white mt-8">4. Play responsibly</h2>
        <p>Pick one game category, set a time limit, and stop when your budget is gone. VIP/rebate rewards are extras — not a strategy.</p>
        <h2 className="text-2xl font-bold text-white mt-8">5. Withdraw</h2>
        <p>Set your withdrawal PIN, bind your own wallet, meet turnover rules, then cash out. Guide: <Link href="/blog/jz666-withdraw-money-guide" className="text-accent hover:underline">JZ666 withdraw</Link>.</p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD JZ666 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">JZ666 blog</Link>.
        </p>
      </div>
    </article>
  );
}
