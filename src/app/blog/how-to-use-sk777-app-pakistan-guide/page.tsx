import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use SK777 App in Pakistan: Beginner Guide',
  description: 'Complete beginner guide to SK777 in Pakistan: download, register, deposit, play, and withdraw.',
  keywords: [
    'how to use SK777',
    'SK777 beginner guide',
    'SK777 Pakistan guide',
    'SK777 tutorial'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-use-sk777-app-pakistan-guide` },
  openGraph: {
    title: 'How to Use SK777 App in Pakistan: Beginner Guide',
    description: 'Complete beginner guide to SK777 in Pakistan: download, register, deposit, play, and withdraw.',
    url: `${SITE_URL}/blog/how-to-use-sk777-app-pakistan-guide`,
    siteName: 'SK777',
    type: 'article',
    images: [{ url: `${SITE_URL}/sk777-game-lobby.webp`, width: 1200, height: 630, alt: 'How to Use SK777 App in Pakistan: Beginner Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Use SK777 App in Pakistan: Beginner Guide"
        description="Complete beginner guide to SK777 in Pakistan: download, register, deposit, play, and withdraw."
        slug="how-to-use-sk777-app-pakistan-guide"
        datePublished="2026-10-05"
        image={`${SITE_URL}/sk777-game-lobby.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Use SK777 App in Pakistan: Beginner Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Use SK777 App in Pakistan: Beginner Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/sk777-game-lobby.webp" alt="How to Use SK777 App in Pakistan: Beginner Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>This beginner guide walks through the full SK777 flow for Pakistani players — from APK install to your first careful withdrawal.</p>
        <h2 className="text-2xl font-bold text-white mt-8">1. Download &amp; install</h2>
        <p>Get the APK from sk777app.com.pk, allow unknown sources, and install. Details: <Link href="/blog/how-to-download-install-sk777-apk-pakistan" className="text-accent hover:underline">install guide</Link>.</p>
        <h2 className="text-2xl font-bold text-white mt-8">2. Create account</h2>
        <p>Register with your number and a strong password. Details: <Link href="/blog/create-sk777-account-and-login" className="text-accent hover:underline">account guide</Link>.</p>
        <h2 className="text-2xl font-bold text-white mt-8">3. Deposit (optional)</h2>
        <p>Use JazzCash or EasyPaisa from the in-app Deposit screen. Details: <Link href="/blog/sk777-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link>.</p>
        <h2 className="text-2xl font-bold text-white mt-8">4. Play responsibly</h2>
        <p>Pick a game from the lobby, set a budget, and stop when you hit your limit. Real-money play can go either way.</p>
        <h2 className="text-2xl font-bold text-white mt-8">5. Withdraw</h2>
        <p>Bind your wallet, meet rules, and cash out. Details: <Link href="/blog/sk777-withdraw-money-guide" className="text-accent hover:underline">withdraw guide</Link>.</p>
        <p>For a deeper look, read the <Link href="/blog/sk777-app-review-2026" className="text-accent hover:underline">2026 review</Link> and <Link href="/blog/is-sk777-safe-legal-pakistan" className="text-accent hover:underline">safety notes</Link>.</p>
    
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
