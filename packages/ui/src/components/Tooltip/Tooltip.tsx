import { forwardRef, useState, useRef, useCallback } from 'react';
import { cn } from '../../utils/cn';
import type { TooltipProps } from './Tooltip.types';
import styles from './Tooltip.module.css';

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      content,
      title,
      body,
      action,
      placement = 'top',
      align = 'center',
      variant = 'default',
      open,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const showTimerRef = useRef<ReturnType<typeof setTimeout>>();
    const hideTimerRef = useRef<ReturnType<typeof setTimeout>>();

    const isRich = !!(title || body || action);
    const hasContent = isRich || !!content;
    const visible = open !== undefined ? open : hovered;

    const show = useCallback(() => {
      clearTimeout(hideTimerRef.current);
      showTimerRef.current = setTimeout(() => setHovered(true), 200);
    }, []);

    const hide = useCallback(() => {
      clearTimeout(showTimerRef.current);
      hideTimerRef.current = setTimeout(() => setHovered(false), 100);
    }, []);

    const posClass = styles[`${placement}_${align}`];

    return (
      <span
        ref={ref}
        className={cn(styles.root, className)}
        onMouseEnter={open === undefined ? show : undefined}
        onMouseLeave={open === undefined ? hide : undefined}
        onFocus={open === undefined ? show : undefined}
        onBlur={open === undefined ? hide : undefined}
        {...rest}
      >
        {children}
        {hasContent && visible && (
          <span
            role="tooltip"
            className={cn(
              styles.tooltip,
              styles[variant],
              isRich ? styles.rich : styles.inline,
              posClass
            )}
          >
            <span className={styles.beak} />
            {isRich ? (
              <>
                {title && <span className={styles.title}>{title}</span>}
                {body && <span className={styles.body}>{body}</span>}
                {action && <span className={styles.action}>{action}</span>}
              </>
            ) : (
              <span className={styles.content}>{content}</span>
            )}
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = 'Tooltip';
