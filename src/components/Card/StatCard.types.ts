import type { HTMLAttributes, ReactNode } from 'react';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Metric label. */
  title: string;
  /** Large metric value. */
  value: string | number;
  /** TrendBadge or custom indicator. */
  trend?: ReactNode;
  /** Time selector, dropdown, etc. */
  action?: ReactNode;
}
