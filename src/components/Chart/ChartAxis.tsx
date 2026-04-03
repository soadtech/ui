import type { ChartAxisProps } from './ChartAxis.types';
import styles from './ChartAxis.module.css';

function defaultFormatY(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}k`;
  return String(value);
}

export function ChartAxis({
  yTicks,
  xLabels,
  chartWidth,
  chartHeight,
  gridLines = true,
  formatY = defaultFormatY,
}: ChartAxisProps) {
  return (
    <div
      className={styles.root}
      style={
        {
          '--ca-chart-w': `${chartWidth}px`,
          '--ca-chart-h': `${chartHeight}px`,
        } as React.CSSProperties
      }
    >
      {/* Y-axis labels */}
      <div className={styles.yAxis}>
        {[...yTicks].reverse().map((tick, i) => (
          <span key={i} className={styles.yLabel}>
            {formatY(tick)}
          </span>
        ))}
      </div>

      {/* Chart area placeholder — children injected by parent */}
      <div className={styles.chartArea}>
        {/* Grid lines SVG */}
        {gridLines && (
          <svg
            className={styles.grid}
            width={chartWidth}
            height={chartHeight}
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          >
            {yTicks.map((_, i) => {
              const y =
                chartHeight -
                (i / (yTicks.length - 1)) * chartHeight;
              return (
                <line
                  key={i}
                  x1={0}
                  y1={y}
                  x2={chartWidth}
                  y2={y}
                  stroke="var(--st-color-chart-grid)"
                  strokeWidth="1"
                />
              );
            })}
          </svg>
        )}
      </div>

      {/* Spacer in bottom-left corner */}
      <div />

      {/* X-axis labels */}
      <div className={styles.xAxis}>
        {xLabels.map((label, i) => (
          <span key={i} className={styles.xLabel}>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
