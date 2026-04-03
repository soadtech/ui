import { Button } from 'soadtech-ui';
import type { ButtonVariant, ButtonColor, ButtonSize } from 'soadtech-ui';

const variants: ButtonVariant[] = ['fill', 'outline', 'ghost'];
const colors: ButtonColor[] = ['primary', 'danger'];
const sizes: ButtonSize[] = ['lg', 'md', 'sm'];

function DiamondIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5L14 8L8 14.5L2 8L8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
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

export function ButtonSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Button
      </h2>

      {sizes.map((size) => (
        <div key={size} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(`Size: ${size}`)}

          {colors.map((color) => (
            <div key={color} style={{ marginBottom: 'var(--st-space-6)' }}>
              <p
                style={{
                  fontSize: 'var(--st-font-size-sm)',
                  color: 'var(--st-color-muted)',
                  marginBottom: 'var(--st-space-2)',
                  textTransform: 'capitalize',
                }}
              >
                {color}
              </p>

              {/* Text */}
              <div style={{ display: 'flex', gap: 'var(--st-space-2)', alignItems: 'center', marginBottom: 'var(--st-space-2)', flexWrap: 'wrap' }}>
                {variants.map((v) => (
                  <Button key={`text-${v}`} variant={v} color={color} size={size}>
                    Button
                  </Button>
                ))}
              </div>

              {/* Left icon */}
              <div style={{ display: 'flex', gap: 'var(--st-space-2)', alignItems: 'center', marginBottom: 'var(--st-space-2)', flexWrap: 'wrap' }}>
                {variants.map((v) => (
                  <Button key={`left-${v}`} variant={v} color={color} size={size} iconLeft={<DiamondIcon />}>
                    Button
                  </Button>
                ))}
              </div>

              {/* Right icon */}
              <div style={{ display: 'flex', gap: 'var(--st-space-2)', alignItems: 'center', marginBottom: 'var(--st-space-2)', flexWrap: 'wrap' }}>
                {variants.map((v) => (
                  <Button key={`right-${v}`} variant={v} color={color} size={size} iconRight={<DiamondIcon />}>
                    Button
                  </Button>
                ))}
              </div>

              {/* Icon only */}
              <div style={{ display: 'flex', gap: 'var(--st-space-2)', alignItems: 'center', marginBottom: 'var(--st-space-2)', flexWrap: 'wrap' }}>
                {variants.map((v) => (
                  <Button key={`icon-${v}`} variant={v} color={color} size={size} iconLeft={<DiamondIcon />} />
                ))}
              </div>

              {/* Disabled */}
              <div style={{ display: 'flex', gap: 'var(--st-space-2)', alignItems: 'center', flexWrap: 'wrap' }}>
                {variants.map((v) => (
                  <Button key={`dis-${v}`} variant={v} color={color} size={size} disabled>
                    Button
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
