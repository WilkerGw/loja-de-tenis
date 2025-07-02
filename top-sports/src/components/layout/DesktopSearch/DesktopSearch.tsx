'use client';

import { useState, useRef, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useSearch } from '../../../hooks/useSearch';
import styles from './DesktopSearch.module.css';

export const DesktopSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { query, setQuery, handleSearch } = useSearch(() => setIsOpen(false));
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleToggle = () => {
        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
        if (newIsOpen) {
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div ref={containerRef} className={`${styles.searchContainer} ${isOpen ? styles.open : ''}`}>
            <form onSubmit={handleSearch}>
                <input
                    ref={inputRef}
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchInput}
                    placeholder="Procurar..."
                    onFocus={() => setIsOpen(true)}
                />
            </form>
            <button
                onClick={handleToggle}
                className={styles.searchButton}
                aria-label="Alternar busca"
            >
                <IoSearch size={22} />
            </button>
        </div>
    );
};