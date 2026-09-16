// Pure scoring/aggregation logic — subject-agnostic, takes data as params.
export const THRESHOLD = 60, STRONG = 75;

export function clamp(it, marks) {
  const v = marks ? marks[it.id] : null;
  if (v === null || v === undefined || v === "") return null;
  return Math.max(0, Math.min(it.marks, Math.round(+v || 0)));
}
export function qkey(it) { return it.label.split(" ")[0]; }
export function groupKey(it) { return "P" + it.paper + "\u00b7" + qkey(it); }

export function compute(marks, { TOPICS, COMMANDS, ITEMS }) {
  const topics = {}, cmds = {};
  let got = 0, max = 0, entered = 0;
  const lost = [];
  Object.keys(TOPICS).forEach((t) => { topics[t] = { got: 0, max: 0 }; });
  Object.keys(COMMANDS).forEach((c) => { cmds[c] = { got: 0, max: 0 }; });
  ITEMS.forEach((it) => {
    const m = clamp(it, marks);
    topics[it.topic].max += it.marks; cmds[it.bucket].max += it.marks; max += it.marks;
    if (m !== null) {
      topics[it.topic].got += m; cmds[it.bucket].got += m; got += m; entered++;
      if (m < it.marks) lost.push(it);
    }
  });
  return { topics, cmds, got, max, entered, total: ITEMS.length, lost };
}
export function pct(o) { return o.max ? Math.round((o.got / o.max) * 100) : 0; }
export function band(p) { if (p >= STRONG) return "up"; if (p >= THRESHOLD) return "sec"; return "down"; }
export function bandColorVar(k) { return k === "up" ? "--green" : k === "sec" ? "--amber" : "--coral"; }

export function encouragement(p, strongName, lostCount) {
  let msg;
  if (p >= 80) msg = "Outstanding work \u2014 a confident, high-quality performance across the whole paper.";
  else if (p >= 65) msg = "A strong performance. You've shown secure understanding across most of the topic.";
  else if (p >= 50) msg = "A solid effort with real strengths to build on \u2014 focused practice will lift this further.";
  else msg = "This is your honest starting point, and that's exactly what makes it useful. Every mark below is a mark you can win back.";
  let tail = strongName ? ` Your standout area is ${strongName}.` : "";
  if (lostCount > 0) tail += ` There ${lostCount === 1 ? "is 1 question part" : `are ${lostCount} question parts`} where you dropped a mark \u2014 your practice pack targets every one of them.`;
  else tail += " You scored full marks on every single part \u2014 a flawless paper!";
  return msg + tail;
}

export function recordFromMarks(name, klass, marks, data) {
  const s = compute(marks, data), p = pct({ got: s.got, max: s.max });
  return { name, klass, date: new Date().toISOString(), got: s.got, max: s.max, pct: p, lostCount: s.lost.length, marks };
}
