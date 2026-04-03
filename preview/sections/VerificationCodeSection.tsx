import { useState } from 'react';
import { VerificationCode } from 'soadtech-ui';

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

export function VerificationCodeSection() {
  const [value, setValue] = useState('');
  const [complete, setComplete] = useState('');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        VerificationCode
      </h2>

      {/* Default */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Default')}
        <VerificationCode autoFocus />
      </div>

      {/* Filled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Filled')}
        <VerificationCode defaultValue="8888" />
      </div>

      {/* Error */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Error')}
        <VerificationCode defaultValue="8888" error />
      </div>

      {/* Disabled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Disabled')}
        <VerificationCode defaultValue="1234" disabled />
      </div>

      {/* Controlled */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Controlled')}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)' }}>
          <VerificationCode
            value={value}
            onChange={setValue}
            onComplete={setComplete}
          />
          <span
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
            }}
          >
            Value: "{value}" {complete && `— Complete: "${complete}"`}
          </span>
        </div>
      </div>

      {/* 6 Digits */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('6 Digits')}
        <VerificationCode length={6} />
      </div>
    </section>
  );
}
