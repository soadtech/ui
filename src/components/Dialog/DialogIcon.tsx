import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DialogIconProps, DialogIconStatus } from './Dialog.types';
import styles from './DialogIcon.module.css';

function InfoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 9V14M10 6.5V7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10L9 12.5L13.5 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5L18.5 17.5H1.5L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 8V12M10 14.5V15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 6V11M10 13.5V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultIcons: Record<DialogIconStatus, JSX.Element> = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

export const DialogIcon = forwardRef<HTMLDivElement, DialogIconProps>(
  ({ status, icon, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[status], className)}
        {...rest}
      >
        {icon ?? defaultIcons[status]}
      </div>
    );
  }
);

DialogIcon.displayName = 'DialogIcon';
