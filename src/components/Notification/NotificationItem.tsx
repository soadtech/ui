import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import type { NotificationCategory, NotificationItemProps } from './Notification.types';
import styles from './NotificationItem.module.css';

/* ═══ Inline SVGs ═══ */

function WarningIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 2L17 16H1L9 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 7V11M9 13.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M1 1H3L3.6 4M3.6 4H17L14 11H5L3.6 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="15" r="1.5" fill="currentColor" />
      <circle cx="13" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M2 14L6 9L10 11L16 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 4H16V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2 4H14M5.5 4V2.5H10.5V4M6.5 7V11.5M9.5 7V11.5M3.5 4L4.5 13.5H11.5L12.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ═══ Default icon map ═══ */

const defaultIcons: Record<
  Exclude<NotificationCategory, 'team'>,
  JSX.Element
> = {
  warning: <WarningIcon />,
  success: <CartIcon />,
  intelligence: <ChartIcon />,
};

/* ═══ NotificationItem ═══ */

export const NotificationItem = forwardRef<HTMLDivElement, NotificationItemProps>(
  (
    {
      category,
      title,
      time,
      description,
      unread = false,
      icon,
      avatarSrc,
      avatarAlt = '',
      action,
      onDelete,
      replyArea,
      className,
      ...rest
    },
    ref
  ) => {
    const isTeam = category === 'team';

    const renderedLeading = isTeam ? (
      <Avatar src={avatarSrc} alt={avatarAlt} size="md" />
    ) : (
      <span className={cn(styles.iconCircle, styles[category])}>
        {icon ?? defaultIcons[category]}
      </span>
    );

    return (
      <div
        ref={ref}
        className={cn(styles.root, unread && styles.unread, className)}
        {...rest}
      >
        <div className={styles.leading}>{renderedLeading}</div>

        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            {time && <span className={styles.time}>{time}</span>}
          </div>
          {description && <p className={styles.description}>{description}</p>}
          {action && <div className={styles.action}>{action}</div>}
          {replyArea && <div className={styles.replySlot}>{replyArea}</div>}
        </div>

        <div className={styles.trailing}>
          {unread && <span className={styles.unreadDot} />}
          {onDelete && (
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={onDelete}
              aria-label="Delete notification"
            >
              <TrashIcon />
            </button>
          )}
        </div>
      </div>
    );
  }
);

NotificationItem.displayName = 'NotificationItem';
