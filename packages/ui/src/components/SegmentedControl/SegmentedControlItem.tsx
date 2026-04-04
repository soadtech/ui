import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useSegmentedControl } from './SegmentedControlContext';
import type { SegmentedControlItemProps } from './SegmentedControl.types';
import styles from './SegmentedControlItem.module.css';

export const SegmentedControlItem = forwardRef<
  HTMLButtonElement,
  SegmentedControlItemProps
>(({ value, icon, disabled, className, children, ...rest }, ref) => {
  const ctx = useSegmentedControl();
  const isActive = ctx.value === value;
  const isDisabled = disabled || ctx.disabled;

  return (
    <button
      ref={ref}
      type="button"
      role="radio"
      aria-checked={isActive}
      disabled={isDisabled}
      className={cn(styles.item, isActive && styles.active, className)}
      onClick={() => ctx.onValueChange?.(value)}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.label}>{children}</span>}
    </button>
  );
});

SegmentedControlItem.displayName = 'SegmentedControlItem';
