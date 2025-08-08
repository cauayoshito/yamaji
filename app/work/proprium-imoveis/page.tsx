import Header from '@/components/Header';
import HeroCase from '@/components/HeroCase';
import ImageMasonry from '@/components/ImageMasonry';
import TextBlock from '@/components/TextBlock';
import RelatedProjects from '@/components/RelatedProjects';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function CaseProprium() {
  const images = [
    { src: '/images/detail1.jpg', rowSpan: 2 },
    { src: '/images/detail2.jpg' },
    { src: '/images/detail3.jpg' },
    { src: '/images/detail4.jpg' },
    { src: '/images/detail5.jpg', rowSpan: 2 },
    { src: '/images/hero1.jpg' }
  ];
  const related = [
    { href: '/work/dieisson-vasques', title: 'Dieisson Vasques', category: 'Web', img: '/images/detail2.jpg' },
    { href: '/work/anipet', title: 'AniPet', category: 'E-commerce', img: '/images/detail4.jpg' },
    { href: '/work', title: 'Todos', category: 'Portfolio', img: '/images/detail3.jpg' }
  ];
  return (
    <>
      <Header />
      <main>
        <HeroCase
          title="Proprium — Leilão de Imóveis"
          subtitle="Redesign completo para transmitir autoridade e clareza. Estrutura pensada para captar leads qualificados."
          services={['Branding','Web design & dev','Copy']}
        />
        <TextBlock title="Contexto">
          <p>Precisávamos comunicar credibilidade em um nicho sensível, tornando o acesso a informações simples e didático.</p>
        </TextBlock>
        <ImageMasonry items={images} />
        <TextBlock title="Solução">
          <p>Layout minimalista, tipografia forte e hierarquia de informação voltada a converter visitantes em oportunidades.</p>
        </TextBlock>
        <ImageMasonry items={images.slice(2)} />
        <TextBlock title="Impacto">
          <p>Aumento do tempo na página e clareza na proposta, facilitando abordagem comercial.</p>
        </TextBlock>
        <RelatedProjects items={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
