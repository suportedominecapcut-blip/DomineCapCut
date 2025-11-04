import { TestimonialImage } from './TestimonialImage';
import { testimonialImages } from '@/lib/testimonial-images';

export function TestimonialsSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          O que nossos alunos dizem
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Veja o que quem já comprou está falando sobre o curso.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
        {testimonialImages.map((testimonial) => (
          <TestimonialImage key={testimonial.id} src={testimonial.src} alt={testimonial.alt} />
        ))}
      </div>
    </div>
  );
}
