import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useTab } from './TabContext';
import type { TabAddProps } from './Tab.types';
import styles from './TabAdd.module.css';

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const TabAdd = forwardRef<HTMLButtonElement, TabAddProps>(
  ({ disabled, className, ...rest }, ref) => {
    const ctx = useTab();
    const isDisabled = disabled || ctx.disabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(styles.add, className)}
        aria-label="Add tab"
        {...rest}
      >
        <PlusIcon />
      </button>
    );
  }
);

TabAdd.displayName = 'TabAdd';
