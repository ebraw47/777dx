import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '777DX Deposit Guide: JazzCash & EasyPaisa',
  description: 'Add balance to 777DX with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes.',
  keywords: ['777DX deposit', '777DX JazzCash', '777DX EasyPaisa', '777DX recharge'],
  alternates: { canonical: `${SITE_URL}/blog/777dx-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: '777DX Deposit Guide: JazzCash & EasyPaisa',
    description: 'Add balance to 777DX with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes.',
    url: `${SITE_URL}/blog/777dx-deposit-jazzcash-easypaisa-guide`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-deposit.webp`, width: 1200, height: 630, alt: '777DX Deposit Guide: JazzCash & EasyPaisa' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="777DX Deposit Guide: JazzCash & EasyPaisa"
        description="Add balance to 777DX with JazzCash or EasyPaisa, fix delayed credits, and avoid common deposit mistakes."
        slug="777dx-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">777DX Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">777DX Deposit Guide: JazzCash & EasyPaisa</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-deposit.webp" alt="777DX Deposit Guide: JazzCash & EasyPaisa" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>SERP searches for <strong>777DX deposit</strong> usually want JazzCash and EasyPaisa steps. Always follow the amount and recipient shown inside your live Deposit screen.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to deposit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in and open Deposit / Funds.</li>
          <li>Choose JazzCash, EasyPaisa, or another method listed for your account.</li>
          <li>Enter the amount and note any minimum shown.</li>
          <li>Copy the exact recipient details from the app — do not reuse old numbers from chats.</li>
          <li>Pay in your wallet app, then return to 777DX and confirm if required.</li>
          <li>Save the transaction ID until the balance updates.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">If credit is delayed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wait a few minutes — pending status is normal.</li>
          <li>Do not send a second payment for the same order.</li>
          <li>Open customer support with amount, time, method, and reference ID.</li>
        </ul>
        <p>Full page guide: <Link href="/deposit-money-in-777dx" className="text-accent hover:underline">Deposit money in 777DX</Link>.</p>
    
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
