import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DropdownMenuHeaderProps } from './DropdownMenu.types';
import styles from './DropdownMenuHeader.module.css';

export const DropdownMenuHeader = forwardRef<
  HTMLDivElement,
  DropdownMenuHeaderProps
>(({ className, children, ...rest }, ref) => {
  return (
    <div ref={ref} className={cn(styles.root, className)} {...rest}>
      {children}
    </div>
  );
});

DropdownMenuHeader.displayName = 'DropdownMenuHeader';
