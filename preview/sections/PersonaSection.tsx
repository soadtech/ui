import {
  Persona,
  PersonaMessage,
  PersonaAction,
  MessageDropdown,
} from 'soadtech-ui';
import type { PersonaSize } from 'soadtech-ui';

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

const sizes: PersonaSize[] = ['lg', 'md', 'sm'];

export function PersonaSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Persona
      </h2>

      {/* ─── Persona (Dropdown Trigger) ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Persona (Dropdown Trigger)')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
            maxWidth: 360,
          }}
        >
          {sizes.map((size) => (
            <Persona
              key={size}
              size={size}
              avatarSrc={`https://i.pravatar.cc/48?u=persona-${size}`}
              avatarAlt="John Doe"
              name="John Doe"
              username="@johndoe"
              verified
            />
          ))}
          <Persona
            size="md"
            avatarSrc="https://i.pravatar.cc/36?u=persona-noverify"
            avatarAlt="Jane Smith"
            name="Jane Smith"
            username="@janesmith"
          />
        </div>
      </div>

      {/* ─── PersonaMessage ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('PersonaMessage')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
            maxWidth: 480,
          }}
        >
          {sizes.map((size) => (
            <PersonaMessage
              key={size}
              size={size}
              avatarSrc={`https://i.pravatar.cc/48?u=msg-${size}`}
              avatarAlt="John Doe"
              name="John Doe"
              username="@johndoe"
              verified
              message="Hey, can you check the latest report?"
              time="10m"
              badgeCount={2}
            />
          ))}
          <PersonaMessage
            size="md"
            avatarSrc="https://i.pravatar.cc/36?u=msg-unread"
            avatarAlt="Emma L."
            name="Emma L."
            verified
            message="I'll send the files over shortly."
            time="2h"
            unread
          />
        </div>
      </div>

      {/* ─── PersonaAction ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('PersonaAction')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
            maxWidth: 480,
          }}
        >
          {sizes.map((size) => (
            <PersonaAction
              key={size}
              size={size}
              avatarSrc={`https://i.pravatar.cc/48?u=action-${size}`}
              avatarAlt="William"
              name="William"
              actionText="commented on"
              actionTarget="Project X"
              timestamp="6 November 2025 • 9:12 PM"
            />
          ))}
        </div>
      </div>

      {/* ─── MessageDropdown ─── */}
      <div>
        {heading('MessageDropdown')}
        <MessageDropdown onClose={() => {}} onFooterClick={() => {}}>
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md1"
            avatarAlt="John Doe"
            name="John Doe"
            verified
            message="Hey, can you check the latest report?"
            time="10m"
            unread
          />
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md2"
            avatarAlt="Emma L."
            name="Emma L."
            message="I'll send the files over shortly."
            time="25m"
            unread
          />
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md3"
            avatarAlt="Alex K."
            name="Alex K."
            verified
            message="Meeting rescheduled to 3 PM."
            time="1h"
            badgeCount={3}
          />
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md4"
            avatarAlt="Sarah M."
            name="Sarah M."
            message="Thanks for the update!"
            time="2h"
          />
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md5"
            avatarAlt="David R."
            name="David R."
            verified
            message="Can we discuss the roadmap tomorrow?"
            time="3h"
          />
          <PersonaMessage
            size="sm"
            avatarSrc="https://i.pravatar.cc/28?u=md6"
            avatarAlt="Lisa W."
            name="Lisa W."
            message="Great job on the presentation!"
            time="5h"
          />
        </MessageDropdown>
      </div>
    </section>
  );
}
