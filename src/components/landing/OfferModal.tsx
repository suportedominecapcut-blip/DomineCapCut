
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Check, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

export function OfferModal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100%-2rem)] max-w-2xl p-0 overflow-hidden flex flex-col max-h-[90svh]">
        <DialogHeader className="p-6 pb-2 items-center space-y-2 text-center shrink-0">
          <PartyPopper className="h-12 w-12 sm:h-14 sm:w-14 animate-bounce text-primary" />
          <DialogTitle className="text-xl sm:text-3xl font-extrabold text-primary">
            Oferta Exclusiva Desbloqueada!
          </DialogTitle>
          <DialogDescription className="mx-auto max-w-md text-base sm:text-lg text-foreground/80">
            Parabéns! Você ganhou acesso a uma condição especial por tempo
            limitado.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 flex-1 overflow-y-auto">
          <div className="mt-2 rounded-lg border border-border bg-background/50 p-4 sm:p-6 space-y-4">
            <h3 className="text-center text-lg font-bold text-foreground">
              O que você recebe:
            </h3>
            <ul className="space-y-3 text-left text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/90">
                  Curso Completo Domine o CapCut
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/90">
                  E-book: Como Ganhar Dinheiro com Edição
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-foreground/90">
                  E-book: Como Editar com IA no CapCut
                </span>
              </li>
            </ul>
            <div className="mt-6 rounded-lg border border-primary/20 bg-primary/10 p-4 text-center">
              <p className="text-foreground/80">
                De <span className="line-through">R$247,00</span> por apenas:
              </p>
              <p className="my-1 text-3xl sm:text-4xl font-black text-primary">R$29,90</p>
              <p className="text-xs text-foreground/60">
                (Pagamento único, acesso vitalício)
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col gap-2 border-t border-border bg-background/20 px-6 pb-6 pt-4 sm:flex-row sm:justify-center shrink-0">
          <a
            href="https://pay.lowify.com.br/checkout?product_id=A6bFFP"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full text-base font-bold sm:w-auto animate-scale-in-out"
            )}
          >
            👉 Sim, quero a promoção!
          </a>
          <a
            href="https://pay.lowify.com.br/checkout?product_id=EDxGrQ"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 w-full sm:w-auto"
            )}
          >
            Não, obrigado.
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
