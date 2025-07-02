// src/components/faq/FaqView/FaqView.tsx
'use client';

import { useState } from 'react';
import { faqList } from '../../../lib/mockFaqs';
import styles from './FaqView.module.css';

export const FaqView = () => {
  // O estado irá guardar o índice da pergunta aberta. null significa que nenhuma está aberta.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Se a pergunta clicada já estiver aberta, fecha-a. Senão, abre-a.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Perguntas Frequentes (FAQ)</h1>
        <p>Encontre aqui as respostas para as dúvidas mais comuns dos nossos clientes.</p>
      </div>

      <div className={styles.faqList}>
        {faqList.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.question} onClick={() => handleToggle(index)}>
              <span>{item.question}</span>
              <span className={`${styles.arrow} ${openIndex === index ? styles.open : ''}`}>▼</span>
            </button>
            {openIndex === index && (
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};