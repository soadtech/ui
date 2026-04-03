import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { useChartHover } from './useChartHover';
import { HoverTooltip } from './HoverTooltip';
import type { GridChartProps } from './GridChart.types';
import styles from './GridChart.module.css';

export const GridChart = forwardRef<HTMLDivElement, GridChartProps>(
  (
    { data, color = 'primary', cellSize = 16, gap = 3, className, style, ...rest },
    ref
  ) => {
    const { flat, cols, maxVal } = useMemo(() => {
      const f = data.flat();
      return {
        flat: f,
        cols: data[0]?.length ?? 0,
        maxVal: Math.max(...f, 1),
      };
    }, [data]);

    const { hover, show, hide } = useChartHover();

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[color], className)}
        style={
          {
            '--gc-cols': cols,
            '--gc-cell': `${cellSize}px`,
            '--gc-gap': `${gap}px`,
            ...style,
          } as React.CSSProperties
        }
        {...rest}
      >
        {flat.map((val, i) => (
          <div
            key={i}
            className={styles.cell}
            style={{ opacity: Math.max(0.1, val / maxVal) }}
            onMouseEnter={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const parentRect = e.currentTarget.parentElement!.getBoundingClientRect();
              show(
                rect.left - parentRect.left + rect.width / 2,
                rect.top - parentRect.top,
                <div>{val}</div>
              );
            }}
            onMouseLeave={hide}
          />
        ))}
        <HoverTooltip hover={hover} />
      </div>
    );
  }
);

GridChart.displayName = 'GridChart';
