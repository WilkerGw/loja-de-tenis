// src/app/[...category]/page.tsx

import { ProductList } from '../../components/products/ProductList/ProductList';
import { featuredProducts } from '../../lib/mockProducts';
import { Product } from '../../types/product';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string[];
  };
}

// Esta função simula a busca de produtos por categoria
const getProductsByCategory = (categorySlug: string): Product[] => {
  // Em um app real, aqui você faria uma chamada a uma API
  // passando o categorySlug. Por enquanto, vamos filtrar de todos os produtos.
  // Esta lógica de filtro é um exemplo, pode ser aprimorada
  // para lidar com subcategorias.
  const allProducts = [...featuredProducts]; // Adicione aqui todos os seus produtos
  
  return allProducts.filter(product => 
    product.category.toLowerCase().replace(' ', '-') === categorySlug
  );
};


export default function CategoryPage({ params }: CategoryPageProps) {
  // O slug da categoria será o último segmento da URL
  // Ex: para /roupas/camisetas, o slug é "camisetas"
  const categorySlug = params.category[params.category.length - 1];
  
  const products = getProductsByCategory(categorySlug);
  
  // Decodifica o slug para exibir um título legível (ex: "tenis-corrida" -> "tenis corrida")
  const pageTitle = categorySlug.replace('-', ' ');

  return (
    <main>
      <ProductList title={pageTitle} products={products} />
    </main>
  );
}

// Opcional: Gerar metadados dinâmicos para SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const categorySlug = params.category[params.category.length - 1];
  const title = categorySlug.replace('-', ' ');

  return {
    title: `${title.charAt(0).toUpperCase() + title.slice(1)} | Loja Esportiva`,
    description: `Confira nossos produtos da categoria ${title}`,
  };
}