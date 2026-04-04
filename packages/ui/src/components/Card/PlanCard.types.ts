import type { HTMLAttributes } from 'react';
import type { ReactNode } from 'react';

export interface PlanCardFeature {
  text: string;
  included: boolean;
}

export interface PlanCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Plan icon. */
  icon?: ReactNode;
  /** Plan name. */
  title: string;
  /** Plan description. */
  description?: string;
  /** Price display (e.g. "$9.99"). */
  price: string;
  /** Billing period (e.g. "/month"). */
  period?: string;
  /** Feature list with included/excluded status. */
  features?: PlanCardFeature[];
  /** Highlighted border + badge. */
  recommended?: boolean;
  /** "Your Current Plan" label. */
  current?: boolean;
  /** CTA button text. */
  actionLabel?: string;
  /** CTA click handler. */
  onAction?: () => void;
}
