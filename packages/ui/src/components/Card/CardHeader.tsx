import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CardHeaderProps } from './Card.types';
import styles from './CardHeader.module.css';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (
    {
      title,
      icon,
      action,
      border = false,
      size = 'md',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          styles.root,
          styles[size],
          border && styles.border,
          className
        )}
        {...rest}
      >
        {(title || icon) && (
          <div className={styles.titleWrap}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {title != null && (
              <span className={styles.title}>{title}</span>
            )}
          </div>
        )}
        {action && <div className={styles.action}>{action}</div>}
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';
