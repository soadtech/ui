import type { HTMLAttributes, ReactNode } from 'react';

export interface DonutChartSegment {
  value: number;
  label?: string;
}

export interface DonutChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Segments with values (will be normalized) */
  segments: DonutChartSegment[];
  /** Center label content */
  centerLabel?: ReactNode;
  /** Donut thickness in px */
  thickness?: number;
  /** Outer size in px */
  size?: number;
  /** Dark background variant */
  dark?: boolean;
}
