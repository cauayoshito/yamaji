"use client";

import { motion } from "framer-motion";
import HoverCard from "@/components/HoverCard";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* glow de fundo bem suave */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00FFB2]/10 via-[#0066FF]/10 to-transparent blur-3xl"
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <HoverCard className="p-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto pra elevar sua presença digital?
          </h2>
          <p className="text-muted mb-8">
            Vamos construir um site que impressiona, carrega rápido e converte
            de verdade.
          </p>
          <a
            href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Quero%20conversar%20sobre%20um%20site%20com%20a%20Yamaji%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Falar com a Yamaji Studio
            <ArrowRight className="w-4 h-4" />
          </a>
        </HoverCard>
      </div>
    </section>
  );
}
