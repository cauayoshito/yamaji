"use client";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FFB2]/10 to-[#0066FF]/10 blur-3xl opacity-20 pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Pronto pra elevar sua presença digital?
        </h2>
        <p className="text-muted mb-8">
          Vamos construir juntos um site que não só impressiona, mas também
          converte.
        </p>
        <a
          href="#contato"
          className="inline-block bg-white text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Falar com a Yamaji Studio →
        </a>
      </div>
    </section>
  );
}
