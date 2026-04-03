import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ChartTooltipProps } from './ChartTooltip.types';
import styles from './ChartTooltip.module.css';

const COLOR_INDEX_MAP: Record<number, string> = {
  1: 'var(--st-color-chart-1)',
  2: 'var(--st-color-chart-2)',
  3: 'var(--st-color-chart-3)',
  4: 'var(--st-color-chart-4)',
};

export const ChartTooltip = forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ items, variant = 'simple', visible = true, className, ...rest }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[variant], className)}
        role="tooltip"
        {...rest}
      >
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            {item.colorIndex && (
              <span
                className={styles.dot}
                style={{
                  backgroundColor:
                    COLOR_INDEX_MAP[item.colorIndex] ?? COLOR_INDEX_MAP[1],
                }}
              />
            )}
            <span className={styles.label}>{item.label}</span>
            {item.value && <span className={styles.value}>{item.value}</span>}
          </div>
        ))}
      </div>
    );
  }
);

ChartTooltip.displayName = 'ChartTooltip';
