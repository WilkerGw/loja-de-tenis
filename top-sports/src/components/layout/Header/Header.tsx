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

    // Função para fechar o menu ao clicar em um link de navegação
    const handleLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            {/* --- Controles Flutuantes (Botões e Busca) --- */}
            <div className={styles.floatingControls}>
                {/* Botão de Menu para Mobile */}
                <button
                    className={styles.mobileButton}
                    onClick={handleNavToggle}
                    aria-label="Abrir menu"
                    aria-expanded={isNavOpen}
                >
                    <div className={`${styles.hamburgerIcon} ${isNavOpen ? styles.open : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Barra de Busca Fixa (aparece apenas no desktop) */}
                <div className={styles.desktopSearchWrapper}>
                    <SearchBar />
                </div>
            </div>

            {/* --- Menu Lateral que Desliza --- */}
            <div className={`${styles.navContainer} ${isNavOpen ? styles.open : ''}`}>
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <Link href="/" onClick={handleLinkClick}>
                            <Image src="/logo/1.png" alt="Top Sports Logo" width={60} height={60} className={styles.logoHeader} />
                        </Link>
                    </div>

                    <Navigation onLinkClick={handleLinkClick} />

                    <div className={styles.cartContainer}>
                        <Link href="/carrinho" className={styles.cartLink} onClick={handleLinkClick}>
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

                {/* Fundo escuro para fechar o menu ao clicar fora (apenas no mobile) */}
                {isNavOpen && <div className={styles.overlay} onClick={handleNavToggle}></div>}
            </div>
        </>
    );
};