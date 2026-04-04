import { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { DialogContext } from './DialogContext';
import type { DialogProps } from './Dialog.types';
import styles from './Dialog.module.css';

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      onClose,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // Escape key handler
    useEffect(() => {
      if (!open || !closeOnEscape) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, closeOnEscape, onClose]);

    // Body scroll lock
    useEffect(() => {
      if (!open) return;

      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }, [open]);

    if (!open) return null;

    return createPortal(
      <div
        className={styles.overlay}
        onClick={closeOnOverlayClick ? onClose : undefined}
      >
        <DialogContext.Provider value={{ onClose }}>
          <div
            ref={ref}
            role="dialog"
            aria-modal="true"
            className={cn(styles.panel, className)}
            onClick={(e) => e.stopPropagation()}
            {...rest}
          >
            {children}
          </div>
        </DialogContext.Provider>
      </div>,
      document.body
    );
  }
);

Dialog.displayName = 'Dialog';
