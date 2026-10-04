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

/** Closest match to in-game SK777 wordmark (bold italic geometric) */
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
  themeColor: "#0a2744",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sk777app.com.pk'),
  title: {
    default: "SK777 Pakistan Free Download Official APK 2026",
    template: "%s | SK777"
  },
  description: "SK777 2026 - Download SK777 APK for Android. Play & earn real cash with JazzCash & EasyPaisa. Official Pakistan site sk777app.com.pk.",
  keywords: [
    "SK777",
    "SK777 APK",
    "SK777 download",
    "SK777 Pakistan",
    "SK777 game",
    "SK777 app",
    "SK777 earning game",
    "SK777 JazzCash",
    "SK777 2026",
    "sk777app.com.pk"
  ],
  authors: [{ name: "SK777 Team" }],
  creator: "SK777",
  publisher: "SK777",
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
      { url: '/SK777-Game-Icon.png', type: 'image/png', sizes: '512x512' }
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
    canonical: "https://sk777app.com.pk",
  },
  openGraph: {
    title: "SK777 Pakistan Free Download Official APK 2026",
    description: "SK777 2026 - Download SK777 APK. Play & earn real cash with JazzCash & EasyPaisa withdrawals.",
    url: "https://sk777app.com.pk",
    siteName: "SK777",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sk777app.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "SK777 - Real-Money Gaming App",
      },
      {
        url: "https://sk777app.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "SK777 - Real-Money Gaming App",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SK777 Pakistan Free Download Official APK 2026",
    description: "SK777 2026 - Download SK777 APK. Play & earn real cash with JazzCash & EasyPaisa.",
    creator: "@sk777app",
    images: [
      {
        url: "https://sk777app.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "SK777 - Real-Money Gaming App",
      }
    ],
  },
  applicationName: "SK777",
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
        <link rel="icon" href="/SK777-Game-Icon.png" type="image/png" sizes="512x512" />
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
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(62, 181, 232, 0.16) 0%, transparent 45%), radial-gradient(ellipse at 10% 80%, rgba(13, 51, 88, 0.95) 0%, transparent 55%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          backgroundColor: "#0a2744",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0" aria-hidden="true"></div>
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
              "@id": "https://sk777app.com.pk/#organization",
              "name": "SK777",
              "url": "https://sk777app.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sk777app.com.pk/SK777-Game-Icon.png",
                "width": 512,
                "height": 512
              },
              "description": "SK777 is Pakistan's real-money gaming platform. Download APK, JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@sk777app.com.pk",
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
