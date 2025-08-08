"use client";

export default function ComparisonTable() {
  return (
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Yamaji Studio vs Sites Genéricos
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-white/10 text-sm md:text-base">
            <thead>
              <tr className="bg-white/5">
                <th className="px-6 py-4">Recursos</th>
                <th className="px-6 py-4 text-green-400">Yamaji Studio</th>
                <th className="px-6 py-4 text-red-400">Genéricos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ["Design exclusivo e sob medida", "✔️", "❌"],
                ["Estratégia de conversão", "✔️", "❌"],
                ["Otimização para SEO", "✔️", "❌"],
                ["Suporte humano real", "✔️", "❌"],
                ["Sites mobile-first", "✔️", "✔️"],
                ["Performance otimizada", "✔️", "❌"],
              ].map(([feature, yamaji, outro]) => (
                <tr key={feature}>
                  <td className="px-6 py-4">{feature}</td>
                  <td className="px-6 py-4">{yamaji}</td>
                  <td className="px-6 py-4">{outro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
