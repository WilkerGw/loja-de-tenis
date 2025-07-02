// src/components/contact/ContactView/ContactView.tsx
'use client';

import { useState } from 'react';
import styles from './ContactView.module.css';

export const ContactView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em uma aplicação real, aqui você enviaria os dados para um backend ou serviço de e-mail.
    alert(`Mensagem enviada!\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`);
    // Limpa o formulário
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Entre em Contacto</h1>
        <p>Tem alguma dúvida ou sugestão? Adoraríamos ouvir você. Preencha o formulário abaixo ou utilize um dos nossos canais de atendimento.</p>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Nossas Informações</h2>
          <div className={styles.infoItem}>
            <strong>Endereço:</strong>
            <p>Rua do Desporto, 123<br />São Paulo, SP, 01234-567</p>
          </div>
          <div className={styles.infoItem}>
            <strong>E-mail:</strong>
            <p>contacto@topsports.com</p>
          </div>
          <div className={styles.infoItem}>
            <strong>Telefone:</strong>
            <p>+55 (11) 98765-4321</p>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Envie-nos uma Mensagem</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="subject">Assunto</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
};