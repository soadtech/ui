import { useState, useRef, useEffect, useCallback } from 'react';
import type { SelectOption, SelectOptionGroup } from './SelectDropdown.types';
import { SelectDropdownOption } from './SelectDropdownOption';
import styles from './SelectDropdownOverlay.module.css';

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.833313 7.33331C0.833313 3.74346 3.74346 0.833313 7.33331 0.833313C10.9232 0.833313 13.8333 3.74347 13.8333 7.33331C13.8333 8.94827 13.2444 10.4257 12.2695 11.5624L15.0202 14.3131C15.2155 14.5084 15.2155 14.8249 15.0202 15.0202C14.8249 15.2155 14.5084 15.2155 14.3131 15.0202L11.5624 12.2695C10.4257 13.2444 8.94827 13.8333 7.33331 13.8333C3.74347 13.8333 0.833313 10.9232 0.833313 7.33331ZM7.33331 1.83331C4.29575 1.83331 1.83331 4.29575 1.83331 7.33331C1.83331 10.3709 4.29575 12.8333 7.33331 12.8333C10.3709 12.8333 12.8333 10.3709 12.8333 7.33331C12.8333 4.29575 10.3709 1.83331 7.33331 1.83331Z"
        fill="currentColor"
      />
    </svg>
  );
}

function isGroup(
  item: SelectOption | SelectOptionGroup,
): item is SelectOptionGroup {
  return 'options' in item;
}

interface SelectDropdownOverlayProps {
  items: (SelectOption | SelectOptionGroup)[];
  selectedValues: string[];
  multiple: boolean;
  searchable: boolean;
  searchPlaceholder: string;
  noOptionsText: string;
  onSelect: (value: string) => void;
}

export function SelectDropdownOverlay({
  items,
  selectedValues,
  multiple,
  searchable,
  searchPlaceholder,
  noOptionsText,
  onSelect,
}: SelectDropdownOverlayProps) {
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Flatten options with group info for filtering and keyboard nav
  const flattenItems = useCallback(
    (q: string) => {
      const result: { option: SelectOption; groupLabel?: string }[] = [];
      const lowerQ = q.toLowerCase();

      for (const item of items) {
        if (isGroup(item)) {
          const filtered = item.options.filter((o) =>
            o.label.toLowerCase().includes(lowerQ),
          );
          for (const opt of filtered) {
            result.push({ option: opt, groupLabel: item.label });
          }
        } else {
          if (item.label.toLowerCase().includes(lowerQ)) {
            result.push({ option: item });
          }
        }
      }

      return result;
    },
    [items],
  );

  const filtered = flattenItems(query);

  // Reset highlight when query changes
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [query]);

  // Auto-focus search input
  useEffect(() => {
    if (searchable) searchRef.current?.focus();
  }, [searchable]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          let next = prev + 1;
          while (next < filtered.length && filtered[next].option.disabled) {
            next++;
          }
          return next < filtered.length ? next : prev;
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => {
          let next = prev - 1;
          while (next >= 0 && filtered[next].option.disabled) {
            next--;
          }
          return next >= 0 ? next : prev;
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (
          highlightedIndex >= 0 &&
          highlightedIndex < filtered.length &&
          !filtered[highlightedIndex].option.disabled
        ) {
          onSelect(filtered[highlightedIndex].option.value);
        }
      }
    },
    [filtered, highlightedIndex, onSelect],
  );

  // Scroll highlighted option into view
  useEffect(() => {
    if (highlightedIndex < 0 || !listRef.current) return;
    const el = listRef.current.querySelectorAll('[role="option"]')[
      highlightedIndex
    ] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [highlightedIndex]);

  // Render options with group headers and dividers
  const renderOptions = () => {
    if (filtered.length === 0) {
      return <div className={styles.noOptions}>{noOptionsText}</div>;
    }

    const elements: React.ReactNode[] = [];
    let lastGroup: string | undefined;
    let flatIndex = 0;

    for (const entry of filtered) {
      if (entry.groupLabel && entry.groupLabel !== lastGroup) {
        if (lastGroup !== undefined) {
          elements.push(
            <div key={`div-${entry.groupLabel}`} className={styles.divider} />,
          );
        }
        elements.push(
          <span key={`grp-${entry.groupLabel}`} className={styles.groupLabel}>
            {entry.groupLabel}
          </span>,
        );
        lastGroup = entry.groupLabel;
      }

      const idx = flatIndex;
      elements.push(
        <SelectDropdownOption
          key={entry.option.value}
          option={entry.option}
          selected={selectedValues.includes(entry.option.value)}
          highlighted={highlightedIndex === idx}
          multiple={multiple}
          onSelect={onSelect}
          onMouseEnter={() => setHighlightedIndex(idx)}
        />,
      );
      flatIndex++;
    }

    return elements;
  };

  return (
    <div className={styles.overlay} onKeyDown={handleKeyDown}>
      {searchable && (
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>
            <SearchIcon />
          </span>
          <input
            ref={searchRef}
            className={styles.searchInput}
            type="text"
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      )}
      <div className={styles.optionList} role="listbox" ref={listRef}>
        {renderOptions()}
      </div>
    </div>
  );
}
