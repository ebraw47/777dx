import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Withdraw Money Guide',
  description: 'How to withdraw money from SK777 to JazzCash or EasyPaisa in Pakistan.',
  keywords: [
    'SK777 withdraw',
    'SK777 cash out',
    'SK777 EasyPaisa withdraw',
    'SK777 JazzCash withdraw'
  ],
  alternates: { canonical: `${SITE_URL}/blog/sk777-withdraw-money-guide` },
  openGraph: {
    title: 'SK777 Withdraw Money Guide',
    description: 'How to withdraw money from SK777 to JazzCash or EasyPaisa in Pakistan.',
    url: `${SITE_URL}/blog/sk777-withdraw-money-guide`,
    siteName: 'SK777',
    type: 'article',
    images: [{ url: `${SITE_URL}/sk777-game-withdraw.webp`, width: 1200, height: 630, alt: 'SK777 Withdraw Money Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="SK777 Withdraw Money Guide"
        description="How to withdraw money from SK777 to JazzCash or EasyPaisa in Pakistan."
        slug="sk777-withdraw-money-guide"
        datePublished="2026-10-05"
        image={`${SITE_URL}/sk777-game-withdraw.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">SK777 Withdraw Money Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">SK777 Withdraw Money Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/sk777-game-withdraw.webp" alt="SK777 Withdraw Money Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>Withdrawals on SK777 usually go to JazzCash or EasyPaisa. Bind a wallet in your own name and set a withdrawal PIN when the app asks for one.</p>
        <h2 className="text-2xl font-bold text-white mt-8">How to withdraw</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Withdraw in the SK777 wallet.</li>
          <li>Set or enter your withdrawal PIN if required.</li>
          <li>Bind JazzCash or EasyPaisa with your registered details.</li>
          <li>Enter an amount that meets the minimum and any turnover rules.</li>
          <li>Submit and wait for processing — times vary by load and method.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Common issues</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Name mismatch:</strong> wallet name must match your account profile.</li>
          <li><strong>Turnover not met:</strong> finish any wagering shown before cash-out.</li>
          <li><strong>Pending long:</strong> contact in-app support with request ID.</li>
        </ul>
        <p>See also: <Link href="/withdraw-money-from-sk777" className="text-accent hover:underline">withdraw money from SK777</Link>.</p>
    
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
