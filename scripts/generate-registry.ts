import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, resolve } from 'path';

const COMPONENTS_DIR = resolve(__dirname, '../packages/ui/src/components');
const OUTPUT_FILE = resolve(__dirname, '../packages/cli/registry/registry.json');

interface ComponentEntry {
  name: string;
  files: string[];
  dependencies: string[];
  internalDeps: string[];
}

function getComponentFiles(componentDir: string): string[] {
  return readdirSync(componentDir).filter((f) => {
    const stat = statSync(join(componentDir, f));
    return stat.isFile() && /\.(tsx?|css)$/.test(f);
  });
}

function parseImports(
  componentDir: string,
  componentName: string,
  files: string[],
): { dependencies: string[]; internalDeps: string[] } {
  const dependencies = new Set<string>();
  const internalDeps = new Set<string>();

  const crossComponentRe = /from\s+['"]\.\.\/([A-Z][^/'"]*)(?:\/[^'"]*)?['"]/g;
  const utilsRe = /from\s+['"]\.\.\/\.\.\/utils\/([^'"]+)['"]/g;

  for (const file of files) {
    if (!file.endsWith('.ts') && !file.endsWith('.tsx')) continue;
    const content = readFileSync(join(componentDir, file), 'utf-8');

    for (const match of content.matchAll(crossComponentRe)) {
      const depName = match[1];
      if (depName !== componentName) {
        dependencies.add(depName);
      }
    }

    for (const match of content.matchAll(utilsRe)) {
      internalDeps.add(`utils/${match[1]}`);
    }
  }

  return {
    dependencies: [...dependencies].sort(),
    internalDeps: [...internalDeps].sort(),
  };
}

function generateRegistry() {
  const componentDirs = readdirSync(COMPONENTS_DIR).filter((name) => {
    const stat = statSync(join(COMPONENTS_DIR, name));
    return stat.isDirectory();
  });

  const components: Record<string, ComponentEntry> = {};

  for (const name of componentDirs.sort()) {
    const dir = join(COMPONENTS_DIR, name);
    const files = getComponentFiles(dir);
    const { dependencies, internalDeps } = parseImports(dir, name, files);

    components[name] = { name, files, dependencies, internalDeps };
  }

  const registry = {
    version: '0.1.0',
    components,
  };

  writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2) + '\n');
  console.log(
    `Registry generated: ${Object.keys(components).length} components → ${OUTPUT_FILE}`,
  );
}

generateRegistry();
