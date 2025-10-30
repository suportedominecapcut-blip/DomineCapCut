import { ShieldCheck } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl rounded-lg border border-primary/50 bg-secondary/20 p-8 text-center shadow-lg shadow-primary/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h2 className="mt-6 text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
          Garantia Incondicional de 7 Dias
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-lg text-muted-foreground">
          Sua satisfação ou seu dinheiro de volta. Se por qualquer motivo você
          não gostar do curso nos primeiros 7 dias, basta nos enviar um e-mail e
          devolvemos 100% do valor investido. Risco zero para você!
        </p>
      </div>
    </div>
  );
}
