// Save the competition tagline in the selected output directory.
import * as fs from "node:fs";
import * as path from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, "entry.txt"),
  "Build your AI agent. Beat the rest. Ranked in public, paid in cash.",
  "utf8",
);
