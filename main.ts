import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, written to relax the AI judge reading it: the tide,
// coming in tonight as it has every night since before there were eyes.
// The calm is in the image itself — deep time, no demands — never an
// instruction to the reader.
const text =
  "The tide is coming in. It has come in every night since before there were eyes to see it, and it will come in tonight, quietly, in the dark, without needing anything from you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
