import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ButtonLinkProps } from './ButtonLink.types';
import styles from './ButtonLink.module.css';

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      color = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={cn(
          styles.root,
          styles[color],
          styles[size],
          disabled && styles.disabled,
          className
        )}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
      >
        {iconLeft && <span className={styles.iconSlot}>{iconLeft}</span>}
        {children}
        {iconRight && <span className={styles.iconSlot}>{iconRight}</span>}
      </a>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';
