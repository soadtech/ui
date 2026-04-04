import type { HTMLAttributes, ReactNode } from 'react';

export interface BarChartDataPoint {
  label: string;
  value: number;
  compareValue?: number;
}

export interface BarChartProps extends HTMLAttributes<HTMLDivElement> {
  /** Chart data */
  data: BarChartDataPoint[];
  /** Show comparison bars */
  comparison?: boolean;
  /** Show horizontal grid lines */
  gridLines?: boolean;
  /** Chart height in px */
  height?: number;
  /** Legend element */
  legend?: ReactNode;
}
