import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';

const program = new Command();

program
  .name('soadtech')
  .description('Add soadtech-ui components to your project')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize your project for soadtech-ui components')
  .option('-y, --yes', 'Use default configuration', false)
  .option('--cwd <path>', 'Working directory', process.cwd())
  .action(async (opts) => {
    await init({ yes: opts.yes, cwd: opts.cwd });
  });

program
  .command('add')
  .description('Add components to your project')
  .argument('<components...>', 'Components to add')
  .option('--overwrite', 'Overwrite existing components', false)
  .option('-y, --yes', 'Skip confirmation', false)
  .option('--cwd <path>', 'Working directory', process.cwd())
  .action(async (components: string[], opts) => {
    await add(components, {
      overwrite: opts.overwrite,
      yes: opts.yes,
      cwd: opts.cwd,
    });
  });

program.parse();
