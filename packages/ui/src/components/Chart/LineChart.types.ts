import type { HTMLAttributes, ReactNode } from 'react';

export interface LineChartDataPoint {
  label: string;
  value: number;
  compareValue?: number;
}

export interface LineChartProps extends HTMLAttributes<HTMLDivElement> {
  /** Chart data */
  data: LineChartDataPoint[];
  /** Show comparison line */
  comparison?: boolean;
  /** Use smooth curves (Catmull-Rom) */
  smooth?: boolean;
  /** Fill area under the line */
  areaFill?: boolean;
  /** Chart height in px */
  height?: number;
  /** Legend element */
  legend?: ReactNode;
}
