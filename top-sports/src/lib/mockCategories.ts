// src/lib/mockCategories.ts

import { Category } from '../types/category';

export const mainCategories: Category[] = [
  {
    id: 'cat1',
    name: 'Roupas',
    path: '/roupas',
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751397558/roupas_l0419a.avif',
  },
  {
    id: 'cat2',
    name: 'Calçados',
    path: '/calcados',
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751398378/varios-tenis_rlclc7.avif',
  },
  {
    id: 'cat3',
    name: 'Equipamentos',
    path: '/equipamentos',
    imageUrl: 'https://res.cloudinary.com/djepel3xf/image/upload/c_crop,ar_1:1/v1751398477/equipamentos_nbyloy.avif',
  },
];