import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Is 777DX Safe and Legal in Pakistan?',
  description: 'Official download tips, scam warnings, legal context, and responsible play advice for 777DX in Pakistan.',
  keywords: ['is 777DX safe', '777DX legal Pakistan', '777DX scam', '777DX security'],
  alternates: { canonical: `${SITE_URL}/blog/is-777dx-safe-legal-pakistan` },
  openGraph: {
    title: 'Is 777DX Safe and Legal in Pakistan?',
    description: 'Official download tips, scam warnings, legal context, and responsible play advice for 777DX in Pakistan.',
    url: `${SITE_URL}/blog/is-777dx-safe-legal-pakistan`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-support.webp`, width: 1200, height: 630, alt: 'Is 777DX Safe and Legal in Pakistan?' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="Is 777DX Safe and Legal in Pakistan?"
        description="Official download tips, scam warnings, legal context, and responsible play advice for 777DX in Pakistan."
        slug="is-777dx-safe-legal-pakistan"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-support.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">Is 777DX Safe and Legal in Pakistan?</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Is 777DX Safe and Legal in Pakistan?</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-support.webp" alt="Is 777DX Safe and Legal in Pakistan?" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>People searching <strong>is 777DX safe</strong> or <strong>777DX legal Pakistan</strong> want clear risk notes — not hype.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Safety checklist</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Download only from 777dx-app.com.pk or the official button linked here</li>
          <li>Never share OTP, password, or withdrawal PIN</li>
          <li>Ignore Telegram/WhatsApp &quot;agents&quot; asking you to deposit to personal accounts</li>
          <li>Start with small deposits you can afford to lose</li>
          <li>Use in-app support for payment issues</li>
        </ul>
        <h2 className="text-2xl font-bold text-white mt-8">Legal note</h2>
        <p>Real-money gaming rules in Pakistan can depend on activity type and province. This site is informational. You are responsible for following applicable laws and platform terms. 18+ only.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Responsible play</h2>
        <p>Set a budget, take breaks, and treat 777DX as entertainment — not a job or guaranteed income.</p>
    
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
