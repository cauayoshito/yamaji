"use client";

import { motion } from "framer-motion";
import {
  SearchCheck,
  LayoutTemplate,
  Code2,
  Rocket,
  Handshake,
} from "lucide-react";

const process = [
  {
    title: "1. Diagnóstico Estratégico",
    description:
      "Mergulhamos no seu negócio, entendendo metas, público e posicionamento.",
    icon: <SearchCheck className="w-10 h-10 text-accent" />,
  },
  {
    title: "2. Arquitetura & Wireframe",
    description:
      "Criamos a estrutura visual com foco em clareza, conversão e usabilidade.",
    icon: <LayoutTemplate className="w-10 h-10 text-accent" />,
  },
  {
    title: "3. Desenvolvimento Profissional",
    description:
      "Sites rápidos, responsivos e otimizados para SEO, com design de alto nível.",
    icon: <Code2 className="w-10 h-10 text-accent" />,
  },
  {
    title: "4. Lançamento Estratégico",
    description:
      "Publicamos com segurança e te entregamos tudo pronto para divulgar.",
    icon: <Rocket className="w-10 h-10 text-accent" />,
  },
  {
    title: "5. Suporte & Evolução",
    description:
      "Acompanhamos após o lançamento para ajustes, melhorias e crescimento.",
    icon: <Handshake className="w-10 h-10 text-accent" />,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-b from-[#020202] to-[#0B0B0B] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Nosso Processo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#101010] border border-white/10 rounded-xl p-6 hover:bg-white/5 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
