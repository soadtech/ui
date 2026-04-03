import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { normalizeSegments, donutArc } from './chart.utils';
import type { DonutChartProps } from './DonutChart.types';
import styles from './DonutChart.module.css';

const SEGMENT_COLORS = [
  'var(--st-color-chart-1)',
  'var(--st-color-chart-2)',
  'var(--st-color-chart-3)',
  'var(--st-color-chart-4)',
  'var(--st-color-chart-1-muted)',
  'var(--st-color-chart-2-muted)',
];

export const DonutChart = forwardRef<HTMLDivElement, DonutChartProps>(
  (
    {
      segments,
      centerLabel,
      thickness = 24,
      size = 160,
      dark = false,
      className,
      ...rest
    },
    ref
  ) => {
    const fractions = useMemo(
      () => normalizeSegments(segments.map((s) => s.value)),
      [segments]
    );

    const half = size / 2;
    const outerR = half - 2;
    const innerR = outerR - thickness;

    const arcs = useMemo(() => {
      const paths: { d: string; color: string }[] = [];
      let angle = -Math.PI / 2; // start at top

      fractions.forEach((frac, i) => {
        if (frac <= 0) return;
        const sweep = frac * Math.PI * 2;
        const d = donutArc(half, half, outerR, innerR, angle, angle + sweep);
        if (d) {
          paths.push({ d, color: SEGMENT_COLORS[i % SEGMENT_COLORS.length] });
        }
        angle += sweep;
      });

      return paths;
    }, [fractions, half, outerR, innerR]);

    return (
      <div
        ref={ref}
        className={cn(styles.root, dark && styles.dark, className)}
        style={{ width: size, height: size }}
        {...rest}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {arcs.map((arc, i) => (
            <path key={i} d={arc.d} fill={arc.color} />
          ))}
        </svg>
        {centerLabel && <div className={styles.center}>{centerLabel}</div>}
      </div>
    );
  }
);

DonutChart.displayName = 'DonutChart';
