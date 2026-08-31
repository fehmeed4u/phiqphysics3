# Physics Website — project instructions

## Action keyword: `MAKE LESSON`

When a message contains **`MAKE LESSON`** (optionally with a PDF/outline attached):

1. Read `Lesson-Generator-Prompt.md` in the project root and follow it exactly — it is the full lesson-snippet spec (CSS, section order A–M, image rules, output format). Do not ask me to re-paste it.
2. If a PDF is attached, read it (read_pdf skill) **in full, every page** and run the spec's STEP 0 exhaustive extraction: build the numbered content inventory (Box 0) before writing any HTML. Nothing in the PDF is a summary to paraphrase — every definition, equation, worked example, table value, figure, exam question and mark scheme point must end up in the lesson. Then treat it as the STEP 1 outline. If topic code, lesson number, total lessons, concept name, or level are missing, ask only for those.
3. Produce Box 0 inventory → STEP 2 boxes → HTML snippet → STEP 4 file checklist + coverage report, per the spec.
4. **Write the snippet into the lesson page straight away** — `syllabus-content/<Topic-Folder>/NN-slug.html`, replacing everything inside `#lesson-body` with `<div style="padding:1.5rem 1.75rem">…snippet…</div>`, and add the `#lesson-body` overflow guards if that page lacks them. The `<img>` tags point at files that do not exist yet; that is expected.
5. **Then open the paste tool for me**, pre-filled for this lesson, via `show_to_user` on:

       Lesson-Image-Paste.html?topic=<A.1>&lesson=<2>&concept=<Concept Name>&figs=<N>&mode=crop

   Use `mode=crop` when the figures come from one DALL·E panel sheet, otherwise drop the `mode` param. Tell me in one line to hit **Connect image folder** and pick `assets/lesson-images/` the first time — after that every paste is written to disk and the lesson page shows it on refresh.
6. If I paste the images into chat instead, save them into `assets/lesson-images/` under the spec's filenames, in figure order.

Related keywords:
- `MAKE LESSON --snippet` — snippet only, do not write it into the page (write it to `snippets/` instead).
- `IMAGES ONLY` — output just the DALL·E panel prompt + filename manifest, no HTML.
- `PASTE IMAGES` — open `Lesson-Image-Paste.html` (pre-filled if I name a lesson).

## Action keyword: `MAKE DECK`

When a message contains **`MAKE DECK`** (naming a lesson, or with a PDF/outline attached):

1. Read `Teaching-Deck-Prompt.md` in the project root and follow it exactly — it is the full teaching-deck spec (three chunks, a four-question check after each, a five-question retrieval starter, one exam-style wrap-up). Do not ask me to re-paste it.
2. Source: the existing lesson page at `syllabus-content/<Topic-Folder>/NN-slug.html`, read in full, or an attached PDF read in full. Run the spec's STEP 0 extraction and build the Box 0 inventory before writing any slide.
3. The starter's five MCQs come from the **previous** lesson (N−1); for lesson 1 of a topic they come from the named prerequisite topics instead.
4. Write `decks/<TOPIC><NN>-<Concept-Slug>-Deck.html` and `decks/<TOPIC><NN>-<Concept-Slug>-Handout.html`. Both load the shared `decks/deck.css`, `decks/deck.js` and `decks/doc-page.js` — do not rewrite those per deck.
5. Run the spec's measured overflow self-check on every slide before showing me the deck, then open the deck.

Reference implementation: `decks/C1-01-Defining-SHM-Deck.html`.

## Image hosting rule (applies to all lesson pages)

Images are local only. Every `<img src>` is `../../assets/lesson-images/<filename>` — never postimg, imgbb, imgur, Drive, any external URL, any `data:` URI, or a leading `/`.

Filename convention (flat folder, matches `assets/lesson-images/manifest.json`):

    <topic-code>-<lesson-number>-<concept-slug>-NN.png

e.g. `c3-01-principle-of-superposition-01.png` (`C.3` → `c3`, two-digit lesson, hyphenated lowercase slug, two-digit figure index in figure order).

## Pasting images

`Lesson-Image-Paste.html` is the paste tool. It accepts URL pre-fill: `?topic=A.1&lesson=2&concept=<name>&figs=5&mode=crop`. Either paste each figure into its slot, or paste the whole DALL·E panel sheet and drag a box round each panel.

**Connect image folder** (Chrome/Edge) grants the tool write access to a folder once; after that every paste is written directly into `assets/lesson-images/` and the lesson page shows it on refresh. **Save all files** is the fallback for browsers without folder access.

If images are attached in chat instead, save them straight into `assets/lesson-images/` under the spec's filenames, in figure order.

## Notes

- Lesson pages live at `syllabus-content/<Topic-Folder>/NN-slug.html` (two folders deep).
- All colours come from site CSS variables — no hex codes in lesson snippets.
- `lesson-image-checklist.html` tracks which image files still need to be dropped in.
