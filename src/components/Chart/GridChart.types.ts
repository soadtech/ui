import type { HTMLAttributes } from 'react';

export type GridChartColor = 'primary' | 'secondary' | 'neutral';

export interface GridChartProps extends HTMLAttributes<HTMLDivElement> {
  /** 2D array of values (0–1 normalized, or raw — will auto-normalize) */
  data: number[][];
  /** Color palette */
  color?: GridChartColor;
  /** Cell size in px */
  cellSize?: number;
  /** Gap between cells in px */
  gap?: number;
}
