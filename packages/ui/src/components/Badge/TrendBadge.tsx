import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TrendBadgeProps } from './TrendBadge.types';
import styles from './TrendBadge.module.css';

function TrendUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 10C2.5 8 4 5 5.5 6.5C7 8 8 4 10 3C12 2 13 1 13 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrendDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M1 4C2.5 6 4 9 5.5 7.5C7 6 8 10 10 11C12 12 13 13 13 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const TrendBadge = forwardRef<HTMLSpanElement, TrendBadgeProps>(
  (
    {
      value,
      direction = 'up',
      inverse = false,
      size = 'md',
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          styles.root,
          styles[direction],
          styles[size],
          inverse && styles.inverse,
          className
        )}
        {...rest}
      >
        {direction === 'up' ? <TrendUpIcon /> : <TrendDownIcon />}
        {value}
      </span>
    );
  }
);

TrendBadge.displayName = 'TrendBadge';
