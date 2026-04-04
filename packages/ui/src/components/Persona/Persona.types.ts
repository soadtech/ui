import type { HTMLAttributes, ReactNode } from 'react';

export type PersonaSize = 'lg' | 'md' | 'sm';

export interface PersonaProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL */
  avatarSrc?: string;
  /** Alt text for avatar */
  avatarAlt?: string;
  /** Display name */
  name: string;
  /** Username e.g. "@johndoe" */
  username?: string;
  /** Show verified badge */
  verified?: boolean;
  /** Size variant */
  size?: PersonaSize;
}

export interface PersonaMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL */
  avatarSrc?: string;
  /** Alt text for avatar */
  avatarAlt?: string;
  /** Display name */
  name: string;
  /** Username e.g. "@johndoe" */
  username?: string;
  /** Show verified badge */
  verified?: boolean;
  /** Message preview text */
  message?: string;
  /** Timestamp e.g. "10m" */
  time?: string;
  /** Green badge count (lg/md = number, sm = dot) */
  badgeCount?: number;
  /** Blue unread dot */
  unread?: boolean;
  /** Size variant */
  size?: PersonaSize;
}

export interface PersonaActionProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL */
  avatarSrc?: string;
  /** Alt text for avatar */
  avatarAlt?: string;
  /** Display name (rendered bold) */
  name: string;
  /** Action description e.g. "commented on" */
  actionText?: string;
  /** Action target e.g. "Project X" (rendered bold) */
  actionTarget?: string;
  /** Timestamp e.g. "6 November 2025 - 9:12 PM" */
  timestamp?: string;
  /** Size variant */
  size?: PersonaSize;
}

export interface MessageDropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Header title */
  title?: string;
  /** Close button handler */
  onClose?: () => void;
  /** Footer button text */
  footerLabel?: string;
  /** Footer button click handler */
  onFooterClick?: () => void;
  /** Message items */
  children?: ReactNode;
}
