// src/components/layout/Header/Header.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoCartOutline } from 'react-icons/io5'; // REMOVIDO: IoSearch não é mais necessário
import { useCart } from '../../../contexts/CartContext';
import { DesktopSearch } from '../DesktopSearch/DesktopSearch';
import { Navigation } from '../Navigation/Navigation';
// REMOVIDO: SearchModal não é mais necessário
// import { SearchModal } from '../SearchModal/SearchModal';
import styles from './Header.module.css';
import { menuItems } from '../../../lib/menuData';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // REMOVIDO: Estado do modal de busca não é mais necessário
  // const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const { cartCount } = useCart();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  // REMOVIDO: Funções de controle do modal de busca não são mais necessárias
  /*
  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  */

  // Efeito para fechar o menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Efeito para fechar o menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);


  return (
    <>
      {/* REMOVIDO: Modal de busca */}

      {/* Overlay quando o menu está aberto no mobile */}
      {isOpen && <div className={styles.overlay} onClick={handleCloseMenu}></div>}

      <div className={styles.floatingControls}>
        {/* Botão do Menu Mobile */}
        <button
          onClick={handleToggleMenu}
          className={`${styles.mobileButton} ${isOpen ? styles.open : ''}`}
          aria-label="Abrir menu"
        >
          <div className={`${styles.hamburgerIcon} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* REMOVIDO: Botão de busca para mobile */}

        {/* MANTIDO: Busca para Desktop, que será controlada via CSS */}
        <div className={styles.desktopSearchWrapper}>
          <DesktopSearch />
        </div>
      </div>

      {/* Container Principal da Navegação */}
      <nav ref={navRef} className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/" onClick={handleCloseMenu}>
              <Image src="/logo/1.png" alt="TopSports Logo" width={100} height={40} className={styles.logoHeader} />
            </Link>
          </div>
          <Navigation items={menuItems} onLinkClick={handleCloseMenu} />

          <div className={styles.cartContainer}>
            <Link href="/carrinho" className={styles.cartLink} onClick={handleCloseMenu}>
              <span className={styles.cartLinkContent}>
                <IoCartOutline size={22} />
                Carrinho
              </span>
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>
          </div>

          <footer className={styles.footerNav}>
            <p>&copy; {new Date().getFullYear()} TopSports. Todos os direitos reservados.</p>
          </footer>
        </header>
      </nav>
    </>
  );
};