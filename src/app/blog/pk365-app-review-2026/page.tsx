import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'pk365-app-review-2026';
const TITLE = 'PK365 App Review 2026: Features, Payments & Honest Verdict';
const DESCRIPTION =
  'In-depth PK365 app review for Pakistan 2026: Teen Patti, slots, sports, JazzCash & EasyPaisa deposits, pros, cons, and payout notes. 18+ entertainment only.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'PK365 review',
    'PK365 app review 2026',
    'PK365 Pakistan',
    'PK365 JazzCash',
    'PK365 Teen Patti',
    'PK365 payout',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game.webp', width: 1200, height: 630, alt: 'PK365 app review' }],
  },
};

export default function Pk365AppReview2026Page() {
  return (
    <>
      <BlogPostSchema
        title={TITLE}
        description={DESCRIPTION}
        slug={SLUG}
        datePublished="2026-09-01"
        image="https://pk365-app.pk/pk365-game.webp"
      />
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
          <span className="text-gray-300">App Review 2026</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">Updated September 2026 · 18+ · Play for entertainment at your own risk</p>

        <div className="relative w-full aspect-video max-h-[420px] rounded-xl overflow-hidden mb-8 bg-secondary">
          <Image src="/pk365-game.webp" alt="PK365 app home screen Pakistan" fill className="object-contain" sizes="(max-width: 896px) 100vw, 896px" priority />
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            PK365 is a popular Android gaming app among players in Pakistan who enjoy Teen Patti, casual slots-style games, and sports-style betting menus. This review covers what the app offers, how JazzCash and EasyPaisa fit in, and what to expect—without promising guaranteed income.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">What PK365 offers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Teen Patti & card tables</strong> — quick rounds, low minimum stakes on many tables.</li>
              <li><strong className="text-white">Slots & arcade-style games</strong> — variety for short sessions; outcomes are random.</li>
              <li><strong className="text-white">Sports section</strong> — markets on cricket and other events where available in the app.</li>
              <li><strong className="text-white">Local payments</strong> — JazzCash and EasyPaisa for adding and cashing out balance.</li>
              <li><strong className="text-white">Promotions</strong> — welcome offers, daily tasks, and referral rewards (terms apply).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Deposits & withdrawals</h2>
            <p>
              Most Pakistani users fund PK365 via JazzCash or EasyPaisa. Deposits often reflect within minutes when your wallet number matches your registered details. Withdrawals can take from a few minutes to several hours depending on verification load and amount. For step-by-step help, see our{' '}
              <Link href="/deposit-money-in-pk365" className="text-accent hover:underline">deposit guide</Link> and{' '}
              <Link href="/withdraw-money-from-pk365" className="text-accent hover:underline">withdrawal guide</Link>.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-xl p-6 border border-[#004038]">
              <h3 className="text-xl font-bold text-accent mb-3">Pros</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Familiar JazzCash / EasyPaisa flow for PK users</li>
                <li>Wide game mix in one APK</li>
                <li>Regular promos and referral options</li>
                <li>Urdu-friendly UI on many screens</li>
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Cons</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Real-money loss is possible on every bet</li>
                <li>Withdrawals may fail if KYC or wallet details mismatch</li>
                <li>Not on Google Play — install only from official sources</li>
                <li>Bonus wagering rules can be easy to misunderstand</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Payout experience (realistic notes)</h2>
            <p>
              Small withdrawals to a verified JazzCash or EasyPaisa account often complete smoothly. Delays usually tie to wrong account numbers, pending bonus turnover, or peak-hour processing. Keep screenshots of successful deposits and use the in-app support channel if a payout stalls beyond 24 hours.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
            <p>
              PK365 suits adults in Pakistan who want local wallet support and a bundled game lobby—but treat it as paid entertainment, not a job. Download only from{' '}
              <Link href="/download-pk365" className="text-accent hover:underline">our official PK365 download page</Link>, set a strict budget, and never chase losses.
            </p>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm text-gray-300">
            <strong className="text-white">Responsible gaming:</strong> You must be 18+. Online real-money gaming exists in a legal grey area in Pakistan; play at your own risk. If gaming stops being fun, take a break and seek help from trusted friends or family.
          </div>

          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <DownloadButton label="GET PK365 APK" />
            <Link href="/blog/how-to-use-pk365-app-pakistan-guide" className="text-accent hover:underline font-semibold">Beginner guide →</Link>
          </div>
        </div>
      </article>
    </>
  );
}
