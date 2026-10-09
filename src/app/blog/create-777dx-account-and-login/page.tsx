import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Create a 777DX Account and Login',
  description: 'Register on 777DX with your Pakistani number, set a password, verify OTP, and log in safely.',
  keywords: ['777DX login', '777DX register', '777DX account', '777DX signup'],
  alternates: { canonical: `${SITE_URL}/blog/create-777dx-account-and-login` },
  openGraph: {
    title: 'How to Create a 777DX Account and Login',
    description: 'Register on 777DX with your Pakistani number, set a password, verify OTP, and log in safely.',
    url: `${SITE_URL}/blog/create-777dx-account-and-login`,
    siteName: '777DX',
    type: 'article',
    images: [{ url: `${SITE_URL}/777dx-register.webp`, width: 1200, height: 630, alt: 'How to Create a 777DX Account and Login' }],
  },
};

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <BlogPostSchema
        title="How to Create a 777DX Account and Login"
        description="Register on 777DX with your Pakistani number, set a password, verify OTP, and log in safely."
        slug="create-777dx-account-and-login"
        datePublished="2026-10-06"
        image={`${SITE_URL}/777dx-register.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Create a 777DX Account and Login</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Create a 777DX Account and Login</h1>
      <p className="text-gray-400 text-sm mb-8">Updated October 2026 · 777DX Pakistan guide</p>
      <div className="relative w-full max-w-md mx-auto mb-10 rounded-xl overflow-hidden border border-gray-800">
        <Image src="/777dx-register.webp" alt="How to Create a 777DX Account and Login" width={720} height={1280} className="w-full h-auto object-contain" priority />
      </div>
      <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed text-lg">

        <p>After installing the APK, open 777DX and choose Register / Signup. Pakistani players typically use a mobile number, password, and OTP.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Registration</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the app and tap Register.</li>
          <li>Enter your Pakistani mobile number.</li>
          <li>Create a strong password and set any security / withdrawal PIN if asked.</li>
          <li>Enter the OTP sent to your phone and submit.</li>
          <li>Optional: add an invite/referral code if you have one.</li>
        </ol>
        <h2 className="text-2xl font-bold text-white mt-8">Login tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the same number and password you registered with.</li>
          <li>Never share OTP or PIN with anyone claiming to be support.</li>
          <li>If login fails, check network, reset password via in-app flow, or contact support.</li>
        </ul>
        <p>Screens: <em>Register</em> and <em>Login</em> match the 777DX app UI used on this site. Next: <Link href="/blog/777dx-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">deposit with JazzCash / EasyPaisa</Link>.</p>
    
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
