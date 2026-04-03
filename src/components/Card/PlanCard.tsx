import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import { Button } from '../Button/Button';
import type { PlanCardProps } from './PlanCard.types';
import styles from './PlanCard.module.css';

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const PlanCard = forwardRef<HTMLDivElement, PlanCardProps>(
  (
    {
      icon,
      title,
      description,
      price,
      period,
      features,
      recommended = false,
      current = false,
      actionLabel,
      onAction,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(styles.root, recommended && styles.recommended, className)}
        {...rest}
      >
        <div className={styles.header}>
          <div className={styles.titleRow}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.title}>{title}</span>
          </div>
          {recommended && <span className={styles.badge}>Recommended</span>}
          {current && <span className={styles.currentLabel}>Your Current Plan</span>}
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.pricing}>
          <span className={styles.price}>{price}</span>
          {period && <span className={styles.period}>{period}</span>}
        </div>

        {features && features.length > 0 && (
          <ul className={styles.features}>
            {features.map((f) => (
              <li
                key={f.text}
                className={cn(styles.feature, !f.included && styles.excluded)}
              >
                <span className={styles.featureIcon}>
                  {f.included ? <CheckIcon /> : <CrossIcon />}
                </span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        )}

        {actionLabel && (
          <div className={styles.action}>
            <Button
              variant={recommended ? 'fill' : 'outline'}
              size="md"
              onClick={onAction}
              className={styles.cta}
            >
              {actionLabel}
            </Button>
          </div>
        )}
      </Card>
    );
  }
);

PlanCard.displayName = 'PlanCard';
