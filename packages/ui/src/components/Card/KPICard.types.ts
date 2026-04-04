import type { HTMLAttributes } from 'react';

export interface KPIItem {
  label: string;
  value: string | number;
}

export interface KPICardProps extends HTMLAttributes<HTMLDivElement> {
  /** KPI items to display. */
  items: KPIItem[];
  /** Grid columns (defaults to items.length). */
  columns?: number;
}
