import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ActionBarProps } from './ActionBar.types';
import styles from './ActionBar.module.css';

export const ActionBar = forwardRef<HTMLDivElement, ActionBarProps>(
  ({ align = 'start', className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="toolbar"
        className={cn(styles.root, styles[align], className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ActionBar.displayName = 'ActionBar';
