import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TagProps } from './Tag.types';
import styles from './Tag.module.css';

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = 'filled',
      color = 'brand',
      size = 'md',
      icon,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          styles.root,
          styles[variant],
          styles[color],
          styles[size],
          className
        )}
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
      </span>
    );
  }
);

Tag.displayName = 'Tag';
