import { useState } from 'react';
import { InputMessage } from 'soadtech-ui';

function heading(text: string) {
  return (
    <h3
      style={{
        fontSize: 'var(--st-font-size-lg)',
        fontWeight: 'var(--st-font-weight-medium)',
        marginBottom: 'var(--st-space-3)',
        color: 'var(--st-color-muted)',
      }}
    >
      {text}
    </h3>
  );
}

const noop = () => {};

export function InputMessageSection() {
  const [controlled, setControlled] = useState('');
  const [sent, setSent] = useState<string[]>([]);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        InputMessage
      </h2>

      {/* Full (all icons) */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('All actions')}
        <InputMessage
          label="Label input"
          placeholder="Placeholder Text"
          onPlusClick={noop}
          onEmojiClick={noop}
          onGalleryClick={noop}
          onMicrophoneClick={noop}
          onSend={(val) => alert(`Sent: ${val}`)}
        />
      </div>

      {/* Minimal (no optional icons) */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Minimal (send only)')}
        <InputMessage
          label="Label input"
          placeholder="Placeholder Text"
          onSend={(val) => alert(`Sent: ${val}`)}
        />
      </div>

      {/* Partial actions */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Partial actions (emoji + mic)')}
        <InputMessage
          label="Label input"
          placeholder="Placeholder Text"
          onEmojiClick={noop}
          onMicrophoneClick={noop}
          onSend={(val) => alert(`Sent: ${val}`)}
        />
      </div>

      {/* Disabled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Disabled')}
        <InputMessage
          label="Label input"
          placeholder="Placeholder Text"
          onPlusClick={noop}
          onEmojiClick={noop}
          onGalleryClick={noop}
          onMicrophoneClick={noop}
          disabled
        />
      </div>

      {/* Controlled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Controlled + onSend')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-4)',
          }}
        >
          <InputMessage
            label="Send a message"
            placeholder="Type something..."
            value={controlled}
            onChange={(e) => setControlled(e.target.value)}
            onPlusClick={noop}
            onEmojiClick={noop}
            onGalleryClick={noop}
            onMicrophoneClick={noop}
            onSend={(val) => {
              setSent((prev) => [...prev, val]);
              setControlled('');
            }}
          />
          {sent.length > 0 && (
            <div
              style={{
                fontSize: 'var(--st-font-size-sm)',
                color: 'var(--st-color-muted)',
              }}
            >
              Sent: {sent.join(', ')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
