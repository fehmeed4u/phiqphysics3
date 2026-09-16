// SHM SL Diagnostic — exam breakdown + remedial question bank
export const TOPICS = {
  T1: { name: "Phase relationships in SHM", blurb: "How displacement, velocity and acceleration vary in time/position and their phase relationships" },
  T2: { name: "Period and frequency", blurb: "Calculating T and f for mass\u2013spring and pendulum systems, and how mass, k, length, g affect them" },
  T3: { name: "Velocity and acceleration relations", blurb: "Using SHM equations to find v or a at a given displacement, time or position" },
  T4: { name: "Energy in SHM", blurb: "Kinetic, elastic potential and total energy, and how they vary with displacement/time" },
  T5: { name: "Scaling mass/amplitude and energy", blurb: "How changing mass or amplitude scales total/maximum energy" },
  T6: { name: "Conditions for SHM", blurb: "The defining a = \u2212\u03c9\u00b2x (F = \u2212kx) relationship required for SHM" },
  T7: { name: "Large-amplitude / non-ideal behaviour", blurb: "How real oscillators deviate from ideal SHM at large displacement" },
  T8: { name: "Graphical analysis of SHM", blurb: "Reading/sketching x-t, v-t, a-x, P-x graphs" },
};
export const COMMANDS = {
  recall: { name: "Recall & State", desc: "Select/state a fact or relationship directly" },
  calculate: { name: "Calculate", desc: "Compute a numerical answer, showing working" },
  interpret: { name: "Determine", desc: "Determine a quantity from given data or a graph" },
  explain: { name: "Outline", desc: "Give reasoned justification for a result" },
  describe: { name: "Describe", desc: "Describe a sequence or property, no reasoning needed" },
};
function I(id, label, marks, topic, command, bucket, prompt) { return { id, paper: 1, label, marks, topic, command, bucket, prompt }; }
export const ITEMS = [
  I("slq1", "Q1", 1, "T1", "Select", "recall", "Time when a particle starting at equilibrium is first farthest from it"),
  I("slq2", "Q2", 1, "T2", "Calculate", "calculate", "Natural frequency of a mass\u2013spring system"),
  I("slq3", "Q3", 1, "T8", "Determine", "interpret", "Find f\u00b2 from the gradient of an a\u2013x graph"),
  I("slq4", "Q4", 1, "T8", "Determine", "interpret", "Frequency and amplitude read from a displacement\u2013time graph"),
  I("slq5", "Q5", 1, "T2", "Calculate", "calculate", "New pendulum angular frequency when mass doubles and length \u2192 L/4"),
  I("slq6", "Q6", 1, "T2", "Calculate", "calculate", "New pendulum period when mass doubles (irrelevant) and g \u2192 g/6"),
  I("slq7", "Q7", 1, "T4", "Select", "recall", "Shape of the total-energy-vs-time graph for SHM"),
  I("slq8", "Q8", 1, "T8", "Select", "recall", "Shape of the PE and total-energy-vs-displacement graphs for SHM"),
  I("slq9", "Q9", 1, "T2", "Calculate", "calculate", "New pendulum frequency when length is halved"),
  I("slq10", "Q10", 1, "T1", "State", "recall", "Displacement and velocity when acceleration is at a positive maximum"),
  I("slq11", "Q11", 1, "T8", "Determine", "interpret", "Point on a position\u2013time graph with zero velocity and negative acceleration"),
  I("slq12", "Q12", 1, "T1", "Select", "recall", "Which pair of quantities can be simultaneously zero"),
  I("slq13", "Q13", 1, "T1", "State", "recall", "Velocity and acceleration at maximum displacement"),
  I("slq14", "Q14", 1, "T2", "Calculate", "calculate", "New pendulum period when g \u2192 g/6"),
  I("slq15", "Q15", 1, "T4", "State", "recall", "Number of times per oscillation two energy/motion quantities are equal"),
  I("slq16", "Q16", 1, "T8", "Determine", "interpret", "x\u2013t and a\u2013t shapes given a v\u2013t graph"),
  I("slq17", "Q17", 1, "T8", "Determine", "interpret", "Point on an x\u2013t graph with maximum leftward velocity"),
  I("slq18", "Q18", 1, "T2", "Calculate", "calculate", "New period of a vertical mass\u2013spring system when g changes"),
  I("slq19", "Q19", 1, "T6", "Select", "recall", "Correct description of acceleration in SHM"),
  I("slq20", "Q20", 1, "T2", "Calculate", "calculate", "Ratio of pendulum period to mass\u2013spring period after halving both masses"),
  I("slq21ai", "Q21 (a)(i)", 1, "T4", "Describe", "describe", "Energy changes between release (max compression) and t = T/4"),
  I("slq21aii", "Q21 (a)(ii)", 1, "T4", "Describe", "describe", "Energy changes between t = T/4 and t = T/2"),
  I("slq21b", "Q21 (b)", 2, "T5", "Determine", "interpret", "Ratio of oscillation frequency before/after tripling the mass"),
  I("slq21c", "Q21 (c)", 1, "T6", "Describe", "describe", "Property the spring must have for SHM"),
  I("slq22a", "Q22 (a)", 2, "T6", "Outline", "explain", "Two reasons two a\u2013x models both predict SHM at small displacement"),
  I("slq22b", "Q22 (b)", 4, "T2", "Determine", "interpret", "Time period from the small-x gradient of an a\u2013x graph"),
  I("slq22c", "Q22 (c)", 2, "T7", "Outline", "explain", "How the period changes at large amplitude for a softening model"),
  I("slq22d", "Q22 (d)", 2, "T8", "Describe", "describe", "Ep\u2013x graph for model B, given model A's Ep\u2013x graph"),
];
function Q(q, m, a) { return { q, m, a }; }
export const BANK = {
  slq1: [
    Q("Particle in SHM, period T, starts at equilibrium at t=0 moving in the positive direction. At what time does it first reach its extreme positive displacement?", 1, "t = T/4. [1]"),
    Q("Particle in SHM, period T, starts at equilibrium at t=0. At what time does it next pass through equilibrium (either direction)?", 1, "t = T/2. [1]"),
    Q("Particle in SHM, period T, starts at an extreme (not equilibrium) at t=0. At what time does it first reach equilibrium?", 1, "Starting at an extreme, equilibrium is reached a quarter cycle later: t = T/4. [1]"),
  ],
  slq2: [
    Q("A 0.40 kg mass hangs from a spring of constant 6.0 N m\u207b\u00b9. Find the natural frequency.", 1, "f = (1/2\u03c0)\u221a(k/m) = (1/2\u03c0)\u221a(6.0/0.40) = (1/2\u03c0)(3.87) = 0.62 Hz. [1]"),
    Q("A 0.60 kg mass hangs from a spring of constant 15 N m\u207b\u00b9. Find the natural frequency.", 1, "f = (1/2\u03c0)\u221a(15/0.60) = (1/2\u03c0)(5.0) = 0.80 Hz. [1]"),
    Q("A 0.30 kg mass on a spring has period 0.50 s. The mass is changed to 0.45 kg, spring unchanged \u2014 find the new frequency (find k first).", 1, "k = 4\u03c0\u00b2m/T\u00b2 = 4\u03c0\u00b2(0.30)/0.25 = 47.4 N m\u207b\u00b9; f_new = (1/2\u03c0)\u221a(47.4/0.45) = 1.63 Hz. [1]"),
  ],
  slq3: [
    Q("An a\u2013x graph is a straight line through the origin with gradient \u221220 s\u207b\u00b2. Find f\u00b2.", 1, "\u03c9\u00b2 = 20; f\u00b2 = 20/4\u03c0\u00b2 = 0.507 Hz\u00b2. [1]"),
    Q("An a\u2013x graph is a straight line through the origin passing through (0.20 m, \u221250 m s\u207b\u00b2). Find f\u00b2.", 1, "gradient = \u221250/0.20 = \u2212250 s\u207b\u00b2 = \u2212\u03c9\u00b2; f\u00b2 = 250/4\u03c0\u00b2 = 6.33 Hz\u00b2. [1]"),
    Q("An a\u2013x graph is a straight line through the origin passing through (0.10 m, \u221218 m s\u207b\u00b2) and (0.30 m, \u221254 m s\u207b\u00b2). Find f\u00b2.", 1, "gradient = (\u221254\u2212(\u221218))/(0.30\u22120.10) = \u221236/0.20 = \u2212180 s\u207b\u00b2 = \u2212\u03c9\u00b2; f\u00b2 = 180/4\u03c0\u00b2 = 4.56 Hz\u00b2. [1]"),
  ],
  slq4: [
    Q("A displacement\u2013time graph shows 4 complete cycles in 2.0 s, with peaks at \u00b10.030 m. State f and amplitude.", 1, "f = 4/2.0 = 2.0 Hz; amplitude = 0.030 m. [1]"),
    Q("A graph shows the object at its first peak (+0.050 m) at t = 0.20 s, having started from equilibrium at t = 0. State f and amplitude.", 1, "first peak at T/4 = 0.20 s \u27f9 T = 0.80 s \u27f9 f = 1.25 Hz; amplitude = 0.050 m. [1]"),
    Q("A graph shows the object passing through equilibrium (moving upward) at t = 0.10 s and reaching its next peak of 0.045 m at t = 0.35 s. State f and amplitude.", 1, "time from equilibrium to next peak = T/4 = 0.35\u22120.10 = 0.25 s \u27f9 T = 1.0 s \u27f9 f = 1.0 Hz; amplitude = 0.045 m. [1]"),
  ],
  slq5: [
    Q("A pendulum has angular frequency \u03c9. Its length is changed to L/9, mass unchanged. Find the new angular frequency.", 1, "\u03c9 \u221d 1/\u221aL; \u03c9_new = \u03c9\u221a(L/(L/9)) = 3\u03c9. [1]"),
    Q("The pendulum's length is changed to 4L and its mass is tripled (irrelevant). Find the new angular frequency.", 1, "\u03c9 \u221d 1/\u221aL (mass doesn't matter); \u03c9_new = \u03c9\u221a(L/4L) = \u03c9/2. [1]"),
    Q("The pendulum's length is changed to L/4 AND it is taken to a planet where g = 2g_Earth. Find the new angular frequency in terms of \u03c9.", 1, "\u03c9 = \u221a(g/L); \u03c9_new = \u221a(2g/(L/4)) = \u221a8 \u00b7 \u221a(g/L) = 2\u221a2 \u03c9. [1]"),
  ],
  slq6: [
    Q("A pendulum has period T. It is taken somewhere with g \u2192 g/4, length unchanged. Find the new period.", 1, "T \u221d 1/\u221ag; T_new = 2T. [1]"),
    Q("The pendulum stays on Earth but g effectively becomes 9g (e.g. a centrifuge). Find the new period.", 1, "T_new = T/3. [1]"),
    Q("The pendulum's g becomes g/6 AND its length is halved. Find the new period in terms of T.", 1, "T \u221d \u221a(L/g); new L/g ratio = (L/2)/(g/6) = 3(L/g); T_new = T\u221a3 = 1.73T. [1]"),
  ],
  slq7: [
    Q("For an ideal (undamped) SHM oscillator, how does total energy vary with time?", 1, "It stays constant \u2014 a horizontal line on an E\u2013t graph. [1]"),
    Q("A damped oscillator loses energy to friction. How does its total-energy-vs-time graph differ from the ideal SHM case?", 1, "It decreases over time (e.g. exponentially), instead of the constant horizontal line seen in ideal SHM. [1]"),
    Q("For an ideal SHM system, the amplitude is doubled. How does the total-energy-vs-time graph change?", 1, "It is still a horizontal (constant) line, but at 4\u00d7 the original value, since E \u221d amplitude\u00b2. [1]"),
  ],
  slq8: [
    Q("What shape does total energy E take when plotted against displacement x for SHM?", 1, "A horizontal line \u2014 constant, independent of x. [1]"),
    Q("What shape does elastic PE take when plotted against x?", 1, "A parabola: zero at x = 0, rising to a maximum at x = \u00b1x\u2080. [1]"),
    Q("Kinetic energy = E \u2212 PE at every x. What shape does KE take when plotted against x?", 1, "An inverted parabola: maximum at x = 0, falling to zero at x = \u00b1x\u2080. [1]"),
  ],
  slq9: [
    Q("A pendulum has frequency f. Its length is changed to L/4. Find the new frequency.", 1, "f \u221d 1/\u221aL; f_new = 2f. [1]"),
    Q("The pendulum's length is changed to 9L. Find the new frequency.", 1, "f_new = f/3. [1]"),
    Q("The pendulum's length is halved AND g is also halved. Find the new frequency in terms of f.", 1, "f \u221d \u221a(g/L); ratio = \u221a((g/2)/(L/2)) / \u221a(g/L) = 1, so f_new = f (unchanged). [1]"),
  ],
  slq10: [
    Q("When the acceleration of an SHM mass is at a positive maximum, what is its displacement?", 1, "A negative maximum (a = \u2212\u03c9\u00b2x, so positive a requires negative x). [1]"),
    Q("When the acceleration is at a positive maximum, what is the velocity?", 1, "Zero \u2014 this is a turning point. [1]"),
    Q("If instead the acceleration is zero, what are the displacement and velocity?", 1, "Displacement is zero (equilibrium); velocity is at a maximum (positive or negative, depending on direction of travel). [1]"),
  ],
  slq11: [
    Q("On a cosine-shaped x\u2013t graph starting at +x\u2080, at the first peak, what are the velocity and acceleration?", 1, "v = 0 (turning point); a = \u2212\u03c9\u00b2x\u2080, i.e. negative. [1]"),
    Q("At the following trough (x = \u2212x\u2080), what are v and a?", 1, "v = 0; a = \u2212\u03c9\u00b2(\u2212x\u2080) = +\u03c9\u00b2x\u2080, i.e. positive. [1]"),
    Q("A point is needed where v = 0 AND a is negative. Between the peak at +x\u2080 and the next trough at \u2212x\u2080, which one qualifies?", 1, "Only the peak at +x\u2080 \u2014 v = 0 at both, but a is negative only where x is positive. [1]"),
  ],
  slq12: [
    Q("Can displacement and velocity be zero at the same instant in SHM?", 1, "No \u2014 velocity is zero only at the extremes, where displacement is at a maximum, not zero. [1]"),
    Q("Can velocity and acceleration be zero at the same instant?", 1, "No \u2014 velocity is zero only at the extremes (where acceleration is maximum); acceleration is zero only at equilibrium (where velocity is maximum). [1]"),
    Q("Can displacement and acceleration be zero at the same instant?", 1, "Yes \u2014 both are zero at the equilibrium position, since a = \u2212\u03c9\u00b2x. [1]"),
  ],
  slq13: [
    Q("At maximum displacement, what is the velocity?", 1, "Zero. [1]"),
    Q("At maximum displacement, what is the magnitude of the acceleration?", 1, "Maximum (a = \u03c9\u00b2x\u2080). [1]"),
    Q("At maximum displacement, is the acceleration directed towards or away from equilibrium?", 1, "Towards equilibrium \u2014 it is a restoring acceleration, opposite in sign to the displacement. [1]"),
  ],
  slq14: [
    Q("A pendulum has period T on Earth. Taken somewhere with g \u2192 g/4, length unchanged. Find the new period.", 1, "T_new = 2T. [1]"),
    Q("Taken somewhere with g \u2192 4g. Find the new period.", 1, "T_new = T/2. [1]"),
    Q("Taken somewhere with g \u2192 g/6 AND the length is tripled. Find the new period in terms of T.", 1, "T \u221d \u221a(L/g); ratio = \u221a(3L/(g/6)) = \u221a18 = 4.24; T_new = 4.24T. [1]"),
  ],
  slq15: [
    Q("In one full oscillation, how many times is the velocity of an SHM mass momentarily zero?", 1, "2 times (once at each extreme). [1]"),
    Q("In one full oscillation, how many times is the kinetic energy equal to the elastic potential energy?", 1, "4 times \u2014 this occurs at x = \u00b1x\u2080/\u221a2, each crossed twice per cycle. [1]"),
    Q("In one full oscillation, how many times is the kinetic energy equal to three times the potential energy?", 1, "4 times \u2014 this occurs at x = \u00b1x\u2080/2, each crossed twice per cycle. [1]"),
  ],
  slq16: [
    Q("A v\u2013t graph is a sine curve, v = v_max sin(\u03c9t). What shape is the x\u2013t graph?", 1, "A negative cosine curve, x = \u2212x\u2080cos(\u03c9t) \u2014 starting at the minimum. [1]"),
    Q("For the same v\u2013t graph, what shape is the a\u2013t graph?", 1, "A cosine curve, a = \u03c9v_max cos(\u03c9t) \u2014 acceleration leads velocity by a quarter cycle. [1]"),
    Q("A v\u2013t graph instead starts at its maximum, v = v_max cos(\u03c9t), at t = 0. What are the shapes of x\u2013t and a\u2013t?", 1, "x\u2013t is a sine curve, x = x\u2080sin(\u03c9t); a\u2013t is a negative sine curve, a = \u2212\u03c9\u00b2x\u2080sin(\u03c9t). [1]"),
  ],
  slq17: [
    Q("A bob is released from rest at +x\u2080 at t = 0. At which point does it first have maximum leftward velocity?", 1, "At equilibrium (x = 0), a quarter period after release. [1]"),
    Q("A bob is released from rest at \u2212x\u2080 at t = 0. At which point does it first have maximum rightward velocity?", 1, "At equilibrium (x = 0), a quarter period after release. [1]"),
    Q("A bob starts at equilibrium moving right at t = 0. At which point, and when, does it next have maximum leftward velocity?", 1, "At equilibrium again, at t = T/2 \u2014 it swings out to +x\u2080 and back, first passing through equilibrium moving left at half a period. [1]"),
  ],
  slq18: [
    Q("A vertical mass\u2013spring system has period T on Earth. It is taken to the Moon (g = g/6), same mass and spring. Find its new period.", 1, "T (unchanged) \u2014 a mass\u2013spring period depends only on m and k, not on g. [1]"),
    Q("The same system is instead operated horizontally on a frictionless table rather than vertically. Find its new period.", 1, "T (unchanged) \u2014 gravity shifts the equilibrium position but does not appear in T = 2\u03c0\u221a(m/k). [1]"),
    Q("The system's period is T on Earth. On planet X, g is 5\u00d7 Earth's, and the mass is also doubled (spring unchanged). Find the new period in terms of T, stating which factor(s) actually matter.", 1, "g plays no role; only mass and k matter. Doubling the mass multiplies the period by \u221a2, so T_new = \u221a2 T. [1]"),
  ],
  slq19: [
    Q("Is the acceleration of an SHM object constant, or does it vary with displacement?", 1, "It varies with displacement: a = \u2212\u03c9\u00b2x, so its magnitude changes as x changes. [1]"),
    Q("Where is the magnitude of the acceleration greatest?", 1, "At the extremes of the oscillation (maximum displacement). [1]"),
    Q("Is the acceleration ever directed away from the centre of oscillation?", 1, "No \u2014 it is always directed towards the equilibrium position (it is a restoring acceleration), regardless of the sign of the displacement. [1]"),
  ],
  slq20: [
    Q("A pendulum and a mass\u2013spring system have equal periods. Both masses are tripled. Find the new ratio (pendulum period)/(mass\u2013spring period).", 1, "Pendulum period is unchanged (mass-independent); spring period scales by \u221a3; ratio = 1/\u221a3 = 0.577. [1]"),
    Q("Both masses instead become 1/4 of their original value. Find the new ratio.", 1, "Spring period scales by \u221a(1/4) = 1/2; ratio = 1/(1/2) = 2. [1]"),
    Q("Only the mass\u2013spring system's mass is doubled (pendulum mass unchanged). Find the new ratio, given the periods started equal.", 1, "Spring period scales by \u221a2; ratio = 1/\u221a2 = 0.707. [1]"),
  ],
  slq21ai: [
    Q("A trolley on a horizontal spring is released from rest at maximum compression at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "Elastic PE decreases while KE increases; total mechanical energy stays constant. [1]"),
    Q("A pendulum is released from rest at its highest point at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "Gravitational PE decreases while KE increases, with the sum remaining constant. [1]"),
    Q("A mass on a vertical spring is pulled down below equilibrium (spring stretched) and released from rest at t = 0. Describe the energy change between t = 0 and t = T/4.", 1, "As the mass rises towards equilibrium, elastic PE decreases and gravitational PE increases, while KE increases overall; total mechanical energy is conserved. [1]"),
  ],
  slq21aii: [
    Q("For the trolley released at maximum compression (t = 0), describe the energy change between t = T/4 and t = T/2.", 1, "KE decreases while elastic PE increases, returning to its initial maximum at t = T/2 (now at maximum extension). [1]"),
    Q("For the pendulum released at t = 0, describe the energy change between t = T/4 and t = T/2.", 1, "KE decreases while gravitational PE increases, reaching its initial maximum height (on the opposite side) at t = T/2. [1]"),
    Q("For the vertical spring system released stretched at t = 0, describe the energy change between t = T/4 and t = T/2.", 1, "As the mass continues rising past equilibrium and decelerates, KE decreases, gravitational PE continues increasing, and elastic PE increases again (spring now compressing); total mechanical energy is conserved throughout. [1]"),
  ],
  slq21b: [
    Q("A trolley of mass m oscillates on a spring with frequency f\u2081. The mass is doubled (spring unchanged). Find f\u2081/f\u2082.", 2, "f \u221d 1/\u221am [1]; f\u2081/f\u2082 = \u221a(2m/m) = \u221a2 [1]."),
    Q("The mass is reduced to 1/4 of its original value. Find f\u2081/f\u2082.", 2, "f \u221d 1/\u221am [1]; f\u2081/f\u2082 = \u221a((m/4)/m) = 1/2 [1]."),
    Q("The mass is tripled AND the spring is replaced with one of half the original spring constant. Find f\u2081/f\u2082.", 2, "f \u221d \u221a(k/m) [1]; f\u2081/f\u2082 = \u221a((k/m)/((k/2)/(3m))) = \u221a6 = 2.45 [1]."),
  ],
  slq21c: [
    Q("What must be true of a spring's force\u2013extension relationship for the resulting motion to be SHM?", 1, "It must obey Hooke's law \u2014 restoring force directly proportional to extension/compression (constant spring constant). [1]"),
    Q("A spring's extension is not proportional to the applied force at large loads (\"non-linear\"). Would SHM occur at large amplitude with this spring?", 1, "No \u2014 SHM requires F \u221d \u2212x at all displacements used; a non-linear spring breaks this at large extension. [1]"),
    Q("Two springs' force\u2013extension graphs both pass through the origin: spring A's is straight, spring B's is a smooth curve. Which alone would produce SHM, and why?", 1, "Spring A \u2014 its straight-line graph means F = \u2212kx with constant k, satisfying a = \u2212\u03c9\u00b2x; spring B's curved graph means F is not proportional to x. [1]"),
  ],
  slq22a: [
    Q("Two models' a\u2013x graphs both pass through the origin and are approximately straight for small x. Outline two reasons both predict SHM there.", 2, "Both graphs pass through the origin, i.e. a = 0 at x = 0 [1]; both are approximately straight lines through the origin for small x, i.e. a \u221d \u2212x [1]."),
    Q("A pendulum's true restoring force is \u2212mg sin\u03b8; for small \u03b8, sin\u03b8 \u2248 \u03b8. Outline two reasons this gives SHM at small \u03b8.", 2, "sin\u03b8 \u2248 \u03b8 makes the restoring force linear in \u03b8 for small angles [1]; this matches the defining condition a = \u2212\u03c9\u00b2x, a straight line through the origin [1]."),
    Q("Two candidate F\u2013x graphs curve away from linear at large x (one stiffening, one softening), but both are tangent to a line through the origin at x = 0. Outline two reasons both approximate SHM at small x.", 2, "Near x = 0 both curves lie close to their tangent line through the origin, so a \u2248 \u2212\u03c9\u00b2x there [1]; for sufficiently small x the deviation from this straight line is negligible, regardless of how the curve behaves at large x [1]."),
  ],
  slq22b: [
    Q("For small x, a = \u221212x (SI units). Find the time period.", 4, "\u03c9\u00b2 = 12 [1]; \u03c9 = 3.46 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/3.46 = 1.81 s [1]."),
    Q("For small x, the a\u2013x graph is a straight line through the origin passing through (0.040 m, \u22121.6 m s\u207b\u00b2). Find the time period.", 4, "gradient = \u22121.6/0.040 = \u221240 s\u207b\u00b2 = \u2212\u03c9\u00b2 [1]; \u03c9 = \u221a40 = 6.32 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/6.32 = 0.994 s [1]."),
    Q("For small x, the a\u2013x graph passes through (0.030 m, \u22123.0 m s\u207b\u00b2) and (0.090 m, \u22129.0 m s\u207b\u00b2). Find the time period.", 4, "gradient = (\u22129.0\u2212(\u22123.0))/(0.090\u22120.030) = \u22126.0/0.060 = \u2212100 s\u207b\u00b2 = \u2212\u03c9\u00b2 [1]; \u03c9 = 10 rad s\u207b\u00b9 [1]; T = 2\u03c0/\u03c9 [1]; T = 2\u03c0/10 = 0.628 s [1]."),
  ],
  slq22c: [
    Q("A model's a\u2013x graph becomes less steep (smaller |gradient|) at large x. Outline the change to the period at large amplitude.", 2, "A smaller |gradient| means a smaller effective \u03c9 at large x [1]; since T = 2\u03c0/\u03c9, the period increases at large amplitude [1]."),
    Q("A model's a\u2013x graph becomes steeper at large x. Outline the change to the period.", 2, "A steeper gradient means a larger effective \u03c9 [1]; so the period decreases at large amplitude [1]."),
    Q("A real pendulum's restoring force is \u2212mg sin\u03b8, not \u2212mg\u03b8. Using sin\u03b8 < \u03b8 for \u03b8 > 0, outline the effect on the period as swing amplitude increases beyond the small-angle range.", 2, "The true restoring force (and hence effective \u03c9) is smaller than the small-angle approximation predicts, and this shortfall grows with amplitude [1]; a smaller effective \u03c9 means a longer period, so the period increases at larger amplitudes [1]."),
  ],
  slq22d: [
    Q("For model A, Ep\u2013x is a symmetric parabola through the origin. Model B softens (restoring force grows more slowly than linear) at large x. Describe how its Ep\u2013x graph differs from model A's.", 2, "Still symmetric about x = 0, starting at the origin [1]; but rises less steeply than model A's parabola at large |x|, since less energy is stored per unit displacement where the restoring force is weaker [1]."),
    Q("Model C stiffens (restoring force grows faster than linear) at large x. Describe its Ep\u2013x graph relative to model A.", 2, "Symmetric about x = 0, starting at the origin [1]; rises more steeply than model A's parabola at large |x|, since more energy is stored per unit displacement where the restoring force is stronger [1]."),
    Q("A model's restoring force increases linearly up to x\u2081 and then stays constant beyond x\u2081. Describe the Ep\u2013x graph beyond x\u2081.", 2, "Matches model A's parabola up to x\u2081 [1]; beyond x\u2081 it becomes a straight line (linear, not quadratic) in x, since Ep = \u222bF dx and F is constant there [1]."),
  ],
};
