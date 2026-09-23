import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'how-to-use-pk365-app-pakistan-guide';
const TITLE = 'How to Use PK365 App in Pakistan: Complete Beginner Guide 2026';
const DESCRIPTION =
  'End-to-end PK365 guide for Pakistan: download APK, register, deposit with JazzCash/EasyPaisa, play Teen Patti & slots, withdraw, and play responsibly. 18+.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['how to use PK365', 'PK365 beginner guide', 'PK365 Pakistan tutorial', 'PK365 JazzCash guide'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game.webp', width: 1200, height: 630, alt: 'How to use PK365' }],
  },
};

export default function HowToUsePk365GuidePage() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game.webp" />
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
          <span className="text-gray-300">Beginner Guide</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+ entertainment at your own risk</p>

        <div className="relative w-full aspect-video max-h-[360px] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game.webp" alt="PK365 app overview Pakistan" fill className="object-contain" sizes="896px" priority />
        </div>

        <div className="space-y-10 text-gray-300">
          <p className="text-lg">New to PK365? Follow this roadmap from zero to your first table—without skipping safety or payment basics.</p>

          {[
            { step: '1', title: 'Download & install', body: <>See <Link href="/blog/how-to-download-install-pk365-apk-pakistan" className="text-accent hover:underline">APK install guide</Link> or <Link href="/download-pk365" className="text-accent hover:underline">download PK365</Link> directly.</> },
            { step: '2', title: 'Create account', body: <>Register with OTP—details in <Link href="/blog/create-pk365-account-and-login" className="text-accent hover:underline">account & login guide</Link>.</> },
            { step: '3', title: 'Add balance', body: <>Use JazzCash or EasyPaisa via <Link href="/deposit-money-in-pk365" className="text-accent hover:underline">deposit page</Link> or <Link href="/blog/pk365-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">blog deposit guide</Link>.</> },
            { step: '4', title: 'Pick a game', body: 'Start with low-stake Teen Patti or simple arcade games. Read table minimums; avoid max bets until you understand rules.' },
            { step: '5', title: 'Use bonuses wisely', body: <>Check <Link href="/blog/pk365-welcome-bonus-guide" className="text-accent hover:underline">welcome bonus guide</Link> for turnover rules.</> },
            { step: '6', title: 'Withdraw winnings', body: <>Follow <Link href="/withdraw-money-from-pk365" className="text-accent hover:underline">withdrawal instructions</Link> and <Link href="/blog/pk365-withdraw-money-guide" className="text-accent hover:underline">troubleshooting tips</Link>.</> },
          ].map(({ step, title, body }) => (
            <section key={step} className="bg-secondary rounded-xl p-6 md:p-8 flex gap-4">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#104008] text-white flex items-center justify-center font-bold">{step}</span>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p>{body}</p>
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Daily use tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Stable 4G/Wi‑Fi reduces disconnects mid-hand.</li>
              <li>Update APK when prompted inside the app.</li>
              <li>Use in-app support for payment issues—not third-party &quot;agents.&quot;</li>
            </ul>
          </section>

          <div className="bg-[#083000] border border-[#104008] rounded-xl p-6 text-sm">
            <strong className="text-white">Legal & responsible play:</strong> 18+ only. Online real-money gaming is not clearly legalized in Pakistan; treat PK365 as paid entertainment. Set a budget and stick to it.
          </div>

          <DownloadButton label="START WITH PK365" />
          <p>
            <Link href="/blog/pk365-app-review-2026" className="text-accent hover:underline">Full app review 2026</Link>
            {' · '}
            <Link href="/blog/tips-to-win-big-in-pk365" className="text-accent hover:underline">Tips to play smarter</Link>
          </p>
        </div>
      </article>
    </>
  );
}
