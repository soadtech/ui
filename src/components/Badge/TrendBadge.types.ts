import type { HTMLAttributes } from 'react';

export type TrendDirection = 'up' | 'down';
export type TrendBadgeSize = 'md' | 'sm';

export interface TrendBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Display value (e.g. "36%") */
  value: string;
  /** Trend direction */
  direction?: TrendDirection;
  /** Inverse colors: true = colored bg + white text, false = subtle bg + colored text */
  inverse?: boolean;
  /** Size */
  size?: TrendBadgeSize;
}
