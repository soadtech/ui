import type { HTMLAttributes } from 'react';

export type RatingSize = 'md' | 'sm';
export type RatingVariant = 'type1' | 'type2' | 'simple';
export type RatingIconType = 'star' | 'heart';

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  count?: number;
  maxStars?: number;
  size?: RatingSize;
  variant?: RatingVariant;
  icon?: RatingIconType;
}
