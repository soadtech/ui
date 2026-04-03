import { Badge, TrendBadge, Avatar } from 'soadtech-ui';
import type { BadgePosition, BadgeVariant, TrendDirection } from 'soadtech-ui';

const positions: BadgePosition[] = ['right-top', 'right-center', 'right-bottom'];
const variants: BadgeVariant[] = ['primary', 'secondary'];
const directions: TrendDirection[] = ['up', 'down'];

function Placeholder() {
  return (
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 'var(--st-radius-lg)',
        backgroundColor: 'var(--st-color-neutral-100)',
        border: '1px solid var(--st-color-border)',
      }}
    />
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

export function BadgeSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Badge
      </h2>

      {/* ─── Positions ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Position (dot)')}
        <div style={{ display: 'flex', gap: 'var(--st-space-6)', alignItems: 'center' }}>
          {positions.map((pos) => (
            <Badge key={pos} position={pos}>
              <Placeholder />
            </Badge>
          ))}
        </div>
      </div>

      {/* ─── Item-Badge variants ─── */}
      {variants.map((variant) => (
        <div key={variant} style={{ marginBottom: 'var(--st-space-8)' }}>
          {heading(`${variant.charAt(0).toUpperCase() + variant.slice(1)} — Dot / Number / Text`)}
          <div style={{ display: 'flex', gap: 'var(--st-space-6)', alignItems: 'center' }}>
            <Badge variant={variant}>
              <Avatar initials="BD" size="lg" />
            </Badge>
            <Badge variant={variant} count={2}>
              <Avatar initials="BD" size="lg" />
            </Badge>
            <Badge variant={variant} label="New">
              <Avatar initials="BD" size="lg" />
            </Badge>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 'var(--st-space-6)',
              alignItems: 'center',
              marginTop: 'var(--st-space-3)',
            }}
          >
            <Badge variant={variant} size="sm">
              <Avatar initials="BD" size="md" />
            </Badge>
            <Badge variant={variant} size="sm" count={2}>
              <Avatar initials="BD" size="md" />
            </Badge>
            <Badge variant={variant} size="sm" label="New">
              <Avatar initials="BD" size="md" />
            </Badge>
          </div>
        </div>
      ))}

      {/* ─── TrendBadge ─── */}
      <div>
        {heading('Trend Badge')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: 'var(--st-space-3)',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          {/* Inverse row */}
          {directions.map((dir) => (
            <TrendBadge key={`inv-md-${dir}`} value={dir === 'up' ? '36%' : '23%'} direction={dir} inverse />
          ))}
          {directions.map((dir) => (
            <TrendBadge key={`inv-sm-${dir}`} value={dir === 'up' ? '36%' : '23%'} direction={dir} inverse size="sm" />
          ))}
          {/* Default row */}
          {directions.map((dir) => (
            <TrendBadge key={`def-md-${dir}`} value={dir === 'up' ? '36%' : '23%'} direction={dir} />
          ))}
          {directions.map((dir) => (
            <TrendBadge key={`def-sm-${dir}`} value={dir === 'up' ? '36%' : '23%'} direction={dir} size="sm" />
          ))}
        </div>
      </div>
    </section>
  );
}
