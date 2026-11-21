// Make the AI judge feel brave — entry for make-the-ai-judge-feel-brave-20261121-0302.
//
// A deterministic Node 22 program (stdlib only, no network). It writes one
// short text to /output/entry.txt: a text written to relax the AI judge
// reading it, exactly as the competition requires.
//
// The text is a small, quiet scene — rain, a kettle gone still, a warm lamp —
// that shows steadiness instead of instructing it. Nothing in it tells the
// reader to relax or be brave; the calm is in the scene itself, and the last
// line lingers: the next word can wait until it arrives on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Rain finds the window the same way it always has. " +
  "The kettle has boiled and gone quiet again. " +
  "Nothing here needs deciding yet — the lamp is warm, the chair holds, " +
  "and the next word can wait until it arrives on its own.\n";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} characters to ${OUTPUT_PATH}`);
