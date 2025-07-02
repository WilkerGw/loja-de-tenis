// src/components/layout/SearchBar/SearchBar.tsx
'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearch } from 'react-icons/io5';
import styles from './SearchBar.module.css';

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      setIsOpen(false);
      return;
    }
    router.push(`/busca?q=${query}`);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className={`${styles.searchContainer} ${isOpen ? styles.open : ''}`}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          ref={inputRef}
          type="search"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procurar..."
          className={styles.searchInput}
          onBlur={() => !query && setIsOpen(false)}
        />
        <button type="submit" className={styles.searchButton}>
          <IoSearch size={22} />
        </button>
      </form>
    </div>
  );
};