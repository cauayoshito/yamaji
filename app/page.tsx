// app/page.tsx
import Header from "@/components/Header";
import HeroCase from "@/components/HeroCase";
import FullServices from "@/components/FullServices";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonTable from "@/components/ComparisonTable";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroCase />
        <FullServices />
        <ProcessSection />
        <TestimonialsSection />
        <ComparisonTable />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
