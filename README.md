# soadtech-ui

A React component library with 42 production-ready components. Tree-shakeable, themeable via CSS custom properties, and available as both an npm package and copy-paste CLI.

## Installation

### Option A: npm package

```bash
npm install soadtech-ui
```

```tsx
import { Button } from 'soadtech-ui';
import 'soadtech-ui/theme/tokens.css';
```

### Option B: Copy-paste CLI (shadcn-style)

```bash
npx @soadtech/cli init
npx @soadtech/cli add Button Card Avatar
```

See the [@soadtech/cli README](./packages/cli/README.md) for full CLI documentation.

## Tech Stack

- **React 18+** with **TypeScript** (strict mode)
- **CSS Modules** + **CSS Custom Properties** (`--st-*` prefix) for theming
- **Vite** in library mode
- **pnpm** workspaces monorepo
- **clsx** as only runtime dependency

## Monorepo Structure

```
soadtech-ui/
├── packages/
│   ├── ui/                         # Component library (npm: soadtech-ui)
│   │   ├── src/
│   │   │   ├── index.ts            # Barrel exports
│   │   │   ├── components/         # 42 component directories
│   │   │   ├── theme/              # tokens.css, reset.css
│   │   │   └── utils/              # cn.ts (clsx wrapper)
│   │   ├── css-modules.d.ts
│   │   ├── vite.config.ts          # Library build config
│   │   ├── tsconfig.json
│   │   └── tsconfig.lib.json
│   └── cli/                        # CLI tool (npm: @soadtech/cli)
│       ├── src/                    # CLI source (commander + prompts)
│       ├── registry/               # Component registry + source copies
│       └── tsup.config.ts
├── preview/                        # Dev preview app
│   ├── vite.config.ts
│   ├── index.html
│   └── sections/                   # Component preview sections
├── scripts/
│   └── generate-registry.ts        # Generates registry.json
└── pnpm-workspace.yaml
```

## Scripts

```bash
pnpm dev               # Preview app on http://localhost:5174
pnpm build             # Library build → packages/ui/dist/
pnpm typecheck         # TypeScript strict check
pnpm generate-registry # Regenerate CLI component registry
```

## Components

| Category | Components |
|---|---|
| **Actions** | Button, ButtonLink, ActionBar |
| **Data Display** | Avatar, Badge, Card, Chart, Table, Tag, Tooltip, TreeviewList |
| **Data Entry** | Checkbox, Chip, Datepicker, Calendar, FileUpload, InputCounter, InputMessage, InputSearch, InputText, InputTextArea, RadioButton, RangeSlider, Rating, SelectDropdown, Switch, VerificationCode |
| **Feedback** | Alert, Dialog, Notification, Progress, Stepper |
| **Layout** | Divider, Sidebar |
| **Navigation** | Breadcrumbs, DropdownMenu, NavbarUser, Pagination, Persona, SegmentedControl, Tab |
| **Overlay** | Accordion, Dialog, DropdownMenu, Tooltip |

## Theming

All visual values use CSS custom properties with the `--st-*` prefix:

```css
:root {
  --st-color-primary: #2563eb;
  --st-color-primary-hover: #1d4ed8;
  --st-color-neutral-50: #fafafa;
  --st-font-size-sm: 0.875rem;
  --st-radius-md: 0.5rem;
  /* ... */
}
```

Override any token in your own CSS to customize the theme:

```css
:root {
  --st-color-primary: #e11d48;
  --st-color-primary-hover: #be123c;
}
```

## Usage

### npm package (tree-shaking)

```tsx
import { Button, Avatar, Card } from 'soadtech-ui';
import 'soadtech-ui/theme/tokens.css';
import 'soadtech-ui/theme/reset.css'; // optional

export function App() {
  return (
    <Card>
      <Avatar src="/photo.jpg" />
      <Button variant="filled" color="primary">
        Click me
      </Button>
    </Card>
  );
}
```

### Per-component imports (minimal bundle)

```tsx
import { Button } from 'soadtech-ui/components/Button';
```

## Component Conventions

Every component follows this pattern:

- **`forwardRef`** + **`displayName`** on all components
- **`cn()`** utility for className merging (clsx wrapper)
- **CSS Modules** for scoped styles (`.module.css`)
- **`--st-*` tokens** for all visual values (never hardcoded)
- **React Context** for parent-child coordination (e.g., Accordion)

### File structure per component

```
ComponentName/
├── ComponentName.tsx          # Main component
├── ComponentName.types.ts     # TypeScript interfaces
├── ComponentName.module.css   # Scoped styles
└── index.ts                   # Barrel export
```

## Development

```bash
# Clone and install
git clone <repo-url>
cd soadtech-ui
pnpm install

# Start preview app
pnpm dev

# Build library
pnpm build

# Typecheck
pnpm typecheck
```

## Publishing

```bash
# Library
cd packages/ui
npm publish --access public

# CLI (build first to copy component source)
cd packages/cli
pnpm build
npm publish --access public
```

## License

MIT
