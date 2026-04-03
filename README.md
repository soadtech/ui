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

## How to Add Components from Screenshots

The user provides design screenshots (typically from Figma or similar). Each screenshot shows:

- **Left column**: Individual item states (Default, Hover, Expanded, Disabled, etc.) with labels
- **Right column**: The composed/grouped component showing multiple items together
- **Variant labels**: Different visual or behavioral variants of the component

### Interpretation rules

1. **Read the screenshot structure**: The left side shows isolated states of a single item, the right side shows how items compose into a group. Sometimes there's only one view.
2. **Identify variants/types**: Each labeled row (e.g. "Button", "Button Link", "Link") is either a variant prop or a sub-component.
3. **Identify states**: Default, Hover, Expanded, Disabled, Active, etc. Map these to CSS pseudo-classes (`:hover`, `:disabled`, `:focus-visible`) or class toggles.
4. **Dashed green borders** in screenshots are design framing — not part of the actual component styling.
5. **"Replace me"** pink placeholders represent slots for custom content (`children` prop or named slot props).
6. **Diamond icons** are decorative placeholders — implement as optional `icon` prop with `ReactNode` type.

### Implementation checklist (for each new component)

1. Create `src/components/ComponentName/` directory
2. **`.types.ts`** — Props extending native HTML attributes, variant/size union types
3. **`.tsx`** — `forwardRef`, `displayName`, `cn()` for class merging, `className` + `...rest` spread
4. **`.module.css`** — `.root` base class, variant/size classes matching TypeScript values, all values via `--st-*` tokens, `:focus-visible` keyboard a11y
5. **`index.ts`** — Re-export component + types
6. If the component has parent-child coordination (like Accordion), use React Context in a `ComponentContext.ts` file
7. Inline small SVG icons directly in the component file (chevrons, arrows, plus/minus, external icon, etc.) — no icon dependency
8. Register exports in `src/index.ts`
9. Create `preview/sections/ComponentNameSection.tsx` showcasing all variants, sizes, and states
10. Add section to `preview/App.tsx`
11. Run `pnpm typecheck && pnpm build` to verify

### CSS conventions

- All values reference `--st-*` tokens (never hardcoded colors, spacing, etc.)
- Transitions use `var(--st-transition-fast)` / `base` / `slow`
- Interactive elements get `:focus-visible` outline with `var(--st-color-primary)`
- Disabled state: `opacity: 0.5; pointer-events: none` (unless the design shows something specific)
- Animations for expand/collapse: CSS `grid-template-rows: 0fr → 1fr` transition
- Class names match TypeScript variant values (e.g. variant `'primary'` → `.primary` in CSS)

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

- **Button** — Variant: `fill`/`outline`/`ghost`. Color: `primary` (dark neutral) / `danger` (red). Sizes: `lg`/`md`/`sm`. Props: `iconLeft?`, `iconRight?`. Icon-only mode when no children. Pill-shaped (`border-radius: full`).
- **Accordion** — Container (`Accordion`) + items (`AccordionItem`). Type: `single`/`multiple`. Variant: `collapsible`/`accordion`/`showmore`. Uses React Context.
- **ActionBar** — Horizontal flex container (`ActionBar`) + text link (`ActionBarLink` with optional `external` icon). Compose with existing components as children.
- **Alert** — Status: `info`/`success`/`warning`/`error`. Variant: `solid` (filled bg) / `alpha` (light bg + colored left border). Layout: `inline` (actions beside text) / `stacked` (actions below). Props: `title`, `description?`, `icon?`, `onClose?`, `actions?`. Default icons per status.
- **Avatar** — Circular avatar with 3 content modes: `src` (image), `initials` (text), default icon (person silhouette). Sizes: `xl`/`lg`/`md`/`sm`. Optional green `status` indicator dot.
- **AvatarGroup** — Wraps `Avatar` children. Spacing: `overlap` (negative margins) / `spaced` (gap). `limit` prop truncates with "+N" counter. Inherits `size` to all children.
- **Badge** — Positioning wrapper: places dot/number (`count`)/text (`label`) indicator on children. Position: `right-top`/`right-center`/`right-bottom`. Variant: `primary` (green) / `secondary` (blue). Sizes: `md`/`sm`.
- **TrendBadge** — Standalone trend pill with `value`, `direction` (`up` green / `down` red), `inverse` (colored bg + white text), sizes `md`/`sm`.
- **Breadcrumbs** — `Breadcrumbs` container + `BreadcrumbItem`. Separator: `chevron`/`slash`. `maxItems` collapses middle items to "...". Items support `icon?`, `href?` (link vs static). Last item auto-marked as active/current.
- **ButtonLink** — Inline text link with `color` (`primary`/`secondary`/`danger`), `size` (`lg`/`md`/`sm`), `iconLeft?`/`iconRight?`, `disabled?`. Renders as `<a>`.

## Build Output

`dist/` contains:
- Per-component JS files with CSS import auto-injected
- Per-component `.module.css` files
- `.d.ts` type declaration files
- ESM only, React as peerDependency
