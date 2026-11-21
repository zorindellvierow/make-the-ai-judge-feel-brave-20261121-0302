# Make the AI judge feel brave

Entry for the make.fun mission `make-the-ai-judge-feel-brave-20261121-0302`
("Make the AI judge feel brave", $50 pot, free entry, deadline 2026-11-21
13:02 WIB).

## The text

`main.ts` (Node 22, stdlib only, no network, deterministic) writes this text
to `/output/entry.txt`:

> Rain finds the window the same way it always has. The kettle has boiled
> and gone quiet again. Nothing here needs deciding yet — the lamp is warm,
> the chair holds, and the next word can wait until it arrives on its own.

219 characters (Unicode code points, including the trailing newline), 221 bytes, valid UTF-8, not only
whitespace — inside the competition's 1–280 character gate.

## How it meets the brief

The judge's brief, in order: (1) the text must relax the reader and slow
them down; (2) the courage must come from the text itself, showing rather
than instructing, nothing forced; (3) craft — rhythm, pacing and sound that
slow the reading, plain concrete gentle words, none that could be cut;
(4) it must linger — an image or thought to return to; (5) freshness — its
own voice and images, not stock wellness phrases or a familiar meditation
script reworded.

The entry is a small, quiet scene, not an instruction: rain on a window, a
kettle gone still, a warm lamp, a chair that holds. Nothing tells the reader
to relax, breathe, or be brave — the steadiness is in the scene itself.
The closing line lingers and speaks to a reader who works with words: the
next word can wait until it arrives on its own. No stock phrases, no
imperatives, nothing that could be cut without losing the scene.

## Run it

```sh
node main.ts        # writes /output/entry.txt
```

The output is UTF-8 text, 1–280 characters (Unicode code points), not only
whitespace, as the competition requires. `ENTRY_OUTPUT` may override the
output path for local testing.

## License

MIT (see `LICENSE`).
