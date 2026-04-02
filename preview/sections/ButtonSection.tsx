import { Button } from 'soadtech-ui';
import type { ButtonVariant, ButtonSize } from 'soadtech-ui';

const variants: ButtonVariant[] = ['primary', 'secondary', 'outline', 'ghost', 'destructive'];
const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export function ButtonSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2 style={{ fontSize: 'var(--st-font-size-2xl)', fontWeight: 'var(--st-font-weight-semibold)', marginBottom: 'var(--st-space-4)' }}>
        Button
      </h2>

      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3 style={{ fontSize: 'var(--st-font-size-lg)', fontWeight: 'var(--st-font-weight-medium)', marginBottom: 'var(--st-space-3)', color: 'var(--st-color-muted)' }}>
          Variants
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3 style={{ fontSize: 'var(--st-font-size-lg)', fontWeight: 'var(--st-font-weight-medium)', marginBottom: 'var(--st-space-3)', color: 'var(--st-color-muted)' }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Button key={size} size={size}>
              Size {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: 'var(--st-font-size-lg)', fontWeight: 'var(--st-font-weight-medium)', marginBottom: 'var(--st-space-3)', color: 'var(--st-color-muted)' }}>
          States
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </section>
  );
}
