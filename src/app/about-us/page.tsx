import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'About JZ666 - Pakistan\'s Premier Gaming Platform',
  description: 'Learn about JZ666, our history, mission, and vision for creating the best gaming platform in Pakistan with slots, cards, fishing and more.',
  keywords: ['JZ666 about', 'about us', 'gaming company Pakistan', 'JZ666 history', 'gaming platform', 'slots', 'JZ666'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://jz666apk.com.pk/about-us",
  },
  openGraph: {
    title: 'About JZ666 - Pakistan\'s Premier Gaming Platform',
    description: 'Learn about JZ666, our history, mission, and vision for creating the best gaming platform in Pakistan with real cash rewards.',
    url: "https://jz666apk.com.pk/about-us",
    siteName: "JZ666",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jz666apk.com.pk/JZ666-Game-Icon.webp",
        width: 1200,
        height: 630,
        alt: "About JZ666 - Premier Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About JZ666 - Pakistan\'s Premier Gaming Platform',
    description: 'Learn about JZ666, our history, mission, and vision for creating the best gaming platform in Pakistan with real cash rewards.',
    images: ["https://jz666apk.com.pk/JZ666-Game-Icon.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h1>
          </div>
          
          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-8">
              <div className="w-full md:w-1/3 flex-shrink-0 flex justify-center md:justify-start">
                <Link href="/" className="block">
                  <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto md:mx-0 rounded-lg overflow-hidden bg-[#241c14]">
                    <Image 
                      src="/JZ666-Game-Icon.webp" 
                      alt="JZ666 Logo" 
                      width={320}
                      height={320}
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-contain p-4 w-full h-full"
                      priority
                    />
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-2/3 md:pl-4">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Welcome to <a href="https://www.jz666apk.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.jz666apk.com.pk</a>, a trusted platform to provide the latest information about <Link href="/" className="text-accent hover:underline font-semibold">JZ666</Link>. This is one of the most popular online casino games in Pakistan, having <span className="font-bold text-accent">100K+ users</span>. <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download JZ666</a> now to join thousands of players earning real cash rewards.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Hundreds of people are playing these wonderful games and earning a handsome amount on a daily or weekly basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Aim!</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Our aim is to provide the users with the latest and updated information and earning tips about JZ666. For any type of information or query, you can visit our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact us page</Link>.
            </p>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Have Questions?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're here to help! Contact our team for any information or queries about JZ666.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "JZ666",
              "alternateName": "JZ666",
              "url": "https://jz666apk.com.pk",
              "logo": "https://jz666apk.com.pk/JZ666-Game-Icon.webp",
              "description": "JZ666 is Pakistan's real-money gaming platform with slots, cards, mini games, and fishing.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://www.facebook.com/share/1C1XW5hdAv/?mibextid=wwXIfr"
              ],
              "founder": {
                "@type": "Person",
                "name": "JZ666 Dev"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Gaming Platform",
              "description": "Online gaming platform with real cash rewards serving Pakistani users"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://jz666apk.com.pk/about"
            }
          })
        }}
      />
    </div>
  );
} 