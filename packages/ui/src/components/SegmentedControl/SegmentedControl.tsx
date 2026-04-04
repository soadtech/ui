import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { SegmentedControlContext } from './SegmentedControlContext';
import type { SegmentedControlProps } from './SegmentedControl.types';
import styles from './SegmentedControl.module.css';

export const SegmentedControl = forwardRef<
  HTMLDivElement,
  SegmentedControlProps
>(
  (
    {
      size = 'md',
      variant = 'button',
      value,
      onValueChange,
      disabled = false,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <SegmentedControlContext.Provider
        value={{ value, onValueChange, disabled }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            styles.root,
            styles[size],
            styles[variant],
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </SegmentedControlContext.Provider>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';
