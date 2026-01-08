// src/pages/Index.tsx
import { Layout } from "@/components/layout/Layout";
import {
  AddLifeHeroSection as HeroSection,
  FarmingEvolutionSection,
  EditorialSection,
  StatementDivider,
  BasketPreviewSection,
  AddLifeValuePropsSection as ValuePropsSection,
  FooterSection
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FarmingEvolutionSection />
      <EditorialSection />
      <StatementDivider />
      <BasketPreviewSection />
      <ValuePropsSection />
      <FooterSection />
    </Layout>
  );
};

export default Index;