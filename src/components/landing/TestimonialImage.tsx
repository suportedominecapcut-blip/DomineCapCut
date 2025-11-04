"use client";

import Image from 'next/image';

export function TestimonialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative aspect-[9/16] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
