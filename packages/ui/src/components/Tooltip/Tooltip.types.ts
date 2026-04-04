import type { HTMLAttributes, ReactNode } from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'start' | 'end';
export type TooltipAlign = 'start' | 'center' | 'end';
export type TooltipVariant = 'default' | 'inverted';

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  /** Inline mode text */
  content?: string;
  /** Rich mode title */
  title?: string;
  /** Rich mode body */
  body?: string;
  /** Rich mode action slot (e.g. Button) */
  action?: ReactNode;
  /** Tooltip placement relative to the trigger */
  placement?: TooltipPlacement;
  /** Tooltip alignment along the placement axis */
  align?: TooltipAlign;
  /** Visual variant */
  variant?: TooltipVariant;
  /** Controlled visibility — overrides hover/focus behavior */
  open?: boolean;
  /** Trigger element */
  children: ReactNode;
}
