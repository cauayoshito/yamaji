import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// novos blocos
import SeasonalUrgencyBar from "@/components/SeasonalUrgencyBar";
import ProblemHookSolution from "@/components/ProblemHookSolution";
import ServicePromo from "@/components/ServicePromo";

// lazy abaixo da dobra
const BeforeAfter = dynamic(() => import("@/components/BeforeAfter"), {
  loading: () => <div className="h-[200px]" />,
});
const CaseStudy = dynamic(() => import("@/components/CaseStudy"));
const Tripod = dynamic(() => import("@/components/Tripod"));
const Process = dynamic(() => import("@/components/ProcessSection"));
const Testimonials = dynamic(() => import("@/components/TestimonialsSection"));
const Comparison = dynamic(() => import("@/components/ComparisonTable"));
const Guarantees = dynamic(() => import("@/components/Guarantees"));
const CTASection = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-black text-white px-4 py-2 rounded"
      >
        Ir para o conteúdo
      </a>

      <Header />

      <main
        id="conteudo"
        className="bg-[#0B0F14] text-white [--header-h:56px] md:[--header-h:72px]"
      >
        {/* HERO */}
        <Hero />

        {/* URGÊNCIA SAZONAL (BF/Natal) */}
        <SeasonalUrgencyBar />

        {/* DOR → GANCHO → SOLUÇÃO + links diretos */}
        <ProblemHookSolution />

        {/* PROMOÇÃO DE SERVIÇOS (cross-sell) */}
        <ServicePromo />

        {/* resto da home */}
        <section
          id="como-funciona"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <BeforeAfter />
        </section>
        <section id="cases" className="scroll-mt-[calc(var(--header-h)+8px)]">
          <CaseStudy />
        </section>
        <section
          id="servicos"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <Tripod />
        </section>
        <section
          id="processo"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <Process />
        </section>
        <section
          id="depoimentos"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <Testimonials />
        </section>
        <section
          id="comparativo"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <Comparison />
        </section>
        <section
          id="garantias"
          className="scroll-mt-[calc(var(--header-h)+8px)]"
        >
          <Guarantees />
        </section>
        <section id="cta" className="scroll-mt-[calc(var(--header-h)+8px)]">
          <CTASection />
        </section>

        <MobileStickyCTA />
      </main>

      <Footer />
    </>
  );
}
