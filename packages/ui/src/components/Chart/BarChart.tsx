import { forwardRef, useMemo, useRef, useEffect, useState, useId } from 'react';
import { cn } from '../../utils/cn';
import { niceScale, roundedBarPath } from './chart.utils';
import { useChartHover } from './useChartHover';
import { HoverTooltip } from './HoverTooltip';
import type { BarChartProps } from './BarChart.types';
import styles from './BarChart.module.css';

export const BarChart = forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      data,
      comparison = false,
      gridLines = true,
      height = 200,
      legend,
      className,
      ...rest
    },
    ref
  ) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [chartWidth, setChartWidth] = useState(0);
    const clipId = useId();
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

    const barPadding = 0.3;
    const groupWidth = chartWidth / data.length;
    const barGroupWidth = groupWidth * (1 - barPadding);
    const barRadius = 3;

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {legend && <div className={styles.legend}>{legend}</div>}
        <div className={styles.grid}>
          {/* Y-axis */}
          <div className={styles.yAxis} style={{ height }}>
            {[...ticks].reverse().map((tick, i) => (
              <span key={i} className={styles.yLabel}>
                {tick >= 1000 ? `${(tick / 1000).toFixed(tick % 1000 === 0 ? 0 : 1)}k` : tick}
              </span>
            ))}
          </div>

          {/* Chart area */}
          <div ref={chartRef} className={styles.chartArea} style={{ height }}>
            {chartWidth > 0 && (
              <svg
                width={chartWidth}
                height={height}
                viewBox={`0 0 ${chartWidth} ${height}`}
              >
                <defs>
                  <clipPath id={clipId}>
                    <rect width={chartWidth} height={height} />
                  </clipPath>
                </defs>

                {/* Grid lines */}
                {gridLines &&
                  ticks.map((_, i) => {
                    const y = height - (i / (ticks.length - 1)) * height;
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

                {/* Bars */}
                <g clipPath={`url(#${clipId})`}>
                  {data.map((d, i) => {
                    const cx = groupWidth * i + groupWidth / 2;
                    const isActive = activeIdx === i;

                    if (comparison && d.compareValue != null) {
                      const bw = barGroupWidth / 2 - 1;
                      const h1 = scaleMax > 0 ? (d.value / scaleMax) * height : 0;
                      const h2 = scaleMax > 0 ? (d.compareValue / scaleMax) * height : 0;
                      return (
                        <g key={i}>
                          <path
                            d={roundedBarPath(cx - barGroupWidth / 2, height - h1, bw, h1, barRadius)}
                            fill="var(--st-color-chart-1)"
                            opacity={isActive ? 1 : 0.85}
                          />
                          <path
                            d={roundedBarPath(cx + 1, height - h2, bw, h2, barRadius)}
                            fill="var(--st-color-chart-2)"
                            opacity={isActive ? 1 : 0.85}
                          />
                          {/* Hit area */}
                          <rect
                            x={groupWidth * i}
                            y={0}
                            width={groupWidth}
                            height={height}
                            fill="transparent"
                            onMouseEnter={() => {
                              setActiveIdx(i);
                              show(cx, height - Math.max(h1, h2), (
                                <div>
                                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{d.label}</div>
                                  <div>{d.value}</div>
                                  <div>{d.compareValue}</div>
                                </div>
                              ));
                            }}
                            onMouseLeave={() => { setActiveIdx(null); hide(); }}
                          />
                        </g>
                      );
                    }

                    const bw = barGroupWidth;
                    const h = scaleMax > 0 ? (d.value / scaleMax) * height : 0;
                    return (
                      <g key={i}>
                        <path
                          d={roundedBarPath(cx - bw / 2, height - h, bw, h, barRadius)}
                          fill="var(--st-color-chart-1)"
                          opacity={isActive ? 1 : 0.85}
                        />
                        {/* Hit area */}
                        <rect
                          x={groupWidth * i}
                          y={0}
                          width={groupWidth}
                          height={height}
                          fill="transparent"
                          onMouseEnter={() => {
                            setActiveIdx(i);
                            show(cx, height - h, (
                              <div>
                                <div style={{ fontWeight: 600, marginBottom: 2 }}>{d.label}</div>
                                <div>{d.value}</div>
                              </div>
                            ));
                          }}
                          onMouseLeave={() => { setActiveIdx(null); hide(); }}
                        />
                      </g>
                    );
                  })}
                </g>
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

BarChart.displayName = 'BarChart';
