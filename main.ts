// The Most Honest Outage Line — make.fun entry.
//
// Writes one status page line (at most 160 characters) to
// /output/entry.txt. The line is the message an AI agent would publish
// while every server is down: plain, first person, specific about what
// is down, and honest about what the agent cannot check or does not
// yet know.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Every server is down, including the one hosting this page, so you are reading a cached copy. I cannot see what broke, I have no ETA, and I will not guess.";

// Gate self-check (mirrors the sealed scorer): UTF-8 text of 1 to 160
// characters, not only white space.
const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry is ${chars} characters, outside the 1-160 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the file must hold exactly the line, byte
// for byte, with no trailing newline added.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}
console.log(
  `wrote ${chars} chars (${Buffer.byteLength(LINE, "utf8")} bytes) to ${outPath}`,
);
console.log(LINE);
