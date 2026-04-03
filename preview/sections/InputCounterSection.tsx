import { useState } from 'react';
import { InputCounter } from 'soadtech-ui';

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

export function InputCounterSection() {
  const [controlled, setControlled] = useState(5);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        InputCounter
      </h2>

      {/* States — Large */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('States — Large')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputCounter label="Rest" />
          <InputCounter label="Filled" defaultValue={7} />
          <InputCounter label="Disabled" defaultValue={3} disabled />
          <InputCounter label="Required" required />
        </div>
      </div>

      {/* States — Medium */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('States — Medium')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputCounter size="md" label="Rest" />
          <InputCounter size="md" label="Filled" defaultValue={7} />
          <InputCounter size="md" label="Disabled" defaultValue={3} disabled />
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
          <InputCounter
            label="Success"
            defaultValue={5}
            feedback={{ status: 'success', message: 'Looks good!' }}
          />
          <InputCounter
            label="Error"
            defaultValue={0}
            feedback={{ status: 'error', message: 'Value is required' }}
          />
          <InputCounter
            label="Warning"
            defaultValue={99}
            feedback={{
              status: 'warning',
              message: 'Approaching limit',
            }}
          />
          <InputCounter
            label="AI"
            defaultValue={42}
            feedback={{
              status: 'ai',
              message: 'Suggested by AI',
            }}
          />
        </div>
      </div>

      {/* Controlled with bounds */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Controlled (min=0, max=10)')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputCounter
            label="Bounded counter"
            value={controlled}
            onChange={setControlled}
            min={0}
            max={10}
          />
          <span
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              alignSelf: 'center',
            }}
          >
            Value: {controlled}
          </span>
        </div>
      </div>

      {/* Step */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Step = 5')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
            flexWrap: 'wrap',
            alignItems: 'start',
          }}
        >
          <InputCounter label="Step counter" step={5} defaultValue={10} />
        </div>
      </div>
    </section>
  );
}
