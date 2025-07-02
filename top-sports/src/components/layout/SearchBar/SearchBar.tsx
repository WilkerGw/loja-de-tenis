'use client';

import { IoSearch } from 'react-icons/io5';
import { useSearch } from '../../../hooks/useSearch';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    onSearchSubmit?: () => void;
}

export const SearchBar = ({ onSearchSubmit }: SearchBarProps) => {
  const { query, setQuery, handleSearch } = useSearch(onSearchSubmit);

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Procurar..."
          className={styles.searchInput}
          autoFocus
        />
        <button type="submit" className={styles.searchButton} aria-label="Buscar">
          <IoSearch size={22} />
        </button>
      </form>
    </div>
  );
};