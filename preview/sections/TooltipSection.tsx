import { useState } from 'react';
import { Tooltip, Button } from 'soadtech-ui';

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

export function TooltipSection() {
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
        Tooltip
      </h2>

      {/* Rich — Default */}
      {heading('Rich — Default')}
      <div
        style={{
          display: 'flex',
          gap: 80,
          flexWrap: 'wrap',
          paddingBottom: 180,
          marginBottom: 'var(--st-space-4)',
        }}
      >
        <Tooltip
          open
          placement="bottom"
          align="start"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align start</Button>
        </Tooltip>

        <Tooltip
          open
          placement="bottom"
          align="center"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align center</Button>
        </Tooltip>

        <Tooltip
          open
          placement="bottom"
          align="end"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align end</Button>
        </Tooltip>
      </div>

      {/* Rich — Inverted */}
      {heading('Rich — Inverted')}
      <div
        style={{
          display: 'flex',
          gap: 80,
          flexWrap: 'wrap',
          paddingBottom: 180,
          marginBottom: 'var(--st-space-4)',
        }}
      >
        <Tooltip
          open
          placement="bottom"
          align="start"
          variant="inverted"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align start</Button>
        </Tooltip>

        <Tooltip
          open
          placement="bottom"
          align="center"
          variant="inverted"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align center</Button>
        </Tooltip>

        <Tooltip
          open
          placement="bottom"
          align="end"
          variant="inverted"
          title="Tooltip title"
          body="Body text that wraps to multiple lines for context."
          action={<Button size="sm" variant="outlined">Action</Button>}
        >
          <Button variant="outlined">Align end</Button>
        </Tooltip>
      </div>

      {/* Inline — Default — All placements */}
      {heading('Inline — Default')}
      <div
        style={{
          display: 'flex',
          gap: 80,
          flexWrap: 'wrap',
          alignItems: 'center',
          paddingTop: 48,
          paddingBottom: 48,
          marginBottom: 'var(--st-space-4)',
        }}
      >
        <Tooltip open placement="top" content="Top tooltip">
          <Button variant="outlined" size="sm">Top</Button>
        </Tooltip>

        <Tooltip open placement="bottom" content="Bottom tooltip">
          <Button variant="outlined" size="sm">Bottom</Button>
        </Tooltip>

        <Tooltip open placement="start" content="Start tooltip">
          <Button variant="outlined" size="sm">Start</Button>
        </Tooltip>

        <Tooltip open placement="end" content="End tooltip">
          <Button variant="outlined" size="sm">End</Button>
        </Tooltip>
      </div>

      {/* Inline — Inverted — All placements */}
      {heading('Inline — Inverted')}
      <div
        style={{
          display: 'flex',
          gap: 80,
          flexWrap: 'wrap',
          alignItems: 'center',
          paddingTop: 48,
          paddingBottom: 48,
          marginBottom: 'var(--st-space-4)',
        }}
      >
        <Tooltip open placement="top" variant="inverted" content="Top tooltip">
          <Button variant="outlined" size="sm">Top</Button>
        </Tooltip>

        <Tooltip open placement="bottom" variant="inverted" content="Bottom tooltip">
          <Button variant="outlined" size="sm">Bottom</Button>
        </Tooltip>

        <Tooltip open placement="start" variant="inverted" content="Start tooltip">
          <Button variant="outlined" size="sm">Start</Button>
        </Tooltip>

        <Tooltip open placement="end" variant="inverted" content="End tooltip">
          <Button variant="outlined" size="sm">End</Button>
        </Tooltip>
      </div>

      {/* Controlled */}
      {heading('Controlled')}
      <div style={{ display: 'flex', gap: 'var(--st-space-6)', alignItems: 'center', marginBottom: 'var(--st-space-8)' }}>
        <Button onClick={() => setControlled((v) => !v)} size="sm">
          {controlled ? 'Hide tooltip' : 'Show tooltip'}
        </Button>
        <Tooltip
          open={controlled}
          placement="end"
          title="Controlled tooltip"
          body="This tooltip is controlled via the open prop."
        >
          <span
            style={{
              padding: 'var(--st-space-2) var(--st-space-3)',
              border: '1px dashed var(--st-color-border)',
              borderRadius: 'var(--st-radius-md)',
              fontSize: 'var(--st-font-size-sm)',
            }}
          >
            Trigger element
          </span>
        </Tooltip>
      </div>
    </section>
  );
}
