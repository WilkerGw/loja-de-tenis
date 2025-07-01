// src/components/home/CategoryShowcase/CategoryShowcase.tsx

import { mainCategories } from '../../../lib/mockCategories';
import { CategoryCard } from '../../categories/CategoryCard/CategoryCard';
import styles from './CategoryShowcase.module.css';

export const CategoryShowcase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Nossas Categorias</h2>
        <div className={styles.grid}>
          {mainCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};