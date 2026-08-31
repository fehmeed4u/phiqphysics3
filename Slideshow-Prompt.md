Build an **animated presentation deck** from the lesson content I have given you. Slides a teacher projects in front of a class and advances one beat at a time while talking — not a document to be read alone. Output one self-contained HTML file, one fixed-size slide per section, no scrolling inside a slide, no build step.

## Use the content as given

The lesson content is the complete specification of the deck. It is not a summary to be paraphrased.

- Definitions, mark-scheme points, question stems and answer options are reproduced **word for word**. You may split a sentence across slides for legibility; you may not rewrite it.
- Never alter a number, a unit, or a mark-scheme point. Keep physics symbols exact (λ, μ, ω, Δ, θ, ⁻¹, ×10⁻⁶).
- Every definition, equation, worked example, table, figure, misconception, practice question and exam question in the source lands on a slide. Nothing is dropped, merged or abbreviated.
- Slide count is not a constraint. Anything that will not fit legibly gets **its own extra slide** — never a smaller font.

## Slide plan first

Before writing any HTML, output a numbered slide plan: slide number → slide type → one-line content summary → how many reveal steps it breaks into. I confirm it before you write markup.

## Deck spine — follow this order, insert extra slides where the content demands

| # | Type | Content |
|---|---|---|
| 1 | Title | Topic code, lesson N of M, level, concept name, one sentence on what the lesson does |
| 2 | Objectives | 4 numbered outcomes, plus the one skill this lesson is really examined on |
| 3 | Hook | The concrete scenario with its figure, and the diagnostic question left unanswered |
| 4 | Statement | The formal definition, full-bleed, the only thing on the slide |
| 5+ | Concept | One idea per slide: prose column + its figure |
| — | Equation | The equation as the hero element, every symbol and unit defined beneath it |
| — | Comparison | A table, one row per case |
| — | Contrast | Two figures side by side where the distinction *is* the lesson |
| — | Example — question | Worked-example stem and figure. Answer withheld |
| — | Example — solution | Four numbered steps: Identify → Data → Equation → Answer, revealed one click at a time |
| — | Context | Real-world application and extension, two columns |
| — | Traps | Misconception table: wrong view in the error colour, correct view in body colour |
| — | Divider | Accent-filled, one line, marks the switch from teaching to testing |
| — | Practice | Max 3 multiple-choice questions per slide, options unmarked; the correct option and its explanation reveal on click |
| — | Exam question | Stem, figure, mark allocation |
| — | Mark scheme | One tick-marked line per available mark, each revealed on its own click |
| last | Recap | Key quantities as a grid, the one equation to carry forward, keyword pills, footer naming the next lesson |

## Brand kit — use exactly one

Default: **Paper Lab** (reads best projected in a lit classroom, and sits cleanly behind black-on-white physics figures).

```
bg #F4EFE6 · surface #FFFFFF · surface2 #FBF8F2 · border #E2DACB
text #1C1917 · text2 #44403C · muted #78716C
primary #2563EB · secondary #6D28D9
success #0F8A5F · warn #B4791A · error #C2413F
radius 14px · shadow 0 2px 14px rgba(28,25,23,.05)
```

Alternates, colour only — same structure: **Deep Field** (bg #070B14, surface #0D1221, text #E8E4DB, primary #4F9DFF) · **Violet Shift** (bg #0A0814, surface #130F24, primary #8B7CFF) · **Cyan Trace** (bg #04080D, surface #0A121A, primary #00D4FF, secondary #F5A623, radius 6px) · **Slate Chalk** (bg #1E2634, surface #263041, text #F5EEDC, primary #F5A623, radius 4px). On any dark kit, figures must sit inside a light surface card — never directly on the page background.

## Type system — identical in every kit

- **Headings:** Playfair Display 600/700, line-height 1.05–1.15, letter-spacing −0.015em
- **Body and UI:** Inter 400/500/600/700
- **Equations, units, data:** JetBrains Mono 500/700
- **Eyebrow label:** Inter 600, uppercase, letter-spacing 0.13em, in muted, above every heading
- Load all three from Google Fonts in `<head>`

## Geometry and scale

- Every slide exactly **1920 × 1080 px**, `overflow:hidden`, padding `84px 110px 80px`
- Slide title 66px · full-bleed statement 92–104px · body 29–31px · captions 22px · eyebrow 26px
- **Nothing below 24px, ever.** If content will not fit at 29px, split the slide
- Markup per slide: `<section class="slide" data-document-role="page" data-label="<short title>" data-screen-label="NN">` — a flex column holding an eyebrow, a heading, a `.body` that flexes, and a footer strip with the lesson name and slide number

## Components

- **Card** — surface fill, 1px border, radius, soft shadow. Default container for prose
- **Equation block** — 6–7px left rule in the primary colour, tinted fill, radius on the right edge only, uppercase label above, equation centred in serif at ~70px
- **Callouts** — same left-rule pattern, three fixed meanings: **primary** = note or definition · **warn** = trap or common mistake · **success** = examiner tip or model answer. The error colour is for misconception text only
- **Figure frame** — surface card, 1px border, image `object-fit:contain`, caption in muted beneath, keeping the source's figure number
- **Steps** — numbered circles in the primary colour, one row per step, hairline dividers
- **Pills** — mono text in a tinted rounded capsule, for keywords and formulas
- **Tables** — uppercase muted headers, hairline row dividers, first column in the primary colour (error colour in the traps table)

## Images

Reference the site's own files with relative paths — no external URLs, no data URIs, no leading slash:

```
../assets/lesson-images/<topic-code>-<NN>-<concept-slug>-<NN>.png
```

e.g. `../assets/lesson-images/c2-01-wave-properties-and-wave-speed-03.png`. Reuse the exact filenames from the source lesson. Do not stop and wait for images — write the deck against those paths.

## Reveal on click — every slide builds

Nothing on a slide appears all at once. Each slide is broken into **reveal steps** that appear one at a time as the teacher advances, so the class never reads ahead of the explanation.

### Marking up the steps

Give every element that should appear later a `data-step` attribute numbered from 1 within its slide:

```html
<section class="slide" data-document-role="page" data-label="Period and frequency" data-screen-label="06">
  <div class="eyebrow">…</div>
  <h2>Period and frequency</h2>
  <div class="body">
    <div class="card" data-step="1">…</div>
    <div class="formula" data-step="2">…</div>
    <div class="fig" data-step="3">…</div>
    <div class="note warn" data-step="4">…</div>
  </div>
  <div class="foot">…</div>
</section>
```

- The eyebrow, heading and footer carry **no** `data-step` — they are the slide's frame and are visible immediately, so the class always knows where they are.
- Numbers may repeat: two elements with `data-step="2"` appear together on the same click. Use this for a figure and its caption, or a pair of side-by-side cards that only make sense together.
- Aim for **3–6 steps per slide**. One step is a slide that did not need animating; more than six is a slide that should be split.

### Step budgets per slide type

| Slide type | Steps |
|---|---|
| Title, Statement, Divider | 1 — whole slide at once |
| Objectives | one step per numbered outcome, then the closing note |
| Hook | scenario → figure → diagnostic question |
| Concept | one step per definition or paragraph, then the figure |
| Equation | the equation → the symbol/unit definitions → the consequence or note |
| Comparison / Traps table | **one step per row**, so the class reads it a line at a time |
| Contrast | first figure → second figure → the rule that distinguishes them |
| Example — question | stem → figure → the "try it" prompt |
| Example — solution | **one step per numbered step**, then the examiner tip |
| Practice | one step per question; then a further step per question revealing the correct option (recoloured to the success colour) together with its explanation |
| Mark scheme | one step per available mark |
| Recap | one step per quantity, then the equation, then the keyword pills |

### Behaviour

- **Advance:** click anywhere, or `→` / `Space` / `PageDown`. Reveals the next step; when the last step of a slide is already shown, moves to the next slide at step 0.
- **Back:** `←` / `PageUp` hides the last revealed step; at step 0 it goes to the previous slide with **all** its steps already revealed.
- `Home` / `End` jump to the first and last slide. A number key jumps to that slide.
- `A` toggles "reveal all" for the current slide — for a teacher who wants the whole slide up at once.
- Persist the current slide and step in `localStorage` and restore on load, so a refresh mid-lesson does not lose the teacher's place. Only read and write your own key.
- Show a small unobtrusive slide counter and step dots in a corner, in the muted colour. Hide them from exports.

### Motion

- Reveal is **opacity 0 → 1 with an 18px upward translate**, `320ms cubic-bezier(.2,.7,.2,1)`. Nothing else — no scale, no blur, no slide-in from the side, no bounce.
- When several elements share a step number, stagger them by `60ms` in document order.
- Hidden steps must reserve their space: use `opacity` and `transform` with `visibility:hidden`, never `display:none`. **The layout must not shift as steps appear** — the slide is laid out once, in its fully-revealed state.
- Respect `@media (prefers-reduced-motion: reduce)`: keep the reveal, drop the translate and shorten to 120ms.
- Implement with a single small vanilla-JS block at the end of the file and one CSS rule pair. No animation libraries, no framework.

### Export safety

Add `<style media="print">` and a `.reveal-all` body class that force every step to full opacity, no transform, `visibility:visible`. Print and PowerPoint/Google Slides export must produce the **fully revealed** slide, never a half-built one.

## Non-negotiable rules

- One idea per slide. Two headings means two slides
- Maximum two background tones per deck: the page background, and the accent fill used for title and divider slides
- No answer is ever visible before it is clicked. A question's answer may live on the same slide as the question **only** as a later reveal step; if it cannot be hidden, it goes on the next slide
- **Equations as plain text with real Unicode** (λ, T, ⁻¹, ×10⁻⁶, ≈). No MathJax, no LaTeX, no `\(...\)` — decks get exported to PowerPoint and Google Slides, where script-rendered equations do not survive
- Lay sibling groups out with flex/grid and `gap`, never margins on each child
- No emoji unless the source lesson uses them in that exact place
- Define `a` and `a:hover` colours from the kit even if the deck has no links
- Compact HTML: one-line CSS rules, no indentation ladders, no comments narrating markup

## Self-check before output

- For every slide, with **all steps revealed**, confirm the last child of `.body` does not extend past `.body`'s own bottom edge. Content painted over the footer is the most common failure and it survives into every export. Checking `scrollHeight` will not catch it — slides are `overflow:hidden`. Compare bounding boxes.
- Confirm the layout is byte-identical at step 0 and at the final step: revealing a step must change opacity and transform only, never reflow anything.
- Confirm `data-step` numbering starts at 1 on every slide with no gaps, and that no eyebrow, heading or footer carries one.

## Output

Slide plan — including the reveal steps for each slide → the complete HTML file → a closing list of every image path referenced, in order, plus the total slide count and total step count. No preamble.
