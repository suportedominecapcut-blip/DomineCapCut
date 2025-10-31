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
import { PartyPopper } from "lucide-react";
import Link from "next/link";

export function OfferModal({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-md border-primary/50 bg-gradient-to-br from-secondary to-background shadow-lg shadow-primary/20 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
        <AlertDialogHeader className="items-center text-center">
          <PartyPopper className="h-12 w-12 text-primary animate-bounce" />
          <AlertDialogTitle className="text-2xl font-bold text-primary">
            🎉 Oferta Exclusiva Desbloqueada!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-foreground/80 space-y-3 pt-2">
            <p>
              Parabéns! Você ganhou acesso a uma <strong>OFERTA ESPECIAL</strong> que inclui:
            </p>
            <ul className="list-disc list-inside text-left mx-auto max-w-sm space-y-1">
                <li>Curso Completo Domine o CapCut</li>
                <li>E-book: Como Ganhar Dinheiro com Edição</li>
                <li>E-book: Como Editar com IA no CapCut</li>
            </ul>
            <p className="text-xl font-bold text-foreground">
              🔥 Tudo isso de{" "}
              <span className="line-through">R$247,00</span> por apenas{" "}
              <span className="text-primary text-2xl">R$29,90</span>
            </p>
            <p className="font-semibold">
              Mas atenção: essa condição é por tempo LIMITADO!
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <AlertDialogCancel asChild>
            <Link
              className={`${buttonVariants({
                variant: "outline",
              })}`}
              href="https://pay.lowify.com.br/checkout?product_id=EDxGrQ"
            >
              Quero continuar sem a oferta exclusiva
            </Link>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link
              className={`${buttonVariants({
                variant: "default",
              })} animate-scale-in-out`}
              href="https://pay.lowify.com.br/checkout?product_id=A6bFFP"
            >
              👉 Quero a promoção!
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
