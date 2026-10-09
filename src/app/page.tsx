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
  title: '777DX Pakistan Free Download Official APK 2026',
  description:
    'Download 777DX APK for Pakistan. Play earning games, claim rewards, deposit & withdraw with JazzCash & EasyPaisa. Official site 777dx-app.com.pk.',
  keywords: [
    '777DX',
    '777DX APK',
    '777DX download',
    '777DX Pakistan',
    '777DX game',
    '777DX earning app',
    '777DX JazzCash',
    '777DX EasyPaisa',
    '777dx-app.com.pk',
    '777DX 2026',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: '777DX Pakistan Free Download Official APK 2026',
    description:
      "Pakistan's 777DX gaming app — play, earn, JazzCash & EasyPaisa wallets.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/feature/og-image.webp`,
        width: 1200,
        height: 630,
        alt: '777DX - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '777DX Pakistan Free Download Official APK 2026',
    description: 'Download 777DX APK — earn real cash with JazzCash & EasyPaisa.',
    images: [`${SITE_URL}/feature/og-image.webp`],
  },
};

const appInfo = [
  { label: 'App Name', value: '777DX' },
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
  { src: '/777dx-home.webp', alt: '777DX home page', title: 'Home' },
  { src: '/777dx-register.webp', alt: '777DX register and signup', title: 'Register' },
  { src: '/777dx-login.webp', alt: '777DX login screen', title: 'Login' },
  { src: '/777dx-deposit.webp', alt: '777DX deposit funds', title: 'Deposit' },
  { src: '/777dx-withdraw.webp', alt: '777DX withdrawal methods', title: 'Withdraw' },
  { src: '/777dx-vip.webp', alt: '777DX VIP program', title: 'VIP' },
  { src: '/777dx-rebate.webp', alt: '777DX rebate rewards', title: 'Rebate' },
  { src: '/777dx-invite.webp', alt: '777DX invite and earn', title: 'Invite' },
  { src: '/777dx-mission.webp', alt: '777DX game missions', title: 'Missions' },
  { src: '/777dx-night-mode.webp', alt: '777DX night mode', title: 'Night Mode' },
  { src: '/777dx-support.webp', alt: '777DX customer support', title: 'Support' },
];

const features = [
  {
    title: 'Play & Earn on Android',
    text: '777DX is built for Pakistani phones — light APK, fast rounds, and a simple lobby for earning games, slots, and prediction-style play.',
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
    q: 'Is 777DX free to download?',
    a: 'Yes. The APK is free from 777dx-app.com.pk. Always use the official download button so you avoid modified copies.',
  },
  {
    q: 'Which games can I play on 777DX?',
    a: '777DX focuses on mobile earning games popular in Pakistan — including slots, prediction-style games, and other short rounds listed in the lobby. Categories may update over time.',
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
    q: 'Is 777DX available on iPhone?',
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
          '777DX official Pakistan site — earning games, JazzCash & EasyPaisa.',
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
        downloadUrl: `${SITE_URL}/download-777dx`,
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
      <section className="dx-hero relative py-12 md:py-20 px-4 overflow-hidden">
        <div className="dx-hero-bg" aria-hidden="true">
          <Image
            src="/777dx-hero-banner.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="dx-hero-banner-img"
          />
          <span className="dx-hero-orb dx-hero-orb-a" />
          <span className="dx-hero-orb dx-hero-orb-b" />
          <span className="dx-hero-orb dx-hero-orb-c" />
          <span className="dx-hero-grid" />
          <span className="dx-hero-fade" />
        </div>
        <div className="container mx-auto relative z-[1]">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-4 flex justify-center lg:justify-start">
                <span className="sr-only">777DX</span>
                <span
                  className="dx-wordmark font-logo italic font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-[0_4px_0_#1a1a1a,0_8px_24px_rgba(0,0,0,0.45)]"
                  aria-hidden="true"
                >
                  <span className="dx-wordmark-orange">7</span>
                  <span className="dx-wordmark-white">77</span>
                  <span className="dx-wordmark-orange">DX</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6 text-cyan">
                Pakistan&apos;s Real-Money Gaming App 2026
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Download the official 777DX APK — play earning games, claim rewards, and use JazzCash
                &amp; EasyPaisa for deposits and withdrawals. Get the APK only from the button below.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" label="DOWNLOAD 777DX" />
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
              <div className="dx-main-logo relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl border border-accent/40 bg-[#242424] overflow-hidden flex items-center justify-center">
                <Image
                  src={LOGO_PATH}
                  alt="777DX Official Logo"
                  width={512}
                  height={512}
                  className="relative z-[1] object-contain p-6 w-full h-full"
                  priority
                  fetchPriority="high"
                />
                <span className="dx-star dx-star-1" aria-hidden="true" />
                <span className="dx-star dx-star-2" aria-hidden="true" />
                <span className="dx-star dx-star-3" aria-hidden="true" />
                <span className="dx-star dx-star-4" aria-hidden="true" />
                <span className="dx-star dx-star-5" aria-hidden="true" />
                <span className="dx-star dx-star-6" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info — sci-fi HUD */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            777DX Download Info
          </h2>

          <div className="dx-scifi mx-auto">
            <div className="dx-scifi-frame">
              <span className="dx-scifi-corner dx-scifi-corner-tl" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-tr" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-bl" aria-hidden="true" />
              <span className="dx-scifi-corner dx-scifi-corner-br" aria-hidden="true" />
              <span className="dx-scifi-scan" aria-hidden="true" />

              <div className="dx-scifi-header">
                <span className="dx-scifi-chip">SYS // APK</span>
                <span className="dx-scifi-chip dx-scifi-chip-live">ONLINE</span>
              </div>

              <div className="dx-scifi-body">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-orange-500/30">
                  <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-black/50 border border-[#e67a22]/50 flex-shrink-0 shadow-[0_0_18px_rgba(230,122,34,0.35)]">
                    <Image
                      src={LOGO_PATH}
                      alt="777DX"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight tracking-wide">
                      777DX App Details
                    </p>
                    <p className="text-[#e67a22] text-sm font-semibold uppercase tracking-wider">
                      Official Pakistan APK
                    </p>
                  </div>
                </div>
                <table className="w-full text-left dx-scifi-table">
                  <tbody>
                    {appInfo.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? 'bg-orange-500/[0.06]' : 'bg-transparent'}>
                        <th className="py-2.5 px-3 md:px-4 text-[#ffb347] font-semibold text-sm md:text-base w-[42%]">
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

              <div className="dx-scifi-footer" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <DownloadButton size="md" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is 777DX?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                777DX
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
            Why 777DX is Searched in Pakistan
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa when shown on Deposit / Withdraw.',
              'Lightweight APK suited to mid-range Android phones.',
              'Earning-game style rounds with daily rewards and welcome offers.',
              'Clear wallet history for deposits and cash-outs.',
              'Guides for download, deposit, and withdraw on 777dx-app.com.pk.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to start — modern poster */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="dx-poster">
            <div className="dx-poster-glow" aria-hidden="true" />
            <div className="dx-poster-inner">
              <div className="dx-poster-top">
                <p className="dx-poster-kicker">Player Guide · 2026</p>
                <h2 className="dx-poster-title">
                  How to Start
                  <span>with 777DX</span>
                </h2>
                <p className="dx-poster-tagline">
                  Six clear moves from download to your first cash-out — built for Pakistan players.
                </p>
                <div className="dx-poster-rule" aria-hidden="true" />
              </div>

              <ol className="dx-poster-grid">
                {[
                  {
                    title: 'Get the Official APK',
                    detail:
                      'Open 777dx-app.com.pk and tap Download. Use only the official button so you avoid modified copies.',
                  },
                  {
                    title: 'Install on Android',
                    detail:
                      'Allow install from unknown sources, open the APK file, and finish setup on Android 5.0+.',
                  },
                  {
                    title: 'Sign Up or Sign In',
                    detail:
                      'Launch 777DX, register with your mobile number and OTP, or log in if you already have an account.',
                  },
                  {
                    title: 'Claim Offers',
                    detail:
                      'Check welcome bonuses, daily rewards, missions, and VIP promos — always read wagering rules first.',
                  },
                  {
                    title: 'Deposit & Play',
                    detail:
                      'Optional: add funds with JazzCash or EasyPaisa, then pick a game from the lobby and start small.',
                  },
                  {
                    title: 'Withdraw Safely',
                    detail:
                      'Play responsibly (18+). When ready, withdraw to your wallet after PIN and turnover rules are met.',
                  },
                ].map((step, i) => (
                  <li key={step.title} className="dx-poster-card">
                    <span className="dx-poster-num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="dx-poster-card-body">
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                    <span className="dx-poster-card-edge" aria-hidden="true" />
                  </li>
                ))}
              </ol>

              <div className="dx-poster-cta">
                <p className="dx-poster-cta-note">Official APK · JazzCash &amp; EasyPaisa · 18+ only</p>
                <DownloadButton size="md" label="DOWNLOAD 777DX NOW" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Account</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">777DX Signup — Create Your Account</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                New to 777DX? Open the app and tap <strong className="text-white">Register / Signup</strong>.
                Enter your Pakistani mobile number, set a strong password, and verify the OTP sent to your phone.
                You can also add an invite code if a friend shared one.
              </p>
              <ol className="space-y-3 text-gray-300 mb-6">
                {[
                  'Tap Register on the welcome screen',
                  'Enter mobile number + password',
                  'Verify OTP and set security PIN if asked',
                  'Start exploring the lobby and offers',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/blog/create-777dx-account-and-login"
                className="text-accent hover:underline font-semibold"
              >
                Full signup &amp; login guide →
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="dx-phone-shot relative w-[220px] sm:w-[260px] rounded-[1.75rem] overflow-hidden border border-accent/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-[#111]">
                <Image
                  src="/777dx-register.webp"
                  alt="777DX signup and register screen"
                  width={720}
                  height={1280}
                  className="w-full h-auto object-contain"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign in */}
      <section id="signin" className="py-14 md:py-20 px-4 bg-secondary/25">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="dx-phone-shot relative w-[220px] sm:w-[260px] rounded-[1.75rem] overflow-hidden border border-cyan/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-[#111]">
                <Image
                  src="/777dx-login.webp"
                  alt="777DX sign in and login screen"
                  width={720}
                  height={1280}
                  className="w-full h-auto object-contain"
                  sizes="260px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-cyan font-semibold tracking-wide uppercase text-sm mb-3">Login</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">777DX Sign In — Access Your Account</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                Already registered? Open 777DX and choose <strong className="text-white">Login / Sign In</strong>.
                Use the same mobile number and password you created at signup. Never share your OTP or
                withdrawal PIN with anyone claiming to be support.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                {[
                  'Enter your registered phone number',
                  'Type your password carefully',
                  'Complete any OTP check if prompted',
                  'If login fails, reset password or contact in-app support',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-cyan font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/blog/create-777dx-account-and-login"
                className="text-accent hover:underline font-semibold"
              >
                Troubleshoot login issues →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit */}
      <section id="deposit" className="py-14 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Wallet</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">777DX Deposit — JazzCash &amp; EasyPaisa</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                Add balance from the <strong className="text-white">Deposit / Funds</strong> screen. Pick JazzCash
                or EasyPaisa when listed, enter the amount, and pay only to the recipient details shown
                inside the app — never reuse old numbers from chats.
              </p>
              <ol className="space-y-3 text-gray-300 mb-6">
                {[
                  'Open Deposit and choose a payment method',
                  'Enter amount and note any minimum shown',
                  'Copy exact recipient details from the app',
                  'Pay in your wallet app and save the transaction ID',
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/deposit-money-in-777dx"
                className="text-accent hover:underline font-semibold"
              >
                Full deposit guide →
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="dx-phone-shot relative w-[220px] sm:w-[260px] rounded-[1.75rem] overflow-hidden border border-accent/35 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-[#111]">
                <Image
                  src="/777dx-deposit.webp"
                  alt="777DX deposit funds screen with JazzCash and EasyPaisa"
                  width={720}
                  height={1280}
                  className="w-full h-auto object-contain"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Withdrawal */}
      <section id="withdraw" className="py-14 md:py-20 px-4 bg-secondary/25">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="dx-phone-shot relative w-[220px] sm:w-[260px] rounded-[1.75rem] overflow-hidden border border-cyan/30 shadow-[0_20px_60px_rgba(0,0,0,0.55)] bg-[#111]">
                <Image
                  src="/777dx-withdraw.webp"
                  alt="777DX withdrawal methods screen"
                  width={720}
                  height={1280}
                  className="w-full h-auto object-contain"
                  sizes="260px"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-cyan font-semibold tracking-wide uppercase text-sm mb-3">Cash out</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">777DX Withdrawal — Get Your Winnings</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                When you are ready to cash out, open <strong className="text-white">Withdraw</strong>. Bind a
                JazzCash or EasyPaisa wallet in your own name, meet any turnover rules, enter the amount,
                and confirm with your PIN or OTP. Processing is often minutes to a few hours.
              </p>
              <ul className="space-y-3 text-gray-300 mb-6">
                {[
                  'Bind your wallet account (name must match)',
                  'Enter amount within the shown min / max',
                  'Complete PIN or OTP verification',
                  'Save the request ID until funds arrive',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-cyan font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/withdraw-money-from-777dx"
                className="text-accent hover:underline font-semibold"
              >
                Full withdrawal guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section className="py-14 md:py-20 px-4">
        <div className="container mx-auto px-4 mb-8 md:mb-10">
          <p className="text-center text-accent font-semibold tracking-wide uppercase text-sm mb-3">
            Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            777DX App Screenshots
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Browse every screen — signup, login, deposit, withdraw, VIP, and more.
          </p>
        </div>
        <ScreenshotCarousel screenshots={screenshots} />
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of 777DX
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
            777DX Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 py-4 overflow-visible">
            {[
              {
                href: '/download-777dx',
                title: 'Download APK',
                text: 'Install the latest 777DX build safely on Android.',
                img: '/777dx-home.webp',
              },
              {
                href: '/deposit-money-in-777dx',
                title: 'Deposit Guide',
                text: 'Add funds with JazzCash or EasyPaisa step by step.',
                img: '/777dx-deposit.webp',
              },
              {
                href: '/withdraw-money-from-777dx',
                title: 'Withdraw Guide',
                text: 'Cash out winnings to your local wallet.',
                img: '/777dx-withdraw.webp',
              },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="dx-guide-card bg-primary rounded-xl overflow-hidden border border-gray-800 hover:border-accent group block"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Play 777DX?</h2>
          <p className="text-gray-300 mb-8">
            Get the official APK from 777dx-app.com.pk — play responsibly, 18+ only.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <DownloadButton size="lg" label="DOWNLOAD 777DX APK" />
          </div>
        </div>
      </section>
    </>
  );
}
