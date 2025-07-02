// src/types/product.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  salePrice?: number; // O '?' indica que este campo é opcional
}