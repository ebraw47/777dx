import { DOWNLOAD_APP_URL } from '@/lib/constants';

type DownloadButtonProps = {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-5 py-2.5 text-sm sm:px-8 sm:py-3.5 sm:text-base md:text-lg gap-2 sm:gap-3',
  lg: 'px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-base md:px-10 md:py-5 md:text-xl gap-2 sm:gap-3',
};

const iconSizeClasses = {
  sm: 'p-1.5',
  md: 'p-1.5 sm:p-2',
  lg: 'p-1.5 sm:p-2 md:p-2.5',
};

const svgSizeClasses = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4 sm:w-5 sm:h-5',
  lg: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6',
};

export default function DownloadButton({
  label = 'DOWNLOAD NOW',
  className = '',
  size = 'md',
}: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download PK365 APK for Android"
      className={`download-btn inline-flex w-fit max-w-full items-center justify-center rounded-full border-2 border-[#0ea5e9] bg-[#083000] text-white font-semibold hover:bg-[#0ea5e9]/10 transition-all group ${sizeClasses[size]} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`download-icon flex-shrink-0 rounded-full bg-[#f97316] group-hover:scale-110 transition-transform ${iconSizeClasses[size]}`}
      >
        <svg
          className={svgSizeClasses[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </span>
    </a>
  );
}
