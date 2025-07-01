// src/components/categories/CategoryCard/CategoryCard.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Category } from '../../../types/category';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={category.path} className={styles.card}>
      <Image
        src={category.imageUrl}
        alt={`Categoria ${category.name}`}
        fill
        className={styles.backgroundImage}
      />
      <div className={styles.overlay}></div>
      <h3 className={styles.name}>{category.name}</h3>
    </Link>
  );
};