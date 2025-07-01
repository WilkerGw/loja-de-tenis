'use client'; // Necessário para usar hooks como useState

import Link from 'next/link';
import { useState } from 'react';
import { menuItems } from '../../../lib/menuData'; // Importamos os dados do menu
import styles from './Navigation.module.css';

export const Navigation = () => {
  // Estado para controlar a visibilidade do menu no mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Botão Hambúrguer para Mobile - ATUALIZADO */}
      <button
        className={`${styles.hamburgerButton} ${
          isMobileMenuOpen ? styles.active : ''
        }`}
        onClick={toggleMobileMenu}
        aria-label="Abrir menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* A classe do 'nav' muda para mostrar/esconder no mobile */}
      <nav
        className={`${styles.navigation} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.title} className={styles.menuItem}>
              <Link href={item.path}>{item.title}</Link>
              {/* Se houver sub-itens, cria um submenu */}
              {item.subItems && (
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title} className={styles.subMenuItem}>
                      <Link href={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};