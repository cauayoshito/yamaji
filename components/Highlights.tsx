"use client";

import { Trophy, Zap, Headphones, Target } from "lucide-react";
import HoverCard from "./HoverCard"; // importa o componente

const items = [
  {
    title: "Resultados Reais",
    desc: "Sites que vendem: foco em conversão, não só estética.",
    Icon: Target,
  },
  {
    title: "Método Próprio",
    desc: "Estratégia validada: identidade + UX + SEO + performance.",
    Icon: Trophy,
  },
  {
    title: "Suporte Humano",
    desc: "Você fala direto comigo. Sem robô, sem burocracia.",
    Icon: Headphones,
  },
  {
    title: "Entrega Ágil",
    desc: "Projeto no ar em poucos dias, com checklist completo.",
    Icon: Zap,
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-bg">
      {/* glow sutil de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-container px-6 py-16">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] uppercase tracking-wide text-muted">
            Por que a Yamaji?
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl text-fg">
            Diferenciais que fazem a diferença
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Não é só “fazer site”. É posicionar sua marca para atrair e
            converter clientes.
          </p>
        </div>

        {/* cards com HoverCard */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <HoverCard key={title}>
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-fg">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>

        {/* mini-badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            Lighthouse 90+ (performance)
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent2 shadow-[0_0_10px_#4A90E2]" />
            SEO técnico com JSON-LD
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_#00FFA3]" />
            Suporte humano real
          </span>
        </div>
      </div>
    </section>
  );
}
