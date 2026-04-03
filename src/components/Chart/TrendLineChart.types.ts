import type { HTMLAttributes } from 'react';

export type TrendLineChartColor = 'primary' | 'secondary';

export interface TrendLineChartProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  /** Array of numeric data points */
  data: number[];
  /** Color palette */
  color?: TrendLineChartColor;
  /** Show dots at data points */
  showDots?: boolean;
  /** Fill the area under the line */
  areaFill?: boolean;
  /** Chart width in px */
  width?: number;
  /** Chart height in px */
  height?: number;
}
