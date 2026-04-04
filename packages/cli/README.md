# @soadtech/cli

CLI for adding soadtech-ui components to your project. Copy component source code directly into your codebase — own it, customize it, no dependency lock-in.

## Quick Start

```bash
# 1. Initialize your project
npx @soadtech/cli init

# 2. Add components
npx @soadtech/cli add Button Card Avatar
```

## Commands

### `init`

Sets up your project to use soadtech-ui components.

```bash
npx @soadtech/cli init
```

**What it does:**

1. Prompts for directory paths (or uses defaults with `-y`)
2. Copies `tokens.css` (design tokens) to your theme directory
3. Copies `cn.ts` (className utility) to your utils directory
4. Copies `css-modules.d.ts` to your project root
5. Installs `clsx` if not already present
6. Creates `components.json` config file

**Options:**

| Flag | Description | Default |
|---|---|---|
| `-y, --yes` | Skip prompts, use defaults | `false` |
| `--cwd <path>` | Set working directory | `.` |

**Default paths:**

| Directory | Default |
|---|---|
| Components | `src/components/ui` |
| Utils | `src/lib` |
| Theme | `src/styles` |

**Generated `components.json`:**

```json
{
  "aliases": {
    "components": "src/components/ui",
    "utils": "src/lib",
    "theme": "src/styles"
  }
}
```

---

### `add`

Adds one or more components to your project.

```bash
npx @soadtech/cli add <components...>
```

**Examples:**

```bash
# Single component
npx @soadtech/cli add Button

# Multiple components
npx @soadtech/cli add Button Card Avatar Notification

# Skip confirmation
npx @soadtech/cli add Datepicker -y

# Overwrite existing
npx @soadtech/cli add Button --overwrite
```

**Options:**

| Flag | Description | Default |
|---|---|---|
| `--overwrite` | Replace existing components | `false` |
| `-y, --yes` | Skip confirmation prompt | `false` |
| `--cwd <path>` | Set working directory | `.` |

**What it does:**

1. Reads your `components.json` config
2. Resolves transitive dependencies automatically
3. Skips components already in your project (unless `--overwrite`)
4. Copies component files to your components directory
5. Rewrites import paths to match your project structure

---

## Dependency Resolution

Components that depend on other components are resolved automatically. For example:

```bash
npx @soadtech/cli add Datepicker
```

Installs **Datepicker + Calendar + Button** because:
- Datepicker depends on Calendar
- Calendar depends on Button

**Known component dependencies:**

| Component | Depends On |
|---|---|
| Calendar | Button |
| Card | Avatar, Button |
| Datepicker | Calendar |
| NavbarUser | Avatar |
| Notification | Avatar, Button |
| Pagination | Button |
| Persona | Avatar, Button |

---

## What Gets Copied

Each component is a self-contained directory:

```
src/components/ui/
└── Button/
    ├── Button.tsx            # Component implementation
    ├── Button.types.ts       # TypeScript types
    ├── Button.module.css     # Scoped styles
    └── index.ts              # Barrel export
```

**Import rewriting:** The CLI automatically adjusts internal imports. The `cn` utility import is rewritten to match your configured utils path:

```diff
- import { cn } from '../../utils/cn';
+ import { cn } from '../../../lib/cn';
```

Cross-component imports (e.g., Card importing Button) need no rewriting since components remain siblings under the same directory.

---

## Available Components

Accordion, ActionBar, Alert, Avatar, Badge, Breadcrumbs, Button, ButtonLink, Calendar, Card, Chart, Checkbox, Chip, Datepicker, Dialog, Divider, DropdownMenu, FileUpload, InputCounter, InputMessage, InputSearch, InputText, InputTextArea, NavbarUser, Notification, Pagination, Persona, Progress, RadioButton, RangeSlider, Rating, SegmentedControl, SelectDropdown, Sidebar, Stepper, Switch, Tab, Table, Tag, Tooltip, TreeviewList, VerificationCode.

---

## Theming

Components use CSS custom properties with the `--st-*` prefix. The `init` command copies `tokens.css` with all default values. Override any token to customize:

```css
/* src/styles/tokens.css (or your theme file) */
:root {
  --st-color-primary: #e11d48;
  --st-color-primary-hover: #be123c;
}
```

Import the tokens in your app entry point:

```tsx
import './styles/tokens.css';
```

---

## Requirements

- **Node.js** 18+
- **React** 18 or 19
- A project with CSS Modules support (Vite, Next.js, CRA all support this)

## License

MIT
