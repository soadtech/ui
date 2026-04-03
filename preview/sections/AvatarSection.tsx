import { Avatar } from 'soadtech-ui';
import type { AvatarSize } from 'soadtech-ui';

const sizes: AvatarSize[] = ['xl', 'lg', 'md', 'sm'];
const photoUrl = 'https://i.pravatar.cc/128?img=33';

export function AvatarSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Avatar
      </h2>

      {/* ─── Image ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Image
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} src={photoUrl} alt="User" size={size} status />
          ))}
        </div>
      </div>

      {/* ─── Initials ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Initials
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} initials="BD" size={size} status />
          ))}
        </div>
      </div>

      {/* ─── Icon (default) ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Icon
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          {sizes.map((size) => (
            <Avatar key={size} size={size} status />
          ))}
        </div>
      </div>
    </section>
  );
}
