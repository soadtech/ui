import { forwardRef, useMemo } from 'react';
import { cn } from '../../utils/cn';
import { SidebarContext } from './SidebarContext';
import type { SidebarProps } from './Sidebar.types';
import styles from './Sidebar.module.css';

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      collapsed = false,
      expandedWidth = '240px',
      collapsedWidth = '64px',
      className,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const ctx = useMemo(() => ({ collapsed }), [collapsed]);

    return (
      <SidebarContext.Provider value={ctx}>
        <aside
          ref={ref}
          className={cn(styles.sidebar, collapsed && styles.collapsed, className)}
          style={{
            '--sb-expanded-width': expandedWidth,
            '--sb-collapsed-width': collapsedWidth,
            ...style,
          } as React.CSSProperties}
          {...rest}
        >
          {children}
        </aside>
      </SidebarContext.Provider>
    );
  }
);

Sidebar.displayName = 'Sidebar';
