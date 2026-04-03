import { forwardRef, useMemo, useRef, useEffect, useState, useId } from 'react';
import { cn } from '../../utils/cn';
import { niceScale, smoothPath, areaPath } from './chart.utils';
import { useChartHover } from './useChartHover';
import { HoverTooltip } from './HoverTooltip';
import type { LineChartProps } from './LineChart.types';
import styles from './LineChart.module.css';

function buildLinePath(
  values: number[],
  chartWidth: number,
  chartHeight: number,
  scaleMax: number,
  smooth: boolean
): { points: { x: number; y: number }[]; path: string } {
  const points = values.map((v, i) => ({
    x: (i / (values.length - 1)) * chartWidth,
    y: chartHeight - (scaleMax > 0 ? (v / scaleMax) * chartHeight : 0),
  }));
  const path = smooth
    ? smoothPath(points)
    : `M${points.map((p) => `${p.x},${p.y}`).join('L')}`;
  return { points, path };
}

export const LineChart = forwardRef<HTMLDivElement, LineChartProps>(
  (
    {
      data,
      comparison = false,
      smooth = true,
      areaFill = true,
      height = 200,
      legend,
      className,
      ...rest
    },
    ref
  ) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartWidth, setChartWidth] = useState(0);
    const gradId1 = useId();
    const gradId2 = useId();
    const { hover, show, hide } = useChartHover();
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    useEffect(() => {
      if (!chartRef.current) return;
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setChartWidth(entry.contentRect.width);
        }
      });
      ro.observe(chartRef.current);
      return () => ro.disconnect();
    }, []);

    const allValues = useMemo(() => {
      const vals = data.map((d) => d.value);
      if (comparison) vals.push(...data.map((d) => d.compareValue ?? 0));
      return vals;
    }, [data, comparison]);

    const maxVal = Math.max(...allValues, 0);
    const ticks = niceScale(0, maxVal);
    const scaleMax = ticks[ticks.length - 1];

    const primary = useMemo(
      () =>
        chartWidth > 0
          ? buildLinePath(data.map((d) => d.value), chartWidth, height, scaleMax, smooth)
          : null,
      [data, chartWidth, height, scaleMax, smooth]
    );

    const secondary = useMemo(
      () =>
        comparison && chartWidth > 0
          ? buildLinePath(
              data.map((d) => d.compareValue ?? 0),
              chartWidth,
              height,
              scaleMax,
              smooth
            )
          : null,
      [data, comparison, chartWidth, height, scaleMax, smooth]
    );

    const slotWidth = chartWidth > 0 && data.length > 1 ? chartWidth / (data.length - 1) : chartWidth;

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {legend && <div className={styles.legend}>{legend}</div>}
        <div className={styles.grid}>
          {/* Y-axis */}
          <div className={styles.yAxis} style={{ height }}>
            {[...ticks].reverse().map((tick, i) => (
              <span key={i} className={styles.yLabel}>
                {tick >= 1000
                  ? `${(tick / 1000).toFixed(tick % 1000 === 0 ? 0 : 1)}k`
                  : tick}
              </span>
            ))}
          </div>

          {/* Chart area */}
          <div ref={chartRef} className={styles.chartArea} style={{ height }}>
            {chartWidth > 0 && primary && (
              <svg
                width={chartWidth}
                height={height}
                viewBox={`0 0 ${chartWidth} ${height}`}
              >
                <defs>
                  <linearGradient id={gradId1} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--st-color-chart-1)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--st-color-chart-1-subtle)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                  <linearGradient id={gradId2} x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--st-color-chart-2)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="var(--st-color-chart-2-subtle)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                {ticks.map((_, i) => {
                  const y =
                    height - (i / (ticks.length - 1)) * height;
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

                {/* Secondary area + line */}
                {secondary && areaFill && (
                  <path
                    d={areaPath(
                      secondary.path,
                      height,
                      secondary.points[0].x,
                      secondary.points[secondary.points.length - 1].x
                    )}
                    fill={`url(#${gradId2})`}
                  />
                )}
                {secondary && (
                  <path
                    d={secondary.path}
                    fill="none"
                    stroke="var(--st-color-chart-2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}

                {/* Primary area + line */}
                {areaFill && (
                  <path
                    d={areaPath(
                      primary.path,
                      height,
                      primary.points[0].x,
                      primary.points[primary.points.length - 1].x
                    )}
                    fill={`url(#${gradId1})`}
                  />
                )}
                <path
                  d={primary.path}
                  fill="none"
                  stroke="var(--st-color-chart-1)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Dots + active highlight */}
                {primary.points.map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={activeIdx === i ? 5 : 3}
                    fill="var(--st-color-chart-1)"
                    stroke={activeIdx === i ? 'var(--st-color-surface)' : 'none'}
                    strokeWidth={activeIdx === i ? 2 : 0}
                  />
                ))}

                {/* Vertical indicator line */}
                {activeIdx !== null && primary.points[activeIdx] && (
                  <line
                    x1={primary.points[activeIdx].x}
                    y1={0}
                    x2={primary.points[activeIdx].x}
                    y2={height}
                    stroke="var(--st-color-chart-axis)"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                )}

                {/* Invisible hit areas per data point */}
                {data.map((d, i) => {
                  const px = primary.points[i]?.x ?? 0;
                  const py = primary.points[i]?.y ?? 0;
                  return (
                    <rect
                      key={`hit-${i}`}
                      x={px - slotWidth / 2}
                      y={0}
                      width={slotWidth}
                      height={height}
                      fill="transparent"
                      onMouseEnter={() => {
                        setActiveIdx(i);
                        const content = comparison && d.compareValue != null ? (
                          <div>
                            <div style={{ fontWeight: 600, marginBottom: 2 }}>{d.label}</div>
                            <div>{d.value}</div>
                            <div>{d.compareValue}</div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ fontWeight: 600, marginBottom: 2 }}>{d.label}</div>
                            <div>{d.value}</div>
                          </div>
                        );
                        show(px, py, content);
                      }}
                      onMouseLeave={() => { setActiveIdx(null); hide(); }}
                    />
                  );
                })}
              </svg>
            )}
            <HoverTooltip hover={hover} />
          </div>

          {/* Spacer */}
          <div />

          {/* X-axis */}
          <div className={styles.xAxis}>
            {data.map((d, i) => (
              <span key={i} className={styles.xLabel}>
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

LineChart.displayName = 'LineChart';
