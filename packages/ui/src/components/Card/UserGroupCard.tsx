import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import { Avatar } from '../Avatar/Avatar';
import { AvatarGroup } from '../Avatar/AvatarGroup';
import type { UserGroupCardProps } from './UserGroupCard.types';
import styles from './UserGroupCard.module.css';

export const UserGroupCard = forwardRef<HTMLDivElement, UserGroupCardProps>(
  (
    {
      title,
      description,
      value,
      avatars,
      avatarLimit,
      media,
      action,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(styles.root, className)}
        padding="md"
        {...rest}
      >
        {(title || description || value) && (
          <div className={styles.header}>
            <div className={styles.text}>
              {title && <span className={styles.title}>{title}</span>}
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </div>
            {value != null && <span className={styles.value}>{value}</span>}
          </div>
        )}

        {media && <div className={styles.media}>{media}</div>}

        {avatars && avatars.length > 0 && (
          <AvatarGroup size="sm" limit={avatarLimit}>
            {avatars.map((a, i) => (
              <Avatar key={i} src={a.src} initials={a.initials} />
            ))}
          </AvatarGroup>
        )}

        {action && <div className={styles.action}>{action}</div>}
      </Card>
    );
  }
);

UserGroupCard.displayName = 'UserGroupCard';
