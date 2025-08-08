"use client";

import { motion } from "framer-motion";

export default function HeroCase() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#0B0B0B] via-black to-[#131313] text-white relative">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-6"
      >
        Sites que impressionam, conectam e geram resultados reais.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-muted max-w-xl"
      >
        Criamos experiências digitais com design estratégico, performance e
        posicionamento. Sem enrolação.
      </motion.p>
    </section>
  );
}
