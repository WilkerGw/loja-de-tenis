// src/components/common/BackButton/BackButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';
import styles from './BackButton.module.css';

export const BackButton = () => {
  const router = useRouter();

  // A função router.back() navega para a página anterior no histórico do navegador
  return (
    <button onClick={() => router.back()} className={styles.backButton}>
      <IoArrowBack size={24} />
      <span>Voltar</span>
    </button>
  );
};