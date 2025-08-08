import Image from 'next/image';

type Item = { src: string; alt?: string; rowSpan?: number; };
export default function ImageMasonry({ items }: { items: Item[] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {items.map((it, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-lg border border-white/10 ${it.rowSpan ? 'row-span-'+it.rowSpan : ''}`}>
              <Image
                src={it.src}
                alt={it.alt || ''}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
