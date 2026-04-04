export interface InputMessageProps {
  /** Label text above input. */
  label?: string;
  /** Placeholder text for the input. */
  placeholder?: string;
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Native change handler for the input. */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Called with current value when send is triggered. */
  onSend?: (value: string) => void;
  /** Called when the + button is clicked. */
  onPlusClick?: () => void;
  /** Called when the emoji button is clicked. */
  onEmojiClick?: () => void;
  /** Called when the gallery button is clicked. */
  onGalleryClick?: () => void;
  /** Called when the microphone button is clicked. */
  onMicrophoneClick?: () => void;
  /** Disables entire component. */
  disabled?: boolean;
  /** Shows asterisk on label. */
  required?: boolean;
  /** Additional class on root element. */
  className?: string;
  /** Name attribute for the input. */
  name?: string;
}
