import { cpSync, rmSync, mkdirSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const ROOT = resolve(import.meta.dirname, '..');
const UI_SRC = resolve(ROOT, '../ui/src');
const REGISTRY = resolve(ROOT, 'registry');

// Copy components
rmSync(resolve(REGISTRY, 'components'), { recursive: true, force: true });
cpSync(resolve(UI_SRC, 'components'), resolve(REGISTRY, 'components'), {
  recursive: true,
});

// Copy base files (utils + theme + css-modules.d.ts)
rmSync(resolve(REGISTRY, 'base'), { recursive: true, force: true });
mkdirSync(resolve(REGISTRY, 'base'), { recursive: true });
mkdirSync(resolve(REGISTRY, 'base/theme'), { recursive: true });

copyFileSync(
  resolve(UI_SRC, 'utils/cn.ts'),
  resolve(REGISTRY, 'base/cn.ts'),
);
copyFileSync(
  resolve(ROOT, '../ui/css-modules.d.ts'),
  resolve(REGISTRY, 'base/css-modules.d.ts'),
);
copyFileSync(
  resolve(UI_SRC, 'theme/tokens.css'),
  resolve(REGISTRY, 'base/theme/tokens.css'),
);
copyFileSync(
  resolve(UI_SRC, 'theme/reset.css'),
  resolve(REGISTRY, 'base/theme/reset.css'),
);

console.log('Registry source files copied.');
