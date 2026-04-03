import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DialogBodyProps } from './Dialog.types';
import styles from './DialogBody.module.css';

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {children}
      </div>
    );
  }
);

DialogBody.displayName = 'DialogBody';
