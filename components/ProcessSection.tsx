"use client";

import { motion } from "framer-motion";
import {
  SearchCheck,
  LayoutTemplate,
  Code2,
  Rocket,
  Handshake,
} from "lucide-react";

const steps = [
  {
    title: "1. Diagnóstico Estratégico",
    desc: "Mergulhamos no seu negócio, entendendo metas, público e posicionamento.",
    Icon: SearchCheck,
  },
  {
    title: "2. Arquitetura & Wireframe",
    desc: "Estrutura e fluxos com foco em clareza, usabilidade e conversão.",
    Icon: LayoutTemplate,
  },
  {
    title: "3. Desenvolvimento Profissional",
    desc: "Site rápido, responsivo e SEO-ready com código de alto nível.",
    Icon: Code2,
  },
  {
    title: "4. Lançamento Estratégico",
    desc: "Publicação segura + checklist e monitoramento inicial.",
    Icon: Rocket,
  },
  {
    title: "5. Suporte & Evolução",
    desc: "Acompanhamento, melhorias contínuas e crescimento.",
    Icon: Handshake,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-gradient-to-b from-[#020202] to-[#0B0B0B] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-5xl font-bold mb-12"
        >
          Nosso Processo
        </motion.h2>

        {/* Timeline vertical — mobile / tablet */}
        <ol className="relative border-l border-white/10 lg:hidden">
          {steps.map(({ title, desc, Icon }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="ml-4 mb-8 last:mb-0"
            >
              {/* ponto do timeline */}
              <span className="absolute -left-[6px] mt-2 block h-3 w-3 rounded-full bg-white/25 ring-4 ring-white/5" />
              <div
                className="group rounded-xl border border-white/10 bg-[#101010]/90 p-5
                           hover:bg-white/[0.06] transition
                           shadow-[0_0_0_0_rgba(0,0,0,0)]
                           hover:shadow-[0_0_28px_-8px_rgba(0,255,178,0.25)]
                           backdrop-blur-[2px]"
              >
                <div
                  className="mb-3 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/40 p-2.5
                                group-hover:border-white/20 group-hover:bg-black/30 transition"
                >
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted">{desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Trilho horizontal — desktop */}
        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2">
            <div className="mx-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="absolute -top-3 left-1/2 hidden -translate-x-1/2 lg:block">
                  <span className="block w-2.5 h-2.5 rounded-full bg-white/20 ring-4 ring-white/5" />
                </div>

                <div
                  className="group h-full rounded-xl border border-white/10 bg-[#101010]/90 p-6
                             hover:bg-white/[0.06] transition
                             shadow-[0_0_0_0_rgba(0,0,0,0)]
                             hover:shadow-[0_0_30px_-8px_rgba(0,255,178,0.25)]
                             backdrop-blur-[2px]"
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/40 p-3
                                  group-hover:border-white/20 group-hover:bg-black/30 transition"
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA inline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5571992258349?text=Quero%20come%C3%A7ar%20o%20projeto%20com%20a%20Yamaji%20Studio%20%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-black
                       hover:opacity-90 transition"
          >
            Vamos tirar do papel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
