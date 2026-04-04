import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { DropdownMenuDividerProps } from './DropdownMenu.types';
import styles from './DropdownMenuDivider.module.css';

export const DropdownMenuDivider = forwardRef<
  HTMLDivElement,
  DropdownMenuDividerProps
>(({ className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      role="separator"
      className={cn(styles.root, className)}
      {...rest}
    />
  );
});

DropdownMenuDivider.displayName = 'DropdownMenuDivider';
