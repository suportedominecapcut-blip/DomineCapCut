"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Check, PartyPopper } from "lucide-react";
import Link from "next/link";

export function OfferModal({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-lg border-primary/50 bg-secondary shadow-lg shadow-primary/20 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 p-0 overflow-hidden">
        <div className="p-6">
            <AlertDialogHeader className="items-center text-center space-y-4 pb-4">
            <PartyPopper className="h-16 w-16 text-primary animate-bounce" />
            <AlertDialogTitle className="text-3xl font-extrabold text-primary">
                Oferta Exclusiva Desbloqueada!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-foreground/80 max-w-md mx-auto">
                Parabéns! Você ganhou acesso a uma condição especial por tempo limitado.
            </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="bg-background/50 rounded-lg p-6 space-y-4 border border-border mt-4">
                <h3 className="font-bold text-center text-lg text-foreground">O que você recebe:</h3>
                <ul className="space-y-3 text-left">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                        <span className="text-foreground/90">Curso Completo Domine o CapCut</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                        <span className="text-foreground/90">E-book: Como Ganhar Dinheiro com Edição</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                        <span className="text-foreground/90">E-book: Como Editar com IA no CapCut</span>
                    </li>
                </ul>
                <div className="text-center bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                    <p className="text-foreground/80">De <span className="line-through">R$247,00</span> por apenas:</p>
                    <p className="text-4xl font-black text-primary my-1">R$29,90</p>
                    <p className="text-xs text-foreground/60">(Pagamento único, acesso vitalício)</p>
                </div>
            </div>
        </div>

        <AlertDialogFooter className="flex-col gap-2 px-6 pb-8 pt-6 border-t border-border bg-background/20">
            <AlertDialogAction asChild>
                <Link
                href="https://pay.lowify.com.br/checkout?product_id=A6bFFP"
                className={`${buttonVariants({
                    size: 'lg',
                })} w-full h-12 text-base font-bold animate-scale-in-out`}
                >
                👉 Sim, quero a promoção!
                </Link>
            </AlertDialogAction>
            <AlertDialogCancel asChild>
                <Link
                href="https://pay.lowify.com.br/checkout?product_id=EDxGrQ"
                className={buttonVariants({ variant: "link", size: 'sm' })}
                >
                Não, obrigado. Quero continuar com o valor normal.
                </Link>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
