import { useState } from 'react';
import { Chip, ChipGroup } from 'soadtech-ui';
import type { ChipVariant, ChipSize } from 'soadtech-ui';

const variants: ChipVariant[] = ['filled', 'light'];
const sizes: ChipSize[] = ['md', 'sm'];

function DiamondIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1l4.5 5.5L7 13 2.5 6.5 7 1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export function ChipSection() {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const handleDismiss = (id: string) => {
    setDismissed((prev) => new Set(prev).add(id));
  };

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Chip
      </h2>

      {/* ─── Variants × Sizes ─── */}
      {variants.map((variant) => (
        <div key={variant} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(`${variant} variant`)}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-4)' }}>
            {sizes.map((size) => (
              <div key={size} style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ width: 24, fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>{size}</span>
                <Chip variant={variant} size={size}>Default</Chip>
                <Chip variant={variant} size={size} icon={<DiamondIcon />}>With icon</Chip>
                <Chip variant={variant} size={size} selected>Selected</Chip>
                <Chip variant={variant} size={size} selected icon={<DiamondIcon />}>Selected + icon</Chip>
                <Chip variant={variant} size={size} disabled>Disabled</Chip>
                <Chip variant={variant} size={size} disabled selected>Disabled selected</Chip>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ─── Dismissible ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Dismissible')}
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          {['Alpha', 'Beta', 'Gamma', 'Delta'].map((label) =>
            !dismissed.has(label) ? (
              <Chip key={label} onDismiss={() => handleDismiss(label)} icon={<DiamondIcon />}>
                {label}
              </Chip>
            ) : null
          )}
          {dismissed.size > 0 && (
            <button
              type="button"
              onClick={() => setDismissed(new Set())}
              style={{
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-primary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ─── Dismissible selected ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Dismissible selected')}
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
          <Chip selected onDismiss={() => {}}>Filled selected</Chip>
          <Chip variant="light" selected onDismiss={() => {}}>Light selected</Chip>
          <Chip size="sm" selected onDismiss={() => {}} icon={<DiamondIcon />}>Small</Chip>
        </div>
      </div>

      {/* ─── ChipGroup ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('ChipGroup')}
        <ChipGroup>
          <Chip>React</Chip>
          <Chip>TypeScript</Chip>
          <Chip selected>CSS Modules</Chip>
          <Chip icon={<DiamondIcon />}>Vite</Chip>
          <Chip variant="light">Node.js</Chip>
          <Chip variant="light" selected>Design Systems</Chip>
          <Chip onDismiss={() => {}}>Dismissible</Chip>
        </ChipGroup>
      </div>
    </section>
  );
}
