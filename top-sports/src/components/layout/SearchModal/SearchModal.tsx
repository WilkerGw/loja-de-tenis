// src/components/layout/SearchModal/SearchModal.tsx
'use client';

import { IoClose } from 'react-icons/io5';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './SearchModal.module.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  if (!isOpen) {
    return null;
  }

  // Previne o scroll da página principal quando o modal está aberto
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
  }

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          <IoClose size={32} />
        </button>
        <div className={styles.searchWrapper}>
          <h2>O que você está procurando?</h2>
          <SearchBar onSearchSubmit={handleClose} />
        </div>
      </div>
    </div>
  );
};