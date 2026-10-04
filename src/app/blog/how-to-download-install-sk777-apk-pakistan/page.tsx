import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Download & Install SK777 APK in Pakistan',
  description: 'Step-by-step guide to download and install SK777 APK on Android in Pakistan safely.',
  keywords: [
    'SK777 download',
    'SK777 APK',
    'install SK777 Pakistan',
    'SK777 APK download'
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-to-download-install-sk777-apk-pakistan` },
  openGraph: {
    title: 'How to Download & Install SK777 APK in Pakistan',
    description: 'Step-by-step guide to download and install SK777 APK on Android in Pakistan safely.',
    url: `${SITE_URL}/blog/how-to-download-install-sk777-apk-pakistan`,
    siteName: 'SK777',
    type: 'article',
    images: [{ url: `${SITE_URL}/sk777-game-home.webp`, width: 1200, height: 630, alt: 'How to Download & Install SK777 APK in Pakistan' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Download & Install SK777 APK in Pakistan"
        description="Step-by-step guide to download and install SK777 APK on Android in Pakistan safely."
        slug="how-to-download-install-sk777-apk-pakistan"
        datePublished="2026-10-05"
        image={`${SITE_URL}/sk777-game-home.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Download & Install SK777 APK in Pakistan</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Download & Install SK777 APK in Pakistan</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/sk777-game-home.webp" alt="How to Download & Install SK777 APK in Pakistan" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>SK777 is not listed on Google Play, so Pakistani players install it as an APK. Always use the official download on sk777app.com.pk to avoid modified files.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Download steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open sk777app.com.pk on your Android browser.</li>
          <li>Tap the official Download SK777 button.</li>
          <li>Wait for the APK file to finish downloading.</li>
          <li>Open Settings → Security (or Apps) and allow install from unknown sources / this browser.</li>
          <li>Open the APK from Notifications or Downloads and tap Install.</li>
          <li>Launch SK777 and register or log in.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Troubleshooting</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Install blocked:</strong> re-enable unknown sources for your browser, then retry.</li>
          <li><strong>Parse error:</strong> re-download the APK; the file may be incomplete.</li>
          <li><strong>App won’t open:</strong> free storage, update Android WebView, then reinstall.</li>
        </ul>
        <p>After install, see our <Link href="/blog/create-sk777-account-and-login" className="text-accent hover:underline">account guide</Link> or the full <Link href="/download-sk777" className="text-accent hover:underline">download page</Link>.</p>
    
      </div>
      <div className="mt-12 text-center">
        <DownloadButton size="lg" label="DOWNLOAD SK777 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">SK777 blog</Link>.
        </p>
      </div>
    </article>
  );
}
