import Image from 'next/image';
import Link from 'next/link';

type Card = { href: string; title: string; category: string; img: string; };

export default function RelatedProjects({ items }: { items: Card[] }) {
  return (
    <section className="section">
      <div className="container">
        <h3 className="text-xl font-semibold mb-6">Outros projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <Link key={i} href={c.href} className="group border border-white/10 rounded-lg overflow-hidden">
              <div className="relative h-56">
                <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-300" />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted">{c.category}</p>
                <p className="font-medium">{c.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
