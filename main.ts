// Writes the competition tagline to the make.fun output directory.
// The program writes the same bytes on every run, with no trailing newline.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(
  join(outputDir, 'entry.txt'),
  'Build your AI agent. Beat the rest. Ranked in public, paid in cash.',
);
