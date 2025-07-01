// src/app/produtos/[id]/page.tsx

import { ProductDetails } from '../../../components/products/ProductDetails/ProductDetails';
import { featuredProducts } from '../../../lib/mockProducts';
import { notFound } from 'next/navigation';
import styles from './page.module.css'; // Importe o novo arquivo de estilo

// A interface 'Params' descreve o formato do objeto de parâmetros que a página recebe
interface Params {
  id: string;
}

// A interface 'Props' descreve todas as props que a página recebe, incluindo os parâmetros da URL
interface ProductPageProps {
  params: Params;
}

// Esta função simula a busca de dados de um produto específico em um banco de dados
const getProductById = (id: string) => {
  const product = featuredProducts.find((p) => p.id === id);
  return product;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = getProductById(id);

  // Se o produto não for encontrado, mostramos a página de "Não Encontrado" do Next.js
  if (!product) {
    notFound();
  }

  return (
    // Aplique a nova classe ao elemento <main>
    <main className={styles.pageContainer}>
      <ProductDetails product={product} />
    </main>
  );
}

// (Opcional, mas boa prática) Gerar metadados dinâmicos para SEO
export async function generateMetadata({ params }: ProductPageProps) {
    const product = getProductById(params.id);
    return {
        title: product ? product.name : 'Produto não encontrado',
        description: `Detalhes sobre o produto ${product?.name}`,
    };
}