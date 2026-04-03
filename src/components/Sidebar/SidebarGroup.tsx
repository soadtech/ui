import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useSidebar } from './SidebarContext';
import type { SidebarGroupProps } from './Sidebar.types';
import styles from './SidebarGroup.module.css';

export const SidebarGroup = forwardRef<HTMLDivElement, SidebarGroupProps>(
  ({ label, className, children, ...rest }, ref) => {
    const { collapsed } = useSidebar();

    return (
      <div ref={ref} className={cn(styles.group, className)} {...rest}>
        {label && !collapsed && (
          <div className={styles.label}>{label}</div>
        )}
        {children}
      </div>
    );
  }
);

SidebarGroup.displayName = 'SidebarGroup';
