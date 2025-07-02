// src/components/layout/Navigation/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { menuItems } from '../../../lib/menuData';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <li key={item.title} className={styles.menuItem}>
            {item.subItems ? (
              // Se tiver sub-itens, cria um botão para o accordion
              <button onClick={() => handleSubMenuToggle(item.title)}>
                {item.title}
                <span className={`${styles.arrow} ${openSubMenu === item.title ? styles.open : ''}`}>▼</span>
              </button>
            ) : (
              // Se não, é um link normal
              <Link href={item.path}>{item.title}</Link>
            )}

            {/* Renderiza o submenu se ele estiver aberto */}
            {item.subItems && openSubMenu === item.title && (
              <ul className={styles.subMenu}>
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link href={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};