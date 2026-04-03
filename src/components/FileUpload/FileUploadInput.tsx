import { forwardRef, useRef } from 'react';
import { cn } from '../../utils/cn';
import type { FileUploadInputProps } from './FileUpload.types';
import styles from './FileUploadInput.module.css';

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill="currentColor"
      />
      <path
        d="M22 10.75H18C14.58 10.75 13.25 9.42 13.25 6V2C13.25 1.7 13.43 1.42 13.71 1.31C13.99 1.19 14.31 1.26 14.53 1.47L22.53 9.47C22.74 9.68 22.81 10.01 22.69 10.29C22.57 10.57 22.3 10.75 22 10.75ZM14.75 3.81V6C14.75 8.58 15.42 9.25 18 9.25H20.19L14.75 3.81Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const FileUploadInput = forwardRef<HTMLDivElement, FileUploadInputProps>(
  (
    {
      label,
      fileName,
      buttonLabel = 'Select file',
      helperText,
      status = 'idle',
      progress = 0,
      accept,
      multiple = false,
      disabled = false,
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      if (!disabled) {
        inputRef.current?.click();
      }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.length) {
        onChange?.(Array.from(files));
      }
      e.target.value = '';
    };

    return (
      <div
        ref={ref}
        className={cn(
          styles.root,
          disabled && styles.disabled,
          styles[status],
          className
        )}
        {...rest}
      >
        {label && <span className={styles.label}>{label}</span>}
        <div className={styles.row}>
          <div className={styles.inputArea}>
            <span className={styles.fileIcon}>
              <FileIcon />
            </span>
            <span
              className={cn(
                styles.fileName,
                !fileName && styles.placeholder
              )}
            >
              {fileName || 'No file selected'}
            </span>
            {status === 'uploading' && (
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                />
              </div>
            )}
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={handleClick}
            disabled={disabled}
          >
            {buttonLabel}
          </button>
        </div>
        {helperText && <span className={styles.helperText}>{helperText}</span>}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className={styles.input}
          tabIndex={-1}
        />
      </div>
    );
  }
);

FileUploadInput.displayName = 'FileUploadInput';
