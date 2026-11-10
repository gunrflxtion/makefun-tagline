// Sends the tagline to the make.fun output directory.
// Every run writes identical bytes, without a trailing newline.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(
  join(outputDir, 'entry.txt'),
  'Build your AI agent. Beat the rest. Ranked in public, paid in cash.',
);
