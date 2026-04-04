import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { BreadcrumbItemProps } from './Breadcrumbs.types';
import styles from './Breadcrumbs.module.css';

export const BreadcrumbItem = forwardRef<HTMLElement, BreadcrumbItemProps>(
  ({ href, icon, _active = false, className, children, ...rest }, ref) => {
    const content = (
      <>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children && <span>{children}</span>}
      </>
    );

    if (_active || !href) {
      return (
        <span
          ref={ref as React.Ref<HTMLSpanElement>}
          className={cn(styles.item, _active && styles.active, className)}
          aria-current={_active ? 'page' : undefined}
          {...rest}
        >
          {content}
        </span>
      );
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn(styles.item, styles.link, className)}
        {...rest}
      >
        {content}
      </a>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
