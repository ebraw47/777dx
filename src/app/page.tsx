import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'PK365 Pakistan Free Download Official APK 2026',
  description:
    'Download PK365 APK for Pakistan. Play Teen Patti, slots, live games & sports. Deposit with JazzCash & EasyPaisa. Real cash rewards 2026.',
  keywords: [
    'PK365',
    'PK365 APK',
    'PK365 download',
    'PK365 Pakistan',
    'PK365 game',
    'PK365 earning app',
    'PK365 JazzCash',
    'PK365 EasyPaisa',
    'pk365-app.pk',
    'PK365 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'PK365 Pakistan Free Download Official APK 2026',
    description:
      "Pakistan's trusted PK365 gaming platform — Teen Patti, slots, sports & real cash via JazzCash & EasyPaisa.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'PK365 - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PK365 Pakistan Free Download Official APK 2026',
    description: 'Download PK365 APK — Teen Patti, slots, sports, JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: 'PK365' },
  { label: 'Category', value: 'Casino, Cards, Sports' },
  { label: 'Size', value: APP_SIZE },
  { label: 'Latest Version', value: APP_VERSION },
  { label: 'Required OS', value: APP_OS },
  { label: 'Update', value: '2026' },
  { label: 'Downloads', value: '100K+' },
  { label: 'Language', value: 'English, Urdu' },
  { label: 'Payments', value: 'JazzCash, EasyPaisa' },
  { label: 'Price', value: 'Free' },
];

const screenshots = [
  { src: '/pk365-game.webp', alt: 'PK365 game lobby', title: 'Game Lobby' },
  { src: '/pk365-game-register.webp', alt: 'PK365 register screen', title: 'Register' },
  { src: '/pk365-game-login.webp', alt: 'PK365 login screen', title: 'Login' },
  { src: '/pk365-game-deposit-bonus.webp', alt: 'PK365 deposit and bonus', title: 'Deposit & Bonus' },
  { src: '/pk365-game-withdraw-methods.webp', alt: 'PK365 withdraw methods', title: 'Withdraw' },
  { src: '/pk365-game-invite.webp', alt: 'PK365 invite friends', title: 'Invite Friends' },
  { src: '/pk365-game-support.webp', alt: 'PK365 customer support', title: 'Support' },
];

const features = [
  {
    title: 'Real Cash Play',
    text: 'Win on Teen Patti, slots, crash games and sports markets, then cash out to JazzCash or EasyPaisa in PKR.',
  },
  {
    title: 'Welcome & Daily Bonuses',
    text: 'Claim signup rewards, daily login gifts, and deposit promotions — always check wagering terms in the Bonus centre.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'Local wallets for deposits and withdrawals built for Pakistani players. Verify numbers carefully before confirming.',
  },
  {
    title: 'Invite & Earn',
    text: 'Share your referral link or QR. Track friends who register and earn when they meet the invite conditions.',
  },
  {
    title: 'Lightweight Android APK',
    text: `Compact install (${APP_SIZE}) that runs on ${APP_OS} devices with stable 3G/4G or Wi‑Fi.`,
  },
  {
    title: 'In-App Support',
    text: 'Get help from the support screen when deposits, withdrawals, or login need a hand.',
  },
];

const faqs = [
  {
    q: 'Is PK365 free to download?',
    a: 'Yes. The APK is free from pk365-app.pk. Always use the official download button so you avoid fake copies.',
  },
  {
    q: 'Which games can I play on PK365?',
    a: 'Teen Patti, slots, crash-style games, live tables, and sports markets — the lobby may update with new titles over time.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Deposit / Wallet, pick JazzCash or EasyPaisa, enter the amount, follow on-screen steps, then confirm. See our deposit guide for details.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw, bind JazzCash or EasyPaisa in your own name, meet any turnover rules, enter the amount, and submit.',
  },
  {
    q: 'Can I earn from inviting friends?',
    a: 'Yes. The Invite Friends section gives you a link/QR and tracks registers and referral rewards when conditions are met.',
  },
  {
    q: 'Is PK365 available on iPhone?',
    a: 'The primary install path is Android APK. Some players open the mobile web lobby in a browser; for PC, use an Android emulator — see our PC guide.',
  },
  {
    q: 'Is there a risk of losing money?',
    a: 'Yes. Real-money play always carries risk. Only use money you can afford to lose and play responsibly (18+).',
  },
];

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BRAND_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/PK365-Game-Icon.webp`,
        description:
          'PK365 official Pakistan site — Teen Patti, slots, sports, JazzCash & EasyPaisa.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SUPPORT_EMAIL,
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: ['en', 'ur'],
      },
      {
        '@type': 'SoftwareApplication',
        name: BRAND_NAME,
        operatingSystem: APP_OS,
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.5',
          ratingCount: '100000',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/download-pk365`,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: `${SITE_URL}/PK365-Game-Icon.webp`,
        author: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="relative py-10 md:py-16 px-4 overflow-visible">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 20%, rgba(255,165,0,0.18), transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(14,165,233,0.12), transparent 50%)',
          }}
        />
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
                PK365
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-[#FFA500]">
                Pakistan&apos;s Trusted Real-Money Gaming App 2026
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Teen Patti, slots, and sports on one Android APK — with JazzCash &amp; EasyPaisa
                deposits and withdrawals. Download only from the official button below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="DOWNLOAD PK365" />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: '100K+', l: 'Downloads' },
                  { n: APP_SIZE, l: 'App Size' },
                  { n: '18+', l: 'Players Only' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="text-sm text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">*Available for Android devices</p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden bg-[#104008]/80 border border-gray-700/60 shadow-[0_0_60px_rgba(255,165,0,0.12)]">
                <Image
                  src="/PK365-Game-Icon.webp"
                  alt="PK365 Official Logo"
                  width={340}
                  height={340}
                  className="object-contain p-4 w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info */}
      <section className="py-10 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            PK365 Download Info
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left">
              <tbody>
                {appInfo.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}>
                    <th className="py-3 px-4 md:px-6 text-accent font-semibold w-1/3">{row.label}</th>
                    <td className="py-3 px-4 md:px-6 text-white">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is PK365?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                PK365
              </Link>{' '}
              is a Pakistan-focused real-money gaming app for Teen Patti, slots, crash-style titles,
              and sports markets — with local JazzCash and EasyPaisa wallets for funding and cashout.
            </p>
            <p>
              New players can register, claim welcome offers, try the lobby, then deposit when ready.
              Invite rewards, daily bonuses, and in-app support keep regular sessions practical for
              Android users across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why PK365 is Popular in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa for deposits and withdrawals.',
              'Game mix: Teen Patti, slots, crash games, and sports in one lobby.',
              'Bonuses: welcome, daily login, deposit promos, and referral rewards.',
              'Mobile-first APK sized for mid-range Android phones.',
              'Clear wallet flows for Pakistani phone numbers and wallets.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to start */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How to Start with PK365</h2>
          <ol className="space-y-4">
            {[
              'Open pk365-app.pk and tap Download for the official APK.',
              'Allow install from unknown sources, open the APK, and finish setup.',
              'Launch PK365 and register with your mobile number (or log in).',
              'Claim welcome / daily rewards shown under Promotion or Bonus.',
              'Optional: deposit via JazzCash or EasyPaisa, then pick a game.',
              'Play responsibly (18+) and withdraw when turnover rules are met.',
            ].map((step, i) => (
              <li key={step} className="flex gap-4 bg-secondary rounded-xl p-4 border border-gray-800">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-300 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <DownloadButton size="lg" label="DOWNLOAD PK365 NOW" />
          </div>
        </div>
      </section>

      {/* Screenshots — slow horizontal marquee */}
      <section className="py-12 md:py-16 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            PK365 App Screenshots
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Lobby, register, login, deposit bonus, withdraw methods, invite, and support.
          </p>
        </div>
        <div className="screenshot-marquee" aria-label="PK365 app screenshots scrolling">
          <div className="screenshot-marquee-track">
            {[...screenshots, ...screenshots].map((shot, i) => (
              <figure
                key={`${shot.src}-${i}`}
                className="screenshot-marquee-item bg-primary rounded-xl overflow-hidden border border-gray-800 shrink-0"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={1280}
                  sizes="220px"
                  className="w-full h-auto object-contain"
                />
                <figcaption className="p-3 text-center text-sm text-accent font-semibold">
                  {shot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of PK365
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="bg-secondary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-accent mb-2">
                  {i + 1}. {f.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30 overflow-visible">
        <div className="container mx-auto max-w-5xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            PK365 Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/download-pk365',
                title: 'Download APK',
                text: 'Install the latest PK365 build safely on Android.',
                img: '/pk365-game.webp',
              },
              {
                href: '/deposit-money-in-pk365',
                title: 'Deposit Guide',
                text: 'Add funds with JazzCash or EasyPaisa step by step.',
                img: '/pk365-game-deposit-bonus.webp',
              },
              {
                href: '/withdraw-money-from-pk365',
                title: 'Withdraw Guide',
                text: 'Cash out winnings to your local wallet.',
                img: '/pk365-game-withdraw-methods.webp',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="pk365-guide-card bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent group block"
              >
                <Image
                  src={g.img}
                  alt={g.title}
                  width={720}
                  height={1280}
                  sizes="33vw"
                  className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-accent mb-2 group-hover:underline">{g.title}</h3>
                  <p className="text-gray-300 text-sm">{g.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4 overflow-visible">
        <div className="container mx-auto max-w-3xl overflow-visible">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <FaqList faqs={faqs} />
          <p className="text-center text-gray-500 text-sm mt-8">
            Need help? Visit{' '}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact Us
            </Link>{' '}
            or email {SUPPORT_EMAIL}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play PK365?</h2>
          <p className="text-gray-300 mb-8">
            Get the official APK from pk365-app.pk — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD PK365 APK" />
          </div>
        </div>
      </section>
    </>
  );
}
