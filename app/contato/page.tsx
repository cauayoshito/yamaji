import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import SectionHeader from "@/components/ui/SectionHeader";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Yamaji Studio e agende uma consultoria sobre sistemas, automações e presença digital.",
};

export default function ContatoPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="section">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Contato"
                title="Vamos desenhar sua estrutura digital"
                description="Conte sobre seu momento e vamos estruturar o próximo passo."
              />
              <p className="text-sm text-muted md:text-base">
                Respondemos em até 24h com um diagnóstico inicial e próximos
                passos claros.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="https://wa.me/5571992358249" label="WhatsApp" />
                <SecondaryButton href="/cases" label="Ver cases" />
              </div>
            </div>
            <GlassCard>
              <form className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
                    placeholder="voce@empresa.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted">
                    O que você precisa?
                  </label>
                  <textarea
                    className="mt-2 min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-fg focus:border-accent/60 focus:outline-none"
                    placeholder="Descreva o projeto"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center"
                >
                  Enviar solicitação
                </button>
              </form>
            </GlassCard>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
