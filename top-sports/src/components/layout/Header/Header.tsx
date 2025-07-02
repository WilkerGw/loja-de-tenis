// src/components/layout/Header/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { useCart } from '../../../contexts/CartContext';
import { SearchBar } from '../SearchBar/SearchBar';
import { IoCartOutline } from 'react-icons/io5';
import styles from './Header.module.css';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { cartCount } = useCart();

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* O SearchBar agora é renderizado aqui, para ser posicionado de forma fixa */}
      <div className={styles.desktopSearchWrapper}>
        <SearchBar />
      </div>

      {/* --- Menu Lateral --- */}
      <div className={`${styles.navContainer} ${isNavOpen ? styles.open : ''}`}>
        {/* Botão para abrir o menu no mobile */}
        <button
          className={`${styles.mobileMenuTrigger} ${isNavOpen ? styles.open : ''}`}
          onClick={handleNavToggle}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/logo/1.png" alt="Top Sports Logo" width={50} height={50} className={styles.logoHeader} />
            </Link>
          </div>
          <Navigation />
          <div className={styles.cartContainer}>
            <Link href="/carrinho" className={styles.cartLink}>
              <div className={styles.cartLinkContent}>
                <IoCartOutline size={22} />
                <span>Carrinho</span>
              </div>
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>
          </div>
          <div className={styles.footerNav}>
            <p>&copy; {new Date().getFullYear()} Top Sports</p>
          </div>
        </header>
      </div>
    </>
  );
};