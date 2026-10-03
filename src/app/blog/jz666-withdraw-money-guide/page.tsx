import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'JZ666 Withdraw Money Guide',
  description:
    'Withdraw from JZ666 to JazzCash, EasyPaisa, or bank using your withdrawal PIN — limits and failed cashout fixes.',
  keywords: [
    'JZ666 withdraw',
    'JZ666 cashout',
    'JZ666 withdrawal PIN',
    'JZ666 EasyPaisa withdraw',
  ],
  alternates: { canonical: `${SITE_URL}/blog/jz666-withdraw-money-guide` },
  openGraph: {
    title: 'JZ666 Withdraw Money Guide',
    description:
      'Withdraw from JZ666 to JazzCash, EasyPaisa, or bank using your withdrawal PIN — limits and failed cashout fixes.',
    url: `${SITE_URL}/blog/jz666-withdraw-money-guide`,
    siteName: 'JZ666',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/jz666-game-withdraw.webp`,
        width: 1200,
        height: 630,
        alt: 'JZ666 Withdraw Money Guide',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      <BlogPostSchema
        title="JZ666 Withdraw Money Guide"
        description="Withdraw from JZ666 to JazzCash, EasyPaisa, or bank using your withdrawal PIN — limits and failed cashout fixes."
        slug="jz666-withdraw-money-guide"
        datePublished="2026-10-04"
        image={`${SITE_URL}/jz666-game-withdraw.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">JZ666 Withdraw Money Guide</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">JZ666 Withdraw Money Guide</h1>
      <p className="text-gray-400 text-sm mb-10">Updated October 2026 · JZ666 Pakistan guide</p>

      {/* Content left, withdraw screenshot right */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
          <p>
            Withdrawals on JZ666 usually sit next to Deposit in the account area. Many builds require
            a withdrawal PIN and may send funds to JazzCash, EasyPaisa, or a bank account in your
            name — match the Withdraw screen on the right.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-2">Steps</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Open Withdraw and set or enter your withdrawal PIN if prompted.</li>
            <li>Bind a payment account that matches your registered identity.</li>
            <li>Enter an amount within the current min/max limits shown in-app.</li>
            <li>Meet any wagering / turnover rules on bonuses before submitting.</li>
            <li>Submit and track status under records or history.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-2">Why withdrawals fail</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Turnover not finished on a bonus balance</li>
            <li>Wrong wallet number or name mismatch</li>
            <li>Daily max already reached</li>
            <li>Incorrect withdrawal PIN</li>
          </ul>

          <p>
            More detail:{' '}
            <Link href="/withdraw-money-from-jz666" className="text-accent hover:underline">
              Withdraw money from JZ666
            </Link>
            .
          </p>
        </div>

        <div className="order-1 md:order-2">
          <figure className="mx-auto w-full max-w-[240px] md:max-w-[260px] md:sticky md:top-24">
            <div className="rounded-2xl overflow-hidden border border-[#c9a227]/35 bg-secondary shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <Image
                src="/jz666-game-withdraw.webp"
                alt="JZ666 withdraw screen"
                width={720}
                height={1280}
                className="w-full h-auto object-contain"
                priority
                sizes="260px"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-semibold text-accent">
              Withdraw screen
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="text-center">
        <DownloadButton size="lg" label="DOWNLOAD JZ666 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">
            JZ666 blog
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
