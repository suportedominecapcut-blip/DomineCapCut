import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';
import Image from 'next/image';

const getImageUrl = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) =>
  PlaceHolderImages.find((img) => img.id === id)?.imageHint || '';

const resultsData = [
  {
    id: 'result-2',
    text: 'Resultado em 3 dias, mesmo sem experiência',
  },
  {
    id: 'result-1',
    text: 'Zero enrolação: você aprende só o que realmente funciona',
  },
  {
    id: 'result-3',
    text: 'Independência: crie seus próprios vídeos sem depender de ninguém',
  },
];

export function ResultsSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Edição de vídeos que geram resultado:
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {resultsData.map((result) => (
          <div
            key={result.id}
            className="group flex flex-col items-center gap-4 text-center"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border bg-card shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src={getImageUrl(result.id)}
                alt={result.text}
                width={400}
                height={600}
                className="aspect-[3/4] object-cover"
                data-ai-hint={getImageHint(result.id)}
              />
            </div>
            <div className="flex items-center gap-2 text-left">
              <Check className="h-5 w-5 flex-shrink-0 text-primary" />
              <p className="font-medium text-muted-foreground">{result.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
