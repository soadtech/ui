import type { HTMLAttributes, ReactNode } from 'react';

export type AvatarSize = 'xl' | 'lg' | 'md' | 'sm';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Image URL */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Initials to display when no image */
  initials?: string;
  /** Custom icon to display when no image or initials */
  icon?: ReactNode;
  /** Avatar size */
  size?: AvatarSize;
  /** Show online/status indicator */
  status?: boolean;
}
