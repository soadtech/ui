import type { HTMLAttributes } from 'react';

export interface ProgressChartSegment {
  value: number;
}

export type ProgressChartColor = 'primary' | 'secondary';

export interface ProgressChartProps extends HTMLAttributes<HTMLDivElement> {
  /** Segments with values (will be normalized to percentages) */
  segments: ProgressChartSegment[];
  /** Border radius */
  radius?: number;
  /** Color palette */
  color?: ProgressChartColor;
  /** Height of the progress bar in px */
  barHeight?: number;
}
