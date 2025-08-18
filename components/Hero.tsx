// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Glows de fundo (não interferem no foco/semântica) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[20%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] motion-safe:animate-yamajiPulse" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px] motion-safe:animate-yamajiFloat" />
      </div>

      <div className="relative mx-auto max-w-container px-6 py-24 text-center md:py-28">
        {/* Badge topo */}
        <span className="badge uppercase tracking-wide text-[12px]">
          <span className="relative inline-flex h-1.5 w-1.5 items-center justify-center mr-1.5">
            <span className="absolute inline-block h-3 w-3 rounded-full bg-accent/30 blur-[6px]" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
          </span>
          design estratégico • seo • conversão
        </span>

        {/* Headline */}
        <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text text-transparent [text-shadow:_0_0_18px_rgba(0,255,163,0.22)]">
            Sites que impressionam, conectam
          </span>
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
            &nbsp;e geram resultados reais.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
          Identidade forte, UX clara e SEO que ranqueia. Sem enrolação,{" "}
          <span className="text-fg">foco em vendas</span>.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contato"
            className="btn btn-primary"
            aria-label="Falar com a Yamaji pelo formulário de contato"
          >
            Falar com a Yamaji
          </a>
          <a
            href="#cases"
            className="btn btn-secondary"
            aria-label="Ver nossos cases de projetos"
          >
            Ver nossos cases
          </a>
        </div>

        {/* Mini social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            Entrega rápida e suporte humano real
          </div>
          <span className="sr-only">|</span>
          <div className="hidden h-3 w-px bg-white/10 sm:block" aria-hidden />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-accent2 shadow-[0_0_10px_#4A90E2]" />
            Método próprio focado em conversão
          </div>
        </div>
      </div>
    </section>
  );
}
