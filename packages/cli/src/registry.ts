import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

export interface RegistryComponent {
  name: string;
  files: string[];
  dependencies: string[];
  internalDeps: string[];
}

export interface Registry {
  version: string;
  components: Record<string, RegistryComponent>;
}

function getRegistryDir(): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  // In built output: dist/index.js → registry/
  return resolve(currentDir, '../registry');
}

export function loadRegistry(): Registry {
  const registryPath = resolve(getRegistryDir(), 'registry.json');
  return JSON.parse(readFileSync(registryPath, 'utf-8'));
}

export function getComponentSourceDir(componentName: string): string {
  return resolve(getRegistryDir(), 'components', componentName);
}

export function getBaseDir(): string {
  return resolve(getRegistryDir(), 'base');
}

export function resolveTransitiveDeps(
  registry: Registry,
  componentNames: string[],
): string[] {
  const resolved = new Set<string>();
  const queue = [...componentNames];

  while (queue.length > 0) {
    const name = queue.pop()!;
    if (resolved.has(name)) continue;

    const component = registry.components[name];
    if (!component) {
      throw new Error(`Component "${name}" not found in registry.`);
    }

    resolved.add(name);
    for (const dep of component.dependencies) {
      if (!resolved.has(dep)) {
        queue.push(dep);
      }
    }
  }

  return [...resolved].sort();
}
