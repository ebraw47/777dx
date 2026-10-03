import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import BlogPostSchema from '@/components/BlogPostSchema';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'How to Create a JZ666 Account and Login',
  description: 'Register on JZ666, set a secure password, and log in safely on Android in Pakistan.',
  keywords: [
    'JZ666 register',
    'JZ666 login',
    'JZ666 account',
    'JZ666 signup',
  ],
  alternates: { canonical: `${SITE_URL}/blog/create-jz666-account-and-login` },
  openGraph: {
    title: 'How to Create a JZ666 Account and Login',
    description: 'Register on JZ666, set a secure password, and log in safely on Android in Pakistan.',
    url: `${SITE_URL}/blog/create-jz666-account-and-login`,
    siteName: 'JZ666',
    type: 'article',
    images: [
      {
        url: `${SITE_URL}/jz666-game-register.webp`,
        width: 1200,
        height: 630,
        alt: 'How to Create a JZ666 Account and Login',
      },
    ],
  },
};

function PhoneShot({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="mx-auto w-full max-w-[240px] md:max-w-[260px] md:sticky md:top-24">
      <div className="rounded-2xl overflow-hidden border border-[#c9a227]/35 bg-secondary shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1280}
          className="w-full h-auto object-contain"
          priority={priority}
          sizes="260px"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm font-semibold text-accent">{caption}</figcaption>
    </figure>
  );
}

export default function Page() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      <BlogPostSchema
        title="How to Create a JZ666 Account and Login"
        description="Register on JZ666, set a secure password, and log in safely on Android in Pakistan."
        slug="create-jz666-account-and-login"
        datePublished="2026-10-04"
        image={`${SITE_URL}/jz666-game-register.webp`}
      />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-accent">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">How to Create a JZ666 Account and Login</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
        How to Create a JZ666 Account and Login
      </h1>
      <p className="text-gray-400 text-sm mb-10">Updated October 2026 · JZ666 Pakistan guide</p>

      <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-3xl">
        Creating a JZ666 account takes a few minutes. Use your own mobile number and a unique password
        you do not reuse on JazzCash or EasyPaisa.
      </p>

      {/* Register — text left, screenshot right */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Register on JZ666</h2>
          <p>Follow the Register screen shown on the right to create your account.</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Open the JZ666 app and tap Register.</li>
            <li>Enter the details the form asks for (often phone + password).</li>
            <li>Complete any OTP or verification step if shown.</li>
            <li>Submit and wait for the lobby/home screen.</li>
          </ol>
        </div>
        <div className="order-1 md:order-2">
          <PhoneShot
            src="/jz666-game-register.webp"
            alt="JZ666 register screen"
            caption="Register screen"
            priority
          />
        </div>
      </section>

      {/* Login — text left, screenshot right */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
        <div className="space-y-5 text-gray-300 leading-relaxed text-lg order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Login to JZ666</h2>
          <p>Use the Login screen on the right after your account is ready.</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Tap Login on the splash screen.</li>
            <li>Enter the same credentials you registered with.</li>
            <li>
              If login fails, use in-app Customer Service — never share OTP or PIN with strangers.
            </li>
          </ol>
          <h3 className="text-xl font-bold text-white pt-2">Safety tips</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Do not save passwords in shared phone galleries or chat apps.</li>
            <li>Set a withdrawal PIN later before cashing out.</li>
            <li>Use only the official APK from jz666apk.com.pk.</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <PhoneShot
            src="/jz666-game-login.webp"
            alt="JZ666 login screen"
            caption="Login screen"
          />
        </div>
      </section>

      <div className="mt-4 text-center">
        <DownloadButton size="lg" label="DOWNLOAD JZ666 APK" />
        <p className="text-sm text-gray-500 mt-4">
          More help on the{' '}
          <Link href="/blog" className="text-accent hover:underline">
            JZ666 blog
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
