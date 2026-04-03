import { useState } from 'react';
import {
  RadioButton,
  RadioField,
  RadioGroup,
} from 'soadtech-ui';

export function RadioButtonSection() {
  const [controlled, setControlled] = useState('b');
  const [groupValue, setGroupValue] = useState('email');
  const [cardValue, setCardValue] = useState('pro');

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        RadioButton
      </h2>

      {/* ─── Raw RadioButton ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          RadioButton (md)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <RadioButton name="demo-md" />
          <RadioButton name="demo-md" defaultChecked />
          <RadioButton disabled />
          <RadioButton disabled defaultChecked />
          <RadioButton readOnly />
          <RadioButton readOnly defaultChecked />
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
          RadioButton (sm)
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)', alignItems: 'center' }}>
          <RadioButton size="sm" name="demo-sm" />
          <RadioButton size="sm" name="demo-sm" defaultChecked />
          <RadioButton size="sm" disabled />
          <RadioButton size="sm" disabled defaultChecked />
          <RadioButton size="sm" readOnly />
          <RadioButton size="sm" readOnly defaultChecked />
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
          <RadioButton
            name="controlled"
            value="a"
            checked={controlled === 'a'}
            onCheckedChange={() => setControlled('a')}
          />
          <RadioButton
            name="controlled"
            value="b"
            checked={controlled === 'b'}
            onCheckedChange={() => setControlled('b')}
          />
          <span style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
            Selected: {controlled}
          </span>
        </div>
      </div>

      {/* ─── RadioField ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Radio Field (default)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 320 }}>
          <RadioField name="field-demo" label="Option A" />
          <RadioField name="field-demo" label="With description" description="This is a helpful description" />
          <RadioField name="field-demo" label="Pre-selected" defaultChecked />
          <RadioField label="Disabled" disabled />
          <RadioField label="Read-only checked" readOnly defaultChecked />
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
          Radio Field (card)
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--st-space-3)', maxWidth: 320 }}>
          <RadioField variant="card" name="card-demo" label="Card option" description="With a description" />
          <RadioField variant="card" name="card-demo" label="Checked card" description="This one is checked" defaultChecked />
          <RadioField variant="card" label="Disabled card" description="Cannot interact" disabled />
        </div>
      </div>

      {/* ─── RadioGroup ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Radio Group
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-8)', flexWrap: 'wrap' }}>
          <RadioGroup
            label="Notifications"
            helperText="Choose one option"
            name="notif"
            value={groupValue}
            onValueChange={setGroupValue}
          >
            <RadioField label="Email notifications" value="email" />
            <RadioField label="SMS notifications" value="sms" />
            <RadioField label="Push notifications" value="push" />
          </RadioGroup>

          <RadioGroup label="With error" error="Please select an option" name="err">
            <RadioField label="Option A" value="a" />
            <RadioField label="Option B" value="b" />
            <RadioField label="Option C" value="c" />
          </RadioGroup>

          <RadioGroup label="Disabled group" disabled name="dis" value="c">
            <RadioField label="Cannot select" value="a" />
            <RadioField label="Also disabled" value="b" />
            <RadioField label="Pre-selected" value="c" />
          </RadioGroup>

          <RadioGroup label="Read-only group" readOnly name="ro" value="a">
            <RadioField label="Read only" value="a" />
            <RadioField label="Also read-only" value="b" />
          </RadioGroup>
        </div>
      </div>

      {/* ─── RadioGroup Card ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Radio Group (card variant)
        </h3>
        <div style={{ maxWidth: 320 }}>
          <RadioGroup
            label="Plan"
            name="plan"
            value={cardValue}
            onValueChange={setCardValue}
          >
            <RadioField variant="card" label="Free" description="Basic features" value="free" />
            <RadioField variant="card" label="Pro" description="All features included" value="pro" />
            <RadioField variant="card" label="Enterprise" description="Custom solutions" value="enterprise" />
          </RadioGroup>
        </div>
      </div>
    </section>
  );
}
