import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'outline' | 'elevated' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style. */
  variant?: CardVariant;
  /** Shorthand padding for simple cards (use sub-components for structured cards). */
  padding?: CardPadding;
}

export type CardHeaderSize = 'sm' | 'md' | 'lg';

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Header title text or node. */
  title?: ReactNode;
  /** Optional leading icon. */
  icon?: ReactNode;
  /** Right-aligned action area (buttons, selects, etc.). */
  action?: ReactNode;
  /** Show bottom border separator. */
  border?: boolean;
  /** Vertical density. */
  size?: CardHeaderSize;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export type CardFooterAlign = 'left' | 'center' | 'right' | 'between';

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Show top border separator. */
  border?: boolean;
  /** Horizontal alignment of footer children. */
  align?: CardFooterAlign;
}
