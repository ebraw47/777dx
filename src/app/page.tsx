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
  title: 'JZ666 Pakistan Free Download Official APK 2026',
  description:
    'Download JZ666 APK for Pakistan. Play slots, cards, mini games & fishing. Deposit with JazzCash & EasyPaisa. VIP, rebate & daily rewards 2026.',
  keywords: [
    'JZ666',
    'JZ666 APK',
    'JZ666 download',
    'JZ666 Pakistan',
    'JZ666 game',
    'JZ666 earning app',
    'JZ666 JazzCash',
    'JZ666 EasyPaisa',
    'jz666apk.com.pk',
    'JZ666 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'JZ666 Pakistan Free Download Official APK 2026',
    description:
      "Pakistan's JZ666 gaming platform — slots, cards, fishing, VIP & rebate. JazzCash & EasyPaisa wallets.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'JZ666 - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JZ666 Pakistan Free Download Official APK 2026',
    description: 'Download JZ666 APK — slots, cards, fishing, JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: 'JZ666' },
  { label: 'Category', value: 'Slots, Cards, Mini Games, Fishing' },
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
  { src: '/jz666-game-home.webp', alt: 'JZ666 game home lobby', title: 'Home Lobby' },
  { src: '/jz666-game-register.webp', alt: 'JZ666 register screen', title: 'Register' },
  { src: '/jz666-game-login.webp', alt: 'JZ666 login screen', title: 'Login' },
  { src: '/jz666-game-deposit.webp', alt: 'JZ666 deposit screen', title: 'Deposit' },
  { src: '/jz666-game-withdraw.webp', alt: 'JZ666 withdraw screen', title: 'Withdraw' },
  { src: '/jz666-game-vip.webp', alt: 'JZ666 VIP rewards', title: 'VIP' },
  { src: '/jz666-game-rebate.webp', alt: 'JZ666 rebate offers', title: 'Rebate' },
  { src: '/jz666-game-events.webp', alt: 'JZ666 events page', title: 'Events' },
  { src: '/jz666-game-mission.webp', alt: 'JZ666 mission rewards', title: 'Mission' },
  { src: '/jz666-game-interest.webp', alt: 'JZ666 interest feature', title: 'Interest' },
  { src: '/jz666-game-redeem.webp', alt: 'JZ666 redeem codes', title: 'Redeem' },
  { src: '/jz666-game-customer-service.webp', alt: 'JZ666 customer service', title: 'Support' },
];

const features = [
  {
    title: 'Slots, Cards & Fishing',
    text: 'Browse Hot, Slot, Cards, Mini Games, and Fishing categories in one mobile lobby built for Pakistani players.',
  },
  {
    title: 'VIP & Daily Offers',
    text: 'Climb VIP tiers, claim mission rewards, and check Events for first-deposit and seasonal promotions.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'Local wallets for deposits (and withdrawals when listed). Confirm amounts and account names before you send PKR.',
  },
  {
    title: 'Rebate & Invite',
    text: 'Agent rebate and invite tools appear under Offers — always read the current percentage and claim rules in-app.',
  },
  {
    title: 'Interest & Redeem',
    text: 'Account extras like Interest and Redeem codes are promotional features — check terms before relying on advertised APR.',
  },
  {
    title: 'In-App Customer Service',
    text: 'Open Customer Service from the app when deposits, logins, or withdrawals need a quick hand.',
  },
];

const faqs = [
  {
    q: 'Is JZ666 free to download?',
    a: 'Yes. The APK is free from jz666apk.com.pk. Always use the official download button so you avoid modified copies.',
  },
  {
    q: 'Which games can I play on JZ666?',
    a: 'Slots, card games, mini games, and fishing titles — plus featured games in the Hot lobby. Categories may update over time.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Deposit, pick JazzCash or EasyPaisa (or QR if shown), enter the amount, follow on-screen steps, then confirm. See our deposit guide.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw, set your withdrawal PIN if required, bind JazzCash, EasyPaisa, or bank details in your name, meet turnover rules, then submit.',
  },
  {
    q: 'What are VIP, Rebate, and Interest?',
    a: 'They are Offers/Account promotions. VIP unlocks tier rewards, Rebate may return a share of activity, and Interest is an in-app balance feature — always read current terms.',
  },
  {
    q: 'Is JZ666 available on iPhone?',
    a: 'The primary install path is Android APK. Some players use the mobile web lobby in a browser; for PC, use an Android emulator — see our PC guide.',
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
          'JZ666 official Pakistan site — slots, cards, fishing, VIP, rebate, JazzCash & EasyPaisa.',
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
          ratingValue: '4.4',
          ratingCount: '12000',
          bestRating: '5',
        },
        downloadUrl: `${SITE_URL}/download-jz666`,
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
      <section className="relative py-10 md:py-16 px-4 overflow-visible">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 20%, rgba(255,193,7,0.16), transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(201,162,39,0.08), transparent 50%)',
          }}
        />
        <div className="container mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-brand text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-[0.04em] uppercase">
                <span className="text-[#5ee7ff]">JZ</span>
                <span className="text-white drop-shadow-[0_0_18px_rgba(255,193,7,0.35)]">666</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-[#FFA500]">
                Pakistan&apos;s Real-Money Gaming App 2026
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Slots, cards, mini games, and fishing on one Android APK — with JazzCash &amp; EasyPaisa
                wallets, VIP tiers, rebate, and daily offers. Download only from the official button below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="DOWNLOAD JZ666" blink />
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
              <div className="jz666-logo-shine relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl p-[3px]">
                <div className="relative h-full w-full rounded-[13px] overflow-hidden bg-[#241c14]">
                  <Image
                    src={LOGO_PATH}
                    alt="JZ666 Official Logo"
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
        </div>
      </section>

      {/* App info — tablet screen */}
      <section className="py-12 md:py-16 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            JZ666 Download Info
          </h2>

          <div className="jz666-tablet mx-auto">
            <div className="jz666-tablet-bezel">
              <div className="jz666-tablet-camera" aria-hidden="true" />
              <div className="jz666-tablet-screen">
                <div className="jz666-tablet-status">
                  <span>JZ666</span>
                  <span>Info</span>
                </div>
                <div className="jz666-tablet-body">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#c9a227]/25">
                    <div className="jz666-logo-shine relative h-12 w-12 rounded-lg p-[2px] flex-shrink-0">
                      <div className="relative h-full w-full rounded-[6px] overflow-hidden bg-primary">
                        <Image
                          src={LOGO_PATH}
                          alt="JZ666"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">JZ666 App Details</p>
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
                <div className="jz666-tablet-home" aria-hidden="true" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is JZ666?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                JZ666
              </Link>{' '}
              is a Pakistan-focused real-money gaming app for slots, card games, mini games, and fishing —
              with local JazzCash and EasyPaisa options for funding when those methods are listed in the wallet.
            </p>
            <p>
              New players can register, explore Offers (Events, VIP, Rebate, Mission, Interest, Redeem), then
              deposit when ready. In-app customer service keeps Android sessions practical across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why JZ666 is Searched in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa (and QR) when shown on Deposit / Withdraw.',
              'Game mix: Hot lobby plus Slots, Cards, Mini Games, and Fishing.',
              'Offers: Events, VIP, Rebate, Mission, Interest, and Redeem in one Offers area.',
              'Mobile-first APK for mid-range Android phones.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How to Start with JZ666</h2>
          <ol className="space-y-4">
            {[
              'Open jz666apk.com.pk and tap Download for the official APK.',
              'Allow install from unknown sources, open the APK, and finish setup.',
              'Launch JZ666 and register (or log in) with your details.',
              'Open Offers to check Events, VIP, Mission, and Rebate promotions.',
              'Optional: deposit via JazzCash or EasyPaisa, then pick a game category.',
              'Play responsibly (18+) and withdraw when turnover and PIN rules are met.',
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
            <DownloadButton size="lg" label="DOWNLOAD JZ666 NOW" />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16 bg-secondary/30 overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            JZ666 App Screenshots
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Home, register, login, deposit, withdraw, VIP, rebate, events, mission, interest, redeem, and support.
          </p>
        </div>
        <ScreenshotCarousel screenshots={[...screenshots]} />
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of JZ666
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
            JZ666 Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/download-jz666',
                title: 'Download APK',
                text: 'Install the latest JZ666 build safely on Android.',
                img: '/jz666-game-home.webp',
              },
              {
                href: '/deposit-money-in-jz666',
                title: 'Deposit Guide',
                text: 'Add funds with JazzCash or EasyPaisa step by step.',
                img: '/jz666-game-deposit.webp',
              },
              {
                href: '/withdraw-money-from-jz666',
                title: 'Withdraw Guide',
                text: 'Cash out winnings to your local wallet.',
                img: '/jz666-game-withdraw.webp',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="jz666-guide-card bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent group block"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play JZ666?</h2>
          <p className="text-gray-300 mb-8">
            Get the official APK from jz666apk.com.pk — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD JZ666 APK" />
          </div>
        </div>
      </section>
    </>
  );
}
