import { forwardRef, useState, Children } from 'react';
import { cn } from '../../utils/cn';
import { TreeviewListContext, useTreeviewDepth } from './TreeviewListContext';
import type { TreeviewItemProps } from './TreeviewList.types';
import styles from './TreeviewItem.module.css';

/* ─── Inline SVG Icons ─── */

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M4.5 2.5L8 6L4.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H5.79289C6.05811 2.5 6.31246 2.60536 6.5 2.79289L7.70711 4H13.5C14.0523 4 14.5 4.44772 14.5 5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V3.5Z"
        fill="var(--st-color-primary)"
      />
    </svg>
  );
}

function FolderOpenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H5.79289C6.05811 2.5 6.31246 2.60536 6.5 2.79289L7.70711 4H13.5C14.0523 4 14.5 4.44772 14.5 5V6H3.5L1.5 12.5V3.5Z"
        fill="var(--st-color-primary)"
      />
      <path
        d="M3.5 6H14.5L12.8333 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5L3.5 6Z"
        fill="var(--st-color-primary)"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 1.5C2.94772 1.5 2.5 1.94772 2.5 2.5V13.5C2.5 14.0523 2.94772 14.5 3.5 14.5H12.5C13.0523 14.5 13.5 14.0523 13.5 13.5V5.5L9.5 1.5H3.5Z"
        fill="var(--st-color-neutral-400)"
      />
      <path
        d="M9.5 1.5V4.5C9.5 5.05228 9.94772 5.5 10.5 5.5H13.5"
        fill="var(--st-color-neutral-300)"
      />
    </svg>
  );
}

/* ─── Constants ─── */

const INDENT_PX = 24;
const CHEVRON_PLACEHOLDER_WIDTH = 12;

export const TreeviewItem = forwardRef<HTMLDivElement, TreeviewItemProps>(
  (
    {
      label,
      icon,
      disabled = false,
      selected = false,
      defaultExpanded = false,
      expanded,
      onExpandedChange,
      onSelect,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const depth = useTreeviewDepth();
    const isFolder = Children.count(children) > 0;

    const [internalOpen, setInternalOpen] = useState(defaultExpanded);
    const isOpen = expanded !== undefined ? expanded : internalOpen;

    const toggle = () => {
      if (disabled) return;

      if (isFolder) {
        const next = !isOpen;
        if (expanded === undefined) setInternalOpen(next);
        onExpandedChange?.(next);
      }

      onSelect?.();
    };

    const paddingLeft = depth * INDENT_PX;

    return (
      <div ref={ref} className={className} role="treeitem" aria-expanded={isFolder ? isOpen : undefined} {...rest}>
        <button
          type="button"
          disabled={disabled}
          className={cn(styles.trigger, selected && styles.selected)}
          style={{ paddingLeft: paddingLeft + 'px' }}
          onClick={toggle}
        >
          {isFolder ? (
            <span className={cn(styles.chevron, isOpen && styles.chevronOpen)}>
              <ChevronIcon />
            </span>
          ) : (
            <span style={{ width: CHEVRON_PLACEHOLDER_WIDTH }} />
          )}
          <span className={styles.icon}>
            {icon ?? (isFolder ? (isOpen ? <FolderOpenIcon /> : <FolderIcon />) : <FileIcon />)}
          </span>
          <span className={styles.label}>{label}</span>
        </button>

        {isFolder && (
          <div className={cn(styles.panel, isOpen && styles.panelOpen)}>
            <div className={styles.panelContent}>
              <TreeviewListContext.Provider value={{ depth: depth + 1 }}>
                {children}
              </TreeviewListContext.Provider>
            </div>
          </div>
        )}
      </div>
    );
  }
);

TreeviewItem.displayName = 'TreeviewItem';
