import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { TreeviewListContext } from './TreeviewListContext';
import type { TreeviewListProps } from './TreeviewList.types';
import styles from './TreeviewList.module.css';

export const TreeviewList = forwardRef<HTMLDivElement, TreeviewListProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <TreeviewListContext.Provider value={{ depth: 0 }}>
        <div ref={ref} role="tree" className={cn(styles.root, className)} {...rest}>
          {children}
        </div>
      </TreeviewListContext.Provider>
    );
  }
);

TreeviewList.displayName = 'TreeviewList';
