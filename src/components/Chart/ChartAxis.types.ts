export interface ChartAxisProps {
  /** Y-axis tick values (bottom to top) */
  yTicks: number[];
  /** X-axis labels */
  xLabels: string[];
  /** Chart area width in px */
  chartWidth: number;
  /** Chart area height in px */
  chartHeight: number;
  /** Show horizontal grid lines */
  gridLines?: boolean;
  /** Format Y-axis tick values */
  formatY?: (value: number) => string;
}
