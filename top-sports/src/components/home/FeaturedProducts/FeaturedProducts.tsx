// src/components/home/FeaturedProducts/FeaturedProducts.tsx

import { ProductCard } from '../../products/ProductCard/ProductCard';
import { featuredProducts } from '../../../lib/mockProducts';
import styles from './FeaturedProducts.module.css';

export const FeaturedProducts = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Produtos em Destaque</h2>
        <div className={styles.grid}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};