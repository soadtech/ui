import type { HTMLAttributes, ReactNode } from 'react';

export interface UserGroupAvatar {
  src?: string;
  initials?: string;
}

export interface UserGroupCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card title. */
  title?: string;
  /** Description text. */
  description?: string;
  /** Large value display. */
  value?: string | number;
  /** Avatar data array. */
  avatars?: UserGroupAvatar[];
  /** Max visible avatars. */
  avatarLimit?: number;
  /** Image grid or custom content. */
  media?: ReactNode;
  /** Action slot. */
  action?: ReactNode;
}
