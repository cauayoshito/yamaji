import Image from "next/image";
import Link from "next/link";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";
import MetricChip from "@/components/ui/MetricChip";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";
import TestimonialsCarousel from "@/components/site/TestimonialsCarousel";
import { cases } from "@/data/cases";
import { solutions } from "@/data/solutions";

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-black text-white px-4 py-2 rounded"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      <main
        id="conteudo"
        className="bg-bg text-fg [--header-h:56px] md:[--header-h:72px]"
      >
        {/* HERO */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[#0A0A0B] pb-28 pt-24 md:pb-40 md:pt-32"
        >
          <BackgroundGlow />
          <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <Badge className="border-accent/20 bg-accent/10 text-accent">
                Yamaji Studio • Estratégia + Produto + Growth
              </Badge>
              <div>
                <h1 className="h1">
                  <span className="block">
                    Transformamos sua presença digital
                  </span>
                  <span className="block">com websites, ads e IA</span>
                </h1>
                <p className="lead">
                  Criamos sistemas, automações e experiências digitais com
                  linguagem editorial, performance e inteligência de dados —
                  tudo conectado à sua operação real.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <PrimaryButton href="/contato" label="Agende uma consultoria" />
                <SecondaryButton href="/#solucoes" label="Ver soluções" />
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-muted">
                {["Sem compromisso", "Resposta rápida", "Plano estruturado"].map(
                  (item) => (
                    <Badge key={item}>{item}</Badge>
                  )
                )}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 -z-10 rounded-full bg-accent/25 blur-[120px]" />
              <GlassCard className="relative overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/20" />
                <div className="relative p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <IconBadge className="h-8 w-8 text-accent">01</IconBadge>
                    Painel estratégico (placeholder)
                  </div>
                  <Image
                    src="/placeholders/dashboard.svg"
                    alt="Placeholder de dashboard premium"
                    width={520}
                    height={360}
                    className="mt-6 w-full rounded-2xl border border-white/10"
                    priority
                  />
                </div>
              </GlassCard>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <GlassCard className="w-48 animate-yamajiFloat">
                  <p className="text-xs text-muted">Ativos conectados</p>
                  <p className="mt-2 text-lg font-semibold">+27%</p>
                </GlassCard>
              </div>
              <div className="absolute -right-6 top-10 hidden md:block">
                <GlassCard className="w-44 animate-yamajiDrift">
                  <p className="text-xs text-muted">Conversão</p>
                  <p className="mt-2 text-lg font-semibold">3.4x</p>
                </GlassCard>
              </div>
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* TRUST STRIP */}
        <section className="border-y border-white/5 bg-[#0B0F14] py-6">
          <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-muted">
              Projetos entregues para negócios em crescimento e operação
              complexa.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted">
              <span>Health</span>
              <span>Fintech</span>
              <span>Retail</span>
              <span>Educação</span>
              <span>Hospitalidade</span>
            </div>
          </Container>
        </section>

        {/* SOLUÇÕES */}
        <section
          id="solucoes"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Soluções"
              title="Quatro pilares para operar como empresa tech"
              description="Estruturamos a presença digital com visão de produto, automação e dados."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution, index) => (
                <GlassCard
                  key={solution.slug}
                  className={`flex h-full flex-col gap-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50 ${
                    index % 2 === 0 ? "mt-6" : "-mt-4"
                  }`}
                >
                  <IconBadge>{String(index + 1).padStart(2, "0")}</IconBadge>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">{solution.title}</h3>
                    <p className="text-sm text-muted">{solution.subtitle}</p>
                    <ul className="space-y-2 text-sm text-muted">
                      {solution.bullets.map((item) => (
                        <li key={item}>{item}.</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/solucoes/${solution.slug}`}
                    className="mt-auto text-sm font-semibold text-accent"
                  >
                    Saiba mais →
                  </Link>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* SISTEMAS */}
        <section
          id="sistemas"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0A0A0B]"
        >
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Sistemas"
                title="Sistemas que organizam operação e escalam resultados"
                description="Plataformas sob medida para centralizar dados, automatizar rotinas e dar clareza ao time."
                titleClassName="text-4xl md:text-6xl"
              />
              <ul className="space-y-3 text-sm text-muted">
                {[
                  "Painel de leads e pipeline unificado",
                  "Automações de atendimento e follow-up",
                  "Relatórios e indicadores em tempo real",
                  "Gestão de usuários e permissões",
                ].map((item) => (
                  <li key={item}>{item}.</li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[120px]" />
              <GlassCard className="relative overflow-hidden p-0">
                <Image
                  src="/placeholders/system-panel.svg"
                  alt="Placeholder de dashboard premium"
                  width={704}
                  height={462}
                  className="h-full w-full scale-[1.1]"
                />
              </GlassCard>
              <GlassCard className="absolute -top-6 left-6 hidden w-44 animate-yamajiFloat text-sm text-muted lg:block">
                Fluxos conectados
                <div className="mt-3 text-lg font-semibold text-fg">+12</div>
              </GlassCard>
              <GlassCard className="absolute -bottom-6 right-10 hidden w-48 animate-yamajiDrift text-sm text-muted lg:block">
                Tempo operacional
                <div className="mt-3 text-lg font-semibold text-fg">-35%</div>
              </GlassCard>
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        <section className="section bg-[#0B0F14]">
          <Container>
            <SectionHeader
              eyebrow="Valor"
              title="O que você ganha ao operar como empresa tech"
              description="Resultados que aparecem na rotina, no controle e na velocidade de decisão."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {["Produtividade", "Controle", "Escala"].map((item) => (
                <GlassCard key={item} className="min-h-[180px]">
                  <h3 className="text-2xl font-semibold">{item}</h3>
                  <p className="mt-4 text-sm text-muted">
                    Mais clareza operacional com dados e processos integrados.
                  </p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* PROCESSO */}
        <section
          id="processo"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Processo"
              title="Um método claro para decisões rápidas"
              description="Um fluxo editorial que conecta estratégia, execução e resultado."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-[auto_1fr]">
              <div className="hidden w-10 items-start justify-center lg:flex">
                <div className="h-full w-px bg-gradient-to-b from-white/5 via-accent/50 to-white/5" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Descoberta",
                    text: "Mapeamos operação, metas e gaps de dados.",
                  },
                  {
                    title: "Estilo",
                    text: "Construímos linguagem visual e narrativa premium.",
                  },
                  {
                    title: "Execução",
                    text: "Entrega modular com squads dedicados.",
                  },
                  {
                    title: "Resultados",
                    text: "Monitoramento contínuo e otimizações estratégicas.",
                  },
                ].map((step, index) => (
                  <GlassCard key={step.title} className="relative">
                    <span className="absolute -top-3 left-6 rounded-full border border-white/20 bg-bg px-3 py-1 text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-3 text-sm text-muted">{step.text}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* CASES */}
        <section id="cases" className="section bg-[#0A0A0B]">
          <Container>
            <SectionHeader
              eyebrow="Cases"
              title="Projetos que combinam visão de produto e performance"
              description="Seis histórias reais (placeholders) com métricas e soluções aplicadas."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((item) => (
                <Link
                  key={item.slug}
                  href={`/cases/${item.slug}`}
                  className="group block"
                >
                  <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/50">
                    <div className="relative h-[320px] w-full">
                      <Image
                        src={item.cover}
                        alt={`Case ${item.title}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 space-y-2 p-6">
                        <div className="text-xs uppercase tracking-[0.2em] text-muted">
                          {item.type} • {item.segment}
                        </div>
                        <h3 className="text-lg font-semibold text-fg">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted">{item.summary}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.metrics.slice(0, 2).map((metric) => (
                            <MetricChip key={metric}>{metric}</MetricChip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* COMPARATIVO */}
        <section
          id="comparativo"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0B0F14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Comparativo"
              title="Como comparamos"
              description="Diferenças claras entre um site comum e uma estrutura Yamaji."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/5">
              <div className="grid grid-cols-3 bg-white/5 text-xs uppercase tracking-[0.2em] text-muted">
                <div className="p-6">Itens</div>
                <div className="p-6">Site comum</div>
                <div className="p-6">Yamaji Studio</div>
              </div>
              {[
                "Estratégia e posicionamento",
                "Design editorial premium",
                "Performance e SEO técnico",
                "Tracking e dados first-party",
                "Automação e integrações",
                "Suporte e evolução contínua",
              ].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-3 border-t border-white/5 text-sm text-muted"
                >
                  <div className="p-6 text-fg">{item}</div>
                  <div className="p-6">Pontual / superficial</div>
                  <div className="p-6 text-fg">Estruturado e estratégico</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* DEPOIMENTOS */}
        <section
          id="depoimentos"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Depoimentos"
              title="Empresas que decidiram operar como tech"
              description="Experiências reais com foco em operação e crescimento."
            />
            <div className="mt-12">
              <TestimonialsCarousel />
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* CTA FINAL */}
        <section id="cta" className="pb-24 bg-[#0A0A0B]">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 md:p-16">
              <BackgroundGlow />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Pronto para juntar as ideias?
                </h2>
                <p className="text-sm text-muted md:text-lg">
                  Vamos desenhar uma estrutura digital que funcione como um
                  produto — com performance, dados e automação.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href="/contato" label="Agende uma consultoria" />
                  <SecondaryButton
                    href="https://wa.me/5571992358249"
                    label="WhatsApp"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
