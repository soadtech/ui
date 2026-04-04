import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DropdownMenuItemProps } from './DropdownMenu.types';
import styles from './DropdownMenuItem.module.css';

export const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>(
  (
    {
      icon,
      shortcut,
      suffix,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="menuitem"
        tabIndex={disabled ? undefined : 0}
        aria-disabled={disabled || undefined}
        className={cn(styles.root, disabled && styles.disabled, className)}
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
        {shortcut && <span className={styles.shortcut}>{shortcut}</span>}
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    );
  }
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
