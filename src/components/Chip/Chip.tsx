import { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';
import type { ChipProps } from './Chip.types';
import styles from './Chip.module.css';

function DismissIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M9 3L3 9M3 3l6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant = 'filled',
      size = 'md',
      selected = false,
      disabled = false,
      icon,
      onDismiss,
      onClick,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;

      if ((e.key === 'Enter' || e.key === ' ') && onClick) {
        e.preventDefault();
        onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && onDismiss) {
        e.preventDefault();
        onDismiss();
      }

      rest.onKeyDown?.(e);
    };

    return (
      <div
        ref={ref}
        role={onClick ? 'button' : undefined}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          styles.root,
          styles[variant],
          styles[size],
          selected && styles.selected,
          disabled && styles.disabled,
          onDismiss && styles.dismissible,
          className
        )}
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
        {onDismiss && (
          <button
            type="button"
            tabIndex={-1}
            className={styles.dismiss}
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) onDismiss();
            }}
            aria-label="Dismiss"
          >
            <DismissIcon />
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = 'Chip';
