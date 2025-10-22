// app/servicos/sites/page.tsx
import type { Metadata } from "next";
import AnchorNav from "@/components/AnchorNav";
import ServiceCard from "@/components/ServiceCard";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import ProjectGallery from "@/components/ProjectGallery";
import { projectsSites } from "@/data/projects-sites";
import {
  LayoutDashboard,
  Gauge,
  LineChart,
  PenTool,
  Layers,
  Zap,
  Search,
  Blocks,
  Rocket,
  Star,
  Clock4,
  TrendingUp,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

/* -------------------------------------------
   🔗 WhatsApp helper centralizado (UTMs fixas)
------------------------------------------- */
const WHATS = {
  phone: "5571992258349",
  base: "https://wa.me",
  utm: "utm_source=site&utm_medium=servico&utm_campaign=sites",
};
const wa = (text: string) =>
  `${WHATS.base}/${WHATS.phone}?text=${encodeURIComponent(text)}&${WHATS.utm}`;

/* ----------------
   📈 SEO / Sharing
------------------ */
export const metadata: Metadata = {
  title: "Sites de Alta Conversão | Yamaji Studio",
  description:
    "Sites rápidos, bonitos e que vendem. Performance, UX e SEO na régua — com métricas e otimização contínua.",
  alternates: { canonical: "https://www.yamajistudio.com.br/servicos/sites" },
  openGraph: {
    title: "Sites de Alta Conversão | Yamaji Studio",
    description:
      "Sites rápidos, bonitos e que vendem. Performance, UX e SEO na régua — com métricas e otimização contínua.",
    url: "https://www.yamajistudio.com.br/servicos/sites",
    type: "website",
    images: [
      {
        url: "https://www.yamajistudio.com.br/og/servicos-sites.jpg",
        width: 1200,
        height: 630,
        alt: "Sites de Alta Conversão - Yamaji Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites de Alta Conversão | Yamaji Studio",
    description:
      "Sites rápidos, bonitos e que vendem. Performance, UX e SEO na régua — com métricas e otimização contínua.",
    images: ["https://www.yamajistudio.com.br/og/servicos-sites.jpg"],
  },
};

/* -------------------------
   🧭 Âncoras
-------------------------- */
const anchors = [
  { href: "#projetos-sites", label: "Projetos" },
  { href: "#blocos-sites", label: "O que entrego" },
  { href: "#planos-sites", label: "Planos" },
  { href: "#checklist-sites", label: "Checklist" },
  { href: "#case-sites", label: "Case" },
  { href: "#faq-sites", label: "FAQ" },
];

/* -------------------------
   🧩 Grupos / Cards (conteúdo)
-------------------------- */
const groups = [
  {
    title: "Websites & Performance",
    subtitle: "Sites que performam.",
    ctaText: "Quero saber mais sobre Websites & Performance",
    cards: [
      {
        title: "Website sob medida",
        tagline: "Interface limpa, rápida e preparada para converter.",
        Icon: LayoutDashboard,
        items: [
          "UX clara e responsiva",
          "Código de alto nível",
          "Acessibilidade",
        ],
      },
      {
        title: "Otimização de performance",
        tagline: "Web Vitals na régua e boas práticas técnicas.",
        Icon: Gauge,
        items: ["Lighthouse 90+", "Imagens otimizadas", "Bundle & cache"],
      },
      {
        title: "Lançamento e métricas",
        tagline: "Setup de analytics, eventos e acompanhamento.",
        Icon: LineChart,
        items: ["GA4 + eventos", "Hotjar", "Relatórios quinzenais"],
      },
    ],
  },
  {
    title: "Branding & Identidade",
    subtitle: "Marcas com personalidade.",
    ctaText: "Falar sobre Branding & Identidade",
    cards: [
      {
        title: "Identidade",
        tagline: "Logo, paleta, tipografia e guidelines.",
        Icon: PenTool,
        items: ["Manual de marca", "Componentes UI", "Aplicações"],
      },
      {
        title: "Sistema de UI",
        tagline: "Componentes reutilizáveis e escaláveis.",
        Icon: Layers,
        items: ["Design tokens", "Biblioteca de componentes", "Padronização"],
      },
      {
        title: "Tom & voz",
        tagline: "Microcopy que direciona a ação.",
        Icon: Zap,
        items: ["Headlines fortes", "CTAs persuasivos", "Padrões de mensagem"],
      },
    ],
  },
  {
    title: "SEO & Conteúdo",
    subtitle: "Encontrabilidade que traz tráfego.",
    ctaText: "Quero um plano de SEO & Conteúdo",
    cards: [
      {
        title: "SEO técnico",
        tagline: "Sitemap, meta tags e estrutura sólida.",
        Icon: Search,
        items: ["Schema/JSON-LD", "Meta & Open Graph", "Arquitetura de links"],
      },
      {
        title: "Conteúdo estratégico",
        tagline: "Pautas, copy e arquitetura da informação.",
        Icon: Blocks,
        items: [
          "Calendário editorial",
          "Briefings prontos",
          "Artigos otimizados",
        ],
      },
      {
        title: "Growth contínuo",
        tagline: "Testes A/B e melhorias mensais.",
        Icon: Rocket,
        items: ["Hipóteses de CRO", "Heatmaps", "Iterações de UX"],
      },
    ],
  },
] as const;

/* -------------------------
   💼 Planos (novo)
-------------------------- */
const plans = [
  {
    name: "Landing Sprint",
    desc: "Uma landing rápida (+ Web Vitals) focada em conversão.",
    fit: "Lançar oferta, evento ou validar produto.",
    bullets: ["1 página + obrigado", "GA4 + eventos", "Prazo: 2–3 semanas"],
    badge: "Mais rápido",
  },
  {
    name: "Site Pro",
    desc: "Site institucional completo com blog/SEO e UI consistente.",
    fit: "Negócios que querem presença forte e ranqueamento.",
    bullets: ["4–8 páginas", "Blog + SEO técnico", "Prazo: 4–8 semanas"],
    popular: true,
    badge: "Mais escolhido",
  },
  {
    name: "Growth Retainer",
    desc: "Melhoria contínua (CRO/SEO/UX) após o lançamento.",
    fit: "Escalar tráfego orgânico e conversão mês a mês.",
    bullets: [
      "Backlog priorizado",
      "Testes A/B mensais",
      "Relatórios + roadmap",
    ],
    badge: "Para crescer",
  },
];

/* ------------- UI auxiliares ------------- */
function GroupFooterCTA({ label }: { label: string }) {
  return (
    <div className="mt-4">
      <a
        href={wa(label)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-accent hover:text-accent2 transition-colors text-sm underline underline-offset-4"
        aria-label={label}
        data-cta="whatsapp"
        data-label={`Serviços - Sites - ${label}`}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}

/* ---------------
   👑 Página
---------------- */
export default function SitesPage() {
  return (
    <main className="bg-bg text-fg">
      {/* HERO (alinhada no padrão mobile) */}
      <section className="relative overflow-hidden bg-bg" id="hero-sites">
        {/* glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 -top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-container px-6 pt-24 pb-12 text-center md:pt-28">
          <span className="badge uppercase tracking-wide text-[12px]">
            performance • ux • seo
          </span>

          <h1 className="mt-6 mx-auto max-w-[22ch] font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.015em]">
            <span className="block bg-gradient-to-r from-fg via-fg to-fg/70 bg-clip-text text-transparent">
              Sites que impressionam, conectam
            </span>
            <span className="block bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
              e geram resultados reais.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[48ch] text-[17px] leading-relaxed text-muted">
            Identidade forte, UX clara e SEO que ranqueia. Sem enrolação{" "}
            <span className="text-fg">foco em vendas</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={wa("Quero um site rápido que converta com a Yamaji Studio")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Abrir conversa no WhatsApp para solicitar um site"
              data-cta="whatsapp"
              data-label="Serviços - Sites - Hero"
            >
              🚀 Quero meu site performando
            </a>
            <a
              href="/#cases"
              className="btn btn-ghost"
              aria-label="Ver projetos e cases reais"
            >
              Ver projetos
            </a>
          </div>

          {/* chips prova social */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <Star className="h-3.5 w-3.5 text-accent" /> 5,0 • +30 projetos
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <TrendingUp className="h-3.5 w-3.5 text-accent2" /> Lighthouse 90+
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              <Clock4 className="h-3.5 w-3.5 text-accent" /> Prazo médio 2–4 sem
            </span>
          </div>
        </div>
      </section>

      {/* NAV DE ÂNCORAS */}
      <AnchorNav items={anchors} />

      <IntegrationsStrip />

      {/* PORTFÓLIO */}
      <section
        className="bg-bg"
        id="projetos-sites"
        aria-labelledby="proj-title"
      >
        <div className="mx-auto max-w-container px-6 py-12">
          <div className="mb-4">
            <p className="text-accent uppercase text-xs tracking-widest">
              Portfólio
            </p>
            <h2 id="proj-title" className="mt-1 font-display text-xl">
              Projetos em destaque
            </h2>
            <p className="text-white/70 text-sm mt-1">
              Uma amostra de sites lançados com foco em conversão, velocidade e
              SEO.
            </p>
          </div>

          <ProjectGallery items={projectsSites} />

          {/* SEO: ItemList */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                itemListElement: projectsSites.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: p.url,
                  name: p.title,
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* BLOCOS */}
      <section className="bg-bg" id="blocos-sites">
        <div className="mx-auto max-w-container px-6 pb-12">
          {groups.map((g) => (
            <div key={g.title} className="mt-12 scroll-mt-24">
              <p className="text-accent uppercase text-xs tracking-widest">
                {g.title}
              </p>
              <h3 className="mt-1 font-display text-xl">{g.subtitle}</h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                {g.cards.map((c) => (
                  <div
                    key={c.title}
                    className="transition-transform hover:translate-y-[-2px]"
                  >
                    <ServiceCard {...c} items={[...c.items]} />
                  </div>
                ))}
              </div>

              <GroupFooterCTA label={g.ctaText} />
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS */}
      <section className="bg-bg" id="planos-sites">
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Planos
          </p>
          <h3 className="mt-1 font-display text-xl">
            Escolha o que faz sentido agora
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {plans.map((p) => {
              const isPopular = (p as any).popular;
              return (
                <div
                  key={p.name}
                  className={`relative rounded-xl border border-white/10 bg-black/40 p-6 ${
                    isPopular ? "ring-1 ring-accent/40" : ""
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-4 rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-[#0B0F14]">
                      {p.badge}
                    </span>
                  )}

                  <h4 className="font-medium">{p.name}</h4>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>
                  <p className="mt-2 text-xs text-white/70">{p.fit}</p>

                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={wa(`Quero o plano ${p.name} para meu site`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-4 w-full justify-center ${
                      isPopular ? "btn-primary" : "btn-secondary"
                    }`}
                    data-cta="whatsapp"
                    data-label={`Serviços - Sites - Plano ${p.name}`}
                  >
                    {isPopular ? "Começar agora" : `Escolher plano ${p.name}`}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="bg-bg" id="checklist-sites">
        <div className="mx-auto max-w-container px-6 pb-6">
          <details className="group rounded-xl border border-white/10 bg-black/30 p-5">
            <summary className="flex cursor-pointer items-center gap-2 font-medium">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Checklist de qualidade (antes de publicar)
            </summary>
            <div className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-3">
              <p>• Core Web Vitals &gt; 90 (Lighthouse desktop/mobile)</p>
              <p>• Tags: title/desc/OG + favicon/manifest</p>
              <p>• Schema (Organization, WebSite, FAQ/ItemList)</p>
              <p>• GA4 + eventos + metas</p>
              <p>• Imagens otimizadas e lazy loading correto</p>
              <p>• Acessibilidade: contraste, labels e navegação por teclado</p>
            </div>
          </details>
        </div>
      </section>

      {/* RESULTADOS EM NÚMEROS */}
      <section className="bg-black/30 border-y border-white/10" id="resultados">
        <div className="mx-auto max-w-container px-6 py-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Aumento médio</p>
            <p className="mt-1 font-display text-2xl">
              <span className="text-accent">+27%</span> em 30 dias
            </p>
            <p className="mt-1 text-xs text-white/55">
              E-commerce local (case real)
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Performance</p>
            <p className="mt-1 font-display text-2xl">
              <span className="text-accent2">90+</span> Lighthouse
            </p>
            <p className="mt-1 text-xs text-white/55">
              Core Web Vitals na régua
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Atendimento</p>
            <p className="mt-1 font-display text-2xl">
              SLA &lt; <span className="text-accent">2 min</span>
            </p>
            <p className="mt-1 text-xs text-white/55">WhatsApp/CRM integrado</p>
          </div>
        </div>
      </section>

      {/* CASE */}
      <section className="bg-bg" id="case-sites">
        <div className="mx-auto max-w-container px-6 py-10">
          <div className="rounded-xl border border-white/10 bg-black/30 p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-accent uppercase text-xs tracking-widest">
                Case real
              </p>
              <h3 className="mt-1 font-display text-xl">
                E-commerce local → +27% de vendas em 30 dias
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted">
                Site rápido + UX clara + eventos GA4. Queda no abandono e{" "}
                <span className="text-fg">mais conversões</span>.
              </p>
            </div>
            <a
              href="/#cases"
              className="btn btn-primary mt-4 md:mt-0"
              aria-label="Abrir seção de cases reais"
            >
              Ver estudo completo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg" id="faq-sites">
        <div className="mx-auto max-w-container px-6 py-16">
          <p className="text-accent uppercase text-xs tracking-widest">
            Perguntas frequentes
          </p>
          <h3 className="mt-1 font-display text-xl">
            Tudo sobre seu novo site
          </h3>

          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10">
            {[
              {
                q: "Em quanto tempo um site fica pronto?",
                a: "Projetos lean levam de 2 a 4 semanas; sites maiores, de 6 a 10 semanas.",
              },
              {
                q: "Vocês cuidam de domínio e hospedagem?",
                a: "Sim. Podemos orientar ou gerenciar tudo para você, incluindo SSL e CDN.",
              },
              {
                q: "O site vem com SEO?",
                a: "Sim. Implementamos SEO técnico (meta, OG, schema) e estrutura para conteúdos ranquearem.",
              },
              {
                q: "Posso pedir alterações depois de lançar?",
                a: "Claro. Trabalhamos com Growth Retainer (CRO/SEO/UX mensais).",
              },
            ].map((f, i) => (
              <details
                key={f.q}
                className={`p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="cursor-pointer list-none font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Em quanto tempo um site fica pronto?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Projetos lean levam de 2 a 4 semanas; sites maiores, de 6 a 10 semanas.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Vocês cuidam de domínio e hospedagem?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sim. Podemos orientar ou gerenciar tudo para você, incluindo SSL e CDN.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "O site vem com SEO?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sim. Implementamos SEO técnico (meta, OG, schema) e estrutura para conteúdos ranquearem.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Posso pedir alterações depois de lançar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Claro. Trabalhamos com Growth Retainer (CRO/SEO/UX mensais).",
                    },
                  },
                ],
              }),
            }}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa("Quero meu site performando com a Yamaji Studio")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Falar no WhatsApp sobre criação de site"
              data-cta="whatsapp"
              data-label="Serviços - Sites - FAQ"
            >
              ⚡ Falar no WhatsApp
            </a>
            <a
              href="/#cases"
              className="btn btn-ghost"
              aria-label="Ver projetos"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="bg-black/40 border-t border-white/10 py-12 text-center"
        id="cta-sites"
      >
        <h3 className="font-display text-2xl sm:text-3xl">
          Pronto para lançar um site <span className="text-accent">rápido</span>{" "}
          e <span className="text-accent2">que converte</span>?
        </h3>
        <p className="mt-2 text-muted">
          Performance, UX e SEO na régua com métricas e otimização contínua.
        </p>
        <a
          href={wa("Quero lançar meu site com a Yamaji Studio")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
          aria-label="Abrir WhatsApp para lançar meu site"
          data-cta="whatsapp"
          data-label="Serviços - Sites - CTA Final"
        >
          🚀 Falar no WhatsApp agora
        </a>

        <p className="mt-3 text-xs text-white/65">
          Atendimento rápido via WhatsApp resposta em até{" "}
          <span className="text-accent2">24h úteis</span>.
        </p>
      </section>

      {/* JSON-LD extra: Service + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Criação de Sites de Alta Conversão",
            provider: { "@type": "Organization", name: "Yamaji Studio" },
            areaServed: "BR",
            serviceType: "Web Design, Development, SEO, CRO",
            url: "https://www.yamajistudio.com.br/servicos/sites",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Yamaji Studio",
            url: "https://www.yamajistudio.com.br",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.yamajistudio.com.br/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}
