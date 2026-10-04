import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Create a SK777 Account and Login',
  description: 'Register and log in to SK777 safely using your Pakistani mobile number.',
  keywords: [
    'SK777 login',
    'SK777 register',
    'SK777 account',
    'SK777 signup'
  ],
  alternates: { canonical: `${SITE_URL}/blog/create-sk777-account-and-login` },
  openGraph: {
    title: 'How to Create a SK777 Account and Login',
    description: 'Register and log in to SK777 safely using your Pakistani mobile number.',
    url: `${SITE_URL}/blog/create-sk777-account-and-login`,
    siteName: 'SK777',
    type: 'article',
    images: [{ url: `${SITE_URL}/sk777-game-register.webp`, width: 1200, height: 630, alt: 'How to Create a SK777 Account and Login' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Create a SK777 Account and Login"
        description="Register and log in to SK777 safely using your Pakistani mobile number."
        slug="create-sk777-account-and-login"
        datePublished="2026-10-05"
        image={`${SITE_URL}/sk777-game-register.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Create a SK777 Account and Login</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Create a SK777 Account and Login</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · SK777 Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/sk777-game-register.webp" alt="How to Create a SK777 Account and Login" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>Creating a SK777 account takes a few minutes. Use your own Pakistani number and a password you do not reuse elsewhere.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Register</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the SK777 app after installing the official APK.</li>
          <li>Tap Register / Sign up.</li>
          <li>Enter a valid Pakistani mobile number and create a strong password.</li>
          <li>Complete any OTP or verification step shown on screen.</li>
          <li>Accept the terms and finish registration.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Login tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the same number and password every time.</li>
          <li>Never share OTP codes or passwords with agents on WhatsApp.</li>
          <li>If login fails, check network, clear app cache, or reset password via in-app help.</li>
        </ul>
        <p>Ready to fund your wallet? Read the <Link href="/blog/sk777-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit guide</Link>.</p>
    
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
