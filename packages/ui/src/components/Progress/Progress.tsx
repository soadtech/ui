import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ProgressProps } from './Progress.types';
import styles from './Progress.module.css';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      label,
      value = 0,
      showValue = true,
      className,
      ...rest
    },
    ref
  ) => {
    const clamped = Math.max(0, Math.min(100, value));

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {label && <span className={styles.label}>{label}</span>}
        <div
          className={styles.track}
          role="progressbar"
          aria-valuenow={clamped}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        >
          <div
            className={styles.fill}
            style={{ width: `${clamped}%` }}
          />
        </div>
        {showValue && (
          <span className={styles.value}>{clamped}%</span>
        )}
      </div>
    );
  }
);

Progress.displayName = 'Progress';
