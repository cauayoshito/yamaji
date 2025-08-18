// components/CTASection.tsx
import { Mail, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="bg-bg">
      <div className="relative mx-auto max-w-container px-6 py-16">
        {/* glow de fundo */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-card p-8 md:p-10">
          <h2 className="text-center font-display text-2xl md:text-3xl text-fg">
            Pronto pra elevar sua presença digital?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            Vamos construir um site que impressiona, carrega rápido e converte
            de verdade.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/5571992258349"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Falar com a Yamaji Studio
            </a>
            <a
              href="mailto:yamaji.studio@gmail.com"
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Enviar e-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
