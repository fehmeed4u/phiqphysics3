// SHM HL Diagnostic — exam breakdown + remedial question bank (v2, harder + graph-based)
export const TOPICS = {
  T1: { name: "Phase relationships in SHM", blurb: "How displacement, velocity and acceleration vary in time/position and their phase relationships" },
  T2: { name: "Period and frequency", blurb: "Calculating T and f for mass\u2013spring and pendulum systems, and how mass, k, length, g affect them" },
  T3: { name: "Velocity and acceleration relations", blurb: "Using SHM equations to find v or a at a given displacement, time or position" },
  T4: { name: "Energy in SHM", blurb: "Kinetic, elastic potential and total energy, and how they vary with displacement/time" },
  T5: { name: "Scaling mass/amplitude and energy", blurb: "How changing mass or amplitude scales total/maximum energy" },
  T6: { name: "Conditions for SHM", blurb: "The defining a = \u2212\u03c9\u00b2x (F = \u2212kx) relationship required for SHM" },
  T7: { name: "Large-amplitude / non-ideal behaviour", blurb: "How real oscillators deviate from ideal SHM at large displacement" },
  T8: { name: "Graphical analysis of SHM", blurb: "Reading/sketching x-t, a-x, KE-x, Ep-x graphs" },
};
export const COMMANDS = {
  recall: { name: "Recall & State", desc: "Select/state a fact or relationship directly" },
  calculate: { name: "Calculate", desc: "Compute a numerical answer, showing working" },
  interpret: { name: "Determine", desc: "Determine a quantity from given data or a graph" },
  explain: { name: "Outline", desc: "Give reasoned justification for a result" },
  describe: { name: "Describe", desc: "Describe a sequence or property, no reasoning needed" },
  draw: { name: "Draw", desc: "Sketch/complete a graph" },
};
function I(id, label, marks, topic, command, bucket, prompt) { return { id, paper: 1, label, marks, topic, command, bucket, prompt }; }
export const ITEMS = [
  I("p1q1", "Q1", 1, "T1", "Select", "recall", "Using a displacement\u2013time graph, identify the time (as a fraction of T) at which a stated event first occurs"),
  I("p1q2", "Q2", 1, "T2", "Calculate", "calculate", "Natural frequency (or period) from mass and spring constant, non-integer values"),
  I("p1q3", "Q3", 1, "T6", "Select", "recall", "From three F\u2013x graphs, identify which is consistent with SHM and reject the others on sight"),
  I("p1q4", "Q4", 1, "T8", "Determine", "interpret", "Read two points off an a\u2013x graph to find the gradient, hence f\u00b2"),
  I("p1q5", "Q5", 1, "T4", "Determine", "interpret", "Elastic PE and speed at a non-standard fraction of amplitude, in terms of E, vmax"),
  I("p1q6", "Q6", 1, "T8", "Determine", "interpret", "Read frequency and amplitude off a displacement\u2013time graph shown over a non-whole number of cycles"),
  I("p1q7", "Q7", 1, "T3", "Calculate", "calculate", "Speed at a general fraction of the path between equilibrium and extreme position, from f and path length b"),
  I("p1q8", "Q8", 1, "T6", "Select", "recall", "From three a\u2013x graphs, identify which is consistent with SHM"),
  I("p1q9", "Q9", 1, "T5", "Calculate", "calculate", "New max elastic PE when mass and amplitude are scaled by non-integer factors"),
  I("p1q10", "Q10", 1, "T2", "Calculate", "calculate", "New pendulum period when both g and length change"),
  I("p1q11", "Q11", 1, "T4", "Calculate", "calculate", "Total energy from mass, amplitude, period, with non-round numbers giving a non-integer \u03c9"),
  I("p1q12", "Q12", 1, "T3", "Determine", "interpret", "Read the starting phase off an x\u2013t graph and select the matching v(t) expression"),
  I("p1q13", "Q13", 1, "T1", "State", "recall", "Using two stacked graphs, determine the phase angle between the quantities shown"),
  I("p1q14", "Q14", 1, "T1", "State", "recall", "Using two stacked graphs, determine the phase angle between the quantities shown (different pair)"),
  I("p1q15", "Q15", 1, "T5", "Calculate", "calculate", "New total energy when mass and spring constant are both changed"),
  I("p1q16ai", "Q16 (a)(i)", 1, "T4", "Describe", "describe", "Energy changes over a quarter-period interval not aligned to release/extreme points"),
  I("p1q16aii", "Q16 (a)(ii)", 1, "T4", "Describe", "describe", "Energy changes over the following interval, continuing the same non-aligned timing"),
  I("p1q16b", "Q16 (b)", 2, "T2", "Determine", "interpret", "Ratio of frequency before/after a non-integer mass change"),
  I("p1q16c", "Q16 (c)", 1, "T6", "Describe", "describe", "Property a spring must have for SHM, justified from a bent F\u2013x graph"),
  I("p1q17a", "Q17 (a)", 2, "T6", "Outline", "explain", "Two reasons two models predict SHM at small displacement, referencing a shown graph"),
  I("p1q17b", "Q17 (b)", 4, "T2", "Determine", "interpret", "Read the small-x gradient off a bent a\u2013x graph and use it to find the time period"),
  I("p1q17c", "Q17 (c)", 2, "T7", "Outline", "explain", "How period changes at large amplitude, read qualitatively from the same bent a\u2013x graph"),
  I("p1q17d", "Q17 (d)", 2, "T8", "Describe", "describe", "Ep\u2013x graph for model B or C, given model A's parabola shown as a graph"),
  I("p1q18a", "Q18 (a)", 1, "T8", "State", "recall", "Amplitude read from a KE\u2013displacement graph without labelled intercepts"),
  I("p1q18b", "Q18 (b)", 1, "T8", "Draw", "draw", "PE\u2013x graph corresponding to a shown KE\u2013x graph, with a scaling twist"),
  I("p1q18ci", "Q18 (c)(i)", 3, "T2", "Show that", "calculate", "Show a stated period from mass plus a KE\u2013x graph (amplitude and E0 both read off the graph)"),
];
function Q(q, m, a, graph) { return graph ? { q, m, a, graph } : { q, m, a }; }
export const BANK = {
  p1q1: [
    Q("A pendulum bob is released from equilibrium (hanging straight down) with a push at t = 0, period 2.4 s. At what time does it first reach its extreme displacement?", 1, "t = T/4 = 0.60 s. [1]"),
    Q("A loudspeaker cone vibrates in SHM with period 5.0 ms, passing through its rest position moving outward at t = 0. At what time does it next pass through the rest position (either direction)?", 1, "t = T/2 = 2.5 ms. [1]"),
    Q("A piston modelled as an SHM oscillator (period 0.020 s) starts at rest at one extreme (not equilibrium) at t = 0. At what time does it first pass through equilibrium?", 1, "Starting at an extreme, equilibrium is reached a quarter cycle later: t = T/4 = 5.0 ms. [1]"),
  ],
  p1q2: [
    Q("A 0.50 kg block is attached to a spring of spring constant 8.0 N m\u207b\u00b9 on a frictionless surface. Find its natural frequency.", 1, "f = (1/2\u03c0)\u221a(k/m) = (1/2\u03c0)\u221a(8.0/0.50) = (1/2\u03c0)(4.0) = 0.64 Hz. [1]"),
    Q("One corner of a car (effective mass 320 kg) rests on a suspension spring of constant 18 000 N m\u207b\u00b9. Find the natural bounce frequency.", 1, "f = (1/2\u03c0)\u221a(18000/320) = (1/2\u03c0)(7.50) = 1.19 Hz. [1]"),
    Q("A 0.80 kg mass on a spring has period 0.90 s. The spring constant is unchanged but the mass is replaced with 1.20 kg \u2014 find the new frequency (first find k).", 1, "k = 4\u03c0\u00b2m/T\u00b2 = 4\u03c0\u00b2(0.80)/0.81 = 38.99 N m\u207b\u00b9; f_new = (1/2\u03c0)\u221a(38.99/1.20) = (1/2\u03c0)(5.70) = 0.91 Hz. [1]"),
  ],
  p1q3: [
    Q("Which of these gives SHM: F = \u2212kx, F = \u2212kx\u00b3, or F = \u2212k (constant)?", 1, "F = \u2212kx \u2014 the restoring force must be directly proportional to displacement. [1]"),
    Q("A magnetic damper exerts F = \u2212bv (proportional to velocity, not displacement). Could this alone produce SHM?", 1, "No \u2014 SHM requires a restoring force proportional to displacement (F \u221d \u2212x); a velocity-dependent force is damping, not a restoring force. [1]"),
    Q("A restoring force is given by F = \u2212k\u2081x \u2212 k\u2082x\u00b3, where k\u2082 is small but non-zero. Is the resulting motion exact SHM?", 1, "No \u2014 exact SHM requires F \u221d \u2212x with no other terms; the x\u00b3 term means F is not purely proportional to x, so motion is only approximately SHM for small x. [1]"),
  ],
  p1q4: [
    Q("An a\u2013x graph for an oscillator is a straight line through the origin with gradient \u221225 s\u207b\u00b2. Find f\u00b2.", 1, "\u03c9\u00b2 = 25; f\u00b2 = \u03c9\u00b2/4\u03c0\u00b2 = 25/4\u03c0\u00b2 = 0.633 Hz\u00b2. [1]"),
    Q("An a\u2013x graph is a straight line through the origin; it passes through the point (0.20 m, \u221280 m s\u207b\u00b2). Find f\u00b2.", 1, "gradient = \u221280/0.20 = \u2212400 s\u207b\u00b2 = \u2212\u03c9\u00b2; f\u00b2 = 400/4\u03c0\u00b2 = 10.1 Hz\u00b2. [1]"),
    Q("An a\u2013x graph is a straight line through the origin passing through (0.10 m, \u221236 m s\u207b\u00b2) and (0.30 m, \u2212108 m s\u207b\u00b2). Find f\u00b2.", 1, "gradient = (\u2212108\u2212(\u221236))/(0.30\u22120.10) = \u221272/0.20 = \u2212360 s\u207b\u00b2 = \u2212\u03c9\u00b2; f\u00b2 = 360/4\u03c0\u00b2 = 9.12 Hz\u00b2. [1]"),
  ],
  p1q5: [
    Q("An SHM oscillator has amplitude X, total energy E, max speed vmax. Find Ep and v at x = X/2.", 1, "Ep = E(x/X)\u00b2 = E/4; v = vmax\u221a(1\u22121/4) = vmax(\u221a3)/2. [1]"),
    Q("For the same oscillator, find Ep and v at x = 0.6X.", 1, "Ep = E(0.6)\u00b2 = 0.36E; v = vmax\u221a(1\u22120.36) = vmax(0.80). [1]"),
    Q("For the same oscillator, at what fraction of X is the kinetic energy equal to three times the elastic PE?", 1, "KE = 3Ep \u27f9 E\u2212Ep = 3Ep \u27f9 Ep = E/4 \u27f9 (x/X)\u00b2 = 1/4 \u27f9 x = X/2. [1]"),
  ],
  p1q6: [
    Q("A displacement\u2013time graph shows the object completing 6 full cycles in 3.0 s, with peaks reaching 0.040 m above and below the axis. State f and amplitude.", 1, "f = 6/3.0 = 2.0 Hz; amplitude = 0.040 m. [1]"),
    Q("A graph shows the object at its first peak (+0.075 m) at t = 0.125 s, having started from equilibrium at t = 0. State f and amplitude.", 1, "first peak at T/4 = 0.125 s \u27f9 T = 0.50 s \u27f9 f = 2.0 Hz; amplitude = 0.075 m. [1]"),
    Q("A graph shows the object passing through equilibrium (moving upward) at t = 0.20 s and reaching its next peak of 0.060 m at t = 0.45 s. State f and amplitude.", 1, "time from equilibrium to next peak = T/4 = 0.45\u22120.20 = 0.25 s \u27f9 T = 1.0 s \u27f9 f = 1.0 Hz; amplitude = 0.060 m. [1]"),
  ],
  p1q7: [
    Q("An object oscillates with frequency 2.0 Hz between two extremes 0.12 m apart. Find its speed halfway between equilibrium and one extreme.", 1, "x0 = 0.060 m; \u03c9 = 2\u03c0(2.0) = 12.57 rad/s; v = \u03c9\u221a(x0\u00b2\u2212(x0/2)\u00b2) = 12.57\u00d70.060\u00d7(\u221a3/2) = 0.653 m s\u207b\u00b9. [1]"),
    Q("An object with frequency f oscillates between extremes a distance b apart. Find its speed at the point one-third of the way from equilibrium to an extreme, in terms of f and b.", 1, "x0 = b/2, x = b/6; v = 2\u03c0f\u221a((b/2)\u00b2\u2212(b/6)\u00b2) = 2\u03c0f\u00b7(b/2)\u221a(1\u22121/9) = \u03c0fb(\u221a8)/3 = (2\u221a2/3)\u03c0fb. [1]"),
    Q("An object with frequency 1.5 Hz oscillates between extremes 0.20 m apart. At what displacement from equilibrium is its speed equal to half its maximum speed?", 1, "vmax = \u03c9x0 = 2\u03c0(1.5)(0.10) = 0.942 m/s; v = vmax/2 \u27f9 \u221a(x0\u00b2\u2212x\u00b2) = x0/2 \u27f9 x\u00b2 = x0\u00b2(1\u22121/4) \u27f9 x = x0(\u221a3)/2 = 0.0866 m. [1]"),
  ],
  p1q8: [
    Q("Which a\u2013x graph shape represents SHM: a straight line through the origin with negative gradient, or a horizontal line?", 1, "A straight line through the origin with negative gradient (a = \u2212\u03c9\u00b2x); a horizontal line means constant acceleration, not SHM. [1]"),
    Q("A student plots a\u2013x for an oscillator and gets a straight line, but it does not pass through the origin (it crosses the a-axis at a > 0 when x = 0). Is this consistent with SHM about x = 0?", 1, "No \u2014 SHM requires a = 0 when x = 0 (equilibrium); a straight line offset from the origin implies oscillation about a different equilibrium point, or a non-SHM system. [1]"),
    Q("Two lines are plotted on the same a\u2013x axes: Line A is straight through the origin with gradient \u221250 s\u207b\u00b2; Line B is straight through the origin with gradient \u221250 s\u207b\u00b2 for |x| < 0.1 m but curves for |x| > 0.1 m. Which represents ideal SHM at all amplitudes, and why?", 1, "Line A \u2014 a constant gradient through the origin for all x means a \u221d \u2212x at every displacement. Line B only satisfies this for small x, so it represents SHM only in that region. [1]"),
  ],
  p1q9: [
    Q("A mass\u2013spring system has maximum elastic PE E. The amplitude is doubled, mass unchanged. Find the new max PE.", 1, "Ep,max = \u00bdkX\u00b2 \u221d X\u00b2 (independent of mass); new Ep = E \u00d7 2\u00b2 = 4E. [1]"),
    Q("The mass is quadrupled and the amplitude halved. Find the new max PE.", 1, "Ep,max independent of mass; depends only on X\u00b2: new Ep = E \u00d7 (1/2)\u00b2 = E/4. [1]"),
    Q("The spring is replaced with one of twice the spring constant, and the amplitude is reduced to 3/4 of its original value. Find the new max PE in terms of E.", 1, "Ep,max = \u00bdkX\u00b2; new Ep = E \u00d7 2 \u00d7 (3/4)\u00b2 = E \u00d7 2 \u00d7 9/16 = 9E/8. [1]"),
  ],
  p1q10: [
    Q("A pendulum has period T on Earth. It is taken to the Moon, where g is 1/6 of Earth's, length unchanged. Find the new period.", 1, "T \u221d 1/\u221ag; T_new = T\u221a6 = 2.45T. [1]"),
    Q("The pendulum's length is halved and it stays on Earth. Find the new period.", 1, "T \u221d \u221al; T_new = T\u221a(1/2) = 0.707T. [1]"),
    Q("The pendulum is taken to a planet with g = 4g_Earth, and its length is tripled. Find the new period in terms of T.", 1, "T \u221d \u221a(l/g); T_new = T\u221a(3/4) = 0.866T. [1]"),
  ],
  p1q11: [
    Q("A 0.50 kg mass oscillates with amplitude 0.15 m and period 1.0 s. Find the total energy.", 1, "\u03c9 = 2\u03c0/1.0 = 6.28 rad/s; E = \u00bdm\u03c9\u00b2x0\u00b2 = \u00bd(0.50)(39.5)(0.0225) = 0.222 J. [1]"),
    Q("A 2.0 kg mass oscillates with amplitude 0.080 m and period \u03c0/3 s. Find the total energy.", 1, "\u03c9 = 2\u03c0/(\u03c0/3) = 6 rad/s; E = \u00bd(2.0)(36)(0.0064) = 0.230 J. [1]"),
    Q("A 0.30 kg mass oscillates with amplitude 0.25 m at a frequency of 1.2 Hz. Find the total energy.", 1, "\u03c9 = 2\u03c0(1.2) = 7.54 rad/s; E = \u00bd(0.30)(56.8)(0.0625) = 0.533 J. [1]"),
  ],
  p1q12: [
    Q("At t = 0 an object is at its lowest point, displacement \u2212x0, angular frequency \u03c9. Which expression gives v(t)?", 1, "x = \u2212x0cos(\u03c9t) \u27f9 v = \u03c9x0 sin(\u03c9t). [1]"),
    Q("At t = 0 an object is momentarily at rest at its highest point +x0. Find v(t).", 1, "x = x0cos(\u03c9t) \u27f9 v = \u2212\u03c9x0 sin(\u03c9t). [1]"),
    Q("At t = 0 an object passes through equilibrium moving in the negative direction with angular frequency \u03c9 and amplitude x0. Find v(t).", 1, "x = \u2212x0sin(\u03c9t) \u27f9 v = \u2212\u03c9x0 cos(\u03c9t). [1]"),
  ],
  p1q13: [
    Q("State the phase angle between the displacement\u2013time and acceleration\u2013time graphs of an SHM oscillator.", 1, "\u03c0 rad (they are exactly out of phase). [1]"),
    Q("A student is shown two SHM graphs plotted on the same time axis: one peaks at t = 0, the other has a trough at t = 0 (same period). What is the phase difference between them?", 1, "\u03c0 rad \u2014 a peak and trough at the same instant means the curves are inverted relative to one another. [1]"),
    Q("Two SHM quantities for the same oscillator, X and Y, are found to reach their maxima exactly half a period apart. What is the phase angle between them, in radians?", 1, "Half a period corresponds to a phase difference of \u03c0 rad. [1]"),
  ],
  p1q14: [
    Q("What is the phase angle between displacement and acceleration in SHM?", 1, "\u03c0 rad. [1]"),
    Q("An SHM velocity\u2013time graph is described as reaching its maximum a quarter period before the displacement\u2013time graph reaches its maximum. What is the phase angle between velocity and displacement?", 1, "A quarter-period lead corresponds to \u03c0/2 rad. [1]"),
    Q("For an SHM oscillator, the acceleration leads the velocity by a certain phase angle. State this angle, and state whether acceleration or velocity reaches its positive maximum first.", 1, "\u03c0/2 rad; acceleration reaches its positive maximum a quarter cycle before velocity does. [1]"),
  ],
  p1q15: [
    Q("A spring\u2013mass oscillator has amplitude x0 and total energy ET. The mass is doubled, amplitude unchanged. Find the new total energy.", 1, "E = \u00bdkx0\u00b2 is independent of mass; new E = ET. [1]"),
    Q("The spring constant is tripled and the amplitude is halved, mass unchanged. Find the new total energy in terms of ET.", 1, "E = \u00bdkx0\u00b2; new E = ET \u00d7 3 \u00d7 (1/2)\u00b2 = 3ET/4. [1]"),
    Q("The mass is doubled AND the amplitude is increased so that the maximum speed stays the same as before. Find the new total energy in terms of ET.", 1, "E = \u00bdmvmax\u00b2; if vmax is unchanged and mass doubles, new E = 2 \u00d7 ET. [1]"),
  ],
  p1q16ai: [
    Q("A trolley on a horizontal spring is released from rest at maximum extension at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "Elastic PE decreases while KE increases; total mechanical energy stays constant. [1]"),
    Q("A pendulum is released from rest at its highest point at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "Gravitational PE decreases while KE increases, with the sum remaining constant. [1]"),
    Q("A mass on a vertical spring is pulled up above its equilibrium position and released from rest at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "As the mass falls toward equilibrium, gravitational PE decreases and elastic PE increases (spring stretches back toward natural extension then beyond), while KE increases overall; total mechanical energy is conserved. [1]"),
  ],
  p1q16aii: [
    Q("For the trolley released at maximum extension (t = 0), describe the energy change between t = T/4 and t = T/2.", 1, "KE decreases while elastic PE increases, returning to its initial maximum at t = T/2 (now at maximum compression). [1]"),
    Q("For the pendulum released at t = 0, describe the energy change between t = T/4 and t = T/2.", 1, "KE decreases while gravitational PE increases, reaching its initial maximum height (on the opposite side) at t = T/2. [1]"),
    Q("For the vertical spring system released above equilibrium at t = 0, describe the energy change between t = T/4 and t = T/2.", 1, "KE decreases as the mass rises past equilibrium and decelerates; gravitational PE increases while elastic PE decreases, with total mechanical energy conserved throughout. [1]"),
  ],
  p1q16b: [
    Q("A trolley of mass m oscillates on a spring with frequency f1. The mass is doubled (spring unchanged). Find f1/f2.", 2, "f \u221d 1/\u221am [1]; f1/f2 = \u221a(2m/m) = \u221a2 [1]."),
    Q("The mass is reduced to 60% of its original value. Find f1/f2.", 2, "f \u221d 1/\u221am [1]; f1/f2 = \u221a(0.6m/m) = \u221a0.6 = 0.775 [1]."),
    Q("The mass is doubled AND the spring is replaced with one of half the original spring constant. Find f1/f2.", 2, "f \u221d \u221a(k/m) [1]; f1/f2 = \u221a((k/m)/((k/2)/(2m))) = \u221a4 = 2 [1]."),
  ],
  p1q16c: [
    Q("What property must the spring have for the resulting motion to be SHM?", 1, "It must obey Hooke's law \u2014 restoring force directly proportional to extension/compression (constant spring constant). [1]"),
    Q("A spring is described as \"non-linear\": its extension is not proportional to the applied force at large loads. Would an oscillator using this spring undergo exact SHM at large amplitude?", 1, "No \u2014 SHM requires F \u221d \u2212x at all displacements used; a non-linear spring breaks this proportionality at large extension. [1]"),
    Q("Two springs, A and B, both pass through the origin on a force\u2013extension graph. Spring A's graph is straight; spring B's is a smooth curve. State which spring would produce SHM if used alone, and justify your answer using the defining condition for SHM.", 1, "Spring A \u2014 its straight-line F\u2013x graph through the origin means F = \u2212kx with constant k, satisfying a = \u2212\u03c9\u00b2x; spring B's curved graph means F is not proportional to x, so it would not produce exact SHM. [1]"),
  ],
  p1q17a: [
    Q("Two models of a mass\u2013spring system both approximate a as linear in x only for small x. Outline two reasons both predict SHM at small displacement.", 2, "Both graphs pass through the origin [1]; both are approximately straight lines (a \u221d \u2212x) for small x [1]."),
    Q("A pendulum's true restoring force is \u2212mg sin\u03b8; for small \u03b8, sin\u03b8 \u2248 \u03b8. Outline two reasons this gives SHM at small \u03b8.", 2, "For small \u03b8, sin\u03b8 \u2248 \u03b8 makes the restoring force linear in \u03b8 [1]; this matches the defining condition a = \u2212\u03c9\u00b2x, i.e. a straight-line relationship through the origin [1]."),
    Q("Two candidate F\u2013x graphs both curve away from a straight line at large x, but one curves upward (stiffening) and the other downward (softening) at large x. Outline two reasons both still give approximate SHM at small x.", 2, "Near x = 0, the tangent to both curves passes through the origin, so both are approximately linear there [1]; for small enough x, the deviation from linearity is negligible, so a \u2248 \u2212\u03c9\u00b2x holds in both cases regardless of which way they curve at large x [1]."),
  ],
  p1q17b: [
    Q("A mass\u2013spring system has a = \u221216x (SI units) for small x. Find the time period.", 4, "\u03c9\u00b2 = 16 [1]; \u03c9 = 4 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/4 = 1.57 s [1]."),
    Q("For small x, the a\u2013x graph is a straight line through the origin passing through the point (0.050 m, \u22122.0 m s\u207b\u00b2). Find the time period.", 4, "gradient = \u22122.0/0.050 = \u221240 s\u207b\u00b2 = \u2212\u03c9\u00b2 [1]; \u03c9 = \u221a40 = 6.32 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/6.32 = 0.994 s [1]."),
    Q("For small x, the a\u2013x graph is a straight line through the origin passing through (0.020 m, \u22125.0 m s\u207b\u00b2) and (0.060 m, \u221215 m s\u207b\u00b2). Find the time period.", 4, "gradient = (\u221215\u2212(\u22125.0))/(0.060\u22120.020) = \u221210/0.040 = \u2212250 s\u207b\u00b2 = \u2212\u03c9\u00b2 [1]; \u03c9 = \u221a250 = 15.8 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/15.8 = 0.398 s [1]."),
  ],
  p1q17c: [
    Q("For a system whose a\u2013x graph becomes less steep (smaller |gradient|) at large x, outline what happens to the period at large amplitude.", 2, "A smaller |gradient| means a smaller effective \u03c9 at large x [1]; since T = 2\u03c0/\u03c9, the period increases at large amplitude [1]."),
    Q("For a system whose a\u2013x graph becomes steeper at large x, outline the effect on the period at large amplitude.", 2, "A steeper gradient means a larger effective \u03c9 [1]; so the period decreases at large amplitude [1]."),
    Q("A real pendulum's restoring force is \u2212mg sin\u03b8, not \u2212mg\u03b8. Using the fact that sin\u03b8 < \u03b8 for \u03b8 > 0, outline what happens to the pendulum's period as the swing amplitude increases beyond the small-angle range.", 2, "Since sin\u03b8 < \u03b8, the true restoring force (and hence the effective \u03c9) is smaller than the small-angle approximation predicts, and this shortfall grows with amplitude [1]; a smaller effective \u03c9 means a longer period, so the period increases at larger swing amplitudes [1]."),
  ],
  p1q17d: [
    Q("For model A, Ep\u2013x is a symmetric parabola through the origin. For model B, which softens (restoring force grows more slowly than linear) at large x, describe how its Ep\u2013x graph differs from model A's.", 2, "Ep for model B still starts at the origin and is symmetric about x = 0 [1]; but rises less steeply than model A's parabola at large |x|, since energy is stored more slowly as the restoring force weakens there [1]."),
    Q("For model C, which stiffens (restoring force grows faster than linear) at large x, describe its Ep\u2013x graph relative to model A.", 2, "Symmetric about x = 0, starting at the origin [1]; rises more steeply than model A's parabola at large |x|, since more energy is stored per unit displacement as the restoring force grows faster there [1]."),
    Q("For a model where the restoring force increases linearly up to x1 and then remains constant (does not increase further) beyond x1, describe the Ep\u2013x graph beyond x1.", 2, "The graph matches the parabola of model A up to x1 [1]; beyond x1 it becomes a straight line (linear in x, not quadratic), since Ep = \u222bF dx and F is constant there [1]."),
  ],
  p1q18a: [
    Q("A KE\u2013x graph for an SHM object is zero at x = \u00b10.25 m and maximum at x = 0. State the amplitude.", 1, "0.25 m. [1]"),
    Q("A KE\u2013x graph shows the object's kinetic energy falling to zero when it has moved 0.18 m from equilibrium in either direction. State the amplitude.", 1, "0.18 m. [1]"),
    Q("A KE\u2013x graph is symmetric about x = 0 and its two zero-crossings are a total of 0.84 m apart. State the amplitude.", 1, "The zero-crossings are at \u00b1x0, a distance 2x0 apart, so x0 = 0.84/2 = 0.42 m. [1]"),
  ],
  p1q18b: [
    Q("Given a KE\u2013x graph (inverted parabola, maximum at x = 0, zero at x = \u00b1x0), draw the corresponding Ep\u2013x graph.", 1, "An upright parabola: zero at x = 0, rising to a maximum at x = \u00b1x0, such that Ep + KE = total energy (constant) at every x. [1]"),
    Q("Given the same KE\u2013x graph shape, but the total energy of the system is now twice as large, draw the Ep\u2013x graph.", 1, "Same upright-parabola shape as before, but scaled up so its maximum value (at x = \u00b1x0) is twice as high; still zero at x = 0. [1]"),
    Q("A new KE\u2013x graph has half the amplitude (x0/2) of the original and the same peak KE value at x = 0. Draw the corresponding Ep\u2013x graph.", 1, "An upright parabola, zero at x = 0, reaching the same maximum value as before but now at x = \u00b1x0/2 \u2014 i.e. narrower than the original, since the same total energy is now stored over a smaller range of x. [1]"),
  ],
  p1q18ci: [
    Q("A 0.20 kg object oscillates with amplitude 0.050 m and total energy 0.040 J. Show that the period is about 0.5 s.", 3, "\u03c9\u00b2 = 2E/(mx0\u00b2) = 2(0.040)/(0.20\u00d70.0025) = 160 [1]; \u03c9 = 12.6 rad/s [1]; T = 2\u03c0/\u03c9 = 0.50 s [1]."),
    Q("A 0.40 kg object has amplitude 0.030 m and a maximum speed of 0.28 m s\u207b\u00b9. Show that the period is about 0.67 s.", 3, "vmax = \u03c9x0 \u27f9 \u03c9 = vmax/x0 = 0.28/0.030 = 9.33 rad/s [1]; equivalently E = \u00bdmvmax\u00b2 = 0.0157 J, consistent [1]; T = 2\u03c0/\u03c9 = 2\u03c0/9.33 = 0.673 s [1]."),
    Q("A 0.25 kg object oscillates on a spring of constant 45 N m\u207b\u00b9 with amplitude 0.040 m. Show that the period is about 0.47 s.", 3, "\u03c9\u00b2 = k/m = 45/0.25 = 180 [1]; \u03c9 = \u221a180 = 13.4 rad/s [1]; T = 2\u03c0/\u03c9 = 2\u03c0/13.4 = 0.469 s [1]."),
  ],
};
