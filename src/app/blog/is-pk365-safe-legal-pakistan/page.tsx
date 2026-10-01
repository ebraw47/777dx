import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'is-pk365-safe-legal-pakistan';
const TITLE = 'Is PK365 Safe and Legal in Pakistan? Honest 2026 Guide';
const DESCRIPTION =
  'PK365 safety tips for Pakistan: official APK only, wallet security, legal ambiguity, scams to avoid, and responsible 18+ play. No false regulation claims.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 safe', 'PK365 legal Pakistan', 'PK365 scam', 'PK365 official download', 'PK365 security'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-support.webp', width: 1200, height: 630, alt: 'PK365 support and safety' }],
  },
};

export default function IsPk365SafeLegalPage() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game-support.webp" />
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
          <span className="text-gray-300">Safe & Legal</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+</p>

        <div className="relative w-full max-w-lg mx-auto aspect-[9/16] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game-support.webp" alt="PK365 customer support in app" fill className="object-contain" sizes="512px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            Players in Lahore, Karachi, Islamabad, and across Pakistan ask whether PK365 is &quot;real&quot; and allowed. This guide separates practical safety from hype—we do not claim PK365 is licensed by any Pakistani government body.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Legal situation (plain language)</h2>
            <p>
              Real-money online gaming and betting sit in a grey area under Pakistani law. Rules can change and enforcement varies. If you choose to play, you do so at your own risk and should understand that deposits may not be recoverable through local courts. This is entertainment, not a regulated financial product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Safety: download & account</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Install only from{' '}
                <Link href="/download-pk365" className="text-accent hover:underline">official PK365 download</Link> on pk365-app.pk—not random APK mirrors.</li>
              <li>Never share JazzCash/EasyPaisa PINs or OTPs with &quot;customer service&quot; on Facebook.</li>
              <li>Use a unique app password; enable phone lock on your device.</li>
              <li>One account per person reduces withdrawal flags.</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Spotting scams</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Anyone asking upfront cash to &quot;release&quot; your withdrawal is a scam.</li>
              <li>Fake apps copy PK365 icons—check file source and app size (~20MB range for legit builds).</li>
              <li>Guaranteed daily income posts on TikTok are marketing, not facts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Financial safety</h2>
            <p>
              Only deposit small test amounts first. Withdraw a portion after a win to confirm your wallet path works via{' '}
              <Link href="/withdraw-money-from-pk365" className="text-accent hover:underline">PK365 withdrawal steps</Link>. Read our{' '}
              <Link href="/blog/pk365-app-review-2026" className="text-accent hover:underline">2026 app review</Link> for payout notes.
            </p>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">18+ responsible gaming:</strong> Set deposit limits, take breaks, and stop if you chase losses. Seek help if gaming harms work or family life.
          </div>

          <DownloadButton label="OFFICIAL PK365 DOWNLOAD" />
        </div>
      </article>
    </>
  );
}
