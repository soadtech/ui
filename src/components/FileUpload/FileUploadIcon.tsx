import { forwardRef, useRef } from 'react';
import { cn } from '../../utils/cn';
import type { FileUploadIconProps } from './FileUpload.types';
import styles from './FileUploadIcon.module.css';

function GalleryAddIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 1.25C13.4142 1.25 13.75 1.58579 13.75 2C13.75 2.41421 13.4142 2.75 13 2.75H9C6.57397 2.75 5.0708 3.23974 4.15527 4.15527C3.23974 5.0708 2.75 6.57397 2.75 9V15C2.75 16.1128 2.85379 17.0313 3.05371 17.7881L7.18164 15.0166C8.17819 14.3481 9.56927 14.3703 10.54 15.0635L10.7285 15.2109L10.7354 15.2158L11.0654 15.5059H11.0645C11.5641 15.9293 12.4044 15.9278 12.9014 15.501V15.5L17.0615 11.9307C18.1225 11.0196 19.7974 11.0196 20.8584 11.9307L21.25 12.2666V10C21.25 9.58579 21.5858 9.25 22 9.25C22.4142 9.25 22.75 9.58579 22.75 10V15C22.75 17.574 22.2397 19.5708 20.9053 20.9053C19.5708 22.2397 17.574 22.75 15 22.75H9C6.42603 22.75 4.4292 22.2397 3.09473 20.9053C1.76026 19.5708 1.25 17.574 1.25 15V9C1.25 6.42603 1.76026 4.4292 3.09473 3.09473C4.4292 1.76026 6.42603 1.25 9 1.25H13ZM19.8809 13.0684C19.382 12.6404 18.5379 12.6404 18.0391 13.0684H18.0381L13.8779 16.6377C12.8169 17.5491 11.1421 17.5501 10.0811 16.6387L10.0752 16.6328L9.75098 16.3477C9.30287 15.9633 8.53421 15.9162 8.01758 16.2627L3.64453 19.1982C3.79675 19.4405 3.96616 19.6556 4.15527 19.8447C5.0708 20.7603 6.57397 21.25 9 21.25H15C17.426 21.25 18.9292 20.7603 19.8447 19.8447C20.7603 18.9292 21.25 17.426 21.25 15V14.2432L19.8809 13.0684ZM9 5.25C10.5188 5.25 11.75 6.48122 11.75 8C11.75 9.51878 10.5188 10.75 9 10.75C7.48122 10.75 6.25 9.51878 6.25 8C6.25 6.48122 7.48122 5.25 9 5.25ZM9 6.75C8.30964 6.75 7.75 7.30964 7.75 8C7.75 8.69036 8.30964 9.25 9 9.25C9.69036 9.25 10.25 8.69036 10.25 8C10.25 7.30964 9.69036 6.75 9 6.75ZM18.5 1.5C18.9142 1.5 19.25 1.83579 19.25 2.25V4.25H21.25C21.6642 4.25 22 4.58579 22 5C22 5.41421 21.6642 5.75 21.25 5.75H19.25V7.75C19.25 8.16421 18.9142 8.5 18.5 8.5C18.0858 8.5 17.75 8.16421 17.75 7.75V5.75H15.75C15.3358 5.75 15 5.41421 15 5C15 4.58579 15.3358 4.25 15.75 4.25H17.75V2.25C17.75 1.83579 18.0858 1.5 18.5 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const FileUploadIcon = forwardRef<HTMLDivElement, FileUploadIconProps>(
  (
    {
      icon,
      label = 'Click to upload',
      description = 'or drag and drop',
      thumbnail,
      accept,
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files?.length) {
        onChange?.(Array.from(files));
      }
      e.target.value = '';
    };

    return (
      <div ref={ref} className={cn(styles.root, className)} {...rest}>
        <div
          className={styles.box}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt="Preview"
              className={styles.thumbnail}
            />
          ) : (
            icon ?? <GalleryAddIcon />
          )}
        </div>
        <span className={styles.label}>{label}</span>
        <span className={styles.description}>{description}</span>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleChange}
          className={styles.input}
          tabIndex={-1}
        />
      </div>
    );
  }
);

FileUploadIcon.displayName = 'FileUploadIcon';
