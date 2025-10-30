import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Preciso de computador?',
    answer: 'Não, todo o curso foi pensado para ser feito 100% pelo celular, utilizando o aplicativo gratuito CapCut.',
  },
  {
    question: 'Em quanto tempo vejo resultado?',
    answer: 'O curso é estruturado para que você domine as principais ferramentas e crie seu primeiro vídeo profissional em até 3 dias, seguindo as aulas.',
  },
  {
    question: 'O acesso é vitalício?',
    answer: 'Sim! Uma vez comprado, o acesso ao curso é seu para sempre, incluindo todas as futuras atualizações sem custo adicional.',
  },
  {
    question: 'Posso usar para vender produtos?',
    answer: 'Com certeza! O curso ensina técnicas de edição focadas em criar vídeos atrativos que geram desejo e vendem, sendo ideal para empreendedores e lojas.',
  },
];

export function FaqSection() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Perguntas Frequentes
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Ainda tem dúvidas? Aqui estão as respostas para as perguntas mais comuns.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
