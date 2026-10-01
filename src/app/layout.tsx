import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#002c27",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pk365-app.pk'),
  title: {
    default: "PK365 Pakistan Free Download Official APK 2026",
    template: "%s | PK365"
  },
  description: "PK365 2026 - Download PK365 APK for Android. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
  keywords: [
    "PK365",
    "PK365 APK",
    "PK365 download",
    "PK365 Pakistan",
    "PK365 game",
    "PK365 app",
    "Teen Patti Pakistan",
    "PK365 earning game",
    "PK365 2026",
    "pk365-app.pk"
  ],
  authors: [{ name: "PK365 Team" }],
  creator: "PK365",
  publisher: "PK365",
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
      { url: '/PK365-Game-Icon.webp', type: 'image/webp', sizes: '1000x1000' }
    ],
    apple: [
      { url: '/PK365-Game-Icon.webp', sizes: '180x180' }
    ],
    shortcut: '/favicon.ico'
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://pk365-app.pk",
  },
  openGraph: {
    title: "PK365 Pakistan Free Download Official APK 2026",
    description: "PK365 2026 - Download PK365 APK. Play with friends, earn real cash, daily rewards. JazzCash & EasyPaisa withdrawals.",
    url: "https://pk365-app.pk",
    siteName: "PK365",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://pk365-app.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "PK365 - Teen Patti Earning Game",
      },
      {
        url: "https://pk365-app.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "PK365 - Teen Patti Earning Game",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PK365 Pakistan Free Download Official APK 2026",
    description: "PK365 2026 - Download PK365 APK. Play with friends, earn real cash, daily rewards.",
    creator: "@pk365app",
    images: [
      {
        url: "https://pk365-app.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "PK365 - Teen Patti Earning Game",
      }
    ],
  },
  applicationName: "PK365",
  category: "Gaming",
  classification: "Teen Patti Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        {/* GEO: geographic targeting for Pakistan (AEO/GEO) */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/PK365-Game-Icon.webp" type="image/webp" sizes="1000x1000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/PK365-Game-Icon.webp" sizes="180x180" />

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
          backgroundImage: "radial-gradient(circle at 10% 20%, rgba(0, 80, 71, 0.45) 0%, rgba(0, 44, 39, 0.15) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          backgroundColor: "#002c27",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
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
              "@id": "https://pk365-app.pk/#organization",
              "name": "PK365",
              "url": "https://pk365-app.pk",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pk365-app.pk/PK365-Game-Icon.webp",
                "width": 1000,
                "height": 1000
              },
              "description": "PK365 is Pakistan's premier Teen Patti gaming platform with real cash rewards. Download APK, play Teen Patti, Rummy, Dragon vs Tiger. JazzCash and EasyPaisa deposits and withdrawals.",
              "areaServed": { "@type": "Country", "name": "Pakistan", "alternateName": "PK" },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "support@pk365-app.pk",
                "areaServed": "PK",
                "availableLanguage": ["English", "Urdu"]
              },
              "sameAs": [
                "https://www.facebook.com/share/1C1XW5hdAv/?mibextid=wwXIfr"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
