import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { KPIIndicatorProps } from './KPIIndicator.types';
import styles from './KPIIndicator.module.css';

export const KPIIndicator = forwardRef<HTMLDivElement, KPIIndicatorProps>(
  (
    { value, label, trend, description, size = 'md', className, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[size], className)}
        {...rest}
      >
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {trend && <span className={styles.trend}>{trend}</span>}
        </div>
        {description && <span className={styles.description}>{description}</span>}
      </div>
    );
  }
);

KPIIndicator.displayName = 'KPIIndicator';
