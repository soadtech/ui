import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { SidebarHeaderProps } from './Sidebar.types';
import styles from './SidebarHeader.module.css';

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.header, className)} {...rest}>
      {children}
    </div>
  )
);

SidebarHeader.displayName = 'SidebarHeader';
