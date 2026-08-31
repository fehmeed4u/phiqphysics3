# φQ Physics IB — Lesson Generator Prompt

You are generating a self-contained lesson HTML snippet for the φQ Physics IB website. The output will be pasted directly into a lesson page — no full HTML document, just the inner content block (starting with `<style>` and ending with `</script>`).

## STEP 0 — EXHAUSTIVE SOURCE EXTRACTION (mandatory when a PDF or outline file is attached)

The source PDF/outline is the **complete specification of the lesson content**, not a summary to be paraphrased. Nothing in it is optional. Before writing any HTML:

### 0.1 Read the whole document

- Read **every page**, start to finish. Never sample the first few pages and infer the rest. If the PDF is long, read it in sequential chunks until the last page is reached, and state the page count you read.
- Read all of these, not just body prose: headings and sub-headings, bullet lists, numbered lists, tables, table footnotes, figure captions, labels inside diagrams, margin notes, sidebars, boxed tips, definitions, glossary entries, equation lines, units, sub/superscripts, worked solutions, mark schemes, answer keys, appendices, and anything in small print.
- Treat OCR-doubtful characters carefully: physics symbols (μ, λ, ω, Δ, θ, °, ×10ⁿ, subscripts) are frequently mangled. Reconstruct the physically correct symbol and keep the original numeric values.

### 0.2 Build a content inventory before writing

Output a short inventory (Box 0) listing every extractable item found, grouped as:

1. **Definitions** — each term and its definition, verbatim wording preserved.
2. **Equations** — every equation, with its symbol list and units.
3. **Explanations / concept points** — each distinct teaching point, one line each.
4. **Worked examples** — every example with its full numbers and every solution step.
5. **Data / tables / constants** — every table, row and value.
6. **Graphs & figures** — every figure described, with axes and what it shows.
7. **Exam questions & mark schemes** — every question, its marks, and every marking point.
8. **Misconceptions / warnings / examiner tips**.
9. **Syllabus links / assessment statements / command terms** quoted in the source.
10. **Anything that fits none of the above** — list it rather than dropping it.

Number every inventory item (D1, E1, W1, Q1 …). This inventory is the checklist the HTML must satisfy.

### 0.3 Coverage rule — no silent omission

- **Every numbered inventory item must appear in the generated lesson.** Map each item to the section that carries it.
- Do **not** compress, generalise, or merge two source points into one sentence. Two source points → two points in the lesson.
- Do **not** substitute your own examples, numbers, questions or definitions for ones in the source. The source's numbers, phrasing and mark allocations are authoritative; your own material may only be *added* after the source is fully represented.
- Keep the source's exact numerical values, units, significant figures, and mark totals.
- If a section of the required pedagogical flow has no matching source material, fill it with your own content — but never the reverse: never drop source material because the flow has no obvious slot for it. Add extra `lc-card`s to Section C, extra rows to tables, extra MCQ/exam blocks as needed. **Section counts below are minimums, not caps.**
- Length is not a constraint. A dense source produces a long lesson. Never truncate, never write "and so on", never leave a placeholder in place of real source content.

### 0.4 Coverage report (output with STEP 4)

After the file checklist, output a coverage table: one row per inventory item ID → the lesson section that carries it. Then state explicitly: "All N inventory items are represented; 0 omissions." If anything genuinely could not be placed, list it under "Not included and why" rather than staying silent.

## STEP 1 — RECEIVE THE LESSON OUTLINE

I will provide a text outline for the lesson containing:

- Topic code and name (e.g. C.3 Wave Phenomena)
- Lesson number and total lessons (e.g. Lesson 3 of 12)
- Concept name (e.g. Principle of Superposition)
- Level: SL only / SL+HL / HL only
- Lesson content — key points, definitions, explanations, equations, worked examples, exam questions, misconceptions, etc.

## STEP 2 — GENERATE IMAGE PROMPT & ASSIGN LOCAL FILENAMES

Images are **NOT hosted externally**. Every image lives in the website's own directory at `assets/lesson-images/` and is referenced with a relative path. Do not use postimg, imgbb, imgur, Google Drive, or any external URL. Do not use base64 data URIs.

After reading the outline, before writing any code, do three things:

### Box 1 — DALL·E Panel Prompt (copy-paste ready)

Output a single code block titled "DALL-E Prompt" containing one combined prompt that asks DALL·E to generate a single image with labelled panels (Panel A, Panel B, Panel C …). Each panel corresponds to one image needed in the lesson.

**The panel descriptions must be specific enough that two different illustrators would draw the same diagram.** A vague panel description is a defect. Aim for **40–90 words per panel**, written as an instruction to a draughtsman, not a topic label.

#### Global style block (always include, verbatim)

```
Style: flat 2-D vector textbook illustration, IB physics style. Clean white
background. Thin black outlines (about 2 px), pale flat fills (light blue, light
grey, sand, pale green) — no gradients, no shading, no photorealism, no 3-D
perspective, no drop shadows, no background scenery, no watermarks, no decorative
frames. All text in a plain sans-serif, horizontal, large enough to read when the
panel is 600 px wide. Straight arrows with solid triangular heads. Dashed thin
lines for construction/reference lines. Vertical axes labelled on the left,
horizontal axes labelled underneath. Use SI units exactly as written.
Panels separated by thin grey dividing lines, all panels the same height.
```

#### Every panel description must state, in this order

1. **Panel letter and one-line purpose** — "Panel C — force–extension graph for the graph-mastery table".
2. **Viewpoint / frame** — side elevation, plan view, graph with axes, free-body diagram, before-and-after pair, multi-stage sequence.
3. **Objects drawn** — each object, its shape, its relative size and its position in the frame (left/centre/right, top/bottom). Give proportions where they matter ("slope about twice as wide as it is tall").
4. **Every label, verbatim, in quotes** — all text, values, units, symbols and subscripts exactly as they must appear ("`80 cm`", "`7.8 g`", "`c = 620 N m⁻¹`", "`Δh`"). Never write "label the diagram appropriately".
5. **Arrows and lines** — what each arrow represents, where it starts, which way it points, and its label. Distinguish solid (real quantity) from dashed (reference/construction).
6. **For graphs** — axis quantities and units, numeric range and tick interval on each axis, the exact curve shape (straight through the origin / curve of increasing gradient / horizontal line / crossing pair), gridline spacing, and any shaded area with its label.
7. **For multi-stage or before/after panels** — how many stages, left-to-right order, what changes between them, and the label under each stage.
8. **What must NOT appear** — anything the physics forbids, e.g. "no friction arrow (surface is smooth)", "no numbers on the axes", "no people".

#### Prompt skeleton

```
DALL-E Prompt
─────────────
Create a single educational illustration divided into [N] clearly labelled panels
(A, B, C …) arranged in a [rows × columns] grid on a clean white background.

[GLOBAL STYLE BLOCK — verbatim from the spec]

Panel A — [purpose]. [Viewpoint.] [Objects with positions and proportions.]
  [Every label in quotes.] [Arrows and dashed lines with their labels.]
  [What must not appear.]
Panel B — …
…

Each panel must have a bold black letter label (A, B, C …) in its top-left corner,
about twice the height of the other text. Do not add any panel not listed above.
```

#### Worked illustration of the required level of detail

Too vague (do not output this):

```
Panel F — Box on a slope with friction.
```

Correct (output this):

```
Panel F — worked-example geometry for a box sliding down a slope. Side elevation.
A right-angled triangle occupying the lower two-thirds of the panel, hypotenuse
descending from upper left to lower right, about twice as wide as it is tall,
filled pale blue with a thin black outline. A sand-coloured square box, roughly
one-fifth the slope length, sitting on the hypotenuse one-third down from the top,
tilted to sit flush with the surface. A solid black arrow from the centre of the box
pointing vertically down, labelled "weight". A shorter solid black arrow from the
lower face of the box pointing up the slope, labelled "friction". A vertical dashed
line at the left with arrowheads at both ends spanning the full height of the
triangle, labelled "80 cm", with short horizontal dashed lines marking the top and
bottom of that span. No angle marking, no numbers other than "80 cm", no ground
texture.
```

#### Sheet splitting

DALL·E loses label accuracy above about 6 panels per sheet. If the lesson needs more than 6 figures, output **one prompt block per sheet** of at most 6 panels (Sheet 1: panels A–F, Sheet 2: panels G–L …), each with the full global style block, and keep the panel lettering running continuously across sheets so it still maps 1:1 onto the file manifest.

### Box 2 — File Manifest (the filenames I must save the crops as)

Immediately after the DALL·E prompt, output a second block titled "Save your cropped panels as these files" listing one filename per panel. Filenames are generated by you and follow this convention exactly — lowercase, hyphenated, `.png`:

```
<topic-code>-<lesson-number>-<concept-slug>-NN.png
```

- `<topic-code>` — topic code lowercased with the dot removed, e.g. `C.3` → `c3`
- `<lesson-number>` — two digits, e.g. `01`
- `<concept-slug>` — concept name lowercased, non-alphanumerics → hyphens, e.g. `Principle of Superposition` → `principle-of-superposition`
- `NN` — two-digit panel index in figure order, starting at `01`

Example output:

```
Save your cropped panels as these files
───────────────────────────────────────
Folder: assets/lesson-images/

Panel A (Hook)            → c3-01-principle-of-superposition-01.png
Panel B (Core concept)    → c3-01-principle-of-superposition-02.png
Panel C (Worked example)  → c3-01-principle-of-superposition-03.png
Panel D (Graph 1)         → c3-01-principle-of-superposition-04.png
Panel E (Graph 2)         → c3-01-principle-of-superposition-05.png
```

### Box 3 — Confirmation

State one line: "I will reference these files as `../../assets/lesson-images/<filename>` — no external URLs."

Then **do not stop and wait for links**. Because the filenames are decided up front, proceed straight to STEP 3 and write the HTML using those exact relative paths. I will save the cropped panels into `assets/lesson-images/` with the given names, and the images will appear with no further edits to the HTML.

### Image path rules (non-negotiable)

- All `<img src>` values are relative: `../../assets/lesson-images/<filename>` — lesson pages sit two folders deep (`syllabus-content/<Topic-Folder>/<lesson>.html`), so `../../` reaches the site root.
- Never use `http://`, `https://`, `//`, `data:`, or a leading `/` in an `<img src>`.
- One filename per figure, used exactly once, in the order the figures appear in the lesson.
- Filenames must be lowercase with no spaces.
- Extension is `.png` unless I tell you the panel is a `.jpg` or `.gif`.

Image tag example:

```html
<div class="lc-img">
  <img src="../../assets/lesson-images/c3-01-principle-of-superposition-01.png" alt="Two pulses meeting on a stretched spring">
  <div class="lc-cap">Fig 1 — The two pulses overlap, add, then pass through unchanged.</div>
</div>
```

## STEP 3 — GENERATE THE HTML

Generate the lesson HTML snippet following the exact pedagogical flow, CSS, component library, and JavaScript defined below. Do not deviate from this structure.

## REQUIRED CDN

MathJax 3 is used for beautiful math rendering. Paste this configuration block at the very top of your output, BEFORE the `<style>` block:

```html
<script>
MathJax = {
  tex: { inlineMath: [['\\(','\\)']], displayMath: [['$$','$$']], processEscapes: true },
  svg: { fontCache: 'global', scale: 1.15 },
  startup: { pageReady: function () { return MathJax.startup.defaultPageReady(); } }
};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
```

## REQUIRED CSS

Paste this entire block at the top of your output inside a `<style>` tag. All colours use CSS variables from the site theme — do NOT hardcode any hex colours.

```css
/* All colours use CSS variables from the site theme — no hardcoded hex */
.lc-badge { display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:600;
  letter-spacing:0.07em;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px; }
.lc-badge span { display:inline-flex;align-items:center;justify-content:center;
  width:20px;height:20px;border-radius:50%;background:var(--accent);color:#fff;
  font-size:11px;font-weight:700; }
.lc-title { font-family:var(--font-serif);font-size:1.8rem;color:var(--text);
  line-height:1.2;margin-bottom:4px; }
.lc-sub { font-size:0.88rem;color:var(--text-muted);margin-bottom:1.5rem; }

.lc-card { background:var(--surface2);border:1px solid var(--border);
  border-radius:var(--radius);padding:1.25rem;margin-bottom:1rem; }
.lc-card h3 { font-size:0.95rem;font-weight:600;margin-bottom:0.6rem;color:var(--text);
  font-family:var(--font-sans); }
.lc-card p { font-size:14pt;color:var(--text-2);line-height:1.75;margin-bottom:0.5rem; }
.lc-card p:last-child { margin-bottom:0; }

.lc-table { width:100%;border-collapse:collapse;font-size:0.84rem; }
.lc-table th { font-size:0.72rem;font-weight:700;text-transform:uppercase;
  letter-spacing:0.07em;color:var(--text-muted);padding:6px 8px;
  border-bottom:1px solid var(--border);text-align:left; }
.lc-table td { padding:8px;border-bottom:1px solid var(--border);
  vertical-align:top;color:var(--text-2);font-size:0.84rem; }
.lc-table td:first-child { font-weight:600;color:var(--accent);white-space:nowrap; }
.lc-table tr:last-child td { border-bottom:none; }

.lc-formula { background:var(--surface3);border:1px solid var(--border);
  border-left:3px solid var(--accent);
  border-radius:0 var(--radius) var(--radius) 0;
  padding:1rem 1.4rem;margin:0.85rem 0;
  text-align:center;box-shadow:0 1px 4px rgba(0,0,0,0.06);overflow-x:auto; }
.lc-formula .MathJax { font-size:1.35rem !important;color:var(--accent); }
.lc-formula .lc-formula-label { display:block;font-size:0.72rem;font-weight:600;
  text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);
  margin-bottom:0.35rem;font-family:var(--font-sans); }

.lc-img { background:var(--surface2);border:1px solid var(--border);
  border-radius:var(--radius);padding:1rem;margin-bottom:1rem;text-align:center; }
.lc-img img { max-width:100%;border-radius:8px; }
.lc-img .lc-cap { font-size:0.78rem;color:var(--text-muted);margin-top:0.5rem;line-height:1.5; }

.lc-img-row { display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:1rem; }
.lc-img-row .lc-img { margin-bottom:0; }
@media(max-width:600px){ .lc-img-row { grid-template-columns:1fr; } }

.lc-kp { display:flex;flex-wrap:wrap;gap:6px;margin-top:0.75rem; }
.lc-kp span { font-size:0.78rem;font-family:var(--font-mono);
  background:var(--accent-dim);border:1px solid var(--border-2);
  border-radius:100px;padding:3px 10px;color:var(--accent); }

.lc-section { font-size:0.72rem;font-weight:700;text-transform:uppercase;
  letter-spacing:0.1em;color:var(--text-muted);
  margin:1.75rem 0 0.75rem;display:flex;align-items:center;gap:8px; }
.lc-section::after { content:'';flex:1;height:1px;background:var(--border); }

.lc-info { background:var(--accent-dim);border-left:3px solid var(--accent);
  border-radius:0 var(--radius) var(--radius) 0;
  padding:0.65rem 1rem;font-size:14pt;
  color:var(--text-2);margin:0.6rem 0;line-height:1.65; }
.lc-warn { background:var(--gold-dim);border-left:3px solid var(--gold);
  border-radius:0 var(--radius) var(--radius) 0;
  padding:0.65rem 1rem;font-size:14pt;
  color:var(--text-2);margin:0.6rem 0;line-height:1.65; }
.lc-success { background:var(--green-dim);border-left:3px solid var(--green);
  border-radius:0 var(--radius) var(--radius) 0;
  padding:0.65rem 1rem;font-size:14pt;
  color:var(--text-2);margin:0.6rem 0;line-height:1.65; }

.lc-two-col { display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem; }
@media(max-width:600px){ .lc-two-col { grid-template-columns:1fr; } }

.lc-step { counter-increment:lc-steps;display:flex;gap:0.85rem;
  padding:0.85rem 0;border-bottom:1px solid var(--border); }
.lc-step:last-child { border-bottom:none; }
.lc-step-num { flex-shrink:0;width:28px;height:28px;border-radius:50%;
  background:var(--accent);color:#fff;display:flex;align-items:center;
  justify-content:center;font-size:0.8rem;font-weight:700;margin-top:2px; }
.lc-step-body { flex:1;min-width:0;overflow-x:auto;font-size:14pt;color:var(--text-2);line-height:1.7; }
.lc-step-body strong { color:var(--text); }
#lesson-body mjx-container { max-width:100%; }

.lc-mcq-q { font-size:14pt;font-weight:500;color:var(--text);
  margin-bottom:0.65rem;line-height:1.55; }
.lc-opts { display:flex;flex-direction:column;gap:0.4rem; }
.lc-opt { display:flex;align-items:flex-start;gap:10px;padding:0.65rem 0.85rem;
  border:1.5px solid var(--border);border-radius:var(--radius);
  cursor:pointer;font-size:14pt;color:var(--text-2);
  transition:all 0.15s;background:var(--surface); }
.lc-opt:hover { background:var(--accent-dim);border-color:var(--border-2); }
.lc-opt.correct { background:var(--green-dim);border-color:var(--green);color:var(--green); }
.lc-opt.wrong { background:var(--red-dim);border-color:var(--red);color:var(--red); }
.lc-opt.disabled { cursor:default;pointer-events:none; }
.lc-opt-l { font-weight:700;min-width:18px;flex-shrink:0; }
.lc-fb { font-size:14pt;margin-top:0.5rem;padding:0.6rem 0.85rem;
  border-radius:var(--radius);display:none; }
.lc-fb.show { display:block; }
.lc-fb.correct { background:var(--green-dim);color:var(--green); }
.lc-fb.wrong { background:var(--red-dim);color:var(--red); }

.lc-fitb { font-size:14pt;line-height:2.6;color:var(--text-2); }
.lc-fitb-input { border:none;border-bottom:2px solid var(--accent);
  background:transparent;font-size:14pt;color:var(--text);
  padding:0 4px;min-width:80px;text-align:center;
  outline:none;font-family:var(--font-sans); }
.lc-fitb-input.correct { border-bottom-color:var(--green);color:var(--green); }
.lc-fitb-input.wrong { border-bottom-color:var(--red);color:var(--red); }
.lc-check-btn { display:inline-flex;align-items:center;gap:6px;margin-top:0.75rem;
  padding:0.5rem 1.1rem;border:1.5px solid var(--border);border-radius:100px;
  background:var(--surface);cursor:pointer;font-size:0.84rem;color:var(--text-muted);
  font-family:var(--font-sans);transition:all 0.15s; }
.lc-check-btn:hover { background:var(--accent-dim);border-color:var(--accent);color:var(--accent); }

.lc-exam { background:var(--surface2);border:1.5px solid var(--accent);
  border-radius:var(--radius);padding:1.25rem;margin-bottom:0.85rem; }
.lc-exam-tag { font-size:0.72rem;font-weight:700;text-transform:uppercase;
  letter-spacing:0.09em;color:var(--accent);margin-bottom:0.5rem; }
.lc-exam-q { font-size:14pt;color:var(--text-2);line-height:1.65;margin-bottom:0.5rem; }
.lc-exam-marks { font-size:0.78rem;color:var(--text-muted);font-style:italic; }
.lc-exam-input { width:100%;min-height:70px;border:1px solid var(--border);
  border-radius:var(--radius);background:var(--surface3);color:var(--text);
  font-size:14pt;font-family:var(--font-sans);padding:0.65rem 0.85rem;
  resize:vertical;outline:none;margin-top:0.5rem;transition:all 0.15s; }
.lc-exam-input:focus { border-color:var(--accent); }
.lc-reveal-btn { margin-top:0.5rem;padding:0.4rem 0.9rem;border:1px solid var(--border);
  border-radius:100px;background:var(--surface);cursor:pointer;
  font-size:0.78rem;color:var(--text-muted);font-family:var(--font-sans);
  transition:all 0.15s; }
.lc-reveal-btn:hover { background:var(--accent-dim);color:var(--accent);border-color:var(--accent); }
.lc-model { margin-top:0.65rem;padding:0.75rem 1rem;
  background:var(--surface);border-left:3px solid var(--green);
  border-radius:0 var(--radius) var(--radius) 0;
  font-size:14pt;color:var(--text-2);line-height:1.7;display:none;overflow-x:auto; }
.lc-model.show { display:block; }

/* MathJax SVG cannot wrap; let it scale down instead of being clipped */
#lesson-body mjx-container { max-width:100%; }
#lesson-body mjx-container[jax="SVG"] > svg { max-width:100%; height:auto; }

.lc-score { display:inline-flex;align-items:center;gap:6px;font-size:0.84rem;
  padding:0.4rem 0.9rem;border-radius:100px;
  background:var(--surface2);border:1px solid var(--border);color:var(--text-muted); }
.lc-score strong { color:var(--accent); }
```

## REQUIRED PEDAGOGICAL FLOW (follow this exact sequence)

Every lesson MUST contain these sections in this order. Do not skip any section. Do not reorder.

### SECTION A — HEADER

```html
<div class="lc-badge"><span>[N]</span> Lesson [N] of [Total] · [Topic Code] [Topic Name]</div>
<div class="lc-title">[Concept Name]</div>
<div class="lc-sub">[One engaging sentence: what does this lesson cover and why does it matter?]</div>
```

### SECTION B — HOOK & DIAGNOSTIC

An `lc-card` that opens with a vivid, real-world or hands-on scenario to ground the concept. Must include:

- An emoji + bold `<h3>` title like 🎯 Hook – [catchy name]
- A short paragraph describing a surprising demonstration, everyday phenomenon, or thought experiment
- An image (using `lc-img`) showing the scenario visually
- A diagnostic question in an `lc-info` callout that makes the student think before reading on

```html
<div class="lc-card">
  <h3>🎯 Hook – [catchy scenario name]</h3>
  <p>[Vivid 2-3 sentence description of something surprising or tangible. End with a bold takeaway.]</p>
  <div class="lc-img">
    <img src="../../assets/lesson-images/[topic]-[nn]-[slug]-01.png" alt="[descriptive]">
    <div class="lc-cap">Fig 1 — [what the image shows]</div>
  </div>
  <div class="lc-info">💡 <strong>Diagnostic question (think – then click)</strong> — [A question that tests intuition. Include the answer in italics.]</div>
</div>
```

### SECTION C — CORE KNOWLEDGE (1–3 cards)

One or more `lc-card` blocks that teach the main physics content. Each card must have:

- An emoji + `<h3>` heading (e.g. 📐 [Concept name])
- Prose explanation with `<strong>` on key terms at first use
- Formulas inside `lc-formula` divs
- At least one image per card using `lc-img` or `lc-img-row`

```html
<div class="lc-card">
  <h3>📐 [Core Concept Title]</h3>
  <p>[Explanation with <strong>key terms</strong> bolded on first use.]</p>
  <div class="lc-formula">
    <span class="lc-formula-label">[Optional label e.g. "Resultant displacement"]</span>
    $$[LaTeX equation e.g. s_{\text{R}} = s_1 + s_2 + \cdots + s_n]$$
  </div>
  <p>[Further explanation, conditions, special cases.]</p>
  <div class="lc-img">
    <img src="../../assets/lesson-images/[topic]-[nn]-[slug]-02.png" alt="[descriptive]">
    <div class="lc-cap">Fig 2 — [what to read from this figure]</div>
  </div>
  <div class="lc-formula">
    $$[second LaTeX equation if applicable]$$
  </div>
</div>
```

### SECTION D — GRAPH MASTERY TABLE

An `lc-card` with an `<h3>` like 📈 Graphs every examiner uses. Contains an `lc-table` with columns: Graph type | Axes (X, Y) | Shape | What to read. List 2–4 key graph types that appear in IB exams for this topic. Follow the table with an `lc-img-row` showing 2 example graphs side by side.

```html
<div class="lc-card">
  <h3>📈 Graphs every examiner uses</h3>
  <table class="lc-table">
    <thead><tr><th>Graph type</th><th>Axes (X, Y)</th><th>Shape</th><th>What to read</th></tr></thead>
    <tbody>
      <tr><td>[Type 1]</td><td>[axes]</td><td>[shape description]</td><td>[what to extract]</td></tr>
      <tr><td>[Type 2]</td><td>[axes]</td><td>[shape description]</td><td>[what to extract]</td></tr>
    </tbody>
  </table>
  <div class="lc-img-row">
    <div class="lc-img"><img src="../../assets/lesson-images/[topic]-[nn]-[slug]-03.png" alt="..."><div class="lc-cap">Fig 3 — ...</div></div>
    <div class="lc-img"><img src="../../assets/lesson-images/[topic]-[nn]-[slug]-04.png" alt="..."><div class="lc-cap">Fig 4 — ...</div></div>
  </div>
</div>
```

### SECTION E — WORKED EXAMPLE

An `lc-card` with numbered `lc-step` divs. Always 4 steps:

1. Identify — what physics applies, what are we finding?
2. Data — list knowns, compute intermediate values (e.g. λ = v/f)
3. Equation — substitute and calculate
4. Answer — state result with units and physical interpretation

Include an `lc-img` diagram after the steps showing the geometry/setup.

```html
<div class="lc-card">
  <h3>✍️ Worked example – [title]</h3>
  <div class="lc-step"><div class="lc-step-num">1</div><div class="lc-step-body"><strong>Identify:</strong> ...</div></div>
  <div class="lc-step"><div class="lc-step-num">2</div><div class="lc-step-body"><strong>Data:</strong> ...</div></div>
  <div class="lc-step"><div class="lc-step-num">3</div><div class="lc-step-body"><strong>Equation:</strong> ...</div></div>
  <div class="lc-step"><div class="lc-step-num">4</div><div class="lc-step-body"><strong>Answer:</strong> ...</div></div>
  <div class="lc-img">
    <img src="../../assets/lesson-images/[topic]-[nn]-[slug]-05.png" alt="...">
    <div class="lc-cap">Fig 5 — [geometry for this problem]</div>
  </div>
</div>
```

### SECTION F — REAL-WORLD + HL EXTENSION (two-column)

A `lc-two-col` grid containing two `lc-card` blocks side by side:

- Left card: 🎧/🌍/🔧 emoji + real-world application of this concept. End with an `lc-success` examiner tip.
- Right card: 🚀 HL Extension — a deeper or more mathematical extension. End with a challenge question and its answer.

```html
<div class="lc-two-col">
  <div class="lc-card">
    <h3>[emoji] Real-world: [application name]</h3>
    <p>[2-3 sentences connecting the physics to something tangible.]</p>
    <div class="lc-success">✓ Examiner tip: [mark-scoring insight]</div>
  </div>
  <div class="lc-card">
    <h3>🚀 HL Extension – [topic]</h3>
    <p>[Deeper content, formula, or derivation.]<br>
    <strong>Challenge:</strong> [question] (Answer: [answer])</p>
  </div>
</div>
```

### SECTION G — MISCONCEPTIONS / TRAP CORNER

An `lc-card` with `<h3>` titled ⚠️ Trap corner – common mistakes. Contains an `lc-table` with columns: Misconception | Correct view. List 3–4 common student errors for this topic. Follow the table with an `lc-warn` callout highlighting the single most common exam slip.

```html
<div class="lc-card">
  <h3>⚠️ Trap corner – common mistakes</h3>
  <table class="lc-table">
    <thead><tr><th>Misconception</th><th>Correct view</th></tr></thead>
    <tbody>
      <tr><td>[wrong belief]</td><td>[correct physics]</td></tr>
      <tr><td>[wrong belief]</td><td>[correct physics]</td></tr>
      <tr><td>[wrong belief]</td><td>[correct physics]</td></tr>
    </tbody>
  </table>
  <div class="lc-warn">⚠️ Most common slip: [specific mistake and why it matters]</div>
</div>
```

### SECTION H — KEY POINTS PILLS

A `lc-kp` flex container with `<span>` pills summarising the 4–6 most important formulas or keywords from the lesson.

```html
<div class="lc-kp">
  <span>[formula or keyword]</span>
  <span>[formula or keyword]</span>
  <span>[formula or keyword]</span>
  <span>[formula or keyword]</span>
</div>
```

### SECTION I — MCQ PRACTICE (minimum 4 questions)

```html
<div class="lc-section">Practice check — multiple choice</div>
```

Each MCQ is an `lc-card` containing a unique id block. Use letters A–D. The onclick passes the chosen letter and correct letter.

```html
<div class="lc-card">
  <div id="mcq1">
    <div class="lc-mcq-q">1. [Question]</div>
    <div class="lc-opts">
      <div class="lc-opt" onclick="lcMCQ('mcq1',this,'A','[CORRECT]')"><span class="lc-opt-l">A</span> [Option]</div>
      <div class="lc-opt" onclick="lcMCQ('mcq1',this,'B','[CORRECT]')"><span class="lc-opt-l">B</span> [Option]</div>
      <div class="lc-opt" onclick="lcMCQ('mcq1',this,'C','[CORRECT]')"><span class="lc-opt-l">C</span> [Option]</div>
      <div class="lc-opt" onclick="lcMCQ('mcq1',this,'D','[CORRECT]')"><span class="lc-opt-l">D</span> [Option]</div>
    </div>
    <div class="lc-fb" id="mcq1-fb"></div>
  </div>
</div>
```

### SECTION J — FILL IN THE BLANKS (1 block)

```html
<div class="lc-section">Practice check — fill in the blanks</div>

<div class="lc-card">
  <p style="margin-bottom:0.6rem;font-weight:600;font-size:0.9rem">Complete the statements:</p>
  <div class="lc-fitb">
    [Sentence with] <input class="lc-fitb-input" id="lf1" placeholder="?" style="width:[N]px"> [more text with] <input class="lc-fitb-input" id="lf2" placeholder="?" style="width:[N]px"> [etc.]
  </div>
  <button class="lc-check-btn" onclick="lcFITB()">Check answers</button>
  <div id="lc-fitb-result" style="font-size:0.84rem;margin-top:0.5rem;display:none"></div>
</div>
```

### SECTION K — EXAM-STYLE QUESTIONS (minimum 3)

```html
<div class="lc-section">Exam‑style questions</div>
```

Each question uses the `lc-exam` block. Include a mix of command terms (State, Explain, Calculate, Sketch, Compare, Discuss). Mark allocations must be realistic IB marks.

```html
<div class="lc-exam">
  <div class="lc-exam-tag">Exam question · [Command term]</div>
  <div class="lc-exam-q">[Question text with parts (a), (b) etc.] [N marks]</div>
  <textarea class="lc-exam-input" placeholder="Write your answer here…"></textarea>
  <button class="lc-reveal-btn" onclick="lcToggleModel(this)">Show model answer</button>
  <div class="lc-model">[✓ per marking point. Full model answer.]</div>
</div>
```

### SECTION L — SCORE DISPLAY (always last content block)

```html
<div style="display:flex;justify-content:flex-end;margin-top:1.5rem">
  <div class="lc-score">Score: <strong id="lc-score-display">0</strong> pts</div>
</div>
```

### SECTION M — JAVASCRIPT (always at the very end)

The JavaScript block contains the Quiz IIFE — handles MCQ, FITB, exam reveal, and scoring.

```html
<script>
(function(){
  let lcScore = 0;
  const lcAnswered = {};
  const lcFeedback = {
    mcq1: { [CORRECT_LETTER]: '[Explanation why correct]' },
    mcq2: { [CORRECT_LETTER]: '[Explanation]' },
    mcq3: { [CORRECT_LETTER]: '[Explanation]' },
    mcq4: { [CORRECT_LETTER]: '[Explanation]' }
  };

  window.lcMCQ = function(id, el, chosen, correct) {
    if (lcAnswered[id]) return;
    lcAnswered[id] = true;
    const block = document.getElementById(id);
    block.querySelectorAll('.lc-opt').forEach(o => o.classList.add('disabled'));
    const fb = document.getElementById(id+'-fb');
    if (chosen === correct) {
      el.classList.add('correct');
      fb.textContent = '✓ ' + lcFeedback[id][correct];
      fb.className = 'lc-fb show correct';
      lcScore += 2;
    } else {
      el.classList.add('wrong');
      block.querySelectorAll('.lc-opt').forEach(o => {
        if (o.querySelector('.lc-opt-l').textContent === correct) o.classList.add('correct');
      });
      fb.textContent = '✗ Incorrect. Correct: ' + correct + '. ' + lcFeedback[id][correct];
      fb.className = 'lc-fb show wrong';
    }
    document.getElementById('lc-score-display').textContent = lcScore;
  };

  window.lcFITB = function() {
    const ans = { lf1:'[answer1]', lf2:'[answer2]', lf3:'[answer3]' };
    let correct = 0, total = Object.keys(ans).length;
    Object.keys(ans).forEach(id => {
      const el = document.getElementById(id);
      const val = el.value.trim().toLowerCase();
      const ok = val === ans[id] || val.includes(ans[id]);
      el.classList.toggle('correct', ok);
      el.classList.toggle('wrong', !ok);
      if (ok) correct++;
    });
    const res = document.getElementById('lc-fitb-result');
    res.style.display = 'block';
    if (correct === total) {
      res.style.color = 'var(--green)';
      res.textContent = '✓ All correct! (+2 pts)';
      lcScore += 2;
      document.getElementById('lc-score-display').textContent = lcScore;
    } else {
      res.style.color = 'var(--red)';
      res.textContent = correct + '/' + total + ' correct. Answers: ' + Object.values(ans).join(' · ');
    }
  };

  window.lcToggleModel = function(btn) {
    const ma = btn.nextElementSibling;
    ma.classList.toggle('show');
    btn.textContent = ma.classList.contains('show') ? 'Hide model answer' : 'Show model answer';
  };
})();
</script>
```

## STEP 4 — CLOSING FILE CHECKLIST

After the HTML snippet, output one final short block listing every image file the snippet references, in order, so I know exactly what to drop into `assets/lesson-images/`:

```
Files to place in assets/lesson-images/
───────────────────────────────────────
c3-01-principle-of-superposition-01.png   (Fig 1 — hook)
c3-01-principle-of-superposition-02.png   (Fig 2 — core concept)
c3-01-principle-of-superposition-03.png   (Fig 3 — graph 1)
c3-01-principle-of-superposition-04.png   (Fig 4 — graph 2)
c3-01-principle-of-superposition-05.png   (Fig 5 — worked example)
```

## CONTENT RULES

- ✅ Use ONLY the CSS class names listed above — no custom new ones
- ✅ Use CSS variables for ALL colours — NO hex codes anywhere in HTML or JS
- ✅ Follow the exact section order: Header → Hook → Core → Graphs → Worked Example → Real-world/HL → Misconceptions → Key Points → MCQ → FITB → Exam → Score → JS
- ✅ Every `<img src>` is a relative local path `../../assets/lesson-images/<filename>` — **never** an external URL, never a data URI, never a leading `/`
- ✅ Image filenames follow `<topic-code>-<lesson-number>-<concept-slug>-NN.png`, lowercase, hyphenated
- ✅ Every formula must appear in an `lc-formula` block using LaTeX syntax wrapped in `$$...$$`
- ✅ **One equation per `$$...$$` line.** The lesson column is only about 490 px wide, so never join two expressions with `\qquad`, `\Rightarrow` or connecting words on one line — stack them as separate `$$...$$` lines inside the same `lc-formula`. Prefer symbols over long `\text{}` phrases (`\frac{E}{V}`, not `\frac{\text{energy transferred}}{\text{volume}}`); put the wording in the `lc-formula-label` or the prose instead
- ✅ **Inline math must be short too.** A `.lc-step-body` or `lc-model` line has only about 490 px. Never write a long equality chain as one `\(...\)` — break it after the substitution: `\(E = mg\Delta h\)<br>\(= 0.025 \times 9.8 \times 1.12 = 0.27\ \text{J}\)`. Aim for no more than about 40 characters of LaTeX per inline expression
- ✅ Use `\text{}` for subscript words: `s_{\text{R}}` not `s_{R}` or `s_resultant`
- ✅ Use proper LaTeX: `\Delta\phi`, `\frac{a}{b}`, `\lambda`, `\cos`, `\sin`, `A_{\text{R}}`, `\pm`, `\cdots`
- ✅ Add an optional `<span class="lc-formula-label">` above the equation when it's a named formula
- ✅ For inline math inside `<p>` tags, use `\(...\)` delimiters (e.g. where \(\lambda\) is the wavelength)
- ✅ Every concept explanation must be inside an `lc-card`
- ✅ Minimum 2 images per lesson
- ✅ Every image needs a descriptive alt text AND a caption explaining what to read
- ✅ Include at least 1 worked example using `lc-step` numbered steps
- ✅ Include at least 3 callout boxes (`lc-info` / `lc-warn` / `lc-success`) spread across the lesson
- ✅ Include 1 graph mastery table
- ✅ Include 1 misconceptions / trap corner table
- ✅ Include minimum 4 MCQ questions
- ✅ Include 1 fill-in-the-blanks block
- ✅ Include minimum 3 exam-style questions with model answers — plus **every** exam question present in the source PDF, even if that exceeds 3
- ✅ Every definition, equation, worked example, table row, figure, question and mark scheme point in the source appears in the lesson (STEP 0 coverage rule) — section minimums are floors, not caps
- ✅ Source numbers, wording, units and mark allocations are reproduced exactly, never paraphrased away or replaced with invented equivalents
- ✅ All quiz JavaScript in a single IIFE
- ✅ MCQ feedback explanations: concise but physics-accurate
- ✅ Exam model answers: use ✓ per marking point (IB style)

Formula example — what the output looks like:

```html
<div class="lc-formula">
  <span class="lc-formula-label">Resultant displacement</span>
  $$s_{\text{R}} = s_1 + s_2 + \cdots + s_n$$
</div>

<div class="lc-formula">
  $$\Delta\phi = \frac{2\pi \cdot \Delta x}{\lambda} \qquad A_{\text{R}} = 2A\cos\!\left(\frac{\Delta\phi}{2}\right)$$
</div>
```

The label is optional — use it for the first/main equation, skip it for follow-up equations.

## OUTPUT FORMAT

Output the inner HTML snippet — starting with the MathJax `<script>` config block, then `<style>`, and ending with `</script>` — preceded by the STEP 2 boxes and followed by the STEP 4 file checklist. Do NOT include `<!DOCTYPE>`, `<html>`, `<head>`, `<body>` tags. No other explanation text. The snippet should be ready to paste directly into the φQ Physics lesson page.
