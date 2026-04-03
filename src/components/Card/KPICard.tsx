import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import type { KPICardProps } from './KPICard.types';
import styles from './KPICard.module.css';

export const KPICard = forwardRef<HTMLDivElement, KPICardProps>(
  ({ items, columns, className, ...rest }, ref) => {
    const colCount = columns ?? items.length;

    return (
      <Card ref={ref} className={cn(styles.root, className)} {...rest}>
        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${colCount}, 1fr)` }}
        >
          {items.map((item) => (
            <div key={item.label} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          ))}
        </div>
      </Card>
    );
  }
);

KPICard.displayName = 'KPICard';
