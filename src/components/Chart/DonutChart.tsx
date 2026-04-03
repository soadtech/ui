import { forwardRef, useMemo, useState } from 'react';
import { cn } from '../../utils/cn';
import { normalizeSegments, donutArc } from './chart.utils';
import { useChartHover } from './useChartHover';
import { HoverTooltip } from './HoverTooltip';
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
      const paths: { d: string; color: string; midX: number; midY: number; index: number }[] = [];
      let angle = -Math.PI / 2;

      fractions.forEach((frac, i) => {
        if (frac <= 0) return;
        const sweep = frac * Math.PI * 2;
        const d = donutArc(half, half, outerR, innerR, angle, angle + sweep);
        if (d) {
          const midAngle = angle + sweep / 2;
          const midR = (outerR + innerR) / 2;
          paths.push({
            d,
            color: SEGMENT_COLORS[i % SEGMENT_COLORS.length],
            midX: half + midR * Math.cos(midAngle),
            midY: half + midR * Math.sin(midAngle),
            index: i,
          });
        }
        angle += sweep;
      });

      return paths;
    }, [fractions, half, outerR, innerR]);

    const { hover, show, hide } = useChartHover();
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    const total = segments.reduce((s, seg) => s + seg.value, 0);

    return (
      <div
        ref={ref}
        className={cn(styles.root, dark && styles.dark, className)}
        style={{ width: size, height: size }}
        {...rest}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {arcs.map((arc) => (
            <path
              key={arc.index}
              d={arc.d}
              fill={arc.color}
              opacity={activeIdx === null || activeIdx === arc.index ? 1 : 0.5}
              style={{ transition: 'opacity 150ms ease' }}
              onMouseEnter={() => {
                setActiveIdx(arc.index);
                const seg = segments[arc.index];
                const pct = total > 0 ? ((seg.value / total) * 100).toFixed(1) : '0';
                show(arc.midX, arc.midY, (
                  <div>
                    {seg.label && <div style={{ fontWeight: 600, marginBottom: 2 }}>{seg.label}</div>}
                    <div>{seg.value} ({pct}%)</div>
                  </div>
                ));
              }}
              onMouseLeave={() => { setActiveIdx(null); hide(); }}
            />
          ))}
        </svg>
        {centerLabel && <div className={styles.center}>{centerLabel}</div>}
        <HoverTooltip hover={hover} />
      </div>
    );
  }
);

DonutChart.displayName = 'DonutChart';
