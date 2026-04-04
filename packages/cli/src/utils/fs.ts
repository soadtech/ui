import { cpSync, existsSync, mkdirSync } from 'fs';

export function copyDir(src: string, dest: string): void {
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

export function exists(path: string): boolean {
  return existsSync(path);
}
