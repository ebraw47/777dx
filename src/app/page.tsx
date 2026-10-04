import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import FaqList from '@/components/FaqList';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import {
  APP_OS,
  APP_SIZE,
  APP_VERSION,
  BRAND_NAME,
  LOGO_PATH,
  SITE_URL,
  SUPPORT_EMAIL,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SK777 Pakistan Free Download Official APK 2026',
  description:
    'Download SK777 APK for Pakistan. Play earning games, claim rewards, deposit & withdraw with JazzCash & EasyPaisa. Official site sk777app.com.pk.',
  keywords: [
    'SK777',
    'SK777 APK',
    'SK777 download',
    'SK777 Pakistan',
    'SK777 game',
    'SK777 earning app',
    'SK777 JazzCash',
    'SK777 EasyPaisa',
    'sk777app.com.pk',
    'SK777 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'SK777 Pakistan Free Download Official APK 2026',
    description:
      "Pakistan's SK777 gaming app — play, earn, JazzCash & EasyPaisa wallets.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'SK777 - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SK777 Pakistan Free Download Official APK 2026',
    description: 'Download SK777 APK — earn real cash with JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: 'SK777' },
  { label: 'Category', value: 'Earning Games, Slots, Prediction' },
  { label: 'Size', value: APP_SIZE },
  { label: 'Latest Version', value: APP_VERSION },
  { label: 'Required OS', value: APP_OS },
  { label: 'Update', value: '2026' },
  { label: 'Downloads', value: '10K+' },
  { label: 'Language', value: 'English, Urdu' },
  { label: 'Payments', value: 'JazzCash, EasyPaisa' },
  { label: 'Price', value: 'Free' },
];

const screenshots = [
  { src: '/sk777-game-register.webp', alt: 'SK777 register screen', title: 'Register' },
  { src: '/sk777-game-home.webp', alt: 'SK777 login screen', title: 'Login' },
  { src: '/sk777-game-login.webp', alt: 'SK777 deposit screen', title: 'Deposit' },
  { src: '/sk777-game-deposit.webp', alt: 'SK777 withdraw screen', title: 'Withdraw' },
  { src: '/sk777-game-withdraw.webp', alt: 'SK777 receiving account screen', title: 'Receiving Account' },
  { src: '/sk777-game-lobby.webp', alt: 'SK777 invite screen', title: 'Invite' },
  { src: '/sk777-game-wallet.webp', alt: 'SK777 invite friends screen', title: 'Invite Friends' },
  { src: '/sk777-game-offers.webp', alt: 'SK777 support message center', title: 'Support' },
];

const features = [
  {
    title: 'Play & Earn on Android',
    text: 'SK777 is built for Pakistani phones — light APK, fast rounds, and a simple lobby for earning games, slots, and prediction-style play.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'Deposit and withdraw with the wallets you already use. Always confirm the amount and account name shown inside the app before you send PKR.',
  },
  {
    title: 'Low Entry Deposit',
    text: 'Start small when the wallet allows — many players begin near PKR 100. Check the live Deposit screen for current minimums.',
  },
  {
    title: 'Daily Rewards & Bonuses',
    text: 'Look for welcome offers, daily rewards, and in-app promotions. Read wagering rules before you rely on any bonus.',
  },
  {
    title: 'Clear Wallet Records',
    text: 'Track deposits, gameplay, and withdrawals in your wallet history so you stay in control of every PKR.',
  },
  {
    title: 'In-App Support',
    text: 'Open customer service from the app when deposits, logins, or withdrawals need a quick hand.',
  },
];

const faqs = [
  {
    q: 'Is SK777 free to download?',
    a: 'Yes. The APK is free from sk777app.com.pk. Always use the official download button so you avoid modified copies.',
  },
  {
    q: 'Which games can I play on SK777?',
    a: 'SK777 focuses on mobile earning games popular in Pakistan — including slots, prediction-style games, and other short rounds listed in the lobby. Categories may update over time.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Deposit, pick JazzCash or EasyPaisa, enter the amount, follow on-screen steps, then confirm. See our deposit guide for details.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw, set your withdrawal PIN if required, bind JazzCash or EasyPaisa in your name, meet any turnover rules, then submit.',
  },
  {
    q: 'Is SK777 available on iPhone?',
    a: 'The primary install path is Android APK. Some players use a mobile browser lobby; for PC, use an Android emulator — see our PC guide.',
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
        logo: `${SITE_URL}${LOGO_PATH}`,
        description:
          'SK777 official Pakistan site — earning games, JazzCash & EasyPaisa.',
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
          ratingCount: '10000',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/download-sk777`,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        image: `${SITE_URL}${LOGO_PATH}`,
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
      <section className="sk777-hero relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="sk777-hero-bg" aria-hidden="true">
          <span className="sk777-hero-orb sk777-hero-orb-a" />
          <span className="sk777-hero-orb sk777-hero-orb-b" />
          <span className="sk777-hero-orb sk777-hero-orb-c" />
          <span className="sk777-hero-grid" />
          <span className="sk777-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-4 flex justify-center lg:justify-start">
                <span className="sr-only">SK777</span>
                <span
                  className="font-logo italic font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight text-accent drop-shadow-[0_4px_0_#0a2744,0_8px_24px_rgba(0,0,0,0.45)]"
                  aria-hidden="true"
                >
                  SK777
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-cyan">
                Pakistan&apos;s Real-Money Gaming App 2026
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Download the official SK777 APK — play earning games, claim rewards, and use JazzCash
                &amp; EasyPaisa for deposits and withdrawals. Get the APK only from the button below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="DOWNLOAD SK777" blink />
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: '10K+', l: 'Downloads' },
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
              <div className="sk777-main-logo relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl border border-accent/40 bg-[#0d3358] overflow-hidden">
                <Image
                  src={LOGO_PATH}
                  alt="SK777 Official Logo"
                  width={340}
                  height={340}
                  className="relative z-[1] object-contain p-4 w-full h-full"
                  priority
                  fetchPriority="high"
                />
                <span className="sk777-star sk777-star-1" aria-hidden="true" />
                <span className="sk777-star sk777-star-2" aria-hidden="true" />
                <span className="sk777-star sk777-star-3" aria-hidden="true" />
                <span className="sk777-star sk777-star-4" aria-hidden="true" />
                <span className="sk777-star sk777-star-5" aria-hidden="true" />
                <span className="sk777-star sk777-star-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info — tablet screen */}
      <section className="py-12 md:py-16 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            SK777 Download Info
          </h2>

          <div className="sk777-tablet mx-auto">
            <div className="sk777-tablet-bezel">
              <div className="sk777-tablet-camera" aria-hidden="true" />
              <div className="sk777-tablet-screen">
                <div className="sk777-tablet-status">
                  <span>SK777</span>
                  <span>Info</span>
                </div>
                <div className="sk777-tablet-body">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#f5c518]/25">
                    <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-primary border border-accent/40 flex-shrink-0">
                      <Image
                        src={LOGO_PATH}
                        alt="SK777"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">SK777 App Details</p>
                      <p className="text-accent text-sm">Official Pakistan APK</p>
                    </div>
                  </div>
                  <table className="w-full text-left">
                    <tbody>
                      {appInfo.map((row, i) => (
                        <tr
                          key={row.label}
                          className={i % 2 === 0 ? 'bg-black/25' : 'bg-transparent'}
                        >
                          <th className="py-2.5 px-3 md:px-4 text-accent font-semibold text-sm md:text-base w-[42%]">
                            {row.label}
                          </th>
                          <td className="py-2.5 px-3 md:px-4 text-white text-sm md:text-base">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="sk777-tablet-home" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is SK777?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                SK777
              </Link>{' '}
              is a Pakistan-focused real-money gaming app for players who want simple Android games,
              local JazzCash and EasyPaisa wallets, and clear deposit/withdraw flows.
            </p>
            <p>
              New players can register, explore offers, then deposit when ready. Keep sessions light,
              track your wallet, and use in-app support when you need help across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why SK777 is Searched in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa when shown on Deposit / Withdraw.',
              'Lightweight APK suited to mid-range Android phones.',
              'Earning-game style rounds with daily rewards and welcome offers.',
              'Clear wallet history for deposits and cash-outs.',
              'Guides for download, deposit, and withdraw on sk777app.com.pk.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How to Start with SK777</h2>
          <ol className="space-y-4">
            {[
              'Open sk777app.com.pk and tap Download for the official APK.',
              'Allow install from unknown sources, open the APK, and finish setup.',
              'Launch SK777 and register (or log in) with your details.',
              'Check Offers for welcome or daily rewards.',
              'Optional: deposit via JazzCash or EasyPaisa, then pick a game.',
              'Play responsibly (18+) and withdraw when PIN and turnover rules are met.',
            ].map((step, i) => (
              <li key={step} className="flex gap-4 bg-secondary rounded-xl p-4 border border-gray-800">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-300 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <DownloadButton size="lg" label="DOWNLOAD SK777 NOW" />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            SK777 App Screenshots
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Register, login, deposit, withdraw, invite, and support screens from the SK777 app.
          </p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of SK777
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
            SK777 Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/download-sk777',
                title: 'Download APK',
                text: 'Install the latest SK777 build safely on Android.',
                img: '/sk777-game-home.webp',
              },
              {
                href: '/deposit-money-in-sk777',
                title: 'Deposit Guide',
                text: 'Add funds with JazzCash or EasyPaisa step by step.',
                img: '/sk777-game-deposit.webp',
              },
              {
                href: '/withdraw-money-from-sk777',
                title: 'Withdraw Guide',
                text: 'Cash out winnings to your local wallet.',
                img: '/sk777-game-withdraw.webp',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="sk777-guide-card bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent group block"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play SK777?</h2>
          <p className="text-gray-300 mb-8">
            Get the official APK from sk777app.com.pk — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD SK777 APK" />
          </div>
        </div>
      </section>
    </>
  );
}
