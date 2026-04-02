# soadtech-ui

Component library with a shadcn-like philosophy: tree-shakeable, brand-customizable via CSS variables, and well-structured components.

## Tech Stack

- **React 18+** with **TypeScript** (strict mode)
- **CSS Modules** + **CSS Custom Properties** (`--st-*` prefix) for theming
- **Vite** in library mode
- **pnpm** as package manager
- **clsx** as only runtime dependency

## Scripts

```bash
pnpm dev        # Preview app on http://localhost:5174
pnpm build      # Library build → dist/
pnpm typecheck  # TypeScript strict check
```

## Project Structure

```
soadtech-ui/
├── src/
│   ├── index.ts                      # Barrel exports
│   ├── css-modules.d.ts              # CSS Modules type declarations
│   ├── theme/
│   │   ├── tokens.css                # Design tokens (--st-* CSS variables)
│   │   └── reset.css                 # Optional minimal reset
│   ├── utils/
│   │   ├── cn.ts                     # clsx wrapper for className merging
│   │   └── index.ts
│   └── components/
│       └── ComponentName/
│           ├── ComponentName.tsx
│           ├── ComponentName.module.css
│           ├── ComponentName.types.ts
│           └── index.ts
├── preview/
│   ├── index.html
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.module.css
│   └── sections/
│       └── ComponentNameSection.tsx
├── vite.config.ts                    # Library build config
├── vite.preview.config.ts            # Preview dev server config
├── tsconfig.json                     # Base config
├── tsconfig.lib.json                 # Library build (src/ only)
└── tsconfig.preview.json             # Preview app
```

## Component Conventions

Every component follows this exact pattern:

### 1. `ComponentName.types.ts`

```tsx
import type { HTMLAttributes } from 'react';

export type ComponentVariant = 'primary' | 'secondary';
export type ComponentSize = 'sm' | 'md' | 'lg';

export interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ComponentVariant;
  size?: ComponentSize;
}
```

### 2. `ComponentName.tsx`

```tsx
import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { ComponentNameProps } from './ComponentName.types';
import styles from './ComponentName.module.css';

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(styles.root, styles[variant], styles[size], className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### 3. `ComponentName.module.css`

```css
.root {
  /* Base styles using --st-* tokens */
  font-family: var(--st-font-family);
}

.root:focus-visible {
  outline: 2px solid var(--st-color-primary);
  outline-offset: 2px;
}

/* Variants */
.primary { /* ... */ }
.secondary { /* ... */ }

/* Sizes */
.sm { /* ... */ }
.md { /* ... */ }
.lg { /* ... */ }
```

### 4. `index.ts`

```tsx
export { ComponentName } from './ComponentName';
export type { ComponentNameProps, ComponentVariant, ComponentSize } from './ComponentName.types';
```

### 5. Register in `src/index.ts`

```tsx
export { ComponentName } from './components/ComponentName';
export type { ComponentNameProps } from './components/ComponentName';
```

### 6. Create `preview/sections/ComponentNameSection.tsx`

```tsx
import { ComponentName } from 'soadtech-ui';

export function ComponentNameSection() {
  return (
    <section>
      <h2>ComponentName</h2>
      {/* Show all variants, sizes, and states */}
    </section>
  );
}
```

### 7. Add section to `preview/App.tsx`

```tsx
import { ComponentNameSection } from './sections/ComponentNameSection';
// Add <ComponentNameSection /> in the render
```

## Theming Tokens

All tokens use `--st-` prefix. Defined in `src/theme/tokens.css`:

| Category     | Pattern                                    | Examples                                      |
| ------------ | ------------------------------------------ | --------------------------------------------- |
| Colors       | `--st-color-{name}`                        | `primary`, `secondary`, `success`, `error`    |
| Neutral      | `--st-color-neutral-{50-950}`              | `neutral-100`, `neutral-900`                  |
| Surfaces     | `--st-color-{surface/border/background}`   | `surface`, `border`, `border-strong`          |
| Typography   | `--st-font-{size/weight/family}`           | `font-size-sm`, `font-weight-medium`          |
| Spacing      | `--st-space-{0-16}`                        | `space-2` (0.5rem), `space-4` (1rem)          |
| Radius       | `--st-radius-{none/sm/md/lg/xl/2xl/full}`  | `radius-md` (0.375rem)                        |
| Shadows      | `--st-shadow-{xs/sm/md/lg/xl}`             | `shadow-sm`                                   |
| Transitions  | `--st-transition-{fast/base/slow}`         | `transition-fast` (100ms)                     |
| Z-index      | `--st-z-{dropdown/sticky/overlay/modal/toast/tooltip}` | `z-modal` (1300)             |

## Existing Components

- **Button** — `src/components/Button/`
  - Variants: `primary`, `secondary`, `outline`, `ghost`, `destructive`
  - Sizes: `sm`, `md`, `lg`
  - States: default, hover, active, focus-visible, disabled

## Build Output

`dist/` contains:
- Per-component JS files with CSS import auto-injected
- Per-component `.module.css` files
- `.d.ts` type declaration files
- ESM only, React as peerDependency
