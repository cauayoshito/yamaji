const rows = [
  ["Design exclusivo e sob medida", true],
  ["Estratégia de conversão", true],
  ["Otimização para SEO", true],
  ["Suporte humano real", true],
  ["Sites mobile-first", true],
  ["Performance otimizada", true],
];

export default function ComparisonTable() {
  return (
    <section id="comparativo" className="bg-bg">
      <div className="mx-auto max-w-container px-6 py-16">
        <h2 className="text-center font-display text-3xl md:text-4xl text-fg">
          Yamaji Studio vs Sites Genéricos
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 rounded-2xl border border-white/10 bg-card">
            <thead>
              <tr className="text-left text-sm text-muted">
                <th className="p-4 font-medium text-fg">Recursos</th>
                <th className="p-4 font-medium text-fg">Yamaji Studio</th>
                <th className="p-4 font-medium text-fg">Genéricos</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, ok], idx) => (
                <tr key={String(label)} className="border-t border-white/10">
                  <td className="p-4">{label}</td>
                  <td className="p-4">
                    {ok ? (
                      <span className="inline-flex items-center gap-2 text-accent">
                        <span className="h-2 w-2 rounded-full bg-accent" /> ✔
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-2 text-red-400">
                      <span className="h-2 w-2 rounded-full bg-red-400" /> ✖
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
