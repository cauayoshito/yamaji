"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  PenTool,
  BarChart3,
  ShoppingCart,
  Brush,
  Megaphone,
} from "lucide-react";

const services = [
  {
    title: "Web Design & Dev",
    description: "Sites rápidos, bonitos e responsivos que convertem.",
    icon: <Monitor className="w-10 h-10 text-accent" />,
  },
  {
    title: "Identidade Visual",
    description: "Logos, paleta e fontes com personalidade e coerência.",
    icon: <Brush className="w-10 h-10 text-accent" />,
  },
  {
    title: "SEO & Conteúdo",
    description: "Melhore seu posicionamento no Google com estratégia.",
    icon: <BarChart3 className="w-10 h-10 text-accent" />,
  },
  {
    title: "E-commerce",
    description: "Lojas virtuais com foco em conversão e performance.",
    icon: <ShoppingCart className="w-10 h-10 text-accent" />,
  },
  {
    title: "Design Estratégico",
    description: "Criações visuais alinhadas ao seu propósito.",
    icon: <PenTool className="w-10 h-10 text-accent" />,
  },
  {
    title: "Tráfego Pago",
    description: "Campanhas de anúncio com foco em resultado.",
    icon: <Megaphone className="w-10 h-10 text-accent" />,
  },
];

export default function FullServices() {
  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#020202] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#101010] border border-white/10 rounded-xl p-6 hover:bg-white/5 transition"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
