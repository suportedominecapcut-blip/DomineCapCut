import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@/components/analytics';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Curso Domine o CapCut em 3 Dias',
  description:
    'Aprenda a editar vídeos profissionais, atrativos e virais direto do seu celular — mesmo que nunca tenha editado antes!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
