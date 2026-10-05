import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

/** Closest match to in-game 777DX wordmark (bold italic geometric) */
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-logo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1a1a1a",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://777dx-app.com.pk'),
  title: {
    default: "777DX Pakistan Free Download Official APK 2026",
    template: "%s | 777DX"
  },
  description: "777DX 2026 - Download 777DX APK for Android. Play & earn real cash with JazzCash & EasyPaisa. Official Pakistan site 777dx-app.com.pk.",
  keywords: [
    "777DX",
    "777DX APK",
    "777DX download",
    "777DX Pakistan",
    "777DX game",
    "777DX app",
    "777DX earning game",
    "777DX JazzCash",
    "777DX 2026",
    "777dx-app.com.pk"
  ],
  authors: [{ name: "777DX Team" }],
  creator: "777DX",
  publisher: "777DX",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/777dx-logo.webp', type: 'image/webp', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    shortcut: '/favicon-32.png'
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://777dx-app.com.pk",
  },
  openGraph: {
    title: "777DX Pakistan Free Download Official APK 2026",
    description: "777DX 2026 - Download 777DX APK. Play & earn real cash with JazzCash & EasyPaisa withdrawals.",
    url: "https://777dx-app.com.pk",
    siteName: "777DX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://777dx-app.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "777DX - Real-Money Gaming App",
      },
      {
        url: "https://777dx-app.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "777DX - Real-Money Gaming App",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "777DX Pakistan Free Download Official APK 2026",
    description: "777DX 2026 - Download 777DX APK. Play & earn real cash with JazzCash & EasyPaisa.",
    creator: "@777dxapp",
    images: [
      {
        url: "https://777dx-app.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "777DX - Real-Money Gaming App",
      }
    ],
  },
  applicationName: "777DX",
  category: "Gaming",
  classification: "Real-Money Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/777dx-logo.webp" type="image/webp" sizes="512x512" />
        <link rel="shortcut icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col game-theme`}
        suppressHydrationWarning
      >
        <div className="game-bg fixed inset-0 z-0" aria-hidden="true">
          <span className="game-bg-glow game-bg-glow-a" />
          <span className="game-bg-glow game-bg-glow-b" />
          <span className="game-bg-glow game-bg-glow-c" />
          <span className="game-bg-grid" />
          <span className="game-bg-scan" />
          <span className="game-bg-vignette" />
        </div>
        <Header />
        <main className="flex-grow relative z-10">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://777dx-app.com.pk/#organization",
              "name": "777DX",
              "url": "https://777dx-app.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://777dx-app.com.pk/777dx-logo.webp",
                "width": 512,
                "height": 512
              },
              "description": "777DX is Pakistan's real-money gaming platform. Download APK, JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@777dx-app.com.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
