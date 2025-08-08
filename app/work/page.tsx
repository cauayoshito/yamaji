import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const items = [
  {
    slug: "dieisson-vasques",
    title: "Dieisson Vasques — Personal Trainer",
    cat: "Web • Identidade",
    img: "/images/dieisson.jpg",
  },
  {
    slug: "proprium-imoveis",
    title: "Proprium — Investimentos em Leilão",
    cat: "Web • Branding",
    img: "/images/proprium.jpg",
  },
  {
    slug: "anipet",
    title: "AniPet — E-commerce Pet",
    cat: "Web • Loja",
    img: "/images/anipet.jpg",
  },
];

export default function WorkIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="section pt-40">
          <div className="container">
            <h1 className="h1">Projetos</h1>
            <p className="lead">
              Alguns trabalhos que representam nossa abordagem: clareza,
              estética e conversão.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/work/${c.slug}`}
                  className="group border border-white/10 rounded-lg overflow-hidden"
                >
                  <div className="relative h-56">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted">{c.cat}</p>
                    <p className="font-medium">{c.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
