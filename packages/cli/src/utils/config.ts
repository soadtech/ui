import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

export interface Config {
  aliases: {
    components: string;
    utils: string;
    theme: string;
  };
}

const CONFIG_FILE = 'components.json';

export function getConfigPath(cwd: string): string {
  return resolve(cwd, CONFIG_FILE);
}

export function readConfig(cwd: string): Config | null {
  const configPath = getConfigPath(cwd);
  if (!existsSync(configPath)) return null;
  return JSON.parse(readFileSync(configPath, 'utf-8'));
}

export function writeConfig(cwd: string, config: Config): void {
  const configPath = getConfigPath(cwd);
  writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}
