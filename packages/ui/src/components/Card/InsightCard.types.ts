import type { HTMLAttributes, ReactNode } from 'react';

export type InsightCardVariant = 'light' | 'dark' | 'primary';

export interface InsightCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Leading icon. */
  icon?: ReactNode;
  /** Badge label (e.g. "Insight"). */
  badge?: string;
  /** Title text. */
  title: string;
  /** Body text. */
  description?: string;
  /** Color scheme. */
  variant?: InsightCardVariant;
  /** Dismiss handler. */
  onDismiss?: () => void;
  /** Apply handler. */
  onApply?: () => void;
  /** Dismiss button text. */
  dismissLabel?: string;
  /** Apply button text. */
  applyLabel?: string;
}
