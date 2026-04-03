import { ButtonLink } from 'soadtech-ui';
import type { ButtonLinkColor, ButtonLinkSize } from 'soadtech-ui';

const colors: ButtonLinkColor[] = ['primary', 'secondary', 'danger'];
const sizes: ButtonLinkSize[] = ['lg', 'md', 'sm'];

function DiamondIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1L13 7L7 13L1 7L7 1Z"
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

export function ButtonLinkSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Button Link
      </h2>

      {sizes.map((size) => (
        <div key={size} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(`Size: ${size}`)}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              gap: 'var(--st-space-4) var(--st-space-6)',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            {colors.map((color) => (
              <ButtonLink key={`t-${color}`} color={color} size={size} href="#">
                Button Link
              </ButtonLink>
            ))}
            {/* Left Icon */}
            {colors.map((color) => (
              <ButtonLink key={`l-${color}`} color={color} size={size} href="#" iconLeft={<DiamondIcon />}>
                Button Link
              </ButtonLink>
            ))}
            {/* Right Icon */}
            {colors.map((color) => (
              <ButtonLink key={`r-${color}`} color={color} size={size} href="#" iconRight={<DiamondIcon />}>
                Button Link
              </ButtonLink>
            ))}
            {/* Disabled */}
            {colors.map((color) => (
              <ButtonLink key={`d-${color}`} color={color} size={size} href="#" disabled>
                Button Link
              </ButtonLink>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
