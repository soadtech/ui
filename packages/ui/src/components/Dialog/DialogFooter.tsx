import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DialogFooterProps } from './Dialog.types';
import styles from './DialogFooter.module.css';

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  (
    {
      layout = 'horizontal',
      link,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[layout], className)}
        {...rest}
      >
        {link && <div className={styles.link}>{link}</div>}
        <div className={styles.actions}>{children}</div>
      </div>
    );
  }
);

DialogFooter.displayName = 'DialogFooter';
