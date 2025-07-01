// src/lib/mockProducts.ts

import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Chuteira de Campo Pro-X',
    category: 'Futebol',
    price: 399.9,
    imageUrl: 'https://picsum.photos/seed/chuteira/400/400',
  },
  {
    id: '2',
    name: 'Tênis de Corrida Runner Max',
    category: 'Corrida',
    price: 549.9,
    salePrice: 499.9, // Preço em promoção
    imageUrl: 'https://picsum.photos/seed/tenis/400/400',
  },
  {
    id: '3',
    name: 'Camiseta Dry-Fit Performance',
    category: 'Roupas',
    price: 89.9,
    imageUrl: 'https://picsum.photos/seed/camiseta/400/400',
  },
  {
    id: '4',
    name: 'Bola de Basquete Oficial N1',
    category: 'Basquete',
    price: 149.9,
    imageUrl: 'https://picsum.photos/seed/bola/400/400',
  },
];