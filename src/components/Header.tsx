'use client';

import Image from 'next/image';
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';
import { LOGO_PATH } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-[#0d3a14]/80 backdrop-blur-md py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-accent/20 shadow-[0_1px_0_rgba(251,223,3,0.08)]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src={LOGO_PATH}
            alt="K666"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-logo italic font-bold text-xl md:text-2xl tracking-tight">
            <span className="dx-wordmark-orange">K</span>
            <span className="dx-wordmark-white">666</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-k666" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-k666" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-k666" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/k666-for-pc" className="text-white hover:text-accent font-medium transition-colors">
            PC Version
          </Link>
          <Link href="/about-us" className="text-white hover:text-accent font-medium transition-colors">
            About Us
          </Link>
          <Link href="/blog" className="text-white hover:text-accent font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact-us" className="text-white hover:text-accent font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
