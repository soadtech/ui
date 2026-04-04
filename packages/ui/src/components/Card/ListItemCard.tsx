import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import type { ListItemCardProps } from './ListItemCard.types';
import styles from './ListItemCard.module.css';

export const ListItemCard = forwardRef<HTMLDivElement, ListItemCardProps>(
  ({ title, action, items, className, ...rest }, ref) => {
    return (
      <Card ref={ref} className={cn(styles.root, className)} {...rest}>
        {title && <CardHeader title={title} action={action} border />}
        <div className={styles.list}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <div className={styles.content}>
                <span className={styles.itemTitle}>{item.title}</span>
                {item.description && (
                  <span className={styles.itemDescription}>
                    {item.description}
                  </span>
                )}
              </div>
              {item.value && <span className={styles.value}>{item.value}</span>}
              {item.action && (
                <span className={styles.action}>{item.action}</span>
              )}
            </div>
          ))}
        </div>
      </Card>
    );
  }
);

ListItemCard.displayName = 'ListItemCard';
