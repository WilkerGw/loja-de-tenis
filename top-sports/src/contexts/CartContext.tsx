// src/contexts/CartContext.tsx
'use client';

import { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { Product } from '../types/product';

// Define o formato de um item dentro do carrinho (produto + quantidade)
interface CartItem extends Product {
  quantity: number;
}

// Define o que nosso contexto irá fornecer
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
  cartCount: number;
  cartTotal: number; // NOVO: O valor total do carrinho
}

// Cria o Contexto com um valor padrão (null)
const CartContext = createContext<CartContextType | null>(null);

// Cria o Provedor (Provider) do Contexto
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  // NOVO: Calcula o valor total do carrinho
  // Usamos useMemo para otimização, recalculando apenas quando o cartItems muda.
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.salePrice ?? item.price; // Usa o preço de oferta se existir
      return total + itemPrice * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};