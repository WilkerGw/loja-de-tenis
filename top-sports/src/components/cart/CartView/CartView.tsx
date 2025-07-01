// src/components/cart/CartView/CartView.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../contexts/CartContext';
import styles from './CartView.module.css';

export const CartView = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Seu carrinho está vazio.</h2>
        <p>Que tal adicionar alguns produtos incríveis?</p>
        <Link href="/" className={styles.ctaButton}>
          Voltar para a Loja
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.cartItemsList}>
        <h1 className={styles.title}>Meu Carrinho</h1>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.itemRow}>
            <div className={styles.itemInfo}>
              <Image src={item.imageUrl} alt={item.name} width={100} height={100} className={styles.itemImage} />
              <div>
                <Link href={`/produtos/${item.id}`} className={styles.itemName}>{item.name}</Link>
                <p className={styles.itemPrice}>R$ {(item.salePrice ?? item.price).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Remover</button>
              </div>
            </div>
            <div className={styles.itemControls}>
              <div className={styles.quantitySelector}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p className={styles.itemSubtotal}>R$ {((item.salePrice ?? item.price) * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>Resumo do Pedido</h2>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>R$ {cartTotal.toFixed(2)}</span>
        </div>
        <div className={styles.summaryRow}>
          <span>Frete</span>
          <span>Grátis</span>
        </div>
        <div className={`${styles.summaryRow} ${styles.totalRow}`}>
          <span>Total</span>
          <span>R$ {cartTotal.toFixed(2)}</span>
        </div>
        <button className={styles.ctaButton}>Finalizar Compra</button>
      </div>
    </div>
  );
};