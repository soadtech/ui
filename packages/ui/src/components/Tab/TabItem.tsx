import { forwardRef } from 'react';
import type { KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';
import { useTab } from './TabContext';
import type { TabItemProps } from './Tab.types';
import styles from './TabItem.module.css';

function CloseIcon() {
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

export const TabItem = forwardRef<HTMLDivElement, TabItemProps>(
  ({ value, icon, badge, onClose, disabled, className, children, ...rest }, ref) => {
    const ctx = useTab();
    const isActive = ctx.value === value;
    const isDisabled = disabled || ctx.disabled;
    const variant = ctx.variant;

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (isDisabled) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ctx.onValueChange?.(value);
      }

      if ((e.key === 'Delete' || e.key === 'Backspace') && variant === 'dynamic' && onClose) {
        e.preventDefault();
        onClose();
      }

      rest.onKeyDown?.(e);
    };

    return (
      <div
        ref={ref}
        role="tab"
        tabIndex={isDisabled ? -1 : 0}
        aria-selected={isActive}
        aria-disabled={isDisabled || undefined}
        className={cn(
          styles.item,
          styles[variant],
          isActive && styles.active,
          isDisabled && styles.disabled,
          className
        )}
        onClick={isDisabled ? undefined : () => ctx.onValueChange?.(value)}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
        {badge != null && variant === 'basic' && (
          <span className={styles.badge}>{badge}</span>
        )}
        {onClose && variant === 'dynamic' && (
          <button
            type="button"
            tabIndex={-1}
            className={cn(styles.close, isActive && styles.closeActive)}
            onClick={(e) => {
              e.stopPropagation();
              if (!isDisabled) onClose();
            }}
            aria-label="Close tab"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

TabItem.displayName = 'TabItem';
