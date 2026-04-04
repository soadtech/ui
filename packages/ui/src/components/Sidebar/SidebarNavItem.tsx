import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { useSidebar } from './SidebarContext';
import type { SidebarNavItemProps } from './Sidebar.types';
import styles from './SidebarNavItem.module.css';

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const SidebarNavItem = forwardRef<HTMLDivElement, SidebarNavItemProps>(
  (
    {
      icon,
      label,
      active = false,
      disabled = false,
      badge,
      onSelect,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const { collapsed } = useSidebar();
    const [open, setOpen] = useState(false);
    const hasSubmenu = !!children;

    const handleClick = () => {
      if (disabled) return;
      if (hasSubmenu && !collapsed) {
        setOpen((prev) => !prev);
      }
      onSelect?.();
    };

    if (collapsed) {
      return (
        <div ref={ref} className={cn(styles.wrapper, className)} {...rest}>
          <button
            type="button"
            disabled={disabled}
            className={cn(styles.iconButton, active && styles.active)}
            onClick={onSelect}
            title={label}
          >
            <span className={styles.iconSlot}>{icon}</span>
            {badge != null && <span className={styles.badgeDot} />}
          </button>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn(styles.wrapper, className)} {...rest}>
        <button
          type="button"
          disabled={disabled}
          className={cn(styles.trigger, active && styles.active)}
          onClick={handleClick}
          aria-expanded={hasSubmenu ? open : undefined}
        >
          <span className={styles.iconSlot}>{icon}</span>
          <span className={styles.label}>{label}</span>
          {badge != null && <span className={styles.badge}>{badge}</span>}
          {hasSubmenu && (
            <span className={cn(styles.chevron, open && styles.chevronOpen)}>
              <ChevronRightIcon />
            </span>
          )}
        </button>

        {hasSubmenu && (
          <div className={cn(styles.panel, open && styles.panelOpen)}>
            <div className={styles.panelContent}>
              <div className={styles.panelInner}>{children}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

SidebarNavItem.displayName = 'SidebarNavItem';
