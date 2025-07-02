// src/components/about/AboutSection/AboutSection.tsx
import Image from 'next/image';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://res.cloudinary.com/djepel3xf/image/upload/v1751402979/fachada_hgebut.avif" // Crie esta pasta e adicione a imagem em /public
            alt="Fachada da loja Top Sports"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>A Nossa História</h1>
          <p>
            Fundada em 2024 por entusiastas do desporto, a Top Sports nasceu de um sonho simples:
            oferecer os melhores equipamentos e artigos desportivos para atletas de todos os níveis.
            Acreditamos que o desporto tem o poder de transformar vidas, e a nossa missão é
            fornecer as ferramentas para que cada pessoa alcance o seu potencial máximo.
          </p>
          <p>
            Desde as pistas de corrida até aos campos de futebol, cada produto na nossa loja é
            cuidadosamente selecionado e testado para garantir qualidade, performance e durabilidade.
            Somos mais do que uma loja, somos uma comunidade de apaixonados pelo movimento.
          </p>
          <p>
            <strong>Bem-vindo à Top Sports. O seu próximo nível começa aqui.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};