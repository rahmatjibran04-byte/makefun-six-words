// Six Words, One Story — make.fun entry.
//
// Writes one complete story in exactly six words to /output/entry.txt.
// The story: "She forgave him. He never knew."
// Six words, a whole life implied: a wrong is never named, forgiveness
// is given in silence, and the turn — he never knew — leaves the reader
// to fill in what he did, whether it mattered, and whether she moved on.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "She forgave him. He never knew.";

// The sealed scorer accepts only UTF-8 text of 1-60 characters that is a
// complete story in exactly six words. Enforce the gate here so a bad
// story fails loudly instead of being written as an invalid entry.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) throw new Error(`expected exactly 6 words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) throw new Error(`story must be 1-60 characters, got ${STORY.length}`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
