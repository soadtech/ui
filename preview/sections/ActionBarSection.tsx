import { ActionBar, ActionBarLink, Button } from 'soadtech-ui';

export function ActionBarSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Action Bar
      </h2>

      {/* ─── Buttons ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Button
        </h3>
        <ActionBar>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ActionBar>
      </div>

      {/* ─── Button Links ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Button Link
        </h3>
        <ActionBar>
          <ActionBarLink href="#">Button Link</ActionBarLink>
          <ActionBarLink href="#">Button Link</ActionBarLink>
          <ActionBarLink href="#">Button Link</ActionBarLink>
        </ActionBar>
      </div>

      {/* ─── Links with external icon ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Link (external)
        </h3>
        <ActionBar>
          <ActionBarLink href="#" external>Link</ActionBarLink>
          <ActionBarLink href="#" external>Link</ActionBarLink>
          <ActionBarLink href="#" external>Link</ActionBarLink>
        </ActionBar>
      </div>

      {/* ─── Mixed ─── */}
      <div style={{ marginBottom: 'var(--st-space-6)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Mixed
        </h3>
        <ActionBar>
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
          <ActionBarLink href="#" external>Docs</ActionBarLink>
        </ActionBar>
      </div>

      {/* ─── Alignment ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Alignment (end)
        </h3>
        <ActionBar align="end">
          <Button variant="ghost">Cancel</Button>
          <Button>Confirm</Button>
        </ActionBar>
      </div>
    </section>
  );
}
