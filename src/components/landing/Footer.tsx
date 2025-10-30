import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full p-6 md:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {currentYear} CapCut Mastery. Todos os direitos reservados.</p>
        <Link
          href="mailto:suporte@capcutmastery.com"
          className="hover:text-primary transition-colors"
        >
          suporte@capcutmastery.com
        </Link>
      </div>
    </footer>
  );
}
