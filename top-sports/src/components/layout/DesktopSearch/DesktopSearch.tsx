// src/components/layout/DesktopSearch/DesktopSearch.tsx
'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';
import styles from './DesktopSearch.module.css';

export const DesktopSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setIsOpen(false); // Apenas fecha se a busca estiver vazia
      return;
    }
    router.push(`/busca?q=${query}`);
    setIsOpen(false); // Fecha após a busca
  };
  
  // Foca no campo de texto quando ele abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`${styles.searchContainer} ${isOpen ? styles.open : ''}`}>
      <form onSubmit={handleSearch}>
        <input
          ref={inputRef}
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procurar..."
          className={styles.searchInput}
          onBlur={() => !query && setIsOpen(false)} // Fecha se o campo estiver vazio ao perder o foco
        />
      </form>
      <button onClick={handleToggle} className={styles.searchButton} aria-label="Abrir busca">
        <IoSearch size={26} />
      </button>
    </div>
  );
};