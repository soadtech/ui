import type { HTMLAttributes, ReactNode } from 'react';

// ─── Tag ───

export type TagVariant = 'filled' | 'stroke';
export type TagColor = 'brand' | 'neutral' | 'inverse' | 'info' | 'success' | 'warning' | 'error';
export type TagSize = 'lg' | 'md' | 'sm';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  color?: TagColor;
  size?: TagSize;
  icon?: ReactNode;
}

// ─── TagStatus ───

export type TagStatusType = 'active' | 'archived' | 'scheduled' | 'draft' | 'new';
export type TagStatusSize = 'lg' | 'md';

export interface TagStatusProps extends HTMLAttributes<HTMLSpanElement> {
  status: TagStatusType;
  variant?: TagVariant;
  size?: TagStatusSize;
}

// ─── TagBrand ───

export type TagBrandVariant = 'default' | 'inverse';
export type TagBrandColor = 'primary' | 'secondary' | 'tertiary';

export interface TagBrandProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagBrandVariant;
  color?: TagBrandColor;
  size?: TagSize;
  icon?: ReactNode;
}
