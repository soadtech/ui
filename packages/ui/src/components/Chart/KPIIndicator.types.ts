import type { HTMLAttributes, ReactNode } from 'react';

export type KPIIndicatorSize = 'sm' | 'md' | 'lg';

export interface KPIIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Large display value (e.g. "2,450" or "$12.5k") */
  value: string;
  /** Label displayed above the value */
  label?: string;
  /** Trend badge element (e.g. <TrendBadge />) */
  trend?: ReactNode;
  /** Description text below the value */
  description?: string;
  /** Size variant */
  size?: KPIIndicatorSize;
}
