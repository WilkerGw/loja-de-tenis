// src/app/page.tsx

import { AboutSection } from '../components/about/AboutSection/AboutSection';
import { CategoryShowcase } from '../components/home/CategoryShowcase/CategoryShowcase';
import { ContactView } from '../components/contact/ContactView';
import { FaqView } from '../components/faq/FaqView/FaqView';
import { FeaturedProducts } from '../components/home/FeaturedProducts/FeaturedProducts';
import { HeroSection } from '../components/home/HeroSection/HeroSection';
import { NewsletterSignup } from '../components/home/NewsletterSignup/NewsletterSignup';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <AboutSection />
      <ContactView />
      <FaqView />
      <NewsletterSignup />
    </main>
  );
}