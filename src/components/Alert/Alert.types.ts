import type { HTMLAttributes, ReactNode } from 'react';

export type AlertStatus = 'info' | 'success' | 'warning' | 'error';
export type AlertVariant = 'solid' | 'alpha';
export type AlertLayout = 'inline' | 'stacked';

export interface AlertProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Semantic status */
  status?: AlertStatus;
  /** Visual style: solid (filled bg) or alpha (light bg + colored left border) */
  variant?: AlertVariant;
  /** Actions placement: inline (beside text) or stacked (below text) */
  layout?: AlertLayout;
  /** Alert title */
  title: string;
  /** Optional description text */
  description?: string;
  /** Custom icon override (defaults based on status) */
  icon?: ReactNode;
  /** Close callback — renders close button when provided */
  onClose?: () => void;
  /** Action slot (buttons, links) */
  actions?: ReactNode;
}
