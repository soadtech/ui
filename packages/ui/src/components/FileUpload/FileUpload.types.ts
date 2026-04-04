import type { HTMLAttributes, ReactNode } from 'react';

/* ─── FileUpload (Dropzone) ─── */

export type FileUploadVariant = 'default' | 'landscape';
export type FileUploadStatus = 'idle' | 'uploading' | 'complete';

export interface FileUploadProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tall centered vs wider layout */
  variant?: FileUploadVariant;
  /** Visual state */
  status?: FileUploadStatus;
  /** 0–100 circular progress (uploading state) */
  progress?: number;
  /** Primary action text (blue link) */
  label?: string;
  /** Secondary helper text (gray) */
  description?: string;
  /** Bottom text (e.g. "Maximum file size: 20MB") */
  helperText?: string;
  /** File type filter for hidden input */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Cancel button callback (uploading state) */
  onCancel?: () => void;
  /** File selection/drop handler */
  onChange?: (files: File[]) => void;
}

/* ─── FileUploadInput (Compact inline) ─── */

export interface FileUploadInputProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Field label above */
  label?: string;
  /** Shown file name (placeholder if empty) */
  fileName?: string;
  /** Button text */
  buttonLabel?: string;
  /** Below-field helper text */
  helperText?: string;
  /** Visual state */
  status?: FileUploadStatus;
  /** Progress bar 0–100 (uploading state) */
  progress?: number;
  /** File type filter */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** File selection handler */
  onChange?: (files: File[]) => void;
}

/* ─── FileUploadIcon (Square icon) ─── */

export interface FileUploadIconProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Upload trigger icon */
  icon?: ReactNode;
  /** Text below square */
  label?: string;
  /** Text below label */
  description?: string;
  /** Image URL for preview */
  thumbnail?: string;
  /** File type filter */
  accept?: string;
  /** File selection handler */
  onChange?: (files: File[]) => void;
}

/* ─── FileUploadItem (File row) ─── */

export interface FileUploadItemProps extends HTMLAttributes<HTMLDivElement> {
  /** File name text */
  name: string;
  /** Left icon slot */
  icon?: ReactNode;
  /** Image URL for thumbnail (overrides icon) */
  thumbnail?: string;
  /** Right action slot (kebab menu, delete btn) */
  action?: ReactNode;
}
