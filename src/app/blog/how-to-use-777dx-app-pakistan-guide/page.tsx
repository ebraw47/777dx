import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Use 777DX App in Pakistan: Beginner Guide',
  description: 'End-to-end 777DX guide: download, register, deposit, play missions, VIP, withdraw, and stay in control.',
  keywords: ['how to use 777DX', '777DX guide Pakistan', '777DX beginner', '777DX tutorial'],
  alternates: { canonical: `${SITE_URL}/blog/how-to-use-777dx-app-pakistan-guide` },
  openGraph: {
    title: 'How to Use 777DX App in Pakistan: Beginner Guide',
    description: 'End-to-end 777DX guide: download, register, deposit, play missions, VIP, withdraw, and stay in control.',
    url: `${SITE_URL}/blog/how-to-use-777dx-app-pakistan-guide`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-mission.webp`, width: 1200, height: 630, alt: 'How to Use 777DX App in Pakistan: Beginner Guide' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Use 777DX App in Pakistan: Beginner Guide"
        description="End-to-end 777DX guide: download, register, deposit, play missions, VIP, withdraw, and stay in control."
        slug="how-to-use-777dx-app-pakistan-guide"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-mission.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Use 777DX App in Pakistan: Beginner Guide</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Use 777DX App in Pakistan: Beginner Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-mission.webp" alt="How to Use 777DX App in Pakistan: Beginner Guide" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>This beginner guide matches what Pakistan users search for when they want the full 777DX flow in one place.</p>
        <h2 className="text-2xl font-bold text-white mt-8">1. Download &amp; install</h2>
        <p>Get the APK from <Link href="/download-777dx" className="text-accent hover:underline">our download page</Link>, allow the install, then open the app.</p>
        <h2 className="text-2xl font-bold text-white mt-8">2. Register &amp; login</h2>
        <p>Create an account with your number and OTP, then explore the home lobby.</p>
        <h2 className="text-2xl font-bold text-white mt-8">3. Deposit when ready</h2>
        <p>Use JazzCash or EasyPaisa from the Deposit screen. Confirm recipient details every time.</p>
        <h2 className="text-2xl font-bold text-white mt-8">4. Play, missions &amp; rewards</h2>
        <p>Try short rounds, check Missions, Night Mode, Rebate, and VIP when available — read bonus rules before relying on them.</p>
        <h2 className="text-2xl font-bold text-white mt-8">5. Withdraw</h2>
        <p>Bind your wallet, meet any turnover rules, then submit a withdrawal to JazzCash or EasyPaisa.</p>
        <p>Related: <Link href="/blog/777dx-vip-rebate-invite-guide" className="text-accent hover:underline">VIP, rebate &amp; invite guide</Link>.</p>
    
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
