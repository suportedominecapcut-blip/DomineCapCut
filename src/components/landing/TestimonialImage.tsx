"use client";

import Image from 'next/image';

export function TestimonialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group w-full overflow-hidden rounded-lg shadow-lg bg-secondary transition-transform duration-300 hover:-translate-y-2 hover:shadow-primary/20">
      <div className="relative w-full h-auto">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={800}
          className="object-contain w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
