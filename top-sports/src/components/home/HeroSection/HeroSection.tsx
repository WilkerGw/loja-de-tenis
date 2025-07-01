// src/components/home/HeroSection/HeroSection.tsx

import Link from 'next/link';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <Link href="/"><img src="/logo/2.png" alt="logo do Hero" className={styles.logoHero}/></Link>
        <p className={styles.subtitle}>
          Encontre os melhores equipamentos e artigos esportivos para elevar sua
          performance.
        </p>
        <Link href="/produtos" className={styles.ctaButton}>
          Ver Produtos
        </Link>
      </div>
    </section>
  );
};