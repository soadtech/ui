import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { SidebarDividerProps } from './Sidebar.types';
import styles from './SidebarDivider.module.css';

export const SidebarDivider = forwardRef<HTMLDivElement, SidebarDividerProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      role="separator"
      className={cn(styles.divider, className)}
      {...rest}
    />
  )
);

SidebarDivider.displayName = 'SidebarDivider';
