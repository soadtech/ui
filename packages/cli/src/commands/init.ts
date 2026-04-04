import { resolve } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import prompts from 'prompts';
import { writeConfig, getConfigPath } from '../utils/config.js';
import { getBaseDir } from '../registry.js';
import { logger } from '../utils/logger.js';

interface InitOptions {
  yes?: boolean;
  cwd: string;
}

const DEFAULTS = {
  components: 'src/components/ui',
  utils: 'src/lib',
  theme: 'src/styles',
};

function detectPackageManager(cwd: string): string {
  if (existsSync(resolve(cwd, 'bun.lockb')) || existsSync(resolve(cwd, 'bun.lock'))) return 'bun';
  if (existsSync(resolve(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(resolve(cwd, 'yarn.lock'))) return 'yarn';
  return 'npm';
}

export async function init(options: InitOptions): Promise<void> {
  const { cwd } = options;

  if (existsSync(getConfigPath(cwd))) {
    logger.warn('components.json already exists. Overwriting.');
  }

  let aliases = DEFAULTS;

  if (!options.yes) {
    const response = await prompts([
      {
        type: 'text',
        name: 'components',
        message: 'Components directory:',
        initial: DEFAULTS.components,
      },
      {
        type: 'text',
        name: 'utils',
        message: 'Utils directory:',
        initial: DEFAULTS.utils,
      },
      {
        type: 'text',
        name: 'theme',
        message: 'Theme directory:',
        initial: DEFAULTS.theme,
      },
    ]);

    if (!response.components) {
      logger.error('Cancelled.');
      process.exit(1);
    }

    aliases = {
      components: response.components,
      utils: response.utils,
      theme: response.theme,
    };
  }

  const baseDir = getBaseDir();

  // Copy tokens.css → theme dir
  const themeDir = resolve(cwd, aliases.theme);
  mkdirSync(themeDir, { recursive: true });
  copyFileSync(
    resolve(baseDir, 'theme/tokens.css'),
    resolve(themeDir, 'tokens.css'),
  );
  logger.success(`Copied tokens.css → ${aliases.theme}/tokens.css`);

  // Copy cn.ts → utils dir
  const utilsDir = resolve(cwd, aliases.utils);
  mkdirSync(utilsDir, { recursive: true });
  copyFileSync(resolve(baseDir, 'cn.ts'), resolve(utilsDir, 'cn.ts'));
  logger.success(`Copied cn.ts → ${aliases.utils}/cn.ts`);

  // Copy css-modules.d.ts → project root
  copyFileSync(
    resolve(baseDir, 'css-modules.d.ts'),
    resolve(cwd, 'css-modules.d.ts'),
  );
  logger.success('Copied css-modules.d.ts → project root');

  // Ensure components dir exists
  mkdirSync(resolve(cwd, aliases.components), { recursive: true });

  // Install clsx if not present
  const pm = detectPackageManager(cwd);
  const pkgJsonPath = resolve(cwd, 'package.json');
  if (existsSync(pkgJsonPath)) {
    const pkg = JSON.parse(
      (await import('fs')).readFileSync(pkgJsonPath, 'utf-8'),
    );
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };
    if (!allDeps['clsx']) {
      logger.info(`Installing clsx with ${pm}...`);
      const installCmd =
        pm === 'npm' ? 'npm install clsx' : `${pm} add clsx`;
      execSync(installCmd, { cwd, stdio: 'inherit' });
    }
  }

  // Write config
  writeConfig(cwd, { aliases });
  logger.success('Created components.json');
  logger.info('Run `npx @soadtech/cli add <component>` to add components.');
}
