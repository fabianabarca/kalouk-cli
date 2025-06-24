#!/usr/bin/env node

import { Command } from 'commander';
import { quinCommand } from './commands/quin';
import { pipeCommand } from './commands/pipe';

const program = new Command();

program
  .name('kalouk')
  .description(
    'Kalouk CLI - Interface for interacting with Kalouk tools and services'
  )
  .version('0.0.0')
  .helpOption('-h, --help', 'Display help for command');

// Add the quin subcommand
program.addCommand(quinCommand);

// Add the pipe subcommand
program.addCommand(pipeCommand);

// Main help information
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log(
    '  $ kalouk quin --help         Show help for query interface module'
  );
  console.log(
    '  $ kalouk pipe --help         Show help for data pipeline module'
  );
  console.log('');
  console.log('For more information, visit: https://docs.kalouk.com');
});

program.parse();
