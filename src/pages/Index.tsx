import HeroSection from "@/components/HeroSection";
import ServicosSection from "@/components/ServicosSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import TopSectionsNav from "@/components/TopSectionsNav";

const Index = () => (
  <>
    <TopSectionsNav />
    <main className="pt-16 md:pt-[3.5rem]">
      <div id="home"><HeroSection /></div>
      <div id="servicos"><ServicosSection /></div>
      <div id="diferenciais"><BeneficiosSection /></div>
      <div id="avaliacoes"><DepoimentosSection /></div>
      <div id="contato"><CtaSection /></div>
      <Footer />
    </main>
  </>
);

export default Index;