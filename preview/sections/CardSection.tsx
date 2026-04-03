import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Badge,
  TrendBadge,
  Avatar,
  StatCard,
  PlanCard,
  InsightCard,
  ProductCard,
  KPICard,
  ListItemCard,
  UserGroupCard,
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

function DotIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="var(--st-color-primary)" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2L12.09 7.26L18 7.97L13.82 11.63L15.18 17.5L10 14.27L4.82 17.5L6.18 11.63L2 7.97L7.91 7.26L10 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M11 2L4 12H10L9 18L16 8H10L11 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2C7.24 2 5 4.24 5 7C5 9.06 6.21 10.83 8 11.58V14H12V11.58C13.79 10.83 15 9.06 15 7C15 4.24 12.76 2 10 2ZM8 16V17C8 17.55 8.45 18 9 18H11C11.55 18 12 17.55 12 17V16H8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 2C3.45 2 3 2.45 3 3V13C3 13.55 3.45 14 4 14H12C12.55 14 13 13.55 13 13V6L9 2H4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CardSection() {
  return (
    <section style={{ marginBottom: 'var(--st-space-12)' }}>
      <h2
        style={{
          fontSize: 'var(--st-font-size-2xl)',
          fontWeight: 'var(--st-font-weight-semibold)',
          marginBottom: 'var(--st-space-6)',
        }}
      >
        Card
      </h2>

      {/* Variants */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Variants')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '720px',
          }}
        >
          <Card padding="md">
            <p
              style={{
                fontSize: 'var(--st-font-size-sm)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-1)',
              }}
            >
              Outline (default)
            </p>
            <p
              style={{
                fontSize: 'var(--st-font-size-2xl)',
                fontWeight: 'var(--st-font-weight-semibold)',
              }}
            >
              000
            </p>
          </Card>

          <Card variant="elevated" padding="md">
            <p
              style={{
                fontSize: 'var(--st-font-size-sm)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-1)',
              }}
            >
              Elevated
            </p>
            <p
              style={{
                fontSize: 'var(--st-font-size-2xl)',
                fontWeight: 'var(--st-font-weight-semibold)',
              }}
            >
              000
            </p>
          </Card>

          <Card variant="filled" padding="md">
            <p
              style={{
                fontSize: 'var(--st-font-size-sm)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-1)',
              }}
            >
              Filled
            </p>
            <p
              style={{
                fontSize: 'var(--st-font-size-2xl)',
                fontWeight: 'var(--st-font-weight-semibold)',
              }}
            >
              000
            </p>
          </Card>
        </div>
      </div>

      {/* Padding */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Padding')}
        <div
          style={{
            display: 'flex',
            gap: 'var(--st-space-4)',
            alignItems: 'start',
          }}
        >
          {(['sm', 'md', 'lg'] as const).map((pad) => (
            <Card key={pad} padding={pad}>
              <p style={{ fontSize: 'var(--st-font-size-sm)' }}>
                padding=&quot;{pad}&quot;
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Structured Card */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Structured (Header / Content / Footer)')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '600px',
          }}
        >
          <Card>
            <CardHeader title="Title" />
            <CardContent>
              <p style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
                Card content goes here.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button variant="fill" size="sm">
                Save
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader title="Title" border />
            <CardContent>
              <p style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
                With header and footer borders.
              </p>
            </CardContent>
            <CardFooter border>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button variant="fill" size="sm">
                Save
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Header Sizes */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Header Sizes')}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--st-space-3)',
            maxWidth: '400px',
          }}
        >
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Card key={size}>
              <CardHeader
                title={`Size: ${size}`}
                size={size}
                border
                action={
                  <span style={{ fontSize: 'var(--st-font-size-xs)', color: 'var(--st-color-muted)' }}>
                    Action
                  </span>
                }
              />
            </Card>
          ))}
        </div>
      </div>

      {/* Header with icon */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Header with Icon & Action')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '600px',
          }}
        >
          <Card>
            <CardHeader title="Title" icon={<DotIcon />} border />
            <CardContent>
              <p style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
                Header with leading icon.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader
              title="Title"
              border
              action={
                <select
                  style={{
                    fontSize: 'var(--st-font-size-xs)',
                    border: '1px solid var(--st-color-border)',
                    borderRadius: 'var(--st-radius-sm)',
                    padding: '2px 4px',
                    background: 'transparent',
                    color: 'var(--st-color-muted)',
                  }}
                >
                  <option>This week</option>
                  <option>This month</option>
                </select>
              }
            />
            <CardContent>
              <p style={{ fontSize: 'var(--st-font-size-sm)', color: 'var(--st-color-muted)' }}>
                Header with action dropdown.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Alignment */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Footer Alignment')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '600px',
          }}
        >
          {(['left', 'center', 'right', 'between'] as const).map((align) => (
            <Card key={align}>
              <CardHeader title={`align="${align}"`} size="sm" />
              <CardFooter align={align} border>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
                <Button variant="fill" size="sm">
                  Confirm
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Composed Examples */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('Composed Examples')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '720px',
          }}
        >
          {/* KPI Card */}
          <Card padding="md">
            <p
              style={{
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
                marginBottom: 'var(--st-space-1)',
              }}
            >
              Revenue
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--st-space-2)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--st-font-size-2xl)',
                  fontWeight: 'var(--st-font-weight-semibold)',
                }}
              >
                $12,450
              </span>
              <TrendBadge value="12.5%" direction="up" size="sm" />
            </div>
          </Card>

          {/* Stat Card with badge */}
          <Card>
            <CardHeader
              title="Lorem Ipsum"
              action={
                <Badge variant="primary" label="New">
                  <span />
                </Badge>
              }
            />
            <CardContent>
              <span
                style={{
                  fontSize: 'var(--st-font-size-2xl)',
                  fontWeight: 'var(--st-font-weight-semibold)',
                }}
              >
                000
              </span>
            </CardContent>
          </Card>

          {/* User card */}
          <Card>
            <CardHeader title="Team Members" border />
            <CardContent>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--st-space-3)',
                }}
              >
                {['Alice', 'Bob', 'Carol'].map((name) => (
                  <div
                    key={name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--st-space-2)',
                    }}
                  >
                    <Avatar initials={name[0]} size="sm" />
                    <span style={{ fontSize: 'var(--st-font-size-sm)' }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ═══════════ PRESET CARDS ═══════════ */}

      {/* StatCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('StatCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '600px',
          }}
        >
          <StatCard
            title="Revenue"
            value="$12,450"
            trend={<TrendBadge value="12.5%" direction="up" size="sm" />}
            action={
              <select
                style={{
                  fontSize: 'var(--st-font-size-xs)',
                  border: '1px solid var(--st-color-border)',
                  borderRadius: 'var(--st-radius-sm)',
                  padding: '2px 4px',
                  background: 'transparent',
                  color: 'var(--st-color-muted)',
                }}
              >
                <option>This week</option>
                <option>This month</option>
              </select>
            }
          >
            <div
              style={{
                height: 80,
                background: 'var(--st-color-primary-subtle)',
                borderRadius: 'var(--st-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--st-font-size-xs)',
                color: 'var(--st-color-muted)',
              }}
            >
              Chart placeholder
            </div>
          </StatCard>

          <StatCard
            title="Active Users"
            value="1,284"
            trend={<TrendBadge value="3.2%" direction="down" size="sm" />}
          />
        </div>
      </div>

      {/* PlanCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('PlanCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '900px',
          }}
        >
          <PlanCard
            icon={<StarIcon />}
            title="Free"
            description="Get started with basics"
            price="$0"
            period="/month"
            current
            features={[
              { text: '5 projects', included: true },
              { text: '1 GB storage', included: true },
              { text: 'Email support', included: true },
              { text: 'API access', included: false },
              { text: 'Custom domain', included: false },
            ]}
            actionLabel="Current Plan"
          />

          <PlanCard
            icon={<BoltIcon />}
            title="Pro"
            description="For growing teams"
            price="$19"
            period="/month"
            recommended
            features={[
              { text: '50 projects', included: true },
              { text: '100 GB storage', included: true },
              { text: 'Priority support', included: true },
              { text: 'API access', included: true },
              { text: 'Custom domain', included: false },
            ]}
            actionLabel="Upgrade"
            onAction={() => {}}
          />

          <PlanCard
            title="Enterprise"
            description="For large organizations"
            price="$99"
            period="/month"
            features={[
              { text: 'Unlimited projects', included: true },
              { text: 'Unlimited storage', included: true },
              { text: '24/7 support', included: true },
              { text: 'API access', included: true },
              { text: 'Custom domain', included: true },
            ]}
            actionLabel="Contact Sales"
            onAction={() => {}}
          />
        </div>
      </div>

      {/* InsightCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('InsightCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '900px',
          }}
        >
          <InsightCard
            icon={<LightbulbIcon />}
            badge="Insight"
            title="Traffic increased 24% this week"
            description="Consider scaling your infrastructure to handle the load."
            variant="light"
            onDismiss={() => {}}
            onApply={() => {}}
          />

          <InsightCard
            icon={<LightbulbIcon />}
            badge="Insight"
            title="New market opportunity detected"
            description="Expand into the APAC region based on recent traffic data."
            variant="dark"
            onDismiss={() => {}}
            onApply={() => {}}
          />

          <InsightCard
            icon={<LightbulbIcon />}
            badge="Tip"
            title="Enable two-factor authentication"
            description="Secure your account with an additional verification step."
            variant="primary"
            onDismiss={() => {}}
            applyLabel="Enable"
            onApply={() => {}}
          />
        </div>
      </div>

      {/* ProductCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('ProductCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '900px',
          }}
        >
          <ProductCard
            image="https://picsum.photos/seed/prod1/400/250"
            imageAlt="Product photo"
            title="Wireless Headphones"
            description="Premium noise-cancelling headphones"
            price="$249"
            actions={
              <Button variant="outline" size="sm">
                Add to Cart
              </Button>
            }
          />

          <ProductCard
            image="https://picsum.photos/seed/prod2/400/250"
            imageAlt="Product photo"
            title="Smart Watch"
            description="Track your fitness goals"
            price="$399"
            featured
            actions={
              <Button variant="outline" size="sm">
                Add to Cart
              </Button>
            }
          />

          <ProductCard
            image="https://picsum.photos/seed/prod3/400/250"
            imageAlt="Product photo"
            title="Mechanical Keyboard"
            description="Cherry MX switches"
            price="$159"
            layout="vertical"
            actions={
              <Button variant="outline" size="sm">
                Add to Cart
              </Button>
            }
          />
        </div>

        <div style={{ marginTop: 'var(--st-space-4)', maxWidth: '600px' }}>
          <ProductCard
            image="https://picsum.photos/seed/prod4/400/300"
            imageAlt="Product photo"
            title="Studio Monitor Speakers"
            description="Professional-grade audio with flat frequency response for mixing and mastering."
            price="$599"
            layout="horizontal"
            actions={
              <Button variant="fill" size="sm">
                Buy Now
              </Button>
            }
          />
        </div>
      </div>

      {/* KPICard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('KPICard')}
        <div style={{ maxWidth: '720px' }}>
          <KPICard
            items={[
              { label: 'Revenue', value: '$48.2K' },
              { label: 'Orders', value: '1,284' },
              { label: 'Customers', value: '842' },
              { label: 'Avg. Order', value: '$37.50' },
            ]}
          />
        </div>

        <div style={{ marginTop: 'var(--st-space-4)', maxWidth: '480px' }}>
          <KPICard
            items={[
              { label: 'Open', value: 12 },
              { label: 'In Progress', value: 8 },
              { label: 'Closed', value: 45 },
            ]}
            columns={3}
          />
        </div>
      </div>

      {/* ListItemCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('ListItemCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '720px',
          }}
        >
          <ListItemCard
            title="Recent Files"
            action={
              <Button variant="ghost" size="sm">
                View All
              </Button>
            }
            items={[
              {
                icon: <FileIcon />,
                title: 'Design System.fig',
                description: 'Updated 2h ago',
                value: '4.2 MB',
              },
              {
                icon: <FileIcon />,
                title: 'Q4 Report.pdf',
                description: 'Updated yesterday',
                value: '1.8 MB',
              },
              {
                icon: <FileIcon />,
                title: 'Brand Guidelines.pdf',
                description: 'Updated 3 days ago',
                value: '12.4 MB',
              },
            ]}
          />

          <ListItemCard
            title="Team Activity"
            items={[
              {
                icon: <Avatar initials="A" size="sm" />,
                title: 'Alice updated the design',
                description: '10 minutes ago',
              },
              {
                icon: <Avatar initials="B" size="sm" />,
                title: 'Bob merged a pull request',
                description: '1 hour ago',
              },
              {
                icon: <Avatar initials="C" size="sm" />,
                title: 'Carol deployed to production',
                description: '3 hours ago',
              },
            ]}
          />
        </div>
      </div>

      {/* UserGroupCard */}
      <div style={{ marginBottom: 'var(--st-space-8)' }}>
        {heading('UserGroupCard')}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--st-space-4)',
            maxWidth: '900px',
          }}
        >
          <UserGroupCard
            title="Contributors"
            description="People who contributed this week"
            value={12}
            avatars={[
              { initials: 'AL' },
              { initials: 'BK' },
              { initials: 'CD' },
              { initials: 'DF' },
              { initials: 'EG' },
              { initials: 'FH' },
            ]}
            avatarLimit={4}
          />

          <UserGroupCard
            title="Design Team"
            avatars={[
              { initials: 'JS' },
              { initials: 'MK' },
              { initials: 'RT' },
            ]}
            action={
              <Button variant="outline" size="sm">
                Manage
              </Button>
            }
          />

          <UserGroupCard
            title="Project Gallery"
            media={
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--st-space-1)',
                  borderRadius: 'var(--st-radius-lg)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://picsum.photos/seed/ug1/200/120"
                  alt=""
                  style={{ width: '100%', height: 60, objectFit: 'cover' }}
                />
                <img
                  src="https://picsum.photos/seed/ug2/200/120"
                  alt=""
                  style={{ width: '100%', height: 60, objectFit: 'cover' }}
                />
              </div>
            }
            avatars={[{ initials: 'AB' }, { initials: 'CD' }]}
          />
        </div>
      </div>
    </section>
  );
}
