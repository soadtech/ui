import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../Button';
import type { NotificationPanelProps } from './Notification.types';
import styles from './NotificationPanel.module.css';

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const NotificationPanel = forwardRef<HTMLDivElement, NotificationPanelProps>(
  (
    {
      title = 'Notifications',
      onClose,
      footerLabel = 'See all notifications',
      onFooterClick,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {onClose && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close notifications"
            >
              <CloseIcon />
            </button>
          )}
        </div>

        <div className={styles.body}>{children}</div>

        {onFooterClick && (
          <div className={styles.footer}>
            <Button
              variant="fill"
              size="sm"
              className={styles.footerBtn}
              onClick={onFooterClick}
            >
              {footerLabel}
            </Button>
          </div>
        )}
      </div>
    );
  }
);

NotificationPanel.displayName = 'NotificationPanel';
