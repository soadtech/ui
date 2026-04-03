import type { HTMLAttributes } from 'react';

export type BadgePosition = 'right-top' | 'right-center' | 'right-bottom';
export type BadgeVariant = 'primary' | 'secondary';
export type BadgeSize = 'md' | 'sm';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Badge position relative to children */
  position?: BadgePosition;
  /** Color variant: primary (green) or secondary (blue) */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Number to display as "+N" */
  count?: number;
  /** Text label to display (e.g. "New") */
  label?: string;
  /** When true (and no count/label), shows a dot indicator. Defaults to true. */
  dot?: boolean;
}
