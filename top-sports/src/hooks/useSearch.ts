import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export const useSearch = (onSearchSubmit?: () => void) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    router.push(`/busca?q=${query}`);
    if (onSearchSubmit) {
      onSearchSubmit(); // Callback para fechar modal/componente pai
    }
  };

  return { query, setQuery, handleSearch };
};
