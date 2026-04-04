import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { useDialog } from './DialogContext';
import type { DialogHeaderProps } from './Dialog.types';
import styles from './DialogHeader.module.css';

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

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  (
    {
      icon,
      title,
      description,
      onClose,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const ctx = useDialog();
    // undefined = use context; null = hide; function = use directly
    const closeHandler =
      onClose === undefined ? ctx?.onClose : onClose ?? undefined;

    return (
      <div
        ref={ref}
        className={cn(styles.root, className)}
        {...rest}
      >
        {icon && <span className={styles.icon}>{icon}</span>}

        {(title || description) && (
          <div className={styles.content}>
            {title && <p className={styles.title}>{title}</p>}
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>
        )}

        {children}

        {closeHandler && (
          <button
            type="button"
            className={styles.close}
            onClick={closeHandler}
            aria-label="Close dialog"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

DialogHeader.displayName = 'DialogHeader';
