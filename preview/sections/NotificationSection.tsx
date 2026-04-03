import { useState } from 'react';
import {
  NotificationItem,
  NotificationReply,
  NotificationPanel,
  Button,
  Chip,
  Avatar,
} from 'soadtech-ui';

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

function TeamReplyDemo() {
  const [reply, setReply] = useState('');

  return (
    <NotificationReply
      avatarSrc="https://i.pravatar.cc/28?u=william"
      avatarAlt="William"
      value={reply}
      onValueChange={setReply}
      mentions={<Chip size="sm">@William</Chip>}
      placeholder="Reply to Emma..."
      onSend={() => setReply('')}
      onCancel={() => setReply('')}
    />
  );
}

export function NotificationSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Notification
      </h2>

      {/* ─── Individual Items ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Individual Items')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid var(--st-color-border)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
            maxWidth: 480,
          }}
        >
          <NotificationItem
            category="warning"
            title="Stock Critical"
            time="1h ago"
            description="Wireless Headphones stock is below 10 units. Reorder soon to avoid stockout."
            unread
            action={<Button size="sm" variant="outline">Reorder Now</Button>}
            onDelete={() => {}}
          />
          <NotificationItem
            category="success"
            title="New Order #5201"
            time="2h ago"
            description="A new order has been placed for 3 items totaling $149.99."
            onDelete={() => {}}
          />
          <NotificationItem
            category="intelligence"
            title="Return Risk Detected"
            time="3h ago"
            description="AI flagged Order #5180 as high return risk based on purchase pattern."
            unread
            action={<Button size="sm" variant="outline">View Details</Button>}
            onDelete={() => {}}
          />
          <NotificationItem
            category="team"
            title="Emma L. mentioned you"
            time="4h ago"
            avatarSrc="https://i.pravatar.cc/36?u=emma"
            avatarAlt="Emma L."
            description="Hey, can you check the inventory report for Q1?"
            unread
            onDelete={() => {}}
          />
        </div>
      </div>

      {/* ─── Team Reply Variant ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Team Reply')}
        <div
          style={{
            border: '1px solid var(--st-color-border)',
            borderRadius: 'var(--st-radius-lg)',
            overflow: 'hidden',
            maxWidth: 480,
          }}
        >
          <NotificationItem
            category="team"
            title="Emma L. mentioned you"
            time="4h ago"
            avatarSrc="https://i.pravatar.cc/36?u=emma"
            avatarAlt="Emma L."
            description="Hey, can you check the inventory report for Q1?"
            unread
            onDelete={() => {}}
            replyArea={<TeamReplyDemo />}
          />
        </div>
      </div>

      {/* ─── NotificationPanel ─── */}
      <div>
        {heading('Notification Panel')}
        <NotificationPanel
          onClose={() => {}}
          onFooterClick={() => {}}
        >
          <NotificationItem
            category="warning"
            title="Stock Critical"
            time="1h ago"
            description="Wireless Headphones stock is below 10 units."
            unread
            onDelete={() => {}}
          />
          <NotificationItem
            category="success"
            title="New Order #5201"
            time="2h ago"
            description="A new order has been placed for 3 items totaling $149.99."
            onDelete={() => {}}
          />
          <NotificationItem
            category="team"
            title="Emma L. mentioned you"
            time="4h ago"
            avatarSrc="https://i.pravatar.cc/36?u=emma"
            avatarAlt="Emma L."
            description="Can you check the inventory report?"
            unread
            onDelete={() => {}}
          />
          <NotificationItem
            category="intelligence"
            title="Return Risk Detected"
            time="3h ago"
            description="AI flagged Order #5180 as high return risk."
            onDelete={() => {}}
          />
          <NotificationItem
            category="warning"
            title="Low Inventory Alert"
            time="5h ago"
            description="USB-C Cable stock running low."
            onDelete={() => {}}
          />
        </NotificationPanel>
      </div>
    </section>
  );
}
