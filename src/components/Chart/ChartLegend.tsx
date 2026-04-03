import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { LegendLabelProps, LegendGroupProps } from './ChartLegend.types';
import styles from './ChartLegend.module.css';

const COLOR_INDEX_MAP: Record<number, string> = {
  1: 'var(--st-color-chart-1)',
  2: 'var(--st-color-chart-2)',
  3: 'var(--st-color-chart-3)',
  4: 'var(--st-color-chart-4)',
};

export const LegendLabel = forwardRef<HTMLSpanElement, LegendLabelProps>(
  (
    { label, colorIndex = 1, color, variant = 'dot', className, style, ...rest },
    ref
  ) => {
    const resolvedColor = color ?? COLOR_INDEX_MAP[colorIndex] ?? COLOR_INDEX_MAP[1];

    return (
      <span
        ref={ref}
        className={cn(styles.label, className)}
        style={style}
        {...rest}
      >
        <span
          className={cn(styles.indicator, styles[variant])}
          style={{ backgroundColor: resolvedColor }}
        />
        {label}
      </span>
    );
  }
);

LegendLabel.displayName = 'LegendLabel';

export const LegendGroup = forwardRef<HTMLDivElement, LegendGroupProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.group, className)} {...rest}>
        {children}
      </div>
    );
  }
);

LegendGroup.displayName = 'LegendGroup';
