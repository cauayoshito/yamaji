// app/servicos/ads/page.tsx
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";
import {
  Target,
  Megaphone,
  LineChart,
  Gauge,
  LayoutDashboard,
  MousePointerClick,
  ClipboardCheck,
  Settings,
  Rocket,
  Star,
  TrendingUp,
  Clock4,
  // extras para os blocos premium
  ShieldCheck,
  Server,
  Sparkles,
  Network,
  Link2,
  ClipboardList,
  // novos para UX
  CircleHelp,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

/* -------------------------------------------
   🔗 WhatsApp helper centralizado (UTMs fixas)
------------------------------------------- */
const WHATS = {
  phone: "5571992258349",
  base: "https://wa.me",
  utm: "utm_source=site&utm_medium=servico&utm_campaign=ads",
};
const wa = (text: string) =>
  `${WHATS.base}/${WHATS.phone}?text=${encodeURIComponent(text)}&${WHATS.utm}`;

/* ----------------
   📈 SEO / Sharing
------------------ */
export const metadata: Metadata = {
  title: "Gestão de Ads | Yamaji Studio",
  description:
    "Tráfego pago no padrão Yamaji: estratégia + criativos + landing rápida. Pare de queimar verba — transforme anúncios em clientes.",
  alternates: { canonical: "https://www.yamajistudio.com.br/servicos/ads" },
  openGraph: {
    title: "Gestão de Ads | Yamaji Studio",
    description:
      "Tráfego pago com estratégia simples e direto ao ponto. Criativos que vendem, página rápida e otimização toda semana.",
    url: "https://www.yamajistudio.com.br/servicos/ads",
    type: "website",
    images: [
      {
        url: "https://www.yamajistudio.com.br/og/servicos-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Gestão de Ads - Yamaji Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestão de Ads | Yamaji Studio",
    description:
      "Anúncios que viram clientes. A gente cuida do anúncio, da página e da medição — você cuida do atendimento.",
    images: ["https://www.yamajistudio.com.br/og/servicos-ads.jpg"],
  },
};

/* -------------------------
   🧩 Conteúdo (grupos / planos / FAQ)
-------------------------- */
const groups = [
  {
    id: "estrategia",
    title: "Estratégia de Tráfego",
    subtitle: "Público certo, oferta certa.",
    cards: [
      {
        title: "Pesquisa & ICP",
        tagline: "Entender quem compra e por quê.",
        Icon: Target,
        items: [
          "Dores do cliente",
          "Públicos certos",
          "Estrutura por objetivo",
        ],
      },
      {
        title: "Arquitetura de Campanhas",
        tagline: "Do zero ao funil completo.",
        Icon: Megaphone,
        items: ["Meta & Google", "Frio/Quente", "Remarketing inteligente"],
      },
      {
        title: "Métricas que importam",
        tagline: "Decidir com dados, não no achismo.",
        Icon: LineChart,
        items: ["CPL/CPA/ROAS", "Eventos GA4", "Relatórios simples"],
      },
    ],
  },
  {
    id: "criativos",
    title: "Criativos & Landing",
    subtitle: "Anúncio bom sem página rápida não vende.",
    cards: [
      {
        title: "Criativos que vendem",
        tagline: "Mensagens simples que dão clique.",
        Icon: MousePointerClick,
        items: ["Arte/Vídeo/UGC", "Testes A/B sempre", "Headlines fortes"],
      },
      {
        title: "Landing Rápida",
        tagline: "Abre em ~1s e sem enrolação.",
        Icon: Gauge,
        items: ["Velocidade", "UX sem fricção", "Form/Whats com UTM"],
      },
      {
        title: "Dashboard & Provas",
        tagline: "Transparência total.",
        Icon: LayoutDashboard,
        items: ["Prints reais", "Checklist de qualidade", "Plano de testes"],
      },
    ],
  },
  {
    id: "otimizacao",
    title: "Otimização & Escala",
    subtitle: "Ajuste fino até virar máquina de leads.",
    cards: [
      {
        title: "Checklist de Qualidade",
        tagline: "Nada passa batido.",
        Icon: ClipboardCheck,
        items: ["Pixel ok", "Mensagem coerente", "Oferta alinhada"],
      },
      {
        title: "Otimização Semanal",
        tagline: "Cortar o que não entrega. Escalar o que converte.",
        Icon: Settings,
        items: [
          "Refino de públicos",
          "Ajuste de budget",
          "Variação de criativos",
        ],
      },
      {
        title: "Plano de Escala",
        tagline: "Do bom para o extraordinário.",
        Icon: Rocket,
        items: ["Novos canais", "Datas sazonais", "Meta + Google juntos"],
      },
    ],
  },
] as const;

const plans = [
  {
    name: "Essencial",
    desc: "Validar oferta e montar o funil básico.",
    bullets: [
      "1 rede",
      "1 criativo/semana",
      "Otimização semanal",
      "Relatório quinzenal",
    ],
    fit: "Nunca anunciou ou quer começar simples.",
  },
  {
    name: "Crescimento",
    desc: "Mais leads e custo por lead menor.",
    bullets: [
      "2 redes",
      "3 criativos/semana",
      "Otimização 2x/semana",
      "Relatório quinzenal",
    ],
    fit: "Já anuncia e quer reduzir custo e ganhar volume.",
  },
  {
    name: "Escala",
    desc: "Leads em volume e previsibilidade.",
    bullets: [
      "2–3 redes",
      "5 criativos/semana",
      "Otimização contínua",
      "Relatórios + roadmap",
    ],
    fit: "Negócio com demanda e verba para acelerar forte.",
  },
] as const;

const faq = [
  {
    q: "Qual o orçamento mínimo?",
    a: "A partir de R$ 30–80/dia por rede. A gente ajusta conforme o resultado.",
  },
  {
    q: "Vocês criam os criativos?",
    a: "Sim. Arte, UGC e vídeo curto com testes A/B toda semana.",
  },
  {
    q: "Vocês fazem a landing?",
    a: "Sim. Página rápida (~1s) com formulário/Whats integrado.",
  },
  {
    q: "Quando começo a ver leads?",
    a: "Em campanhas de captura com landing validada, já nos primeiros dias.",
  },
  {
    q: "Como acompanho?",
    a: "Pixel + GA4 + UTMs. Relatório claro de CTR, CPC, CPL e o que foi otimizado.",
  },
] as const;

/* --------------- helpers --------------- */
const anchors = [
  { href: "#estrategia", label: "Estratégia" },
  { href: "#criativos", label: "Criativos & Landing" },
  { href: "#otimizacao", label: "Otimização" },
  { href: "#elite", label: "Elite Suite" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

/* ---------------
   👑 Página
---------------- */
export default function AdsPage() {
  return (
    <main className="bg-bg text-fg">
      {/* HERO */}
      <section className="mx-auto max-w-container px-6 pt-20 pb-10 text-center">
        <span
          className="badge uppercase tracking-wide text-[12px]"
          aria-label="Categorias do serviço"
        >
          Tráfego Pago • Criativos • Conversão
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl">
          Tráfego pago que vira <span className="text-accent">clientes</span>,
          não só cliques.
        </h1>

        <p className="mt-3 max-w-2xl mx-auto text-muted">
          Você foca no atendimento. A gente cuida do resto: anúncio, página
          rápida e medição certa.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={wa("Quero rodar Ads que convertem com a Yamaji Studio")}
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-label="Serviços - Ads - Hero"
          >
            🚀 Quero Ads que vendem
          </a>
          <a
            href="#planos"
            className="btn btn-ghost"
            aria-label="Ver planos de gestão de Ads"
          >
            Ver planos
          </a>
        </div>

        {/* Prova social (flat, sem cápsulas) */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/70">
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-accent" /> 5,0 • +30 projetos
          </span>
          <span className="opacity-30">|</span>
          <span className="inline-flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5 text-accent2" /> CPL/CPA sob meta
          </span>
          <span className="opacity-30">|</span>
          <span className="inline-flex items-center gap-1">
            <Clock4 className="h-3.5 w-3.5 text-accent" /> SLA &lt; 2 min
          </span>
        </div>
      </section>

      {/* MINI-NAV ÂNCORA (fixo) */}
      <nav
        aria-label="Atalhos da página"
        className="sticky top-14 z-30 border-y border-white/10 bg-black/30 backdrop-blur"
      >
        <div className="mx-auto max-w-container px-4">
          <ul className="no-scrollbar flex overflow-x-auto">
            {anchors.map((a, i) => (
              <li key={a.href} className="flex items-stretch">
                {i !== 0 && (
                  <span
                    className="mx-1 my-2 h-5 w-px bg-white/10"
                    aria-hidden
                  />
                )}
                <a
                  href={a.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-[13px] rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  {a.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* GLOSSÁRIO SIMPLES (linguagem leiga) */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-6">
          <details className="group rounded-xl border border-white/10 bg-black/30 p-4">
            <summary className="flex cursor-pointer items-center gap-2 font-medium">
              <CircleHelp className="h-4 w-4 text-accent" />
              Termos em linguagem simples
            </summary>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm text-white/80">
              <p>
                <b>Funil:</b> caminho do cliente: vê → clica → chama no Whats.
              </p>
              <p>
                <b>Retargeting:</b> anúncios que “seguem” quem já visitou seu
                perfil/site.
              </p>
              <p>
                <b>Lookalike:</b> achar gente parecida com quem já compra.
              </p>
              <p>
                <b>CPL/CPA:</b> quanto custa cada lead/cliente na prática.
              </p>
              <p>
                <b>UGC:</b> vídeo depoimento/real que parece do cliente.
              </p>
              <p>
                <b>CAPI:</b> envio de dados direto do servidor para medir
                melhor.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* GRUPOS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-12">
          {groups.map((g) => (
            <div id={g.id} key={g.title} className="scroll-mt-24 mt-12">
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
            </div>
          ))}
        </div>
      </section>

      {/* ELITE SUITE */}
      <section
        id="elite"
        className="bg-black/30 border-y border-white/10 scroll-mt-24"
      >
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Elite Suite
          </p>
          <h3 className="mt-1 font-display text-xl">
            Tudo que um pequeno negócio precisa para escalar com segurança
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">Medição avançada</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>
                  GA4 + GTM + <b>Meta CAPI (server-side)</b>
                </li>
                <li>Consent Mode e deduplicação de eventos</li>
                <li>Heatmap e análise de formulários</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">Leads qualificados no CRM</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>Validação e score do lead no envio</li>
                <li>UTMs certinhas no CRM</li>
                <li>Automação de follow-up</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">Creative Lab</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>UGC + motion leve</li>
                <li>2–4 variações por semana</li>
                <li>Biblioteca de criativos campeões</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <Link2 className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">Landing com Speed Budget</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>LCP &lt; 2,5s • CLS &lt; 0,1</li>
                <li>Copy simples que tira dúvida e chama pra ação</li>
                <li>Teste A/B quinzenal</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">UTMs sem bagunça</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>Padrão único + auto-tag</li>
                <li>Verificador de consistência</li>
                <li>Relatório por canal e campanha</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent2" />
                <h4 className="font-medium">Brand-safety</h4>
              </div>
              <ul className="mt-2 text-sm text-white/70 space-y-2">
                <li>Checagem de políticas antes de subir</li>
                <li>Blacklist/whitelist por nicho</li>
                <li>Auditoria trimestral da conta</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a
              href={wa(
                "Quero o pacote Elite de Ads (mensuração, UGC e landing)"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-cta="whatsapp"
              data-label="Serviços - Ads - Elite Suite"
            >
              🔥 Quero o Elite Suite
            </a>
          </div>
        </div>
      </section>

      {/* AJUDA A ESCOLHER O PLANO */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 pt-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Qual plano é pra mim?
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <p className="text-sm text-white/80">
                  <b>{p.name}:</b> {p.fit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="bg-bg scroll-mt-24">
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Planos
          </p>
          <h3 className="mt-1 font-display text-xl">
            Escolha seu nível de crescimento
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            {plans.map((p) => {
              const isPopular = p.name === "Crescimento";
              return (
                <div
                  key={p.name}
                  className={`relative rounded-xl border border-white/10 bg-black/40 p-6 ${
                    isPopular ? "ring-1 ring-accent/40" : ""
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-4 rounded-md bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-[#0B0F14]">
                      Mais escolhido
                    </span>
                  )}

                  <h4 className="font-medium">{p.name}</h4>
                  <p className="mt-1 text-sm text-muted">{p.desc}</p>

                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-px w-3 bg-accent/90" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={wa(`Quero o plano ${p.name} de Ads da Yamaji Studio`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-4 w-full justify-center ${
                      isPopular ? "btn-primary" : "btn-secondary"
                    }`}
                    data-cta="whatsapp"
                    data-label={`Serviços - Ads - Plano ${p.name}`}
                  >
                    {isPopular ? "Começar agora" : `Escolher plano ${p.name}`}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SLA & GARANTIAS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            SLA & Garantias
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">Kickoff em 72h</h4>
              <p className="mt-1 text-sm text-white/70">
                Medição, base de dados, 1º criativo e checklist da landing.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">SLA de atendimento</h4>
              <p className="mt-1 text-sm text-white/70">
                Resposta em até <b>2 min</b> no horário comercial.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">Garantia simples</h4>
              <p className="mt-1 text-sm text-white/70">
                Se com orçamento combinado e landing aprovada não batermos{" "}
                <b>X leads qualificados</b> em 30 dias, replanejamos e
                executamos o mês seguinte sem custo extra de otimização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP 90 DIAS */}
      <section className="bg-black/30 border-t border-white/10">
        <div className="mx-auto max-w-container px-6 py-12">
          <p className="text-accent uppercase text-xs tracking-widest">
            Roadmap (90 dias)
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">Dias 0–7 • Começo rápido</h4>
              <p className="text-sm text-white/70">
                CAPI s/s, UTMs, baseline, 1º criativo e ajustes na landing.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">Dias 8–30 • Validar</h4>
              <p className="text-sm text-white/70">
                Testes A/B, cortes do que não vende e meta de CPL/CPA.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-medium">Dias 31–90 • Escalar</h4>
              <p className="text-sm text-white/70">
                Novos canais, sazonal, remarketing forte e previsibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-bg scroll-mt-24">
        <div className="mx-auto max-w-container px-6 py-16">
          <p className="text-accent uppercase text-xs tracking-widest">
            Perguntas frequentes
          </p>
          <h3 className="mt-1 font-display text-xl">Tudo sobre tráfego pago</h3>

          <div className="divide-y divide-white/10 rounded-xl border border-white/10 mt-4">
            {faq.map((f, i) => (
              <details
                key={f.q}
                className={`p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="cursor-pointer font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md">
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
                mainEntity: faq.map((it) => ({
                  "@type": "Question",
                  name: it.q,
                  acceptedAnswer: { "@type": "Answer", text: it.a },
                })),
              }),
            }}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa("Quero acelerar meus anúncios com a Yamaji Studio")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              data-cta="whatsapp"
              data-label="Serviços - Ads - FAQ"
            >
              ⚡ Falar no WhatsApp
            </a>
            <a
              href="/#cases"
              className="btn btn-ghost"
              aria-label="Ver cases reais"
            >
              Ver cases
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black/40 border-t border-white/10 py-12 text-center">
        <h3 className="font-display text-2xl sm:text-3xl">
          Bora transformar <span className="text-accent">cliques</span> em{" "}
          <span className="text-accent2">clientes</span>?
        </h3>
        <p className="mt-2 text-muted">
          Sem complicação. Anúncio certo, página rápida e otimização toda semana
          pra vender de verdade.
        </p>
        <a
          href={wa("Quero transformar cliques em clientes com a Yamaji Studio")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
          data-cta="whatsapp"
          data-label="Serviços - Ads - CTA Final"
        >
          🚀 Falar no WhatsApp agora
        </a>
      </section>

      {/* CTA FLUTUANTE WHATSAPP (flat) */}
      <a
        href={wa(
          "Oi! Quero entender como a Yamaji pode trazer clientes pelo Whats."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com especialista no WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-[#0B0F14] shadow-lg ring-1 ring-black/10 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold">Falar no Whats</span>
      </a>

      {/* VOLTAR AO TOPO (acessibilidade) */}
      <a
        href="#"
        className="sr-only focus:not-sr-only fixed bottom-4 left-4 z-40 rounded-md border border-white/10 bg-black/60 px-3 py-2 text-xs text-white/80 backdrop-blur hover:bg-black/70"
      >
        Voltar ao topo
      </a>
    </main>
  );
}
