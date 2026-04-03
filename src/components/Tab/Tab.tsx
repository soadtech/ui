import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { TabContext } from './TabContext';
import type { TabProps } from './Tab.types';
import styles from './Tab.module.css';

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  (
    {
      variant = 'basic',
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
      <TabContext.Provider value={{ value, onValueChange, variant, disabled }}>
        <div
          ref={ref}
          role="tablist"
          className={cn(styles.root, styles[variant], className)}
          {...rest}
        >
          {children}
        </div>
      </TabContext.Provider>
    );
  }
);

Tab.displayName = 'Tab';
