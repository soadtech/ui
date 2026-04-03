import type { HTMLAttributes, ReactNode } from 'react';

export type ProductCardLayout = 'vertical' | 'horizontal';

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Product image URL. */
  image?: string;
  /** Image alt text. */
  imageAlt?: string;
  /** Product name. */
  title: string;
  /** Product description. */
  description?: string;
  /** Price text. */
  price?: string;
  /** Badge/tag elements. */
  badges?: ReactNode;
  /** Image position layout. */
  layout?: ProductCardLayout;
  /** Dark background variant. */
  featured?: boolean;
  /** Action buttons/icons. */
  actions?: ReactNode;
}
