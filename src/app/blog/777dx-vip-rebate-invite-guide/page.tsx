import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: '777DX VIP, Rebate & Invite Guide',
  description: 'How 777DX VIP program, rebate rewards, missions, and invite-and-earn work for Pakistani players.',
  keywords: ['777DX VIP', '777DX rebate', '777DX invite', '777DX referral bonus'],
  alternates: { canonical: `${SITE_URL}/blog/777dx-vip-rebate-invite-guide` },
  openGraph: {
    title: '777DX VIP, Rebate & Invite Guide',
    description: 'How 777DX VIP program, rebate rewards, missions, and invite-and-earn work for Pakistani players.',
    url: `${SITE_URL}/blog/777dx-vip-rebate-invite-guide`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-vip.webp`, width: 1200, height: 630, alt: '777DX VIP, Rebate & Invite Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="777DX VIP, Rebate & Invite Guide"
        description="How 777DX VIP program, rebate rewards, missions, and invite-and-earn work for Pakistani players."
        slug="777dx-vip-rebate-invite-guide"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-vip.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">777DX VIP, Rebate & Invite Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">777DX VIP, Rebate & Invite Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-vip.webp" alt="777DX VIP, Rebate & Invite Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>Official and Pakistan SERP pages for 777DX highlight promotions: VIP rewards, rebates, missions, and invite-and-earn. Exact percentages change — always read the live Offers / VIP screens.</p>
        <h2 className="text-2xl font-bold text-white mt-8">VIP program</h2>
        <p>Higher VIP tiers may unlock cashback-style rewards, higher withdraw limits, or exclusive events. Progress usually depends on play volume shown in your VIP panel.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Rebate</h2>
        <p>Rebate returns a portion of eligible play as a reward. Check which games qualify and when rebate credits land.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Invite &amp; earn</h2>
        <p>Share your invite link. Rewards typically require the friend to register and meet activity rules — not just install.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Missions</h2>
        <p>Complete daily or event missions for bonus coins or cash credits when listed.</p>
        <p>Promotions are optional. Never deposit only to chase a bonus you have not verified in-app.</p>
    
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
