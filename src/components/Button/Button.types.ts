import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'fill' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'danger';
export type ButtonSize = 'lg' | 'md' | 'sm';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style */
  variant?: ButtonVariant;
  /** Color scheme */
  color?: ButtonColor;
  /** Size */
  size?: ButtonSize;
  /** Icon before text */
  iconLeft?: ReactNode;
  /** Icon after text */
  iconRight?: ReactNode;
}
