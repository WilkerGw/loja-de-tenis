// src/components/home/NewsletterSignup/NewsletterSignup.tsx
'use client'; // Necessário para usar o hook useState e lidar com eventos

import { useState, FormEvent } from 'react';
import styles from './NewsletterSignup.module.css';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Impede o recarregamento da página
    if (email) {
      // Lógica de envio do e-mail para a API viria aqui
      alert(`Obrigado por se inscrever, ${email}!`);
      setEmail(''); // Limpa o campo após o envio
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Fique por Dentro das Novidades!</h2>
        <p className={styles.subtitle}>
          Cadastre-se e receba em primeira mão nossas promoções e lançamentos.
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Digite seu melhor e-mail"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};