import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'how-to-download-install-pk365-apk-pakistan';
const TITLE = 'How to Download & Install PK365 APK in Pakistan (Android)';
const DESCRIPTION =
  'Step-by-step PK365 APK download and install for Android in Pakistan: enable unknown sources, verify official file, and open the app safely. 18+ only.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 APK download', 'install PK365 Pakistan', 'PK365 Android', 'unknown sources PK365', 'PK365 official APK'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/PK365-Game-Icon.webp', width: 1200, height: 630, alt: 'PK365 APK install' }],
  },
};

export default function DownloadInstallPk365Page() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" />
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
          <span className="text-gray-300">Download & Install APK</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · Android 6.0+ recommended · 18+</p>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          PK365 is distributed as an APK outside the Google Play Store in Pakistan. Follow these steps to download from a trusted link and install without breaking your phone&apos;s security habits.
        </p>

        <div className="space-y-8 text-gray-300">
          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Step 1: Download the official APK</h2>
            <p className="mb-4">
              Use the verified download page on this site:{' '}
              <Link href="/download-pk365" className="text-accent hover:underline font-semibold">Download PK365</Link>.
              Avoid random Telegram links or cloned sites that ask for your wallet PIN outside the app.
            </p>
            <DownloadButton label="DOWNLOAD PK365 APK" />
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Step 2: Allow installs from this source</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Open your file manager or tap the completed download in Chrome.</li>
              <li>When Android warns about unknown apps, go to <strong className="text-white">Settings → Install unknown apps</strong> for Chrome or your browser.</li>
              <li>Enable <strong className="text-white">Allow from this source</strong> only for the browser you used to download PK365.</li>
              <li>Return and tap the APK again to install.</li>
            </ol>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Step 3: Open and update</h2>
            <p className="mb-4">Launch PK365, allow storage/network permissions if prompted, and sign in or register. If an in-app update appears, install it from the prompt rather than sideloading random &quot;mod&quot; APKs.</p>
            <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-lg overflow-hidden bg-primary">
              <Image src="/pk365-game.webp" alt="PK365 after install" fill className="object-contain" sizes="400px" />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Parse error:</strong> Re-download; file may be corrupted.</li>
              <li><strong className="text-white">Not enough space:</strong> Free at least 100MB before install.</li>
              <li><strong className="text-white">App not installed:</strong> Uninstall old PK365 copies first, then retry.</li>
            </ul>
          </section>

          <div className="bg-[#083000] border border-[#104008] rounded-xl p-6 text-sm">
            <strong className="text-white">18+ responsible gaming:</strong> Installing PK365 gives access to real-money games. Legal status in Pakistan is unclear; play for entertainment at your own risk and only with money you can afford to lose.
          </div>

          <p>
            Next:{' '}
            <Link href="/blog/create-pk365-account-and-login" className="text-accent hover:underline">Create account & login</Link>
            {' · '}
            <Link href="/blog/how-to-use-pk365-app-pakistan-guide" className="text-accent hover:underline">Full beginner guide</Link>
          </p>
        </div>
      </article>
    </>
  );
}
