// src/components/home/index.ts
// Export all your components from their respective files

// Import from the NEW ADD LIFE components (BasketPreviewSection.tsx)
export { HeroSection as AddLifeHeroSection } from './BasketPreviewSection';
export { FarmingEvolutionSection } from './BasketPreviewSection';
export { EditorialSection } from './BasketPreviewSection';
export { StatementDivider } from './BasketPreviewSection';
export { BasketPreviewSection } from './BasketPreviewSection';
export { ValuePropsSection as AddLifeValuePropsSection } from './BasketPreviewSection';
export { FooterSection } from './BasketPreviewSection';

// Import from OLD components (if you want to keep them for other pages)
export { HeroSection as GreenHeroSection } from './HeroSection';
export { ValuePropsSection as GreenValuePropsSection } from './ValuePropsSection';
export { FoodWasteSection } from './FoodWasteSection';