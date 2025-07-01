// src/components/layout/Header/Header.tsx
'use client';

import Link from 'next/link';
import { Navigation } from '../Navigation/Navigation';
import { useCart } from '../../../contexts/CartContext'; // Importe o hook
import styles from './Header.module.css';

export const Header = () => {
  const { cartCount } = useCart(); // Use o contexto para pegar a contagem

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><img src="/logo/1.png" alt="logo do header" className={styles.logoHeader}/></Link>
      </div>
      <div className={styles.controls}>
        <Navigation />
        <Link href="/carrinho" className={styles.cartIcon}>
          🛒
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};