import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Download & Install JZ666 APK in Pakistan',
  description: 'Step-by-step guide to download and install the official JZ666 APK on Android in Pakistan safely.',
  keywords: [
    'JZ666 APK',
    'JZ666 download',
    'install JZ666 Pakistan',
    'JZ666 Android'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-download-install-jz666-apk-pakistan` },
  openGraph: {
    title: 'How to Download & Install JZ666 APK in Pakistan',
    description: 'Step-by-step guide to download and install the official JZ666 APK on Android in Pakistan safely.',
    url: `${SITE_URL}/blog/how-to-download-install-jz666-apk-pakistan`,
    siteName: 'JZ666',
    type: 'article',
    images: [{ url: `${SITE_URL}/jz666-game-home.webp`, width: 1200, height: 630, alt: 'How to Download & Install JZ666 APK in Pakistan' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title='How to Download & Install JZ666 APK in Pakistan'
        description='Step-by-step guide to download and install the official JZ666 APK on Android in Pakistan safely.'
        slug="how-to-download-install-jz666-apk-pakistan"
        datePublished="2026-10-04"
        image={`${SITE_URL}/jz666-game-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Download & Install JZ666 APK in Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Download & Install JZ666 APK in Pakistan</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · JZ666 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/jz666-game-home.webp" alt="How to Download & Install JZ666 APK in Pakistan" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">
        <p>Google Play does not list JZ666, so Pakistani users install an APK from a trusted page. Use jz666apk.com.pk and avoid random WhatsApp or Telegram files.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Steps</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open <Link href="/" className="text-accent hover:underline">jz666apk.com.pk</Link> and tap Download JZ666.</li>
          <li>Wait until the APK finishes downloading in your browser or Files app.</li>
          <li>If Android blocks the install, allow that browser/file manager once under Install unknown apps.</li>
          <li>Open the APK, tap Install, then Open.</li>
          <li>Turn unknown-sources permission off again after install.</li>
          <li>Register or log in, then explore the lobby before depositing.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Parse error:</strong> re-download; the file may be incomplete.</li>
          <li><strong>Blocked by Play Protect:</strong> confirm the source, then proceed only if you trust jz666apk.com.pk.</li>
          <li><strong>Not enough storage:</strong> free space and retry.</li>
        </ul>
        <p>Full beginner flow: <Link href="/blog/how-to-use-jz666-app-pakistan-guide" className="text-accent hover:underline">How to use JZ666</Link>.</p>
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD JZ666 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">JZ666 blog</Link>.
        </p>
      </div>
    </article>
  );
}
