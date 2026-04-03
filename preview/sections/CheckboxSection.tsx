import { useState } from 'react';
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from 'soadtech-ui';

export function CheckboxSection() {
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
        Checkbox
      </h2>

      {/* ─── Raw Checkbox ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Button-Checkbox (md)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox indeterminate />
          <Checkbox disabled />
          <Checkbox disabled defaultChecked />
          <Checkbox readOnly />
          <Checkbox readOnly defaultChecked />
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Button-Checkbox (sm)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <Checkbox size="sm" />
          <Checkbox size="sm" defaultChecked />
          <Checkbox size="sm" indeterminate />
          <Checkbox size="sm" disabled />
          <Checkbox size="sm" disabled defaultChecked />
          <Checkbox size="sm" readOnly />
          <Checkbox size="sm" readOnly defaultChecked />
        </div>
      </div>

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
          <Checkbox
            checked={controlled}
            onCheckedChange={setControlled}
          />
          <span style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
            {controlled ? 'Checked' : 'Unchecked'}
          </span>
        </div>
      </div>

      {/* ─── CheckboxField ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Checkbox Field (default)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 320 }}>
          <CheckboxField label="Accept terms" />
          <CheckboxField label="With description" description="This is a helpful description" />
          <CheckboxField label="Checked" defaultChecked />
          <CheckboxField label="Disabled" disabled />
          <CheckboxField label="Read-only checked" readOnly defaultChecked />
        </div>
      </div>

      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Checkbox Field (card)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 320 }}>
          <CheckboxField variant="card" label="Card option" description="With a description" />
          <CheckboxField variant="card" label="Checked card" description="This one is checked" defaultChecked />
          <CheckboxField variant="card" label="Disabled card" description="Cannot interact" disabled />
        </div>
      </div>

      {/* ─── CheckboxGroup ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Checkbox Group
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-8)', flexWrap: 'wrap' }}>
          <CheckboxGroup label="Preferences" helperText="Select all that apply">
            <CheckboxField label="Email notifications" />
            <CheckboxField label="SMS notifications" />
            <CheckboxField label="Push notifications" />
          </CheckboxGroup>

          <CheckboxGroup label="With error" error="Please select at least one option">
            <CheckboxField label="Option A" />
            <CheckboxField label="Option B" />
            <CheckboxField label="Option C" />
          </CheckboxGroup>

          <CheckboxGroup label="Disabled group" disabled>
            <CheckboxField label="Cannot check" />
            <CheckboxField label="Also disabled" />
            <CheckboxField label="All disabled" defaultChecked />
          </CheckboxGroup>

          <CheckboxGroup label="Read-only group" readOnly>
            <CheckboxField label="Read only" defaultChecked />
            <CheckboxField label="Also read-only" />
          </CheckboxGroup>
        </div>
      </div>
    </section>
  );
}
