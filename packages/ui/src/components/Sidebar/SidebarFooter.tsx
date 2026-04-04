import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { SidebarFooterProps } from './Sidebar.types';
import styles from './SidebarFooter.module.css';

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cn(styles.footer, className)} {...rest}>
      {children}
    </div>
  )
);

SidebarFooter.displayName = 'SidebarFooter';
