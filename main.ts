// Funniest One-Line Out-of-Office Reply — u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
// Writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line (117 characters): the inbox is handed to an intern named Kevin;
// Kevin turns out to be a printer; a printer, jammed. The twist lands in
// the last words, the narrator is the victim of his own handover, and every
// word earns its place. No trailing newline: the gate counts 1-160 chars.
const LINE =
  "I'm out of office until Monday. My inbox is being handled by an intern named Kevin. Kevin is a printer. He is jammed.";

// Gate caps from competition.yaml: entry is 1-160 characters, one line.
const MAX_CHARS = 160;
const MIN_CHARS = 1;

// Count in code points, not UTF-16 units, so non-ASCII text is measured
// the way the gate measures it.
const charCount = [...LINE].length;
if (
  charCount < MIN_CHARS ||
  charCount > MAX_CHARS ||
  LINE.includes("\n") ||
  LINE.trim() !== LINE
) {
  throw new Error(
    `entry must be ${MIN_CHARS}-${MAX_CHARS} characters on one line with no surrounding whitespace, got ${charCount}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
