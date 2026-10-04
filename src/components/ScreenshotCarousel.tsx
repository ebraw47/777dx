import Image from 'next/image';

export type ScreenshotItem = {
  src: string;
  alt: string;
  title: string;
};

type ScreenshotCarouselProps = {
  screenshots: ScreenshotItem[];
};

export default function ScreenshotCarousel({ screenshots }: ScreenshotCarouselProps) {
  return (
    <div className="container mx-auto px-4" aria-label="SK777 app screenshots">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="bg-primary rounded-xl overflow-hidden border border-cyan/25 m-0"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={720}
              height={1280}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto object-cover object-top aspect-[9/16]"
            />
            <figcaption className="p-3 text-center text-sm text-accent font-semibold">
              {shot.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
