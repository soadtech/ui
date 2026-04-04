import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, relative, dirname, posix } from 'path';

/**
 * Rewrites `../../utils/cn` imports in copied component files
 * to point to the user's configured utils directory.
 */
export function rewriteImports(
  componentDir: string,
  utilsDir: string,
): void {
  const files = readdirSync(componentDir).filter(
    (f) => f.endsWith('.ts') || f.endsWith('.tsx'),
  );

  for (const file of files) {
    const filePath = join(componentDir, file);
    let content = readFileSync(filePath, 'utf-8');

    // Rewrite ../../utils/cn → relative path to user's utils/cn
    const fromDir = dirname(filePath);
    const targetCn = join(utilsDir, 'cn');
    let rel = relative(fromDir, targetCn);
    // Normalize to posix separators and ensure starts with ./
    rel = rel.split('\\').join('/');
    if (!rel.startsWith('.')) rel = './' + rel;

    content = content.replace(
      /from\s+['"]\.\.\/\.\.\/utils\/cn['"]/g,
      `from '${rel}'`,
    );

    writeFileSync(filePath, content, 'utf-8');
  }
}
