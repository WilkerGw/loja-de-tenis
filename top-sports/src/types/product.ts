export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  // Opcional: para indicar se um produto está em promoção
  salePrice?: number; 
}