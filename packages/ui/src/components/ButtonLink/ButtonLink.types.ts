import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonLinkColor = 'primary' | 'secondary' | 'danger';
export type ButtonLinkSize = 'lg' | 'md' | 'sm';

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Color scheme */
  color?: ButtonLinkColor;
  /** Size */
  size?: ButtonLinkSize;
  /** Icon before text */
  iconLeft?: ReactNode;
  /** Icon after text */
  iconRight?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
}
