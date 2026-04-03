import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TagBrandProps } from './Tag.types';
import styles from './TagBrand.module.css';

export const TagBrand = forwardRef<HTMLSpanElement, TagBrandProps>(
  (
    {
      variant = 'default',
      color = 'primary',
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
          styles[color],
          styles[variant],
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

TagBrand.displayName = 'TagBrand';
