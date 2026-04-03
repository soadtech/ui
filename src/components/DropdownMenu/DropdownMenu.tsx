import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DropdownMenuProps } from './DropdownMenu.types';
import styles from './DropdownMenu.module.css';

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        role="menu"
        className={cn(styles.root, className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';
