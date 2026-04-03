import { useState } from 'react';
import { InputSearch } from 'soadtech-ui';

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

export function InputSearchSection() {
  const [controlled, setControlled] = useState('');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        InputSearch
      </h2>

      {/* States */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('States')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputSearch
            label="Label"
            placeholder="Placeholder Text"
            helperText="Helper text to complete the field"
          />
          <InputSearch
            label="Label"
            defaultValue="Filled value"
            helperText="Helper text to complete the field"
          />
          <InputSearch
            label="Label"
            defaultValue="Disabled value"
            disabled
            helperText="Helper text to complete the field"
          />
        </div>
      </div>

      {/* Feedback */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Feedback')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputSearch
            label="Label"
            defaultValue="Invalid query"
            helperText="Helper text to complete the field"
            feedback={{ status: 'error', message: 'Validation text of error' }}
          />
          <InputSearch
            label="Label"
            defaultValue="AI suggestion"
            helperText="Helper text to complete the field"
            feedback={{ status: 'ai', message: 'AI-generated insight' }}
          />
          <InputSearch
            label="Label"
            defaultValue="Valid query"
            helperText="Helper text to complete the field"
            feedback={{ status: 'success', message: 'Looks good!' }}
          />
          <InputSearch
            label="Label"
            defaultValue="Risky query"
            helperText="Helper text to complete the field"
            feedback={{
              status: 'warning',
              message: 'This might return too many results',
            }}
          />
        </div>
      </div>

      {/* Controlled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Controlled + onSearch')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-4)',
          }}
        >
          <InputSearch
            label="Search"
            placeholder="Type and press Enter..."
            value={controlled}
            onChange={(e) => setControlled(e.target.value)}
            onSearch={(val) => alert(`Searching: ${val}`)}
            onClear={() => setControlled('')}
            helperText="Press Enter or click the search icon"
          />
          <span
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
            }}
          >
            Value: "{controlled}"
          </span>
        </div>
      </div>
    </section>
  );
}
