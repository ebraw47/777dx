import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import DownloadButton from '@/components/DownloadButton';

const SLUG = 'create-pk365-account-and-login';
const TITLE = 'How to Create a PK365 Account and Login (OTP & Password)';
const DESCRIPTION =
  'Register on PK365 with your mobile number, verify OTP, set a password, and log in safely in Pakistan. Tips for JazzCash-linked numbers. 18+ only.';
const CANONICAL = `https://pk365-app.pk/blog/${SLUG}`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['PK365 register', 'PK365 login', 'PK365 OTP', 'create PK365 account', 'PK365 Pakistan signup'],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'PK365',
    locale: 'en_US',
    type: 'article',
    images: [{ url: 'https://pk365-app.pk/pk365-game-register.webp', width: 1200, height: 630, alt: 'PK365 register screen' }],
  },
};

export default function CreatePk365AccountPage() {
  return (
    <>
      <BlogPostSchema title={TITLE} description={DESCRIPTION} slug={SLUG} datePublished="2026-09-01" image="https://pk365-app.pk/pk365-game-register.webp" />
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
          <span className="text-gray-300">Account & Login</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">{TITLE}</h1>
        <p className="text-gray-400 text-sm mb-8">September 2026 · 18+</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-secondary">
            <Image src="/pk365-game-register.webp" alt="PK365 registration screen" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-secondary">
            <Image src="/pk365-game-login.webp" alt="PK365 login screen" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>

        <div className="space-y-8 text-gray-300">
          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Register a new account</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><Link href="/download-pk365" className="text-accent hover:underline">Install PK365</Link> and open the app.</li>
              <li>Tap <strong className="text-white">Register</strong> and enter your active Pakistani mobile number (Jazz, Zong, Ufone, Telenor).</li>
              <li>Enter the SMS OTP within the time limit. If OTP is delayed, check signal and request again after 60 seconds.</li>
              <li>Create a strong password (letters + numbers). Do not reuse your JazzCash or EasyPaisa PIN.</li>
              <li>Complete any optional profile fields. Use the same number you plan to use for deposits.</li>
            </ol>
          </section>

          <section className="bg-secondary rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Login next time</h2>
            <p className="mb-4">Open PK365 → <strong className="text-white">Login</strong> → mobile number + password. Some builds also offer OTP login if you forgot the password—follow in-app reset steps.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wrong password: use &quot;Forgot password&quot; and verify OTP.</li>
              <li>Account locked: wait 15–30 minutes or contact in-app support.</li>
              <li>New phone: login with the same registered number; do not create duplicate accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Security tips</h2>
            <p>One account per person and per phone number keeps withdrawals smoother. Never share OTPs with &quot;agents&quot; on WhatsApp claiming to fix withdrawals.</p>
          </section>

          <div className="bg-[#002c27] border border-[#004038] rounded-xl p-6 text-sm">
            <strong className="text-white">18+:</strong> Registration is for adults only. Real-money play is entertainment at your own risk.
          </div>

          <DownloadButton label="DOWNLOAD & REGISTER" />
          <p className="pt-2">
            <Link href="/blog/pk365-deposit-jazzcash-easypaisa-guide" className="text-accent hover:underline">Deposit with JazzCash / EasyPaisa →</Link>
          </p>
        </div>
      </article>
    </>
  );
}
