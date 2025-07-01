import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Loja Esportiva. Todos os direitos reservados.</p>
    </footer>
  );
};