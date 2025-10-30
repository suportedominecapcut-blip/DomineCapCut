"use client";

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import { OfferModal } from './OfferModal';

export function OfferSection() {
  return (
    <div
      id="oferta"
      className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-sm font-semibold uppercase tracking-widest text-primary">
          Oferta Válida Somente Hoje
        </h2>
        <p className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          De <span className="line-through decoration-red-500">R$197,00</span>{' '}
          por apenas
        </p>
        <p className="mt-4 font-headline text-7xl font-black tracking-tight text-primary sm:text-8xl lg:text-9xl">
          R$19,90
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          🔥 Aulas curtas, diretas ao ponto e 100% práticas para você aplicar e
          ver resultados imediatos.
        </p>
        <div className="mt-10">
          <OfferModal>
            <Button
              size="lg"
              className="relative h-14 overflow-hidden rounded-lg px-12 text-lg font-bold shadow-2xl shadow-primary/40 transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white/50 before:duration-100 before:ease-linear hover:bg-primary/90 hover:shadow-primary/60 hover:before:border-[25px] active:scale-95 animate-pulse"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-2 h-6 w-6" />
                Comprar Agora
              </span>
            </Button>
          </OfferModal>
        </div>
      </div>
    </div>
  );
}
