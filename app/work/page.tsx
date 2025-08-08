// app/work/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    title: "Dieisson Vasques — Personal Trainer",
    url: "https://www.dieissonvasques.com.br",
    image: "/images/dieisson.jpg",
    tag: "Web • Identidade",
  },
  {
    title: "Proprium — Leilão de Imóveis",
    url: "https://proprium-imoveis.vercel.app",
    image: "/images/proprium.jpg",
    tag: "Web • Branding",
  },
  {
    title: "AniPet — E-commerce Pet",
    url: "https://anipet2.vercel.app",
    image: "/images/anipet.jpg",
    tag: "Web • Loja",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-40 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projetos</h1>
          <p className="text-muted mb-10">
            Alguns trabalhos que representam nossa abordagem: clareza, estética
            e conversão.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.title}
                href={p.url}
                target="_blank"
                className="group border border-white/10 rounded-lg overflow-hidden hover:scale-[1.02] transition"
              >
                <div className="relative h-48">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-left">
                  <p className="text-sm text-muted">{p.tag}</p>
                  <p className="font-semibold">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
