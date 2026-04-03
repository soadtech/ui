import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { SidebarContentProps } from './Sidebar.types';
import styles from './SidebarContent.module.css';

export const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.content, className)} {...rest}>
      {children}
    </div>
  )
);

SidebarContent.displayName = 'SidebarContent';
