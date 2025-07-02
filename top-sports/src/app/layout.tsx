// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';
import { CartProvider } from '../contexts/CartContext';
import { PageWrapper } from '../components/layout/PageWrapper/PageWrapper'; // 1. Importe o Wrapper
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Top Sports',
  description: 'Sua loja de artigos esportivos online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="mainContent">
            {/* 2. Envolva o {children} com o PageWrapper */}
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}