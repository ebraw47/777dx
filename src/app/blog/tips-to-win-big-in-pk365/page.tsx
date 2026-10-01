import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'tips-to-win-big-in-pk365';
const TITLE = 'Tips to Win Big in PK365: Bankroll, Games & Responsible Play';
const DESCRIPTION =
  'Practical PK365 tips for Pakistan: bankroll limits, game selection, bonus discipline, and responsible 18+ gaming—no guaranteed win formulas.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 tips', 'win PK365 Teen Patti', 'PK365 bankroll', 'PK365 strategy Pakistan'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game.webp', width: 1200, height: 630, alt: 'PK365 gaming tips' }],
  },
};

export default function TipsToWinPk365Page() {
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
          <span className="text-gray-300">Winning Tips</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+ · No guaranteed wins</p>

        <div className="relative w-full aspect-video max-h-[320px] rounded-xl overflow-hidden bg-secondary mb-8">
          <Image src="/pk365-game.webp" alt="PK365 games lobby" fill className="object-contain" sizes="896px" />
        </div>

        <div className="space-y-8 text-gray-300">
          <p className="text-lg">
            &quot;Win big&quot; posts ignore math: every game favors the operator over time. These tips help you play longer, avoid common mistakes, and protect your JazzCash balance—not promise riches.
          </p>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Bankroll rules</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Set a daily PKR cap before opening the app; stop when it is gone.</li>
              <li>Withdraw a portion after a good session instead of reinvesting everything.</li>
              <li>Never chase losses with bigger deposits—see{' '}
                <Link href="/deposit-money-in-pk365" className="text-accent hover:underline">deposit guide</Link> only when planned.</li>
              <li>Keep gambling money separate from rent, bills, and family expenses.</li>
            </ul>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Game selection</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong className="text-white">Teen Patti:</strong> Learn hand rankings; play lower blinds until comfortable.</li>
              <li><strong className="text-white">Fast games (Dragon/Tiger, etc.):</strong> High pace drains bankrolls quickly—use tiny stakes.</li>
              <li><strong className="text-white">Slots:</strong> Pure randomness; shorter sessions limit exposure.</li>
              <li><strong className="text-white">Sports:</strong> Only bet on matches you understand; avoid parlay hype.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Bonus & session discipline</h2>
            <p>
              Skip confusing promos. Log out after a set time. For broader context read{' '}
              <Link href="/blog/pk365-app-review-2026" className="text-accent hover:underline">PK365 review</Link> and{' '}
              <Link href="/blog/how-to-use-pk365-app-pakistan-guide" className="text-accent hover:underline">beginner guide</Link>.
            </p>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">18+ responsible gaming:</strong> If tips feel like pressure to gamble more, ignore them. Entertainment only—legal status in Pakistan is unclear; you play at your own risk.
          </div>

          <DownloadButton label="PLAY RESPONSIBLY" />
        </div>
      </article>
    </>
  );
}
