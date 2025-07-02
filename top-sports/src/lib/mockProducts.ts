// src/lib/mockProducts.ts

import { Product } from '../types/product';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Chuteira de Campo Pro-X',
    category: 'Futebol',
    price: 399.9,
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751393564/chuteira_sjan4b.avif',
  },
  {
    id: '2',
    name: 'Tênis de Corrida Runner Max',
    category: 'Corrida',
    price: 549.9,
    salePrice: 499.9, 
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751392897/tenis-corrida-vermelho_hhudaz.avif',
  },
  {
    id: '3',
    name: 'Camiseta Dry-Fit Performance',
    category: 'Roupas',
    price: 89.9,
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751392896/camiseta-verde_ipdare.avif',
  },
  {
    id: '4',
    name: 'Bola de Basquete Oficial N1',
    category: 'Basquete',
    price: 149.9,
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751392897/bola-de-basket_m6zfdp.avif',
  },
];