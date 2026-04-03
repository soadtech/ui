import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ChartActionProps } from './ChartAction.types';
import styles from './ChartAction.module.css';

export const ChartAction = forwardRef<HTMLDivElement, ChartActionProps>(
  ({ tabs, activeTab, onTabChange, actions, className, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        {tabs && tabs.length > 0 && (
          <div className={styles.tabs} role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                role="tab"
                aria-selected={activeTab === tab.value}
                className={cn(
                  styles.tab,
                  activeTab === tab.value && styles.active
                )}
                onClick={() => onTabChange?.(tab.value)}
                type="button"
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    );
  }
);

ChartAction.displayName = 'ChartAction';
