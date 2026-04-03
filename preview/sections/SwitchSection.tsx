import { useState } from 'react';
import { Switch, SwitchField } from 'soadtech-ui';

export function SwitchSection() {
  const [controlled, setControlled] = useState(false);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Switch
      </h2>

      {/* ─── Raw Switch (md) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Switch (md)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
          <Switch disabled defaultChecked />
          <Switch readOnly />
          <Switch readOnly defaultChecked />
        </div>
      </div>

      {/* ─── Raw Switch (sm) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Switch (sm)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <Switch size="sm" />
          <Switch size="sm" defaultChecked />
          <Switch size="sm" disabled />
          <Switch size="sm" disabled defaultChecked />
          <Switch size="sm" readOnly />
          <Switch size="sm" readOnly defaultChecked />
        </div>
      </div>

      {/* ─── Controlled ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Controlled
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <Switch
            checked={controlled}
            onCheckedChange={setControlled}
          />
          <span style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
            {controlled ? 'On' : 'Off'}
          </span>
        </div>
      </div>

      {/* ─── SwitchField (default) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Switch Field (default)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 360 }}>
          <SwitchField label="Email notifications" />
          <SwitchField label="Push notifications" description="Receive push notifications on your device" />
          <SwitchField label="Pre-enabled" defaultChecked />
          <SwitchField label="Disabled" disabled />
          <SwitchField label="Read-only enabled" readOnly defaultChecked />
        </div>
      </div>

      {/* ─── SwitchField (card) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Switch Field (card)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 360 }}>
          <SwitchField variant="card" label="Dark mode" description="Use dark theme across the app" />
          <SwitchField variant="card" label="Auto-save" description="Automatically save your work" defaultChecked />
          <SwitchField variant="card" label="Disabled option" description="Cannot interact" disabled />
        </div>
      </div>
    </section>
  );
}
