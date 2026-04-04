import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { TagStatusProps, TagStatusType } from './Tag.types';
import styles from './TagStatus.module.css';

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6l2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M3 3l6 6M9 3l-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="9" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 1.5v2M8 1.5v2M1.5 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M8.5 1.5l2 2L4 10H2v-2l6.5-6.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M6 1l4 5-4 5-4-5 4-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const statusIcons: Record<TagStatusType, () => JSX.Element> = {
  active: CheckIcon,
  archived: XIcon,
  scheduled: CalendarIcon,
  draft: PencilIcon,
  new: DiamondIcon,
};

const statusLabels: Record<TagStatusType, string> = {
  active: 'Active',
  archived: 'Archived',
  scheduled: 'Scheduled',
  draft: 'Draft',
  new: 'New',
};

export const TagStatus = forwardRef<HTMLSpanElement, TagStatusProps>(
  (
    {
      status,
      variant = 'filled',
      size = 'md',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const StatusIcon = statusIcons[status];

    return (
      <span
        ref={ref}
        className={cn(
          styles.root,
          styles[status],
          styles[variant],
          styles[size],
          className
        )}
        {...rest}
      >
        <span className={styles.icon}><StatusIcon /></span>
        <span className={styles.label}>{children || statusLabels[status]}</span>
      </span>
    );
  }
);

TagStatus.displayName = 'TagStatus';
