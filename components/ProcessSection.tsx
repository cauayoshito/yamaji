import {
  ClipboardList,
  GitBranch,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    title: "Diagnóstico",
    desc: "Entrevista, auditoria de site e presença digital.",
    Icon: ClipboardList,
  },
  {
    title: "Estratégia",
    desc: "Posicionamento, tom de marca e arquitetura do site.",
    Icon: GitBranch,
  },
  {
    title: "Execução",
    desc: "UI/UX, copy, SEO técnico, performance e acessibilidade.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Crescimento",
    desc: "Publicação, analytics, testes A/B e otimizações.",
    Icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="bg-bg">
      <div className="mx-auto max-w-container px-6 py-16">
        <h2 className="text-center font-display text-3xl md:text-4xl text-fg">
          Nosso Processo
        </h2>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* glow de fundo sutil */}
          <div
            aria-hidden
            className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
          />
          {steps.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-card p-6 transition hover:border-accent/60 hover:shadow-[0_0_24px_rgba(0,255,163,0.18)]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-fg">{title}</h3>
                  <p className="mt-1 text-sm text-muted">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contato"
            className="rounded-xl bg-gradient-to-r from-accent to-accent2 px-7 py-3 font-semibold text-black shadow-lg shadow-accent/30 transition hover:scale-105 hover:shadow-[0_0_28px_rgba(0,255,163,0.85)]"
          >
            Vamos tirar do papel
          </a>
        </div>
      </div>
    </section>
  );
}
