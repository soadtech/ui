import pc from 'picocolors';

export const logger = {
  info: (...args: unknown[]) => console.log(pc.cyan('info'), ...args),
  success: (...args: unknown[]) => console.log(pc.green('success'), ...args),
  warn: (...args: unknown[]) => console.log(pc.yellow('warn'), ...args),
  error: (...args: unknown[]) => console.log(pc.red('error'), ...args),
};
