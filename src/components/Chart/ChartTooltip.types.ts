import type { HTMLAttributes } from 'react';

export type ChartTooltipVariant = 'simple' | 'detailed' | 'multi';

export interface ChartTooltipItem {
  label: string;
  value?: string;
  /** Color index (1–4) for the dot indicator */
  colorIndex?: number;
}

export interface ChartTooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip items */
  items: ChartTooltipItem[];
  /** Tooltip variant */
  variant?: ChartTooltipVariant;
  /** Visibility */
  visible?: boolean;
}
