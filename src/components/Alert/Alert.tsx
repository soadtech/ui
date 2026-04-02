import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { AlertProps, AlertStatus } from './Alert.types';
import styles from './Alert.module.css';

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

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 4L12 12M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const defaultIcons: Record<AlertStatus, JSX.Element> = {
  info: <InfoIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  error: <ErrorIcon />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      status = 'info',
      variant = 'solid',
      layout = 'inline',
      title,
      description,
      icon,
      onClose,
      actions,
      className,
      ...rest
    },
    ref
  ) => {
    const renderedIcon = icon ?? defaultIcons[status];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          styles.root,
          styles[variant],
          styles[status],
          styles[layout],
          className
        )}
        {...rest}
      >
        <span className={styles.statusIcon}>{renderedIcon}</span>

        <div className={styles.body}>
          <div className={styles.content}>
            <p className={styles.title}>{title}</p>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>
          {actions && <div className={styles.actions}>{actions}</div>}
        </div>

        {onClose && (
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close alert"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
