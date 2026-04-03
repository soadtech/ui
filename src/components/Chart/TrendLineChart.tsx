import { forwardRef, useId, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { smoothPath, areaPath } from './chart.utils';
import type { TrendLineChartProps } from './TrendLineChart.types';
import styles from './TrendLineChart.module.css';

const COLOR_MAP = {
  primary: {
    stroke: 'var(--st-color-chart-1)',
    fill: 'var(--st-color-chart-1)',
    fillEnd: 'var(--st-color-chart-1-subtle)',
  },
  secondary: {
    stroke: 'var(--st-color-chart-2)',
    fill: 'var(--st-color-chart-2)',
    fillEnd: 'var(--st-color-chart-2-subtle)',
  },
} as const;

export const TrendLineChart = forwardRef<HTMLDivElement, TrendLineChartProps>(
  (
    {
      data,
      color = 'primary',
      showDots = false,
      areaFill = true,
      width = 120,
      height = 40,
      className,
      ...rest
    },
    ref
  ) => {
    const gradId = useId();
    const palette = COLOR_MAP[color];

    const { points, linePath: line } = useMemo(() => {
      if (data.length < 2) return { points: [], linePath: '' };
      const min = Math.min(...data);
      const max = Math.max(...data);
      const range = max - min || 1;
      const pad = 4;
      const w = width - pad * 2;
      const h = height - pad * 2;

      const pts = data.map((v, i) => ({
        x: pad + (i / (data.length - 1)) * w,
        y: pad + (1 - (v - min) / range) * h,
      }));

      return { points: pts, linePath: smoothPath(pts) };
    }, [data, width, height]);

    if (data.length < 2) return null;

    const area = areaFill
      ? areaPath(line, height - 4, points[0].x, points[points.length - 1].x)
      : null;

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        >
          {areaFill && (
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={palette.fill} stopOpacity="0.3" />
                <stop
                  offset="100%"
                  stopColor={palette.fillEnd}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          )}
          {area && <path d={area} fill={`url(#${gradId})`} />}
          <path
            d={line}
            stroke={palette.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {showDots &&
            points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="2.5"
                fill={palette.stroke}
              />
            ))}
        </svg>
      </div>
    );
  }
);

TrendLineChart.displayName = 'TrendLineChart';
