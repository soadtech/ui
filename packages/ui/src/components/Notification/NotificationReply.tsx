import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import type { NotificationReplyProps } from './Notification.types';
import styles from './NotificationReply.module.css';

export const NotificationReply = forwardRef<HTMLDivElement, NotificationReplyProps>(
  (
    {
      avatarSrc,
      avatarAlt = '',
      value = '',
      onValueChange,
      mentions,
      placeholder = 'Reply to Emma...',
      onSend,
      onCancel,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <div className={styles.inputRow}>
          <Avatar src={avatarSrc} alt={avatarAlt} size="sm" />
          <div className={styles.inputWrap}>
            {mentions && <span className={styles.mentions}>{mentions}</span>}
            <input
              type="text"
              className={styles.input}
              value={value}
              onChange={(e) => onValueChange?.(e.target.value)}
              placeholder={placeholder}
            />
          </div>
        </div>
        <div className={styles.actions}>
          <Button size="sm" variant="fill" onClick={onSend}>
            Send Reply
          </Button>
          <Button size="sm" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }
);

NotificationReply.displayName = 'NotificationReply';
