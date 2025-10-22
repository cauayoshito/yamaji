// app/sobre/page.tsx
import Header from "@/components/Header";
import Link from "next/link";
import StickyWhats from "@/components/StickyWhats";
import AnchorNav from "@/components/AnchorNav";
import {
  Sparkles,
  Target,
  Handshake,
  Gauge,
  Rocket,
  Heart,
  Users2,
  Shield,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

/* -------------------------------------------
   🔗 WhatsApp helper centralizado (UTMs fixas)
------------------------------------------- */
const WHATS = {
  phone: "5571992258349",
  base: "https://wa.me",
  utm: "utm_source=site&utm_medium=servico&utm_campaign=sobre",
};
const wa = (text: string) =>
  `${WHATS.base}/${WHATS.phone}?text=${encodeURIComponent(text)}&${WHATS.utm}`;

// ===== META
export const metadata = {
  title: "Sobre a Yamaji Studio",
  description:
    "Studio de performance liderado por Cauã Yamaji. Tráfego, criativos, landing rápida e automações de IA — com foco em gerar clientes (não só cliques).",
};

/* -------------------------
   🧭 Âncoras da página
-------------------------- */
// troquei “Equipe” por “Como opero”
const anchors = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#valores", label: "Valores" },
  { href: "#metodo", label: "Nosso método" },
  { href: "#linha-do-tempo", label: "Linha do tempo" },
  { href: "#como-opero", label: "Como opero" },
  { href: "#faq", label: "FAQ" },
];

/* -------------------------
   🧠 HERO
-------------------------- */
function HeroSobre() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Glows discretos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-[25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[80px] opacity-70 md:opacity-100" />
        <div className="absolute -right-[10%] -bottom-[15%] h-[420px] w-[420px] rounded-full bg-accent2/20 blur-[80px] opacity-70 md:opacity-100" />
      </div>

      <div className="relative mx-auto max-w-container px-6 pt-24 pb-12 text-center md:pt-28">
        <span className="badge uppercase tracking-wide text-[12px]">
          quem somos • cultura • método
        </span>

        <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
          Yamaji Studio <span className="text-accent">operação sênior</span> pra
          transformar cliques em clientes.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
          Estratégia simples, criativos que vendem, landing rápida e automações
          de follow-up. Menos complexidade, mais vendas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={wa(
              "Quero entender se a Yamaji é o estúdio certo para meu negócio"
            )}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            data-cta="whatsapp"
            data-label="Sobre - Hero - Conversar"
          >
            💬 Conversar agora
          </Link>
          <a
            href="#metodo"
            className="btn btn-ghost"
            aria-label="Ver como trabalhamos"
          >
            Ver como trabalhamos
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------
   🧩 Conteúdo
-------------------------- */
const valores = [
  {
    icon: Target,
    title: "Clareza acima de tudo",
    desc: "Objetivo, proposta e métricas que importam. Sem fumaça.",
  },
  {
    icon: Gauge,
    title: "Velocidade com qualidade",
    desc: "Executar rápido, medir melhor e iterar toda semana.",
  },
  {
    icon: Handshake,
    title: "Parceria de verdade",
    desc: "Sucesso compartilhado: eu só ganho se você ganhar.",
  },
  {
    icon: Shield,
    title: "Brand-safety sempre",
    desc: "Políticas, integridade e respeito pelo seu cliente.",
  },
  {
    icon: Sparkles,
    title: "Criativo que explica e vende",
    desc: "Mensagens simples, UGC genuíno e proposta irresistível.",
  },
  {
    icon: Heart,
    title: "Jogo de longo prazo",
    desc: "Construir consistência e previsibilidade de vendas.",
  },
];

const passos = [
  {
    icon: Target,
    title: "Diagnóstico",
    desc: "Entendo oferta, público e funil atual. Defino meta de CPL/CPA.",
  },
  {
    icon: Sparkles,
    title: "Criativos + Landing",
    desc: "Mensagens que destravam clique e página rápida que converte.",
  },
  {
    icon: Rocket,
    title: "Tráfego sob método",
    desc: "Campanhas Meta/Google com testes A/B e corte rápido.",
  },
  {
    icon: Users2,
    title: "IA no Whats + Follow-up",
    desc: "Resposta em segundos, lembretes e propostas automáticas.",
  },
  {
    icon: Trophy,
    title: "Relatório e escala",
    desc: "O que funcionou, próximos testes e plano de escala.",
  },
];

// ✔️ Linha do tempo revisada e realista (ajuste anos se preferir)
const timeline = [
  {
    ano: "2021",
    titulo: "Início",
    desc: "Primeiros projetos de tráfego e páginas de alta conversão.",
  },
  {
    ano: "2022",
    titulo: "Primeiros cases",
    desc: "Playbook validado com negócios locais e infonegócios.",
  },
  {
    ano: "2023",
    titulo: "Nasce Yamaji Studio",
    desc: "Produto: tráfego + criativos + landing rápida + UTMs.",
  },
  {
    ano: "2024",
    titulo: "Playbook consolidado",
    desc: "Rotina de testes e dashboards simples orientando decisões.",
  },
  {
    ano: "2025",
    titulo: "Hoje: IA & previsibilidade",
    desc: "Automação no Whats, qualificação e follow-up nativos.",
  },
];

// nova seção “Como opero” em vez de “Equipe”
const comoOpero = [
  {
    title: "Operação solo sênior",
    desc: "Você fala direto comigo (Cauã). Sem camadas, sem espera. Execução rápida e mão-na-massa.",
  },
  {
    title: "Transparência total",
    desc: "Relatórios claros, UTMs certinhas e checklist de qualidade visível. O que está vendendo e o que será testado.",
  },
  {
    title: "Parceiros sob demanda",
    desc: "Quando necessário, conecto especialistas de confiança (Motion/UGC, Dev/Landing, Dados/BI). Você aprova antes.",
  },
];

/* =========================
   📄 PÁGINA
========================= */
export default function SobrePage() {
  return (
    <main className="bg-bg text-fg">
      {/* HEADER (local) — remova se o layout global já renderiza */}
      <Header />

      {/* HERO */}
      <HeroSobre />

      {/* MINI-NAV ÂNCORA */}
      <AnchorNav items={anchors} />

      {/* MANIFESTO */}
      <section id="manifesto" className="bg-bg">
        <div className="mx-auto max-w-container px-6 py-10">
          <div className="rounded-xl bg-black/30 p-6">
            <h2 className="font-display text-xl">Nosso manifesto</h2>
            <p className="mt-3 text-white/80">
              Pequenas empresas podem vender como grandes marcas com método.
              Nada de complicar: mensagem clara, oferta honesta, página rápida,
              rastreio certinho e otimização constante. Bonito é vender.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={wa("Quero um diagnóstico rápido do meu funil")}
                className="btn btn-primary"
                target="_blank"
                rel="noopener"
              >
                ⚡ Diagnosticar meu funil
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
        </div>
      </section>

      {/* VALORES */}
      <section id="valores" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-6">
          <p className="text-accent uppercase text-xs tracking-widest">
            O que guia as decisões
          </p>
          <h2 className="mt-1 font-display text-xl">
            Valores que viram resultado
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v) => (
              <div key={v.title} className="rounded-xl bg-black/30 p-5">
                <div className="flex items-center gap-2">
                  <v.icon className="h-4 w-4 text-accent2" />
                  <h3 className="font-medium">{v.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-6">
          <p className="text-accent uppercase text-xs tracking-widest">
            Como trabalho
          </p>
          <h2 className="mt-1 font-display text-xl">O método Yamaji</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {passos.map((p) => (
              <div key={p.title} className="rounded-xl bg-black/30 p-5">
                <div className="flex items-center gap-2">
                  <p.icon className="h-4 w-4 text-accent2" />
                  <h3 className="font-medium">{p.title}</h3>
                </div>
                <p className="mt-2 text-sm text-white/80">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm text-white/80">
              Resultado = <b>Oferta clara</b> × <b>Criativos</b> ×{" "}
              <b>Landing rápida</b> × <b>Tráfego sob método</b> ×{" "}
              <b>IA & follow-up</b>. Se um fator zera, o resultado cai.
            </p>
          </div>
        </div>
      </section>

      {/* LINHA DO TEMPO (corrigida) */}
      <section id="linha-do-tempo" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-6">
          <p className="text-accent uppercase text-xs tracking-widest">
            Nossa jornada
          </p>
          <h2 className="mt-1 font-display text-xl">Linha do tempo</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((t) => (
              <div key={t.ano} className="rounded-xl bg-black/30 p-5">
                <span className="text-accent2 text-xs font-semibold">
                  {t.ano}
                </span>
                <h3 className="mt-1 font-medium">{t.titulo}</h3>
                <p className="mt-1 text-sm text-white/80">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO OPERO (no lugar de equipe) */}
      <section id="como-opero" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-10">
          <p className="text-accent uppercase text-xs tracking-widest">
            Quem faz acontecer
          </p>
          <h2 className="mt-1 font-display text-xl">
            Como opero (e quando aciono parceiros)
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comoOpero.map((c) => (
              <div key={c.title} className="rounded-xl bg-black/30 p-5">
                <h3 className="font-medium">{c.title}</h3>
                <p className="mt-2 text-sm text-white/80">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={wa("Quero falar com o Yamaji sobre meu funil")}
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              🚀 Falar com o Yamaji
            </Link>
            <a href="/#cases" className="btn btn-ghost">
              Ver cases
            </a>
          </div>
        </div>
      </section>

      {/* FAQ (curto) */}
      <section id="faq" className="bg-bg">
        <div className="mx-auto max-w-container px-6 pb-16">
          <p className="text-accent uppercase text-xs tracking-widest">
            Perguntas rápidas
          </p>
          <h2 className="mt-1 font-display text-xl">Sobre a parceria</h2>

          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-white/10">
            {[
              {
                q: "Com quem falo no dia a dia?",
                a: "Direto comigo (Cauã). Respostas rápidas e decisões sem burocracia.",
              },
              {
                q: "E se precisar de mais braços?",
                a: "Ativo parceiros de confiança por projeto (aprovados por você).",
              },
              {
                q: "Como é o começo?",
                a: "Diagnóstico, baseline, criativos e campanha em até 7 dias. Depois, otimizações semanais.",
              },
            ].map((f, i) => (
              <details
                key={f.q}
                className={`group p-5 ${i % 2 ? "bg-black/30" : "bg-black/20"}`}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-md">
                  {f.q}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>

          {/* JSON-LD (Organization) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Yamaji Studio",
                url: "https://www.yamajistudio.com.br",
                sameAs: ["https://www.instagram.com/yamajistudio/"],
                description:
                  "Studio de performance focado em transformar cliques em clientes com tráfego, criativos, landing rápida e automações de IA.",
              }),
            }}
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black/40 border-t border-white/10 py-12 text-center">
        <h2 className="font-display text-2xl md:text-3xl">
          Bora construir previsibilidade de vendas?
        </h2>
        <p className="mt-2 text-muted">
          Eu cuido do funil inteiro você cuida do atendimento e de fechar.
        </p>
        <Link
          href={wa(
            "Quero entender o plano certo para meu negócio com a Yamaji Studio"
          )}
          target="_blank"
          rel="noopener"
          className="btn btn-primary mt-5"
        >
          ✳️ Começar com a Yamaji
        </Link>
      </section>

      {/* Botão Whats fixo */}
      <StickyWhats
        href={wa(
          "Oi! Vim da página Sobre e quero conversar com a Yamaji Studio"
        )}
        label="Falar no WhatsApp"
      />
    </main>
  );
}
