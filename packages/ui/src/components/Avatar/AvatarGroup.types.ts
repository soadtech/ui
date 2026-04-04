import type { HTMLAttributes } from 'react';
import type { AvatarSize } from './Avatar.types';

export type AvatarGroupSpacing = 'overlap' | 'spaced';

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar size applied to all children */
  size?: AvatarSize;
  /** Spacing mode: overlap (negative margin) or spaced (gap) */
  spacing?: AvatarGroupSpacing;
  /** Max visible avatars — excess shown as "+N" counter */
  limit?: number;
}
