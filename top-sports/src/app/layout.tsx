// src/app/layout.tsx

import type { Metadata } from 'next';
import { Header } from '../components/layout/Header/Header';
import { Footer } from '../components/layout/Footer/Footer';
import { CartProvider } from '../contexts/CartContext'; // Importe o Provider
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Loja Esportiva',
  description: 'Sua loja de artigos esportivos online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider> {/* Envolva a aplicação com o CartProvider */}
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}