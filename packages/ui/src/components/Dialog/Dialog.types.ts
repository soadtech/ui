import type { HTMLAttributes, ReactNode } from 'react';

export type DialogIconStatus = 'info' | 'warning' | 'success' | 'error';

export interface DialogProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {
  /** Controls visibility */
  open: boolean;
  /** Called on overlay click, Escape, or close button */
  onClose: () => void;
  /** Close when clicking overlay backdrop */
  closeOnOverlayClick?: boolean;
  /** Close when pressing Escape */
  closeOnEscape?: boolean;
}

export interface DialogHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Leading icon slot */
  icon?: ReactNode;
  /** Bold title text */
  title?: string;
  /** Muted description below title */
  description?: string;
  /** `undefined` = use context from Dialog; `null` = hide close button */
  onClose?: (() => void) | null;
}

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {}

export type DialogFooterLayout = 'horizontal' | 'vertical';

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  /** Stacking direction */
  layout?: DialogFooterLayout;
  /** Left-aligned link slot (horizontal) or top (vertical) */
  link?: ReactNode;
}

export interface DialogIconProps extends HTMLAttributes<HTMLDivElement> {
  /** Determines colors and default icon */
  status: DialogIconStatus;
  /** Custom icon override */
  icon?: ReactNode;
}
