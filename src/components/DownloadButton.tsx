import Image from 'next/image';
import { DOWNLOAD_APP_URL } from '@/lib/constants';

type DownloadButtonProps = {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  /** Kept for compatibility — GIF/WebP is already animated */
  blink?: boolean;
};

const sizeClasses = {
  sm: 'w-[150px] sm:w-[170px]',
  md: 'w-[200px] sm:w-[240px] md:w-[260px]',
  lg: 'w-[240px] sm:w-[280px] md:w-[320px]',
};

export default function DownloadButton({
  label = 'DOWNLOAD NOW',
  className = '',
  size = 'md',
  blink: _blink = false,
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download 777DX APK for Android"
      title={label}
      className={`download-gif-btn inline-flex leading-none w-fit max-w-full items-center justify-center p-0 m-0 bg-transparent transition-transform duration-250 hover:scale-[1.05] active:scale-[0.98] ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/download-btn.webp"
        alt={label}
        width={335}
        height={147}
        unoptimized
        priority={size === 'lg'}
        className="block w-full h-auto object-contain"
      />
    </a>
  );
}
