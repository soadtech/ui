import type { HTMLAttributes } from 'react';

export type LegendLabelVariant = 'dot' | 'line';

export interface LegendLabelProps extends HTMLAttributes<HTMLSpanElement> {
  /** Label text */
  label: string;
  /** Color index (1–4) maps to --st-color-chart-N */
  colorIndex?: number;
  /** Custom color override */
  color?: string;
  /** Dot or line indicator */
  variant?: LegendLabelVariant;
}

export interface LegendGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
