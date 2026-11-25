import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one funny, true line reviewing the dullest everyday object.
// The doorstop is the canonical boring object, and its dullness is the joke:
// eleven years of perfect service, zero thanks, and nobody even remembers
// it is there.
const LINE =
  "The doorstop has held the same door open for eleven years and has never once been thanked — mostly because nobody remembers it's there.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The gate refuses anything over 200 characters, so fail loudly here
// instead of shipping an invalid entry.
if ([...LINE].length > 200) {
  throw new Error(`entry line is ${[...LINE].length} characters, over the 200 limit`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
