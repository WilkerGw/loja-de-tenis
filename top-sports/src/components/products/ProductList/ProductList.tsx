// src/components/products/ProductList/ProductList.tsx

import { Product } from '../../../types/product';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

interface ProductListProps {
  title: string;
  products: Product[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {products.length > 0 ? (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className={styles.noProducts}>Nenhum produto encontrado nesta categoria.</p>
        )}
      </div>
    </section>
  );
};