import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.css';

const positionClass: Record<string, string> = {
  'right-top': styles.rightTop,
  'right-center': styles.rightCenter,
  'right-bottom': styles.rightBottom,
};

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      position = 'right-top',
      variant = 'primary',
      size = 'md',
      count,
      label,
      dot = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const hasPill = count !== undefined || label !== undefined;
    const showDot = !hasPill && dot;

    const renderIndicator = () => {
      if (count !== undefined) {
        return (
          <span
            className={cn(
              styles.indicator,
              styles.pill,
              styles[variant],
              styles[size],
              positionClass[position]
            )}
          >
            +{count}
          </span>
        );
      }

      if (label !== undefined) {
        return (
          <span
            className={cn(
              styles.indicator,
              styles.pill,
              styles[variant],
              styles[size],
              positionClass[position]
            )}
          >
            {label}
          </span>
        );
      }

      if (showDot) {
        return (
          <span
            className={cn(
              styles.indicator,
              styles.dot,
              styles[variant],
              styles[size],
              positionClass[position]
            )}
          />
        );
      }

      return null;
    };

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {children}
        {renderIndicator()}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
