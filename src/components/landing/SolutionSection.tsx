import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { text: 'Criar vídeos com impacto visual que prendem a atenção.' },
  { text: 'Técnicas que aumentam o engajamento e o alcance.' },
  { text: 'Como fazer vídeos que vendem todos os dias.' },
  { text: 'Tudo isso usando apenas o app gratuito CapCut no seu celular.' },
];

export function SolutionSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              A Solução: CapCut Pro em 3 Dias
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Este curso é um atalho. Condensamos anos de experiência em um método
              passo a passo para você criar vídeos incríveis, economizando tempo e
              dinheiro.
            </p>
          </div>
          <ul className="grid gap-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground text-base">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex h-full min-h-[400px] items-center justify-center">
            <img
                src="https://i.imgur.com/xOAGdGn.jpg"
                alt="Mulher editando vídeo no celular com o app CapCut e notas de dinheiro ao lado"
                width={500}
                height={333}
                className="rounded-2xl object-cover shadow-2xl shadow-primary/20 transition-transform duration-500 hover:scale-105"
                data-ai-hint="capcut money"
            />
        </div>
      </div>
    </div>
  );
}
