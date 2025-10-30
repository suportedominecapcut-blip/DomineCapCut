import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function OfferSection() {
  return (
    <div id="oferta" className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-sm font-semibold uppercase tracking-widest text-primary">
          Oferta de Lançamento
        </h2>
        <p className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          De <span className="line-through decoration-red-500">R$197,00</span> por
          apenas
        </p>
        <p className="mt-4 font-headline text-7xl font-black tracking-tight text-primary sm:text-8xl lg:text-9xl">
          R$19,90
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
         🔥 Aulas curtas, diretas ao ponto e 100% práticas para você aplicar e ver resultados imediatos.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="h-14 px-12 text-lg font-bold">
            <Link href="https://pagamento.seulink.com/capcut">
              Comprar Agora
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
