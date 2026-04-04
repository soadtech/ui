import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { normalizeSegments } from './chart.utils';
import { useChartHover } from './useChartHover';
import { HoverTooltip } from './HoverTooltip';
import type { ProgressChartProps } from './ProgressChart.types';
import styles from './ProgressChart.module.css';

export const ProgressChart = forwardRef<HTMLDivElement, ProgressChartProps>(
  (
    {
      segments,
      radius = 4,
      color = 'primary',
      barHeight = 8,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const fractions = normalizeSegments(segments.map((s) => s.value));
    const { hover, show, hide } = useChartHover();

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[color], className)}
        style={
          {
            '--pc-height': `${barHeight}px`,
            '--pc-radius': `${radius}px`,
            ...style,
          } as React.CSSProperties
        }
        role="meter"
        {...rest}
      >
        <div className={styles.bar}>
          {fractions.map((frac, i) => (
            <div
              key={i}
              className={cn(styles.segment, styles[`seg${i + 1}`])}
              style={{ flex: frac }}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const rootRect = e.currentTarget.closest(`.${styles.root}`)!.getBoundingClientRect();
                show(
                  rect.left - rootRect.left + rect.width / 2,
                  -4,
                  <div>{(frac * 100).toFixed(1)}%</div>
                );
              }}
              onMouseLeave={hide}
            />
          ))}
        </div>
        <HoverTooltip hover={hover} />
      </div>
    );
  }
);

ProgressChart.displayName = 'ProgressChart';
