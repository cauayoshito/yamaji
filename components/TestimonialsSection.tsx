"use client";
import { motion } from "framer-motion";

type T = { nome: string; cargo?: string; depo: string };

const depoimentos: T[] = [
  {
    nome: "Dieisson Vasques",
    cargo: "Personal Trainer",
    depo: "Entrega acima do esperado. Meu site virou meu melhor vendedor.",
  },
  {
    nome: "Robert Emanuel",
    cargo: "Personal Trainer",
    depo: "Layout rápido e conversão no WhatsApp aumentou muito.",
  },
  {
    nome: "Paulo",
    cargo: "AniFit",
    depo: "Organizamos catálogo, carrinho e checkout. A experiência ficou muito melhor.",
  },
  {
    nome: "Juliana",
    cargo: "Trevo Modas",
    depo: "Visual afinado à marca e navegação intuitiva. Clientes elogiam direto.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="cases" className="relative bg-bg">
      <div className="mx-auto max-w-container px-6 py-20">
        <h2 className="text-center font-display text-3xl md:text-4xl text-fg">
          O que nossos clientes dizem
        </h2>

        <div className="relative mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* aspas decorativas */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-6 -top-8 select-none font-serif text-8xl text-white/5"
          >
            “
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -bottom-10 select-none font-serif text-8xl text-white/5"
          >
            ”
          </div>

          {depoimentos.map((d, i) => (
            <motion.figure
              key={d.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-shadow hover:shadow-glow"
            >
              {/* halo verde que aparece no hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <blockquote className="leading-relaxed text-white/90">
                “{d.depo}”
              </blockquote>

              <figcaption className="mt-4 flex items-center gap-2 text-sm text-muted">
                {/* ponto com aura visível */}
                <span className="relative inline-flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-accent/40 blur-[3px]" />
                  {/* ↑ aura difusa */}
                  <span className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_4px_#00FFA3]" />
                  {/* ↑ glow forte (raio + spread) */}
                </span>

                <span className="font-semibold text-fg">{d.nome}</span>
                {d.cargo ? <span>• {d.cargo}</span> : null}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* CTA extra */}
        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-block rounded-xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 font-semibold text-black shadow-lg transition hover:scale-105 hover:shadow-[0_0_28px_rgba(0,255,163,0.85)]"
          >
            Quero um site assim
          </a>
        </div>
      </div>
    </section>
  );
}
