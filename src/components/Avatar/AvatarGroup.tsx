import { forwardRef, Children, isValidElement, cloneElement } from 'react';
import { cn } from '../../utils/cn';
import type { AvatarGroupProps } from './AvatarGroup.types';
import type { AvatarSize } from './Avatar.types';
import styles from './AvatarGroup.module.css';

const sizeMap: Record<AvatarSize, string> = {
  xl: styles.xl,
  lg: styles.lg,
  md: styles.md,
  sm: styles.sm,
};

const counterSizeMap: Record<AvatarSize, string> = {
  xl: styles.counterXl,
  lg: styles.counterLg,
  md: styles.counterMd,
  sm: styles.counterSm,
};

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      size = 'md',
      spacing = 'overlap',
      limit,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const childArray = Children.toArray(children).filter(isValidElement);
    const total = childArray.length;
    const visibleChildren =
      limit && total > limit ? childArray.slice(0, limit) : childArray;
    const excess = limit && total > limit ? total - limit : 0;

    return (
      <div
        ref={ref}
        className={cn(
          styles.root,
          styles[spacing],
          sizeMap[size],
          className
        )}
        {...rest}
      >
        {visibleChildren.map((child) =>
          cloneElement(child as React.ReactElement<{ size?: AvatarSize }>, {
            size,
          })
        )}
        {excess > 0 && (
          <span className={cn(styles.counter, counterSizeMap[size])}>
            +{excess}
          </span>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
