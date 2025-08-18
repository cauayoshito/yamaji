// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonTable from "@/components/ComparisonTable";
import CTASection from "@/components/CTA"; // ⬅️ renomeado
import Footer from "@/components/Footer";

// client component que você criou
import WorkGrid from "@/components/WorkGrid";

export default function Page() {
  return (
    <>
      {/* Skip link para acessibilidade */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2 focus:text-fg focus:outline-none focus:ring-2 focus:ring-accent/60"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main id="conteudo" className="bg-bg text-fg">
        {/* Hero com glows e CTAs (#contato e #cases) */}
        <Hero />

        {/* Serviços com ícones e hover neon */}
        <section id="servicos" className="section scroll-mt-24">
          <div className="container">
            <Services />
          </div>
        </section>

        {/* Diferenciais */}
        <section id="destaques" className="section scroll-mt-24">
          <div className="container">
            <Highlights />
          </div>
        </section>

        {/* Mini-form (captação) */}
        <section id="sobre" className="section scroll-mt-24">
          <div className="container">
            <AboutSection />
          </div>
        </section>

        {/* Projetos / Portfólio */}
        <section id="projetos" className="section scroll-mt-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="h2">Projetos</h2>
              <p className="lead">
                Alguns cases com foco em performance, UX e conversão.
              </p>
            </div>

            {/* grid + filtros (client component) */}
            <div className="mt-8">
              <WorkGrid />
            </div>
          </div>
        </section>

        {/* Processo */}
        <section id="processo" className="section scroll-mt-24">
          <div className="container">
            <ProcessSection />
          </div>
        </section>

        {/* Depoimentos / Cases */}
        <section id="cases" className="section scroll-mt-24">
          <div className="container">
            <TestimonialsSection />
          </div>
        </section>

        {/* Comparativo */}
        <section id="comparativo" className="section scroll-mt-24">
          <div className="container">
            <ComparisonTable />
          </div>
        </section>

        {/* Contato / CTA final */}
        <section id="contato" className="section scroll-mt-24">
          <div className="container">
            <CTASection />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
