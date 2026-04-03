import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import { VerifiedBadge } from './Persona';
import type { PersonaMessageProps, PersonaSize } from './Persona.types';
import styles from './PersonaMessage.module.css';

const avatarSizeMap: Record<PersonaSize, 'lg' | 'md' | 'sm'> = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

export const PersonaMessage = forwardRef<HTMLDivElement, PersonaMessageProps>(
  (
    {
      avatarSrc,
      avatarAlt = '',
      name,
      username,
      verified = false,
      message,
      time,
      badgeCount,
      unread = false,
      size = 'md',
      className,
      ...rest
    },
    ref
  ) => {
    const showBadge = badgeCount != null && badgeCount > 0;

    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[size], className)}
        tabIndex={0}
        {...rest}
      >
        <Avatar src={avatarSrc} alt={avatarAlt} size={avatarSizeMap[size]} />
        <div className={styles.body}>
          <div className={styles.header}>
            <span className={styles.nameRow}>
              <span className={styles.name}>{name}</span>
              {verified && <VerifiedBadge />}
              {username && <span className={styles.username}>{username}</span>}
            </span>
            <span className={styles.trailing}>
              {time && <span className={styles.time}>{time}</span>}
              {unread && <span className={styles.unreadDot} />}
            </span>
          </div>
          {message && <span className={styles.message}>{message}</span>}
        </div>
        {showBadge && (
          <div className={styles.badgeArea}>
            {size === 'sm' ? (
              <span className={styles.badgeDot} />
            ) : (
              <span className={styles.badge}>{badgeCount}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

PersonaMessage.displayName = 'PersonaMessage';
