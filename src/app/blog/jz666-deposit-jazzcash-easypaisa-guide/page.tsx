import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'JZ666 Deposit Guide: JazzCash & EasyPaisa',
  description:
    'How to deposit on JZ666 with JazzCash, EasyPaisa, or QR — amounts, steps, and delayed credit fixes.',
  keywords: [
    'JZ666 deposit',
    'JZ666 JazzCash',
    'JZ666 EasyPaisa',
    'JZ666 add money',
  ],
  alternates: { canonical: `${SITE_URL}/blog/jz666-deposit-jazzcash-easypaisa-guide` },
  openGraph: {
    title: 'JZ666 Deposit Guide: JazzCash & EasyPaisa',
    description:
      'How to deposit on JZ666 with JazzCash, EasyPaisa, or QR — amounts, steps, and delayed credit fixes.',
    url: `${SITE_URL}/blog/jz666-deposit-jazzcash-easypaisa-guide`,
    siteName: 'JZ666',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/jz666-game-deposit.webp`,
        width: 1200,
        height: 630,
        alt: 'JZ666 Deposit Guide: JazzCash & EasyPaisa',
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      <BlogPostSchema
        title="JZ666 Deposit Guide: JazzCash & EasyPaisa"
        description="How to deposit on JZ666 with JazzCash, EasyPaisa, or QR — amounts, steps, and delayed credit fixes."
        slug="jz666-deposit-jazzcash-easypaisa-guide"
        datePublished="2026-10-04"
        image={`${SITE_URL}/jz666-game-deposit.webp`}
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
        <span className="text-gray-300">JZ666 Deposit Guide: JazzCash & EasyPaisa</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        JZ666 Deposit Guide: JazzCash & EasyPaisa
      </h1>
      <p className="text-gray-400 text-sm mb-10">Updated October 2026 · JZ666 Pakistan guide</p>

      {/* Content left, deposit screenshot right */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
          <p>
            JZ666 deposits for Pakistan typically list JazzCash, EasyPaisa, and sometimes EasyPaisa
            QR. Ranges shown online often start near Rs 100 — always trust the live Deposit screen on
            the right.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-2">How to deposit</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Open JZ666 and tap Deposit / Wallet.</li>
            <li>Choose JazzCash, EasyPaisa, or QR if available.</li>
            <li>Enter an amount you can afford to lose.</li>
            <li>Follow the payment instructions exactly (account name, ID, or QR).</li>
            <li>Confirm and wait for the balance update before playing.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-white pt-2">If money is delayed</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep the payment receipt or transaction ID.</li>
            <li>Refresh the wallet after a few minutes.</li>
            <li>
              Contact in-app Customer Service with proof — never pay a release fee to strangers.
            </li>
          </ul>

          <p>
            Also read:{' '}
            <Link href="/deposit-money-in-jz666" className="text-accent hover:underline">
              Deposit money in JZ666
            </Link>
            .
          </p>
        </div>

        <div className="order-1 md:order-2">
          <figure className="mx-auto w-full max-w-[240px] md:max-w-[260px] md:sticky md:top-24">
            <div className="rounded-2xl overflow-hidden border border-[#c9a227]/35 bg-secondary shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <Image
                src="/jz666-game-deposit.webp"
                alt="JZ666 deposit screen with JazzCash and EasyPaisa"
                width={720}
                height={1280}
                className="w-full h-auto object-contain"
                priority
                sizes="260px"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-semibold text-accent">
              Deposit screen
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
