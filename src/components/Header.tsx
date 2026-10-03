'use client';

import Link from 'next/link';
import Image from 'next/image';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  return (
    <header className="bg-primary py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="jz666-logo-shine relative h-10 w-10 mr-2 rounded-lg p-[2px]" aria-hidden="false">
            <div className="relative h-full w-full rounded-[6px] overflow-hidden bg-primary">
              <Image
                src="/JZ666-Game-Icon.webp"
                alt="JZ666 Logo"
                width={40}
                height={40}
                className="object-contain"
                priority={true}
                fetchPriority="high"
              />
            </div>
          </div>
          <span className="font-brand text-xl md:text-2xl font-bold tracking-[0.06em] uppercase">
            <span className="text-[#5ee7ff]">JZ</span>
            <span className="text-white">666</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/download-jz666" className="text-white hover:text-accent font-medium transition-colors">
            Download
          </Link>
          <Link href="/deposit-money-in-jz666" className="text-white hover:text-accent font-medium transition-colors">
            Deposit
          </Link>
          <Link href="/withdraw-money-from-jz666" className="text-white hover:text-accent font-medium transition-colors">
            Withdraw
          </Link>
          <Link href="/jz666-for-pc" className="text-white hover:text-accent font-medium transition-colors">
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

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
} 