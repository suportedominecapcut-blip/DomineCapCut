import { HeroSection } from '@/components/landing/HeroSection';
import { PainPointsSection } from '@/components/landing/PainPointsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { OfferSection } from '@/components/landing/OfferSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { Footer } from '@/components/landing/Footer';
import { ResultsSection } from '@/components/landing/ResultsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <section className="w-full light bg-background text-foreground">
          <PainPointsSection />
        </section>
        <SolutionSection />
        <ResultsSection />
        <section className="w-full light bg-background text-foreground">
          <OfferSection />
        </section>
        <TestimonialsSection />
        <section className="w-full light bg-background text-foreground">
          <FaqSection />
        </section>
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}
