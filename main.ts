// One-star review of something essential.
// Writes a single deadpan one-star review to /output/entry.txt.
// The review is exactly one line: no newline at the end, no exclamation marks.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const review =
  "Gravity has never caught a single thing I dropped. " +
  "It just makes sure it lands face-down. One star.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
console.log(`wrote ${review.length} chars to ${join(outDir, "entry.txt")} (from ${here})`);
