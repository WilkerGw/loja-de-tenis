// src/components/products/ProductCard/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../../../types/product';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/produtos/${product.id}`} className={styles.imageContainer}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className={styles.image}
        />
        {product.salePrice && <span className={styles.saleTag}>OFERTA</span>}
      </Link>
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>
          <Link href={`/produtos/${product.id}`}>{product.name}</Link>
        </h3>
        <div className={styles.priceContainer}>
          {product.salePrice ? (
            <>
              <span className={styles.originalPrice}>€{product.price.toFixed(2)}</span>
              <span className={styles.salePrice}>€{product.salePrice.toFixed(2)}</span>
            </>
          ) : (
            <span className={styles.price}>€{product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};