"use client";

import { motion } from "framer-motion";
import HoverCard from "@/components/HoverCard";

const testimonials = [
  {
    name: "Dieisson Vasques",
    role: "Personal Trainer",
    text: "Processo objetivo e entrega acima do esperado. Meu site virou meu melhor vendedor.",
  },
  {
    name: "Robert",
    role: "Personal Trainer",
    text: "Layout limpo, rápido e com ótima conversão no WhatsApp. Ficou muito profissional.",
  },
  {
    name: "Paulo",
    role: "AniPet",
    text: "Organizamos catálogo, carrinho e checkout. A experiência ficou muito mais fluida.",
  },
  {
    name: "Ricardo",
    role: "Proprium Investimentos",
    text: "Clareza na proposta de valor e credibilidade no design. Ajudou na geração de leads.",
  },
  {
    name: "Juliana",
    role: "Trevo Modas",
    text: "Visual alinhado à marca e navegação intuitiva. Clientes elogiam direto.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#020202] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <HoverCard>
                <p className="italic text-slate-300 mb-4 leading-relaxed">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
