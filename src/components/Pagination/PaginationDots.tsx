import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { PaginationDotsProps } from './PaginationDots.types';
import styles from './PaginationDots.module.css';

export const PaginationDots = forwardRef<HTMLElement, PaginationDotsProps>(
  (
    {
      count,
      activeIndex,
      onIndexChange,
      variant = 'dot',
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        aria-label="Pagination indicators"
        className={cn(styles.root, styles[variant], className)}
        {...rest}
      >
        <ol className={styles.list}>
          {Array.from({ length: count }, (_, i) => (
            <li key={i}>
              <button
                type="button"
                className={cn(
                  styles.indicator,
                  i === activeIndex && styles.indicatorActive
                )}
                disabled={disabled}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === activeIndex ? 'step' : undefined}
                onClick={() => onIndexChange?.(i)}
              />
            </li>
          ))}
        </ol>
      </nav>
    );
  }
);

PaginationDots.displayName = 'PaginationDots';
