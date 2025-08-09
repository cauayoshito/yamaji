"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MotionConfig,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback } from "react";

function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // tilt 3D baseado no mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      x.set((px - 0.5) * 100);
      y.set((py - 0.5) * 100);
    },
    [x, y]
  );

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className={`relative rounded-2xl border border-white/10 bg-[rgb(3,14,24)]/70 p-6 will-change-transform ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* brilho suave que segue o mouse */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
      />
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <MotionConfig transition={{ duration: 0.6, ease: "easeOut" }}>
        <main className="bg-gradient-to-b from-[#0B0B0B] via-black to-[#131313] text-white">
          {/* HERO */}
          <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold max-w-4xl leading-tight mb-4"
            >
              Sobre a Yamaji Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-slate-300 max-w-2xl"
            >
              Design estratégico + performance. Criamos sites e marcas que
              impressionam, conectam e geram resultado.
            </motion.p>
          </section>

          {/* QUEM SOMOS (texto + cards de métricas) */}
          <section className="max-w-6xl mx-auto px-6 pb-8 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="leading-relaxed text-slate-300 text-base md:text-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Quem somos</h2>
              <p className="mb-4">
                Somos um estúdio enxuto, focado em{" "}
                <strong>web design, front-end e SEO</strong>. Da pesquisa à
                publicação, cuidamos de cada etapa para entregar experiências
                rápidas, responsivas e vendedoras.
              </p>
              <p>
                Nosso processo combina direção de arte, copy e engenharia de
                performance. Resultado: páginas que brilham no visual — e no
                Google.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {[
                { kpi: "90+", label: "páginas otimizadas" },
                { kpi: "1.5s", label: "LCP médio em produção" },
                { kpi: "↑ SEO", label: "ganho consistente de posições" },
              ].map((m, i) => (
                <HoverCard key={i} className="p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-accent">
                      {m.kpi}
                    </span>
                    <span className="text-sm text-slate-300">{m.label}</span>
                  </div>
                </HoverCard>
              ))}
            </div>
          </section>

          {/* VALORES (cards animados) */}
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Nossos valores
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Qualidade",
                    desc: "Figma → código fiel. Acessibilidade, semântica e performance como padrão.",
                  },
                  {
                    title: "Transparência",
                    desc: "Processo claro, prazos realistas e comunicação direta.",
                  },
                  {
                    title: "Resultado",
                    desc: "Decisões guiadas por dados e negócio, não por achismo.",
                  },
                ].map((v, i) => (
                  <HoverCard key={v.title}>
                    <motion.h3
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 }}
                      className="text-xl font-semibold mb-2"
                    >
                      {v.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-sm text-slate-300"
                    >
                      {v.desc}
                    </motion.p>
                  </HoverCard>
                ))}
              </div>
            </div>
          </section>

          {/* METODOLOGIA (cards numerados com micro-anim) */}
          <section className="pb-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Nossa metodologia
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  "Diagnóstico",
                  "Estratégia",
                  "Execução",
                  "Entrega & Suporte",
                ].map((step, i) => (
                  <HoverCard key={step} className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent font-bold"
                    >
                      {i + 1}
                    </motion.div>
                    <p className="font-medium">{step}</p>
                  </HoverCard>
                ))}
              </div>
            </div>
          </section>
        </main>
      </MotionConfig>
      <Footer />
    </>
  );
}
