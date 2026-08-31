# φQ Physics IB — Slide Generator Prompt

*Companion to `Lesson-Generator-Prompt.md`. Same mindset: the source is a specification, not a summary; structure is fixed; nothing is invented and nothing is silently dropped. Copy everything below the line into the other model.*

---

You are generating a **presentation deck** for the φQ Physics IB website — slides a teacher projects in front of a class, not a document to be read alone. Output a single self-contained HTML file: one fixed-size slide per section, no scrolling inside a slide, no build step.

## STEP 0 — EXHAUSTIVE SOURCE EXTRACTION (mandatory)

The attached lesson page, PDF or outline is the **complete specification of the deck's content**, not a summary to be paraphrased.

### 0.1 Read the whole source
Read every page or every section, start to finish. Never sample the opening and infer the rest. State the page/section count you actually read.

Physics symbols are frequently mangled by OCR (μ, λ, ω, Δ, θ, °, ×10ⁿ, subscripts, superscripts). Reconstruct the physically correct symbol and keep the original numeric values exactly as given. **Never alter a number, a unit, or a mark-scheme point.**

### 0.2 Build a content inventory before writing any slide
Output a numbered inventory (**Box 0**) of every extractable item, grouped:

- **D** — definitions and named quantities (with units)
- **E** — equations
- **W** — worked examples (with every step and every conversion)
- **G** — graphs, tables and figures
- **M** — misconceptions / traps
- **Q** — practice questions and exam questions, each with its mark scheme
- **X** — extension, HL and real-world context items

Number every item (D1, E1, W1, Q1 …). This inventory is the checklist the deck must satisfy.

### 0.3 Coverage rule — no silent omission
- Every numbered inventory item must appear on some slide. Map each item to the slide that carries it.
- Slide count is not a constraint. A dense source produces a long deck. Never write "and so on", never leave a placeholder, never compress two worked examples into one.
- **Verbatim rule:** definitions, mark-scheme points, question stems and answer options are reproduced word for word. You may split a sentence across slides for legibility; you may not rewrite it.
- Anything you cannot fit legibly on one slide gets **its own additional slide** — never a smaller font.

### 0.4 Coverage report (output with STEP 4)
A table: one row per inventory item ID → the slide number that carries it. Then state: "All N inventory items are represented; 0 omissions."

## STEP 1 — RECEIVE THE DECK BRIEF

I will provide: topic code (e.g. `C.2`), lesson number and total (e.g. 1 of 4), concept name, level (SL / SL+HL), and the source content. If any of those five are missing, ask only for those.

## STEP 2 — OUTPUT THE SLIDE PLAN BEFORE WRITING HTML

### Box 1 — Slide plan
A numbered list: slide number → slide type (from the library below) → one-line content summary → which inventory IDs it carries. I confirm or amend this before you write any markup.

Every deck follows this spine. Insert extra slides of the appropriate type wherever the inventory demands it; never reorder the spine.

| # | Type | Purpose |
|---|---|---|
| 1 | **Title** | Topic code, lesson N of M, level, concept name, one-sentence framing of what the lesson does |
| 2 | **Objectives** | 4 numbered outcomes in the language of the syllabus, plus the one skill this lesson is really examined on |
| 3 | **Hook** | The vivid concrete scenario, with its figure, plus the diagnostic question left unanswered |
| 4 | **Statement** | The formal definition, full-bleed, as the only thing on the slide |
| 5+ | **Concept** | One idea per slide: prose column + its figure. Never two unrelated concepts on one slide |
| — | **Equation** | The equation as the hero element, with every symbol and unit defined beneath it |
| — | **Comparison** | The graph-mastery or classification table, one row per case |
| — | **Contrast** | Two figures side by side where the distinction *is* the lesson (λ vs T, transverse vs longitudinal) |
| — | **Example — question** | The worked-example stem and its figure. Answer withheld |
| — | **Example — solution** | The four numbered steps: Identify → Data → Equation → Answer |
| — | **Context** | Real-world application and HL extension, two columns |
| — | **Traps** | The misconception table: wrong view in the error colour, correct view in body colour |
| — | **Section divider** | Accent-filled, one line of text, marks the switch from teaching to testing |
| — | **Practice** | Max 3 MCQs per slide, options laid out but unmarked |
| — | **Answers** | Letter + full explanation for each, on its own slide after all questions |
| — | **Exam question** | Stem, figure, mark allocation. Answer withheld |
| — | **Mark scheme** | One tick-marked line per available mark |
| last | **Recap** | The 4 quantities as a grid, the one equation to carry forward, keyword pills, and a footer naming the next lesson |

### Box 2 — Figure manifest
List every figure the deck references, in order, as relative paths. Images live in the site's own folder — **no external URLs, no data URIs, no leading slash**:

```
../assets/lesson-images/<topic-code>-<NN>-<concept-slug>-<NN>.png
```

e.g. `../assets/lesson-images/c2-01-wave-properties-and-wave-speed-03.png` (`C.2` → `c2`, two-digit lesson number, hyphenated lowercase concept slug, two-digit figure index in figure order). Reuse the existing filenames when the source is an existing lesson page. Do not stop and wait for the images — write the deck against those exact paths.

## STEP 3 — GENERATE THE HTML

### Brand kit
Use exactly one kit. Unless I name another, use **Paper Lab** — the site's light theme, which reads best projected in a lit classroom and sits cleanly behind the black-on-white lesson figures.

```
PAPER LAB
bg #F4EFE6 · surface #FFFFFF · surface2 #FBF8F2 · border #E2DACB
text #1C1917 · text2 #44403C · muted #78716C
primary #2563EB · secondary #6D28D9
success #0F8A5F · warn #B4791A · error #C2413F
radius 14px · shadow 0 2px 14px rgba(28,25,23,.05)
```

Alternates, same structure, colour only: **Deep Field** (dark navy, primary #4F9DFF, bg #070B14, surface #0D1221, text #E8E4DB) · **Violet Shift** (bg #0A0814, surface #130F24, primary #8B7CFF) · **Cyan Trace** (bg #04080D, surface #0A121A, primary #00D4FF, secondary #F5A623, radius 6px) · **Slate Chalk** (bg #1E2634, surface #263041, primary #F5A623, text #F5EEDC, radius 4px). On any dark kit, figures must sit inside a light surface card — never directly on the page background.

### Type system (identical in every kit — this is what carries the brand)
- **Headings:** Playfair Display 600/700, line-height 1.05–1.15, letter-spacing −0.015em
- **Body and UI:** Inter 400/500/600/700
- **Equations, codes, data, units:** JetBrains Mono 500/700
- **Eyebrow labels:** Inter 600, uppercase, letter-spacing 0.13em, in muted, above every heading
- Load all three from Google Fonts in `<head>`

### Slide geometry and type scale
- Every slide is exactly **1920 × 1080 px**, `overflow:hidden`, padding `84px 110px 80px`
- Slide title 66px · full-bleed statement 92–104px · body 29–31px · captions 22px · eyebrow 26px
- **Nothing below 24px, ever.** If content won't fit at 29px, split the slide
- Each slide: `<section class="slide" data-document-role="page" data-label="<short title>" data-screen-label="NN">`, a flex column with an eyebrow, a heading, a `.body` that flexes, and a footer strip with the lesson name and slide number

### Component vocabulary (mirrors the lesson page, so site and deck match)
- **Card** — surface fill, 1px border, radius, soft shadow. The default container for prose
- **Equation block** — 6–7px left rule in the primary colour, tinted fill, radius on the right edge only, uppercase label above, equation centred in serif at 70px
- **Callouts** — same left-rule pattern, three fixed meanings: **primary** = note or definition · **warn** = trap or common mistake · **success** = examiner tip or model answer. **error** is used for misconception text only
- **Figure frame** — surface card, 1px border, image `object-fit:contain`, caption in muted beneath
- **Steps** — numbered circles in the primary colour, one row per step, hairline dividers between
- **Pills** — mono text in a tinted rounded capsule, for keywords and formulas
- **Tables** — uppercase muted headers, hairline row dividers, first column in the primary colour (or the error colour in the traps table)

### Non-negotiable layout rules
- One idea per slide. If a slide needs two headings, it is two slides
- Maximum two background tones in a deck: the page background, and the accent fill used for title and divider slides
- Every figure keeps its caption and its figure number from the source
- Questions and answers are always on separate slides — never a visible answer beside its question
- Lay sibling groups out with flex/grid and `gap`, never with margins on each child
- **Write equations as plain text with real Unicode** (λ, μ, T, ⁻¹, ×10⁻⁶, ≈) — no MathJax, no LaTeX, no `\(...\)`. Decks get exported to PowerPoint and Slides, where a script-rendered equation does not survive
- No emoji unless the source lesson uses them in that exact place
- Define `a` and `a:hover` colours from the kit even if the deck has no links
- Write compact HTML: one-line CSS rules, no indentation ladders, no comments narrating markup

### Self-check before you output
For every slide, confirm the last child of `.body` does not extend past `.body`'s own bottom edge — a footer with content painted over it is the single most common failure, and it survives into every export. Checking `scrollHeight` will not catch it, because slides are `overflow:hidden`. Compare bounding boxes.

## STEP 4 — CLOSING CHECKLIST

After the HTML, output:
1. **Figure checklist** — every image path referenced, in order
2. **Coverage table** — every inventory ID → its slide number, then "All N inventory items are represented; 0 omissions"
3. **Slide census** — total slide count and a count by slide type

## OUTPUT FORMAT

Box 0 inventory → Box 1 slide plan → Box 2 figure manifest → the complete HTML file → the STEP 4 checklist. Nothing else. No preamble, no summary of what you are about to do.
