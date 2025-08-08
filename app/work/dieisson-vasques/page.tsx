import Header from '@/components/Header';
import HeroCase from '@/components/HeroCase';
import ImageMasonry from '@/components/ImageMasonry';
import TextBlock from '@/components/TextBlock';
import RelatedProjects from '@/components/RelatedProjects';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function CaseDieisson() {
  const images = [
    { src: '/images/hero1.jpg', rowSpan: 2 },
    { src: '/images/detail1.jpg' },
    { src: '/images/detail2.jpg' },
    { src: '/images/detail3.jpg' },
    { src: '/images/detail4.jpg', rowSpan: 2 },
    { src: '/images/detail5.jpg' }
  ];
  const related = [
    { href: '/work/proprium-imoveis', title: 'Proprium — Investimentos', category: 'Branding', img: '/images/detail3.jpg' },
    { href: '/work/anipet', title: 'AniPet — E-commerce', category: 'Web', img: '/images/detail4.jpg' },
    { href: '/work', title: 'Ver todos', category: 'Portfolio', img: '/images/detail2.jpg' }
  ];
  return (
    <>
      <Header />
      <main>
        <HeroCase
          title="Dieisson Vasques — Personal Trainer"
          subtitle="Website profissional focado em conversão, com vitrine de depoimentos, planos e vídeos. Identidade limpa e performance para gerar autoridade."
          services={['Web design & dev','SEO','Branding']}
        />
        <TextBlock title="Contexto">
          <p>O desafio era posicionar o método DV como referência, destacando resultados dos alunos, organização e confiança.</p>
        </TextBlock>
        <ImageMasonry items={images} />
        <TextBlock title="Solução">
          <p>Construímos uma linguagem visual sólida, com ênfase em depoimentos reais e estrutura focada em performance no mobile.</p>
        </TextBlock>
        <ImageMasonry items={images.slice(2)} />
        <TextBlock title="Impacto">
          <p>Aumento na percepção de valor e base pronta para tráfego pago e conteúdo em vídeo (YouTube/Shorts).</p>
        </TextBlock>
        <RelatedProjects items={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
