import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Deposit Guide: JazzCash & EasyPaisa',
  description: 'How to deposit money in SK777 with JazzCash and EasyPaisa in Pakistan.',
  keywords: [
    'SK777 deposit',
    'SK777 JazzCash',
    'SK777 EasyPaisa',
    'SK777 add money'
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: 'SK777 Deposit Guide: JazzCash & EasyPaisa',
    description: 'How to deposit money in SK777 with JazzCash and EasyPaisa in Pakistan.',
    url: `${SITE_URL}/blog/sk777-deposit-jazzcash-easypaisa-guide`,
    siteName: 'SK777',
    type: 'article',
    images: [{ url: `${SITE_URL}/sk777-game-deposit.webp`, width: 1200, height: 630, alt: 'SK777 Deposit Guide: JazzCash & EasyPaisa' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Deposit Guide: JazzCash & EasyPaisa"
        description="How to deposit money in SK777 with JazzCash and EasyPaisa in Pakistan."
        slug="sk777-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-10-05"
        image={`${SITE_URL}/sk777-game-deposit.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">SK777 Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">SK777 Deposit Guide: JazzCash & EasyPaisa</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/sk777-game-deposit.webp" alt="SK777 Deposit Guide: JazzCash & EasyPaisa" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>SK777 supports local Pakistani wallets for deposits. Always send money only to the payment details shown inside the official app — never to numbers shared in random chats.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to deposit</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open SK777 and go to Wallet / Deposit.</li>
          <li>Select JazzCash or EasyPaisa.</li>
          <li>Enter the amount (check the live minimum — often near PKR 100).</li>
          <li>Follow the on-screen transfer steps carefully.</li>
          <li>Confirm the payment and wait for balance credit (usually a few minutes).</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">If deposit is delayed</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep the transaction ID / screenshot.</li>
          <li>Confirm you used the exact account shown in-app.</li>
          <li>Contact in-app customer service with proof — do not re-send blindly.</li>
        </ul>
        <p>Full walkthrough: <Link href="/deposit-money-in-sk777" className="text-accent hover:underline">deposit money in SK777</Link>.</p>
    
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD SK777 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">SK777 blog</Link>.
        </p>
      </div>
    </article>
  );
}
