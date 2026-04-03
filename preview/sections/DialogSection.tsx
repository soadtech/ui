import { useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogIcon,
  Button,
  ButtonLink,
} from 'soadtech-ui';
import type { DialogIconStatus } from 'soadtech-ui';

const iconStatuses: DialogIconStatus[] = ['info', 'warning', 'success', 'error'];

export function DialogSection() {
  const [standardOpen, setStandardOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Dialog
      </h2>

      {/* ─── Trigger buttons ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          Dialog Demos
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-3)' }}>
          <Button onClick={() => setStandardOpen(true)}>
            Open Standard Dialog
          </Button>
          <Button variant="outline" onClick={() => setAlertOpen(true)}>
            Open Alert Dialog
          </Button>
        </div>
      </div>

      {/* ─── Standard Dialog ─── */}
      <Dialog open={standardOpen} onClose={() => setStandardOpen(false)}>
        <DialogHeader
          title="Modal Title"
          description="This action will update the user information."
        />
        <DialogBody>
          <p
            style={{
              margin: 0,
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
            }}
          >
            This is the dialog body content. You can place any content here
            including forms, text, or other components.
          </p>
        </DialogBody>
        <DialogFooter
          link={
            <ButtonLink href="#" size="sm">
              Learn more
            </ButtonLink>
          }
        >
          <Button variant="outline" onClick={() => setStandardOpen(false)}>
            Cancel
          </Button>
          <Button variant="fill" onClick={() => setStandardOpen(false)}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>

      {/* ─── Alert-style Dialog ─── */}
      <Dialog open={alertOpen} onClose={() => setAlertOpen(false)}>
        <DialogHeader />
        <DialogBody style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'var(--st-space-4)',
            }}
          >
            <DialogIcon status="success" />
          </div>
          <h3
            style={{
              fontSize: 'var(--st-font-size-lg)',
              fontWeight: 'var(--st-font-weight-semibold)',
              margin: '0 0 var(--st-space-2)',
            }}
          >
            Great news
          </h3>
          <p
            style={{
              fontSize: 'var(--st-font-size-sm)',
              color: 'var(--st-color-muted)',
              margin: 0,
            }}
          >
            This action was completed successfully.
          </p>
        </DialogBody>
        <DialogFooter layout="vertical">
          <Button variant="fill" onClick={() => setAlertOpen(false)}>
            Continue
          </Button>
          <Button variant="outline" onClick={() => setAlertOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>

      {/* ─── DialogIcon statuses ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          DialogIcon — Statuses
        </h3>
        <div style={{ display: 'flex', gap: 'var(--st-space-4)' }}>
          {iconStatuses.map((status) => (
            <div
              key={status}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--st-space-2)',
              }}
            >
              <DialogIcon status={status} />
              <span
                style={{
                  fontSize: 'var(--st-font-size-xs)',
                  color: 'var(--st-color-muted)',
                }}
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Standalone DialogHeader ─── */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          DialogHeader — Standalone
        </h3>
        <div
          style={{
            border: '1px solid var(--st-color-border)',
            borderRadius: 'var(--st-radius-xl)',
            maxWidth: 480,
          }}
        >
          <DialogHeader
            title="Modal Title"
            description="This action will update the user information."
            onClose={() => {}}
          />
        </div>
      </div>

      {/* ─── Footer layouts ─── */}
      <div>
        <h3
          style={{
            fontSize: 'var(--st-font-size-lg)',
            fontWeight: 'var(--st-font-weight-medium)',
            marginBottom: 'var(--st-space-3)',
            color: 'var(--st-color-muted)',
          }}
        >
          DialogFooter — Layouts
        </h3>
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-6)',
          }}
        >
          <div
            style={{
              flex: 1,
              border: '1px solid var(--st-color-border)',
              borderRadius: 'var(--st-radius-xl)',
              paddingTop: 'var(--st-space-6)',
              maxWidth: 480,
            }}
          >
            <p
              style={{
                margin: '0 var(--st-space-6) var(--st-space-3)',
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
              }}
            >
              Horizontal
            </p>
            <DialogFooter
              link={
                <ButtonLink href="#" size="sm">
                  Link
                </ButtonLink>
              }
            >
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button variant="fill" size="sm">
                Action
              </Button>
            </DialogFooter>
          </div>
          <div
            style={{
              flex: 1,
              border: '1px solid var(--st-color-border)',
              borderRadius: 'var(--st-radius-xl)',
              paddingTop: 'var(--st-space-6)',
              maxWidth: 480,
            }}
          >
            <p
              style={{
                margin: '0 var(--st-space-6) var(--st-space-3)',
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
              }}
            >
              Vertical
            </p>
            <DialogFooter layout="vertical">
              <Button variant="fill" size="sm">
                Action
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </DialogFooter>
          </div>
        </div>
      </div>
    </section>
  );
}
