import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana L.',
    role: 'Dona de Loja',
    quote:
      'Em dois dias já estava editando vídeos pra minha loja. Valeu cada centavo!',
    avatarId: 'testimonial-1',
  },
  {
    name: 'Marcos P.',
    role: 'Iniciante em Edição',
    quote: 'Nunca tinha mexido em edição, mas o curso é muito direto ao ponto. Consegui aprender rápido!',
    avatarId: 'testimonial-2',
  },
  {
    name: 'Julia F.',
    role: 'Social Media',
    quote: 'Estou vendendo vídeos curtos para empresas da minha cidade e faturando com o que aprendi.',
    avatarId: 'testimonial-3',
  },
];

const getImageUrl = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageHint || '';

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
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="flex flex-col justify-between border-primary/20 bg-secondary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-lg font-semibold leading-snug">
                "{testimonial.quote}"
              </blockquote>
            </CardContent>
            <div className="flex items-center gap-4 border-t border-primary/20 p-6">
              <Avatar>
                <AvatarImage
                  src={getImageUrl(testimonial.avatarId)}
                  data-ai-hint={getImageHint(testimonial.avatarId)}
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
