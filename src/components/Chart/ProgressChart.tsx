import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { normalizeSegments } from './chart.utils';
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
        {fractions.map((frac, i) => (
          <div
            key={i}
            className={cn(styles.segment, styles[`seg${i + 1}`])}
            style={{ flex: frac }}
          />
        ))}
      </div>
    );
  }
);

ProgressChart.displayName = 'ProgressChart';
