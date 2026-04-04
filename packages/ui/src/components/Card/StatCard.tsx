import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import type { StatCardProps } from './StatCard.types';
import styles from './StatCard.module.css';

export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, trend, action, className, children, ...rest }, ref) => {
    return (
      <Card ref={ref} className={cn(styles.root, className)} {...rest}>
        <CardHeader title={title} action={action} />
        <CardContent>
          <div className={styles.metric}>
            <span className={styles.value}>{value}</span>
            {trend}
          </div>
          {children && <div className={styles.chart}>{children}</div>}
        </CardContent>
      </Card>
    );
  }
);

StatCard.displayName = 'StatCard';
