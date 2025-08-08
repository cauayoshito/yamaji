import Header from '@/components/Header';
import HeroCase from '@/components/HeroCase';
import ImageMasonry from '@/components/ImageMasonry';
import TextBlock from '@/components/TextBlock';
import RelatedProjects from '@/components/RelatedProjects';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function CaseAnipet() {
  const images = [
    { src: '/images/hero1.jpg' },
    { src: '/images/detail2.jpg' },
    { src: '/images/detail3.jpg' },
    { src: '/images/detail4.jpg' },
    { src: '/images/detail5.jpg' },
    { src: '/images/detail1.jpg' }
  ];
  const related = [
    { href: '/work/proprium-imoveis', title: 'Proprium', category: 'Web', img: '/images/detail3.jpg' },
    { href: '/work/dieisson-vasques', title: 'Dieisson Vasques', category: 'Web', img: '/images/detail2.jpg' },
    { href: '/work', title: 'Todos', category: 'Portfolio', img: '/images/detail4.jpg' }
  ];
  return (
    <>
      <Header />
      <main>
        <HeroCase
          title="AniPet — E-commerce Pet"
          subtitle="Loja online com foco em experiência simples e clara. Catálogo, carrinho e responsividade para mobile."
          services={['E-commerce','UI/UX','Front-end']}
        />
        <TextBlock title="Contexto">
          <p>O objetivo era profissionalizar a vitrine e facilitar a compra, mantendo performance e SEO técnico.</p>
        </TextBlock>
        <ImageMasonry items={images} />
        <TextBlock title="Solução">
          <p>Arquitetura de informação objetiva, componentes reutilizáveis e otimização de imagens.</p>
        </TextBlock>
        <ImageMasonry items={images.slice(2)} />
        <TextBlock title="Impacto">
          <p>Base pronta para campanhas e conteúdo, com visual coerente e sistema de design replicável.</p>
        </TextBlock>
        <RelatedProjects items={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
