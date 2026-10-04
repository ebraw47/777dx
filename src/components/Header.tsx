'use client';

import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="bg-primary/95 backdrop-blur-sm py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-cyan/20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <span className="font-logo italic font-bold text-xl md:text-2xl tracking-tight text-accent">
            SK777
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-sk777" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-sk777" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-sk777" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/sk777-for-pc" className="text-white hover:text-accent font-medium transition-colors">
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
