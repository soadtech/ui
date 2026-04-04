import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import type { ProductCardProps } from './ProductCard.types';
import styles from './ProductCard.module.css';

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      image,
      imageAlt = '',
      title,
      description,
      price,
      badges,
      layout = 'vertical',
      featured = false,
      actions,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          styles.root,
          styles[layout],
          featured && styles.featured,
          className
        )}
        {...rest}
      >
        {image && (
          <div className={styles.imageWrap}>
            <img src={image} alt={imageAlt} className={styles.image} />
            {badges && <div className={styles.badges}>{badges}</div>}
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.info}>
            <span className={styles.title}>{title}</span>
            {description && <p className={styles.description}>{description}</p>}
          </div>
          <div className={styles.footer}>
            {price && <span className={styles.price}>{price}</span>}
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
        </div>
      </Card>
    );
  }
);

ProductCard.displayName = 'ProductCard';
