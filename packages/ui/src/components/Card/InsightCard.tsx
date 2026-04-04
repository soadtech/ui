import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import { Button } from '../Button/Button';
import type { InsightCardProps } from './InsightCard.types';
import styles from './InsightCard.module.css';

export const InsightCard = forwardRef<HTMLDivElement, InsightCardProps>(
  (
    {
      icon,
      badge,
      title,
      description,
      variant = 'light',
      onDismiss,
      onApply,
      dismissLabel = 'Dismiss',
      applyLabel = 'Apply',
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(styles.root, styles[variant], className)}
        {...rest}
      >
        <div className={styles.body}>
          {icon && <span className={styles.icon}>{icon}</span>}
          <div className={styles.content}>
            {badge && <span className={styles.badge}>{badge}</span>}
            <span className={styles.title}>{title}</span>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        </div>
        {(onDismiss || onApply) && (
          <div className={styles.actions}>
            {onDismiss && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onDismiss}
                className={styles.dismissBtn}
              >
                {dismissLabel}
              </Button>
            )}
            {onApply && (
              <Button
                variant="fill"
                size="sm"
                onClick={onApply}
                className={styles.applyBtn}
              >
                {applyLabel}
              </Button>
            )}
          </div>
        )}
      </Card>
    );
  }
);

InsightCard.displayName = 'InsightCard';
