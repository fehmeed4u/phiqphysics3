# φQ Physics IB — Teaching Deck Prompt

*Companion to `Lesson-Generator-Prompt.md`. The lesson page is the specification; the deck is how it is taught. Reference implementation: `decks/C1-01-Defining-SHM-Deck.html` + `decks/C1-01-Defining-SHM-Handout.html`.*

Structure follows one teaching philosophy: **three chunks taught in detail, a formative check after each, one exam-style question to wrap up, and a five-question retrieval starter at the front that comes from the previous lesson.**

---

## STEP 0 — EXHAUSTIVE SOURCE EXTRACTION

The source (lesson page, PDF or outline) is the complete specification of the deck's content, not a summary to paraphrase.

1. Read every section or page, start to finish. State how many you read.
2. Build a numbered inventory (**Box 0**) grouped as: **D** definitions and named quantities · **E** equations · **W** worked examples · **G** graphs, tables, figures · **M** misconceptions · **Q** questions with mark schemes · **X** extension, HL and real-world context.
3. Physics symbols are often mangled by OCR (μ, λ, ω, Δ, θ, °, ×10ⁿ, sub/superscripts). Reconstruct the correct symbol; **never alter a number, a unit, or a mark-scheme point.**
4. **Verbatim rule:** definitions, mark-scheme points, question stems and answer options are reproduced word for word. Split a sentence across slides if needed; do not rewrite it.

### Coverage rule
Every **D, E, W, G, M and X** item must land on a slide. Nothing is merged or abbreviated; anything that will not fit legibly gets its own extra slide, never a smaller font.

**Q items are the one exception.** The question bank is not projected in full. It is used as follows, and the rest is assigned as homework on the closing slide, where the lesson page already carries the model answers:
- the five starter MCQs (see below),
- the twelve check MCQs (four per chunk),
- one wrap-up exam question, with its mark scheme.

## STEP 1 — DECK BRIEF

Needed: topic code, lesson number and total, concept name, level (SL / SL+HL), source content. If any of those five are missing, ask only for those.

## STEP 2 — SLIDE PLAN BEFORE ANY HTML

### Box 1 — chunk split
Name the three chunks and list which inventory IDs each carries. **Split by concept:** the lesson's own sections, divided into three roughly equal teaching blocks in the source's order. Each chunk is one coherent idea a student could name.

### Box 2 — slide plan
Numbered: slide number → slide type → one-line summary → inventory IDs → number of reveal steps. Confirmed before markup.

### Box 3 — figure manifest
Every figure in order, as relative paths from `decks/`:

```
../assets/lesson-images/<topic-code>-<NN>-<concept-slug>-<NN>.png
```

Reuse the exact filenames from the source lesson page. No external URLs, no data URIs, no leading slash. Do not wait for images — write the deck against those paths.

## Deck spine — this order, always

| # | Type | Content |
|---|---|---|
| 1 | **Title** | Topic code, lesson N of M, level, concept name, one framing sentence, three key formula pills |
| 2 | **Starter divider** | Accent slide: "Starter", what the five questions cover, how long |
| 3–7 | **Starter Q1–Q5** | Five exam-style MCQs — one per slide, four options, answer plus distractor analysis |
| 8 | **Objectives** | Four numbered outcomes + the one skill this lesson is really examined on |
| 9 | **Roadmap** | The three chunks named side by side, with their formulas |
| 10 | **Hook** | The concrete scenario, its figure, the diagnostic question left unanswered |
| 11 | **Statement** | The formal definition, full-bleed, alone on the slide |
| — | **Chunk 1 divider** | Accent slide: "Chunk 1 of 3" + the chunk's title and one line |
| — | **Chunk 1 teaching** | Concept / equation / comparison / contrast / worked-example pairs. One idea per slide |
| — | **Check 1 divider** | Accent slide: "Check 1 — four questions" |
| — | **Check 1 Q1–Q4** | Four MCQs, one per slide, same format as the starter |
| — | **Chunk 2**, then **Check 2** | Same pattern |
| — | **Chunk 3**, then **Check 3** | Same pattern |
| — | **Traps** | Misconception table, wrong view in the error colour. Split across two slides rather than shrink |
| — | **Wrap-up divider** | Accent slide: one question, its mark total, how long students get |
| — | **Exam question** | Stem, figure, marks. What each mark is for. Answer withheld |
| — | **Mark scheme** | One tick-marked line per available mark, one reveal step each, then an examiner tip |
| — | **Context** | Real-world application, HL extension, linking questions |
| last | **Recap** | Quantities grid, the one equation to carry forward, keyword pills, homework, footer naming the next lesson |

### The starter — where the five questions come from
- Normal case: **the previous lesson** (N−1 of the same topic). Draw the five MCQs from that lesson's Q inventory and its trap table, so the starter is spaced retrieval of exactly what was taught last time.
- **Lesson 1 of a topic:** the starter tests the prerequisite knowledge this lesson stands on (named earlier topics — A.2 forces, A.3 energy, radians), not the new content.
- Five questions, always four options, always exam-style stems. Never a warm-up puzzle.

### Check MCQ format — one question per slide
Two columns. Left: the stem, then the four options, then the response prompt. Right: the answer, then a "why the others fail" table with one row per wrong option.

Reveal steps, in this order: **1** stem · **2** options + response prompt · **3** the answer and its working, with the correct option recoloured to the success colour · **4** the distractor analysis.

Mark the correct option `class="opt right"`. Its green styling is gated on the slide's `show-answer` class, which `deck.js` adds only once the step passes the options step — so the markup can name the answer without the class seeing it.

Response prompt: **"Fingers up on three"** — the class answers on their fingers, simultaneously, before anything is revealed. Nothing on a check slide is visible before its step.

## STEP 3 — HTML

### Files
The deck is `decks/<TOPIC><NN>-<Concept-Slug>-Deck.html` and loads the two shared files, which already exist and are not rewritten per deck:

```html
<link rel="stylesheet" href="deck.css">
...
<script src="deck.js"></script>
```

`deck.css` carries the brand kit, the 1920×1080 slide geometry and every component class. `deck.js` carries the reveal engine, keyboard navigation, the counter and the localStorage position. Set `<body data-deck="c1-01">` so each deck keeps its own saved place.

### Brand kit — Paper Lab
Already in `deck.css`; never hard-code a hex value in deck markup.

```
bg #F4EFE6 · surface #FFFFFF · surface2 #FBF8F2 · border #E2DACB
text #1C1917 · text2 #44403C · muted #78716C
primary #2563EB · secondary #6D28D9 · success #0F8A5F · warn #B4791A · error #C2413F
```

Playfair Display for headings and equations · Inter for body and UI · JetBrains Mono for data, units and codes. Eyebrow label above every heading, uppercase, muted.

### Slide markup

```html
<section class="slide" data-document-role="page" data-label="Period and frequency" data-screen-label="16">
  <div class="eyebrow">Chunk 1 · equation</div>
  <h2>Period and frequency</h2>
  <div class="body">…</div>
  <div class="foot"><span>C.1 · Defining Simple Harmonic Motion</span><span class="mono">16</span></div>
</section>
```

The eyebrow, heading and footer carry **no** `data-step` — they are the frame and are visible immediately. `data-screen-label` matches the footer number.

### Component classes in `deck.css`
`card` (+`tight`) · `two` (+`wide-l` / `wide-r`) · `col` · `formula` + `eq` · `note` (+`warn` / `success` / `tight`) · `fig` + `cap` · `steps` / `step` / `n` / `tx` · `pills` · `table.t` (+`traps`) · `opts` / `opt` (+`right`) / `l` · `stem` · `marks` / `tick` · `hands` · `chunkmap` · `statement` · `slide.accent` · `slide.center`.

Callout meanings are fixed: **primary** = note or definition · **warn** = trap, common mistake or instruction to the class · **success** = examiner tip or model answer. The error colour is for misconception text only.

### Slides with a figure
The figure comes **first** — first column on the left, and `data-step="1"`, so the class sees the diagram before any prose. Text cards follow in the right-hand column from step 2.

### Explanation cards — short
Slides are not the lesson page. Each card is one idea in one or two short sentences, carrying the keywords, the symbols and the numbers; the extended narrative, the full worked prose and the reading stay on the lesson page. Lists of examples become keyword pills, not sentences. Definitions, equations, mark-scheme points, question stems and answer options remain verbatim; explanatory prose is cut to its keywords.

### Reveal on click
Every element that appears later carries `data-step`, numbered from 1 within its slide. Repeat a number to reveal elements together (a figure and its caption); they stagger 60 ms apart. Aim for 3–6 steps per slide: one step means the slide did not need animating, more than six means it should be split.

Step budgets: title / statement / divider = 1 · objectives = one per outcome, then the closing note · concept = one per paragraph, then the figure · equation = equation → symbols and units → consequence · table = **one step per row** · worked example solution = one per numbered step · MCQ = the four steps above · mark scheme = one per mark.

Behaviour (already implemented): click, `→`, `Space`, `PageDown` advance · `←` / `PageUp` back · `Home` / `End` first and last · a number key jumps to that slide · `A` reveals the whole slide · position persists in localStorage · print and `.reveal-all` force every step visible.

### Non-negotiable rules
- One idea per slide. Two headings means two slides.
- Two background tones only: the page background and the accent fill used for title and divider slides.
- No answer is ever visible before its reveal step.
- **Equations as plain text with real Unicode** (λ, ω, T, ⁻¹, ×10⁻⁶, ≈, √, π, ²). No MathJax, no LaTeX — decks are exported to PowerPoint and PDF, where script-rendered equations do not survive.
- Nothing below 24px. Body text 27px, stems 29px, headings 58px, captions and eyebrows 22–26px.
- Flex/grid with `gap`, never margins on each child.
- No emoji unless the source lesson uses them in that exact place.

### Self-check before output — measure it, do not eyeball it
With `.reveal-all` on, for every slide compare the bounding box of the last child of `.body` against `.body`'s own bottom edge. Slides are `overflow:hidden`, so `scrollHeight` will not catch an overflow and it survives into every export. Where a slide overflows: switch cards to `tight`, then split the slide. Never reduce a font size below the scale above.

Also confirm: layout is identical at step 0 and at the final step (reveals change opacity and transform only); `data-step` numbering starts at 1 with no gaps; no eyebrow, heading or footer carries one.

## STEP 4 — THE HANDOUT

Every deck ships with `decks/<TOPIC><NN>-<Concept-Slug>-Handout.html`, built on `doc-page.js`, A4, flowing:

- name / class / date strip,
- the 5 starter MCQs and all 12 check MCQs, options laid out, nothing marked. **Every MCQ needs a writing affordance**: the stem sits in a `.qhead` flex row with a bordered `ANS` box at its right, and each option letter is a printed circle to ring. Both stay inside the `.q { break-inside: avoid }` block. A sheet a student cannot write on cannot be collected or self-marked,
- the wrap-up exam question with ruled working space,
- a teacher answer key on its own page (`break-before: page`): a Q → answer → reasoning table, then the mark scheme line by line, then the common zero-scoring answer.

## STEP 5 — CLOSING CHECKLIST

1. **Figure checklist** — every image path referenced, in order.
2. **Coverage table** — every inventory ID → its slide number, then "All N D/E/W/G/M/X items are represented; 0 omissions", plus which Q items went to the starter, the checks, the wrap-up and homework.
3. **Census** — total slides, total reveal steps, and slides per chunk.

## OUTPUT FORMAT

Box 0 inventory → Box 1 chunk split → Box 2 slide plan → Box 3 figure manifest → the deck HTML → the handout HTML → the STEP 5 checklist. No preamble.
