import type { HTMLAttributes, ReactNode } from 'react';

export type NotificationCategory =
  | 'warning'
  | 'success'
  | 'intelligence'
  | 'team';

export interface NotificationItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Determines icon & color scheme */
  category: NotificationCategory;
  /** Bold title text */
  title: string;
  /** Timestamp text e.g. "1h ago" */
  time?: string;
  /** Description below title */
  description?: string;
  /** Shows blue unread dot */
  unread?: boolean;
  /** Custom icon override */
  icon?: ReactNode;
  /** Avatar URL for `team` category */
  avatarSrc?: string;
  /** Avatar alt text */
  avatarAlt?: string;
  /** Action button slot */
  action?: ReactNode;
  /** Trash icon click handler (hover-visible) */
  onDelete?: () => void;
  /** Reply input slot */
  replyArea?: ReactNode;
}

export interface NotificationReplyProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Replying user avatar URL */
  avatarSrc?: string;
  /** Avatar alt text */
  avatarAlt?: string;
  /** Controlled input value */
  value?: string;
  /** Input change handler */
  onValueChange?: (value: string) => void;
  /** Chip(s) rendered before input */
  mentions?: ReactNode;
  /** Input placeholder text */
  placeholder?: string;
  /** Send Reply click handler */
  onSend?: () => void;
  /** Cancel click handler */
  onCancel?: () => void;
}

export interface NotificationPanelProps
  extends HTMLAttributes<HTMLDivElement> {
  /** Header title */
  title?: string;
  /** Close button handler */
  onClose?: () => void;
  /** Footer button text */
  footerLabel?: string;
  /** Footer button click handler */
  onFooterClick?: () => void;
}
