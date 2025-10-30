"use client"

import { Button } from '@/components/ui/button';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
    }).format(date);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="w-full bg-primary text-primary-foreground py-2 text-center text-sm md:text-base font-bold mb-8">
        Oferta Válida Somente Hoje ({currentDate})
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="font-headline text-4xl font-black tracking-tighter sm:text-5xl xl:text-6xl/none">
              Domine o <span className="text-primary">CapCut</span> e Crie Vídeos
              Profissionais em 3 Dias
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Aprenda a editar vídeos profissionais, atrativos e virais direto do
              seu celular — mesmo que nunca tenha editado antes!
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-bold">
                <Link href="#oferta">Quero Começar Agora</Link>
              </Button>
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>Descubra o método rápido, prático e testado por quem já vive de vídeos.</p>
                <p>🎯 Ideal para quem quer vender, criar conteúdo, ou começar a prestar serviços com o celular.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="group relative aspect-video w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 bg-secondary" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-primary transition-transform group-hover:scale-110" />
              </div>
              <p className="absolute bottom-4 left-4 font-semibold text-foreground">
                Assista ao vídeo de apresentação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}