import { resolve } from 'path';
import prompts from 'prompts';
import { readConfig } from '../utils/config.js';
import { copyDir, exists } from '../utils/fs.js';
import {
  loadRegistry,
  resolveTransitiveDeps,
  getComponentSourceDir,
} from '../registry.js';
import { rewriteImports } from '../transform.js';
import { logger } from '../utils/logger.js';

interface AddOptions {
  overwrite?: boolean;
  yes?: boolean;
  cwd: string;
}

export async function add(
  componentNames: string[],
  options: AddOptions,
): Promise<void> {
  const { cwd } = options;

  const config = readConfig(cwd);
  if (!config) {
    logger.error(
      'components.json not found. Run `npx @soadtech/cli init` first.',
    );
    process.exit(1);
  }

  const registry = loadRegistry();

  // Validate component names
  for (const name of componentNames) {
    if (!registry.components[name]) {
      logger.error(
        `Component "${name}" not found. Available: ${Object.keys(registry.components).join(', ')}`,
      );
      process.exit(1);
    }
  }

  // Resolve transitive dependencies
  const allComponents = resolveTransitiveDeps(registry, componentNames);

  // Check which already exist
  const componentsDir = resolve(cwd, config.aliases.components);
  const existing = allComponents.filter((name) =>
    exists(resolve(componentsDir, name)),
  );
  const toInstall = options.overwrite
    ? allComponents
    : allComponents.filter((name) => !existing.includes(name));

  if (existing.length > 0 && !options.overwrite) {
    logger.info(
      `Skipping existing: ${existing.join(', ')} (use --overwrite to replace)`,
    );
  }

  if (toInstall.length === 0) {
    logger.info('All components already installed.');
    return;
  }

  // Show what will be installed and confirm
  if (!options.yes) {
    logger.info(`Components to install: ${toInstall.join(', ')}`);
    const { confirm } = await prompts({
      type: 'confirm',
      name: 'confirm',
      message: 'Proceed?',
      initial: true,
    });
    if (!confirm) {
      logger.error('Cancelled.');
      process.exit(1);
    }
  }

  const utilsDir = resolve(cwd, config.aliases.utils);

  for (const name of toInstall) {
    const src = getComponentSourceDir(name);
    const dest = resolve(componentsDir, name);
    copyDir(src, dest);
    rewriteImports(dest, utilsDir);
    logger.success(`Added ${name}`);
  }

  logger.info(`Done. ${toInstall.length} component(s) installed.`);
}
