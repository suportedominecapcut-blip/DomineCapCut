import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Frown, HelpCircle, Smartphone } from 'lucide-react';

const painPoints = [
  {
    icon: Frown,
    title: 'Edição Complicada?',
    description:
      'Já tentou editar vídeos, mas parece tudo complicado demais e você acaba desistindo?',
  },
  {
    icon: HelpCircle,
    title: 'Sem Engajamento?',
    description:
      'Sabe que precisa chamar atenção nas redes, mas não sabe por onde começar para criar conteúdo que conecta?',
  },
  {
    icon: Smartphone,
    title: 'Equipamento Caro?',
    description:
      'Acha que só quem tem computador e programas caros consegue fazer vídeos com aparência profissional?',
  },
];

export function PainPointsSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Você se identifica com isso?
        </h2>
        <p className="mt-4 text-muted-foreground md:text-xl">
          Se você respondeu sim a uma dessas perguntas, você está no lugar
          certo.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((point, index) => (
          <Card
            key={index}
            className="transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 animate-slow-pulse"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-md bg-primary/10 p-3 text-primary">
                <point.icon className="h-6 w-6" />
              </div>
              <CardTitle>{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{point.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
