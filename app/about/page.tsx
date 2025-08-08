import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section pt-40">
          <div className="container">
            <h1 className="h1">Sobre a Yamaji</h1>
            <p className="lead">
              Combinamos design, tecnologia e estratégia para criar marcas e sites que passam confiança, 
              carregam performance e constroem autoridade.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
