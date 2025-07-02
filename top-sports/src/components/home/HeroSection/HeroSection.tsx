// src/components/home/HeroSection/HeroSection.tsx

import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* No layout mobile, estes blocos aparecerão em ordem (imagem primeiro).
          No desktop, os estilos CSS os posicionarão de forma absoluta.
        */}
        
        <div className={styles.heroImgContainer}>
          <Image
            src="/tenis-img.png" // Certifique-se que este caminho está correto na sua pasta /public
            alt="Tênis em destaque"
            width={1200}
            height={800}
            className={styles.heroImg}
            priority // Ajuda a carregar a imagem principal mais rápido
          />
        </div>

        <div className={styles.heroInfosContainer}>
          <Image
            src="/logo/2.png" // Certifique-se que este caminho está correto na sua pasta /public
            alt="Logo Top Sports"
            width={512}
            height={156}
            className={styles.logoHero}
          />
          <p className={styles.subtitle}>O seu próximo nível.</p>
          <Link href="/esportes/corrida" className={styles.ctaButton}>
            Ver Coleção
          </Link>
        </div>
      </div>
    </section>
  );
};