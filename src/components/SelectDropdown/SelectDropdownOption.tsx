import { cn } from '../../utils/cn';
import type { SelectOption } from './SelectDropdown.types';
import styles from './SelectDropdownOption.module.css';

function CheckmarkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface SelectDropdownOptionProps {
  option: SelectOption;
  selected: boolean;
  highlighted: boolean;
  multiple: boolean;
  onSelect: (value: string) => void;
  onMouseEnter: () => void;
}

export function SelectDropdownOption({
  option,
  selected,
  highlighted,
  multiple,
  onSelect,
  onMouseEnter,
}: SelectDropdownOptionProps) {
  const handleClick = () => {
    if (!option.disabled) onSelect(option.value);
  };

  return (
    <div
      className={cn(
        styles.option,
        highlighted && styles.highlighted,
        selected && styles.selected,
        option.disabled && styles.disabled,
      )}
      role="option"
      aria-selected={selected}
      aria-disabled={option.disabled || undefined}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
    >
      {multiple && (
        <span className={styles.checkbox}>
          <span className={cn(styles.checkboxBox, selected && styles.checked)}>
            {selected && (
              <span className={styles.checkboxIcon}>
                <CheckmarkIcon />
              </span>
            )}
          </span>
        </span>
      )}

      <div className={styles.content}>
        <span className={styles.label}>{option.label}</span>
        {option.description && (
          <span className={styles.description}>{option.description}</span>
        )}
      </div>

      {!multiple && selected && (
        <span className={styles.checkIcon}>
          <CheckmarkIcon />
        </span>
      )}
    </div>
  );
}
