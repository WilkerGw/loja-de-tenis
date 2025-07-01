import style from './page.module.css';
import { HeroSection } from '../components/home/HeroSection/HeroSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts/FeaturedProducts';
import { CategoryShowcase } from '../components/home/CategoryShowcase/CategoryShowcase';
import { NewsletterSignup } from '../components/home/NewsletterSignup/NewsletterSignup';

export default function HomePage() {
  return (
    <main className={style.main}>
      <HeroSection />
      <FeaturedProducts />
      <CategoryShowcase />
      <NewsletterSignup />
    </main>
  );
}