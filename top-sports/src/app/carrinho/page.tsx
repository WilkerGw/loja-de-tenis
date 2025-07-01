// src/app/carrinho/page.tsx
import { CartView } from '../../components/cart/CartView/CartView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meu Carrinho | Loja Esportiva',
  description: 'Revise os itens do seu carrinho de compras e finalize seu pedido.',
};

export default function CartPage() {
  return (
    <main>
      <CartView />
    </main>
  );
}