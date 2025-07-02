import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { CartProvider } from "../contexts/CartContext";
import { PageWrapper } from "../components/layout/PageWrapper/PageWrapper";
import { Footer } from "../components/layout/Footer/Footer";
import { Navigation } from "../components/layout/Navigation/Navigation";
import '../styles/globals.css';
import { Header } from "src/components/layout/Header/Header";

export const metadata = {
  title: 'Top Sports',
  description: 'Sua loja de artigos esportivos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header/>
          <main>
            <PageWrapper>
              {children}
            </PageWrapper>
          </main>
          <Footer />
        </CartProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}