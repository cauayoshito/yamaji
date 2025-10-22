// app/servicos/ia-automacao/page.tsx
import Link from "next/link";
import AnchorNav from "@/components/AnchorNav";
import ServiceCard from "@/components/ServiceCard";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import StickyWhats from "@/components/StickyWhats";
import {
  Bot,
  MessageSquare,
  Users,
  ClipboardCheck,
  BarChart3,
  RefreshCcw,
  Zap,
  Star,
  TrendingUp,
  Clock4,
  CircleHelp,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

/* -------------------------------------------
   🔗 WhatsApp helper centralizado (UTMs fixas)
------------------------------------------- */
const WHATS = {
  phone: "5571992258349",
  base: "https://wa.me",
  utm: "utm_source=site&utm_medium=servico&utm_campaign=ia-automacao",
};
const wa = (text: string) =>
  `${WHATS.base}/${WHATS.phone}?text=${encodeURIComponent(text)}&${WHATS.utm}`;

// ===== META
export const metadata = {
  title: "Automação com IA | Yamaji Studio",
  description:
    "IA que responde no WhatsApp, qualifica e faz follow-up automaticamente. Mais leads, menos esforço — integrada ao seu site e anúncios.",
};

/* -------------------------
   🧭 Âncoras da página
-------------------------- */
const anchors = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#blueprints", label: "Blueprints" },
  { href: "#planos", label: "Planos" },
  { href: "#case", label: "Case" },
  { href: "#faq", label: "FAQ" },
];

/* -------------------------
   🧠 HERO
-------------------------- */
function HeroIA() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Glows suaves */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[22%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-container px-4 sm:px-6 pt-24 pb-10 text-center md:pt-28">
        <span className="badge uppercase tracking-wide text-[12px]">
          automação • ia no whatsapp • follow-up
        </span>

        <h1 className="mt-6 font-display leading-tight text-balance text-[clamp(28px,6vw,56px)]">
          Sua equipe <span className="text-accent">24h</span> no WhatsApp.
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-accent2 to-fg bg-clip-text text-transparent">
            Responde, qualifica e faz follow-up automático.
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-[45ch] text-[15px] sm:text-[17px] leading-relaxed text-muted">
          Integra com seu{" "}
          <span className="text-fg">site, formulários e anúncios</span>. Você
          foca em fechar a IA cuida do resto.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={wa(
              "Quero uma IA 24/7 respondendo meus clientes e fazendo follow-up com a Yamaji Studio"
            )}
            target="_blank"
            className="btn btn-primary"
          >
            ⚡ Começar agora
          </Link>
          <a
            href="#planos"
            className="btn btn-ghost"
            aria-label="Ver planos de automação"
          >
            Ver planos
          </a>
        </div>

        {/* Chips roláveis */}
        <div className="mt-6 no-scrollbar flex snap-x snap-mandatory items-center gap-2 overflow-x-auto px-1 text-[12px] text-white/70">
          <span className="snap-start inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            <Star className="h-3.5 w-3.5 text-accent" /> 5,0 • +30 projetos
          </span>
          <span className="snap-start inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            <TrendingUp className="h-3.5 w-3.5 text-accent2" /> +38% no mês 1
            (case)
          </span>
          <span className="snap-start inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            <Clock4 className="h-3.5 w-3.5 text-accent" /> Resp. &lt; 1 min
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   📦 BLUEPRINTS (dados)
-------------------------- */
const groups = [
  {
    title: "Atendimento Inteligente",
    subtitle: "IA sempre online no seu WhatsApp e site.",
    cards: [
      {
        title: "Respostas instantâneas",
        tagline: "Nunca mais perder um lead por demora.",
        Icon: MessageSquare,
        items: [
          "Disponível 24/7",
          "95% respondido até 1 min",
          "Tom de voz treinado",
        ],
      },
      {
        title: "Chatbot personalizado",
        tagline: "Fluxos por etapa para qualificar melhor.",
        Icon: Bot,
        items: [
          "Perguntas-chave",
          "Integração com CRM",
          "Coleta de dados útil",
        ],
      },
      {
        title: "Multi-canais",
        tagline: "Atenda onde seu cliente está.",
        Icon: Users,
        items: ["WhatsApp", "Instagram DM", "Site/Formulário"],
      },
    ],
  },
  {
    title: "Follow-up & Nutrição",
    subtitle: "IA que lembra, cobra e fecha.",
    cards: [
      {
        title: "Sequências automáticas",
        tagline: "1h • 24h • 72h — sem esquecer ninguém.",
        Icon: RefreshCcw,
        items: [
          "Recupera ~30% de leads frios em 72h",
          "Mensagens personalizadas",
          "Objeções tratadas",
        ],
      },
      {
        title: "Propostas instantâneas",
        tagline: "PDF ou mensagem de oferta em 1 clique.",
        Icon: ClipboardCheck,
        items: ["Orçamento rápido", "Modelos por nicho", "Envio automático"],
      },
      {
        title: "Ads → IA plugado",
        tagline: "Lead cai da campanha direto na automação.",
        Icon: Zap,
        items: ["Meta/Google", "Webhook n8n", "Atendimento imediato"],
      },
    ],
  },
  {
    title: "Análise & Relatórios",
    subtitle: "Saiba exatamente o que a IA está gerando.",
    cards: [
      {
        title: "Dashboard em tempo real",
        tagline: "Sem enrolação: o que importa para vender.",
        Icon: BarChart3,
        items: ["Taxa de resposta", "Agendamentos", "Conversões/semana"],
      },
      {
        title: "Feedback contínuo",
        tagline: "IA evolui com cada conversa.",
        Icon: Bot,
        items: ["Scripts refinados", "Melhoria semanal", "Testes de mensagem"],
      },
    ],
  },
];

/* -------------------------
   💼 Planos
-------------------------- */
const plans = [
  {
    name: "Starter Bot",
    desc: "Atendimento 24/7 com fluxos básicos e qualificação leve.",
    fit: "Começar com IA no WhatsApp de forma segura.",
    bullets: [
      "1 canal (WhatsApp)",
      "Fluxos: boas-vindas, qualificação, dúvidas",
      "Integração CRM simples (n8n/Zapier)",
      "Métricas essenciais",
    ],
    badge: "Para começar",
  },
  {
    name: "Comercial Pro",
    desc: "Follow-up que recupera leads e envia propostas automáticas.",
    fit: "Quem já gera leads e quer fechar mais.",
    bullets: [
      "2–3 canais (WA + IG/site)",
      "Sequências 1h/24h/72h",
      "Propostas PDF + templates por nicho",
      "UTMs/GA4 no funil",
      "SLA de otimização semanal",
    ],
    popular: true,
    badge: "Mais escolhido",
  },
  {
    name: "Elite Suite IA",
    desc: "Stack completo: server-side, scoring e playbook de mensagens.",
    fit: "Operação comercial com volume e metas agressivas.",
    bullets: [
      "CAPI/Server + deduplicação",
      "Lead scoring + roteamento",
      "Biblioteca de mensagens campeãs",
      "Relatórios executivos + roadmap",
      "Suporte priorizado",
    ],
    badge: "Máxima performance",
  },
];

/* =========================
   📄 PÁGINA
========================= */
export default function IAPage() {
  return (
    <main className="bg-bg text-fg">
      {/* HERO */}
      <HeroIA />

      {/* NAV DE ÂNCORAS (sticky com offset do header) */}
      <div className="sticky top-14 z-30 border-y border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <AnchorNav items={anchors} />
      </div>

      {/* INTEGRAÇÕES */}
      <div className="py-3 sm:py-6">
        <IntegrationsStrip />
      </div>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="bg-bg">
        <div className="mx-auto max-w-container px-4 sm:px-6 py-8 sm:py-10">
          <div className="mb-3 sm:mb-4">
            <p className="text-accent uppercase text-[11px] sm:text-xs tracking-widest">
              Como funciona
            </p>
            <h3 className="mt-1 font-display text-lg sm:text-xl">
              Playbook em 7 dias — do zero ao follow-up rodando
            </h3>
            <p className="text-[13px] sm:text-sm text-white/70 mt-1">
              Integramos canais, treinamos a IA com seu tom e ativamos
              sequências que recuperam leads.
            </p>
          </div>

          {/* timeline compacta */}
          <div className="rounded-xl border border-white/10 bg-black/30 p-4 space-y-3">
            {[
              ["Dia 0–2", "Conexões (WA/IG/site) + coleta de material"],
              ["Dia 3–5", "Treino de tom, fluxos e sequências 1h/24h/72h"],
              ["Dia 6–7", "Validações • go-live • monitoramento"],
            ].map(([tag, text]) => (
              <div key={tag} className="flex items-center gap-3">
                <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px]">
                  {tag}
                </span>
                <span className="text-sm text-white/80">{text}</span>
              </div>
            ))}
          </div>

          {/* cartões numerados */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: 1,
                t: "Conectar canais",
                b: ["WhatsApp/Instagram/Forms", "UTMs/GA4 alinhadas ao funil"],
              },
              {
                n: 2,
                t: "Treinar a IA",
                b: ["Tom de voz, objeções e ofertas", "Base de FAQs e scripts"],
              },
              {
                n: 3,
                t: "Fluxos de atendimento",
                b: [
                  "Boas-vindas, qualificação, rotas",
                  "Integração com CRM (n8n/Zapier)",
                ],
              },
              {
                n: 4,
                t: "Follow-ups que fecham",
                b: ["Sequências 1h/24h/72h", "Objeções + prova social"],
              },
              {
                n: 5,
                t: "Propostas automáticas",
                b: ["PDF por nicho", "Envio com tags e registro no CRM"],
              },
              {
                n: 6,
                t: "Medição & melhoria",
                b: [
                  "Resp., agendamentos, conversões",
                  "Refino semanal de mensagens",
                ],
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl bg-black/30 p-4 sm:p-5 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent2 text-[#0B0F14] text-xs font-extrabold">
                    {s.n}
                  </span>
                  <h4 className="font-medium text-[15px]">{s.t}</h4>
                </div>
                <ul className="mt-2 space-y-1.5 text-[13px] sm:text-sm text-white/80">
                  {s.b.map((b: string) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent/90" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-4 text-[12px] text-white/60">
            SLA em horário comercial:{" "}
            <span className="text-accent">até 2 min</span>. Otimização:{" "}
            <span className="text-accent2">semanal</span>.
          </p>
        </div>
      </section>

      {/* BLUEPRINTS */}
      <section id="blueprints" className="bg-bg">
        <div className="mx-auto max-w-container px-4 sm:px-6 pb-6">
          {groups.map((g) => (
            <div key={g.title} className="mt-10 scroll-mt-24">
              <div className="mb-4">
                <p className="text-accent uppercase text-xs tracking-widest">
                  {g.title}
                </p>
                <h3 className="mt-1 font-display text-xl">{g.subtitle}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {g.cards.map((c) => (
                  <div
                    key={c.title}
                    className="transition-transform hover:translate-y-[-2px]"
                  >
                    <ServiceCard {...c} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Glossário simples */}
          <details className="group mt-8 rounded-lg bg-black/30 p-4">
            <summary className="flex cursor-pointer items-center gap-2 font-medium">
              <CircleHelp className="h-4 w-4 text-accent" /> Termos em linguagem
              simples
            </summary>
            <ul className="mt-3 grid gap-2 text-sm text-white/80 sm:grid-cols-2">
              <li>
                <b>Lead:</b> contato interessado no seu produto/serviço.
              </li>
              <li>
                <b>Follow-up:</b> lembrar e cobrar o cliente depois do primeiro
                contato.
              </li>
              <li>
                <b>CRM:</b> sistema com os leads e status de cada um.
              </li>
              <li>
                <b>Integração:</b> ligação da IA com WhatsApp, Instagram e site.
              </li>
            </ul>
          </details>
        </div>
      </section>

      {/* PLANOS — carrossel mobile / grid desktop */}
      <section id="planos" className="bg-bg">
        <div className="mx-auto max-w-container px-4 sm:px-6 py-10">
          <p className="text-accent uppercase text-[11px] sm:text-xs tracking-widest">
            Planos
          </p>
          <h3 className="mt-1 font-display text-lg sm:text-xl">
            Escolha seu nível de automação
          </h3>

          <div className="mt-4 lg:grid lg:grid-cols-3 lg:gap-4 no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory">
            {plans.map((p) => {
              const isPopular = (p as any).popular;
              return (
                <div
                  key={p.name}
                  className={`snap-start min-w-[86%] sm:min-w-[70%] lg:min-w-0 rounded-xl border border-white/10 bg-black/40 p-5 lg:p-6 ${
                    isPopular ? "ring-1 ring-accent/40" : ""
                  }`}
                >
                  {p.badge && (
                    <span className="mb-2 inline-block rounded-full bg-accent/90 px-2 py-0.5 text-[10px] font-semibold text-[#0B0F14]">
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

                  <Link
                    href={wa(`Quero o plano ${p.name} de IA`)}
                    target="_blank"
                    className={`btn mt-4 w-full justify-center ${
                      isPopular ? "btn-primary" : "btn-secondary"
                    }`}
                    data-cta="whatsapp"
                    data-label={`Serviços - IA - Plano ${p.name}`}
                  >
                    {isPopular ? "Começar agora" : `Escolher plano ${p.name}`}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASE */}
      <section id="case" className="bg-bg">
        <div className="mx-auto max-w-container px-4 sm:px-6 py-10">
          <div className="rounded-xl bg-black/30 p-6 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-accent uppercase text-xs tracking-widest">
                Case real
              </p>
              <h3 className="mt-1 font-display text-xl">
                Restaurante local → agenda cheia em 14 dias
              </h3>
              <p className="mt-2 max-w-xl text-sm text-muted">
                IA no Whats + qualificação automática + follow-ups 24/7.{" "}
                <span className="text-fg">+38% de pedidos no mês 1</span> e
                resposta média &lt; 1 min.
              </p>
            </div>
            <Link href="/#cases" className="btn btn-primary mt-4 md:mt-0">
              Ver estudo completo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + JSON-LD */}
      <section id="faq" className="bg-bg">
        <div className="mx-auto max-w-container px-4 sm:px-6 py-16">
          <div className="mb-4">
            <p className="text-accent uppercase text-xs tracking-widest">
              Perguntas frequentes
            </p>
            <h3 className="mt-1 font-display text-xl">
              Tudo sobre IA e automação
            </h3>
          </div>

          <div className="divide-y divide-white/10 rounded-xl border border-white/10">
            {[
              {
                q: "A IA substitui meu time?",
                a: "Não. Ela cuida das tarefas repetitivas e da primeira resposta; você foca em fechar negócios.",
              },
              {
                q: "Funciona só no WhatsApp?",
                a: "Não. Integramos com Instagram DM, site, formulários e CRMs via n8n.",
              },
              {
                q: "Precisa de treinamento?",
                a: "Sim. Treinamos com seu tom de voz, scripts e objeções do seu nicho.",
              },
              {
                q: "Quanto tempo para ativar?",
                a: "Em até 7 dias você pode ter a IA respondendo clientes.",
              },
              {
                q: "Como vejo resultados?",
                a: "Relatórios claros com respostas, agendamentos e conversões semanais.",
              },
            ].map((f, i) => (
              <details
                key={f.q}
                className={`p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="cursor-pointer list-none font-medium">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "A IA substitui meu time?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Não. Ela cuida das tarefas repetitivas e da primeira resposta; você foca em fechar negócios.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Funciona só no WhatsApp?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Não. Integramos com Instagram DM, site, formulários e CRMs via n8n.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Precisa de treinamento?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sim. Treinamos com seu tom de voz, scripts e objeções do seu nicho.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quanto tempo para ativar?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Em até 7 dias você pode ter a IA respondendo clientes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Como vejo resultados?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Relatórios claros com respostas, agendamentos e conversões semanais.",
                    },
                  },
                ],
              }),
            }}
          />

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={wa(
                "Quero uma IA 24/7 no meu comercial com a Yamaji Studio"
              )}
              target="_blank"
              className="btn btn-primary"
            >
              💬 Falar no WhatsApp
            </Link>
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
        <h3 className="font-display text-2xl md:text-3xl">
          Quer uma equipe 24/7 trabalhando por você?
        </h3>
        <p className="mt-2 text-muted">
          Atendimento, qualificação e follow-up automáticos — integrados ao seu
          site e aos anúncios.
        </p>
        <Link
          href={wa("Quero implementar IA no meu negócio com a Yamaji Studio")}
          target="_blank"
          className="btn btn-primary mt-5"
        >
          🚀 Começar hoje
        </Link>
      </section>

      {/* Botão Whats (mobile) */}
      <StickyWhats
        href={wa("Quero uma IA 24/7 no meu comercial com a Yamaji Studio")}
        label="Falar no WhatsApp"
      />
    </main>
  );
}
