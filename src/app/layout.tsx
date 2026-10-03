import type { Metadata, Viewport } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-brand",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#14100c",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jz666apk.com.pk'),
  title: {
    default: "JZ666 Pakistan Free Download Official APK 2026",
    template: "%s | JZ666"
  },
  description: "JZ666 2026 - Download JZ666 APK for Android. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
  keywords: [
    "JZ666",
    "JZ666 APK",
    "JZ666 download",
    "JZ666 Pakistan",
    "JZ666 game",
    "JZ666 app",
    "JZ666 slots Pakistan",
    "JZ666 earning game",
    "JZ666 2026",
    "jz666apk.com.pk"
  ],
  authors: [{ name: "JZ666 Team" }],
  creator: "JZ666",
  publisher: "JZ666",
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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/JZ666-Game-Icon.webp', type: 'image/webp', sizes: '1000x1000' }
    ],
    apple: [
      { url: '/JZ666-Game-Icon.webp', sizes: '180x180' }
    ],
    shortcut: '/favicon.ico'
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://jz666apk.com.pk",
  },
  openGraph: {
    title: "JZ666 Pakistan Free Download Official APK 2026",
    description: "JZ666 2026 - Download JZ666 APK. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
    url: "https://jz666apk.com.pk",
    siteName: "JZ666",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jz666apk.com.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "JZ666 - Real-Money Gaming App",
      },
      {
        url: "https://jz666apk.com.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "JZ666 - Real-Money Gaming App",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JZ666 Pakistan Free Download Official APK 2026",
    description: "JZ666 2026 - Download JZ666 APK. Play with friends, earn real cash, daily rewards.",
    creator: "@jz666apk",
    images: [
      {
        url: "https://jz666apk.com.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "JZ666 - Real-Money Gaming App",
      }
    ],
  },
  applicationName: "JZ666",
  category: "Gaming",
  classification: "Real-Money Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* GEO: geographic targeting for Pakistan (AEO/GEO) */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/JZ666-Game-Icon.webp" type="image/webp" sizes="1000x1000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/JZ666-Game-Icon.webp" sizes="180x180" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
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
            "radial-gradient(ellipse at 70% 0%, rgba(201, 162, 39, 0.12) 0%, transparent 45%), radial-gradient(ellipse at 10% 80%, rgba(36, 28, 20, 0.9) 0%, transparent 55%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          backgroundColor: "#14100c",
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
        
        {/* Organization schema – sitewide signal for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://jz666apk.com.pk/#organization",
              "name": "JZ666",
              "url": "https://jz666apk.com.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://jz666apk.com.pk/JZ666-Game-Icon.webp",
                "width": 1000,
                "height": 1000
              },
              "description": "JZ666 is Pakistan's real-money gaming platform with slots, cards, mini games, and fishing. Download APK, JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@jz666apk.com.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://www.facebook.com/share/1HmqM9JC8s/?mibextid=wwXIfr"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
