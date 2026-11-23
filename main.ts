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
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
