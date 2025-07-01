// src/components/products/ProductDetails/ProductDetails.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/product';
import { useCart } from '../../../contexts/CartContext';
import styles from './ProductDetails.module.css';

interface ProductDetailsProps {
  product: Product;
}

const MOCK_IMAGE_GALLERY = [
  'https://picsum.photos/seed/tenis/800/800',
  'https://picsum.photos/seed/tenis_lado/800/800',
  'https://picsum.photos/seed/tenis_detalhe/800/800',
  'https://picsum.photos/seed/tenis_sola/800/800',
];

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [mainImage, setMainImage] = useState(MOCK_IMAGE_GALLERY[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`${quantity}x ${product.name} adicionado ao carrinho!`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.galleryColumn}>
        <div className={styles.mainImageContainer}>
          <Image src={mainImage} alt={product.name} width={800} height={800} className={styles.mainImage} />
        </div>
        <div className={styles.thumbnailContainer}>
          {MOCK_IMAGE_GALLERY.map((imgUrl, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${mainImage === imgUrl ? styles.activeThumbnail : ''}`}
              onClick={() => setMainImage(imgUrl)}
            >
              <Image src={imgUrl} alt={`Thumbnail ${index + 1}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.infoColumn}>
        <span className={styles.category}>{product.category}</span>
        <h1 className={styles.name}>{product.name}</h1>
        <div className={styles.priceContainer}>
            {product.salePrice ? (
                <>
                <span className={styles.originalPrice}>R$ {product.price.toFixed(2)}</span>
                <span className={styles.salePrice}>R$ {product.salePrice.toFixed(2)}</span>
                </>
            ) : (
                <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
            )}
        </div>
        <div className={styles.description}>
          <p>Esta é uma descrição de exemplo para o produto. Aqui entrariam detalhes sobre o material, tecnologia, indicações de uso e outros pontos importantes que ajudam o cliente a tomar a decisão de compra.</p>
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.quantitySelector}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};