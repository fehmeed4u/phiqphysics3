/* φQ Physics — Shared Navigation + Search + Theme */
(function () {

  /* ---- Path base: pages inside syllabus-content/ sit two folders deep ---- */
  const BASE = /\/syllabus-content\//.test(location.pathname) ? '../../' : '';

  /* ---- Search index ---- */
  const SEARCH_DATA = [
    { title: 'All Lessons', url: 'lessons.html', cat: 'Lessons', tags: ['lessons','all lessons','browse','index','concepts'] },
    { title: 'A.1 Kinematics', url: 'topics.html#A1', cat: 'Topic', tags: ['motion','velocity','acceleration','displacement','suvat','kinematics'] },
    { title: 'A.2 Forces and Momentum', url: 'topics.html#A2', cat: 'Topic', tags: ['Newton','force','momentum','impulse','friction','free body'] },
    { title: 'A.3 Work, Energy and Power', url: 'topics.html#A3', cat: 'Topic', tags: ['work','energy','power','kinetic','potential','conservation'] },
    { title: 'A.4 Rigid Body Mechanics', url: 'topics.html#A4', cat: 'Topic (HL)', tags: ['torque','moment of inertia','rotation','angular momentum'] },
    { title: 'A.5 Galilean & Special Relativity', url: 'topics.html#A5', cat: 'Topic (HL)', tags: ['relativity','time dilation','length contraction','Einstein','Lorentz'] },
    { title: 'B.1 Thermal Energy Transfers', url: 'topics.html#B1', cat: 'Topic', tags: ['heat','conduction','convection','radiation','specific heat'] },
    { title: 'B.2 Greenhouse Effect', url: 'topics.html#B2', cat: 'Topic', tags: ['climate','infrared','greenhouse','albedo','Stefan-Boltzmann'] },
    { title: 'B.3 Gas Laws', url: 'topics.html#B3', cat: 'Topic', tags: ['pressure','volume','temperature','Boyle','Charles','ideal gas'] },
    { title: 'B.4 Thermodynamics', url: 'topics.html#B4', cat: 'Topic (HL)', tags: ['entropy','Carnot','thermodynamics','heat engine','efficiency'] },
    { title: 'B.5 Current and Circuits', url: 'topics.html#B5', cat: 'Topic', tags: ['current','voltage','resistance','Ohm','Kirchhoff','EMF','circuits'] },
    { title: 'C.1 Simple Harmonic Motion', url: 'topics.html#C1', cat: 'Topic', tags: ['SHM','oscillation','pendulum','spring','restoring force'] },
    { title: 'C.2 Wave Model', url: 'topics.html#C2', cat: 'Topic', tags: ['waves','frequency','wavelength','amplitude','transverse','longitudinal'] },
    { title: 'C.3 Wave Phenomena', url: 'topics.html#C3', cat: 'Topic', tags: ['diffraction','interference','superposition','double slit','Young'] },
    { title: 'C.4 Standing Waves and Resonance', url: 'topics.html#C4', cat: 'Topic', tags: ['standing waves','harmonics','resonance','nodes','antinodes'] },
    { title: 'C.5 Doppler Effect', url: 'topics.html#C5', cat: 'Topic', tags: ['Doppler','frequency shift','moving source','observer'] },
    { title: 'D.1 Gravitational Fields', url: 'topics.html#D1', cat: 'Topic', tags: ['gravity','gravitational field','orbit','Kepler','satellite'] },
    { title: 'D.2 Electric and Magnetic Fields', url: 'topics.html#D2', cat: 'Topic', tags: ['electric field','magnetic field','Coulomb','flux','field lines'] },
    { title: 'D.3 Motion in EM Fields', url: 'topics.html#D3', cat: 'Topic', tags: ['Lorentz force','cyclotron','velocity selector','Hall effect'] },
    { title: 'D.4 Induction', url: 'topics.html#D4', cat: 'Topic (HL)', tags: ['Faraday','Lenz','EMF','induction','flux linkage','transformer'] },
    { title: 'E.1 Structure of the Atom', url: 'topics.html#E1', cat: 'Topic', tags: ['atom','nucleus','electron','Bohr model','energy levels','spectra'] },
    { title: 'E.2 Quantum Physics', url: 'topics.html#E2', cat: 'Topic (HL)', tags: ['quantum','photoelectric','photon','de Broglie','wave-particle','Heisenberg'] },
    { title: 'E.3 Radioactive Decay', url: 'topics.html#E3', cat: 'Topic', tags: ['radioactivity','half-life','alpha','beta','gamma','decay constant'] },
    { title: 'E.4 Fission', url: 'topics.html#E4', cat: 'Topic', tags: ['nuclear fission','chain reaction','binding energy','mass defect'] },
    { title: 'E.5 Fusion and Stars', url: 'topics.html#E5', cat: 'Topic', tags: ['fusion','stellar','HR diagram','main sequence','nucleosynthesis'] },
    { title: 'IA Writing Guide', url: 'ia.html', cat: 'IA', tags: ['internal assessment','investigation','criteria','research design','data analysis','conclusion','evaluation'] },
    { title: 'IA Criteria Overview', url: 'ia.html', cat: 'IA', tags: ['research design','data analysis','conclusion','evaluation','mark bands','24 marks'] },
    { title: 'Formula Sheet', url: 'resources.html#formulas', cat: 'Resource', tags: ['formulas','equations','constants','data booklet'] },
    { title: 'Exam Tips & Strategy', url: 'resources.html#tips', cat: 'Resource', tags: ['exam','tips','strategy','marking scheme','command terms'] },
    { title: 'Past Papers', url: 'resources.html#papers', cat: 'Resource', tags: ['past papers','IB','May','November','markscheme'] },
    { title: 'Video Resources', url: 'resources.html#videos', cat: 'Resource', tags: ['videos','YouTube','revision','explanation'] },
    { title: 'Practice Quiz', url: 'practice.html', cat: 'Practice', tags: ['quiz','multiple choice','self-marking','practice questions'] },
  ];

  /* ---- NAV HTML ---- */
  const NAV_HTML = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner container-wide">

    <a href="index.html" class="nav-logo" aria-label="φQ Physics Home">
      <span class="nav-logo-symbol">φ</span><span class="nav-logo-q">Q</span>
      <span class="nav-logo-text">Physics</span>
    </a>

    <div class="nav-links" id="nav-links">
      <a href="index.html"    class="nav-link">Home</a>
      <a href="topics.html"   class="nav-link">Topics</a>
      <a href="lessons.html"  class="nav-link">Lessons</a>
      <a href="ia.html"       class="nav-link">IA Guide</a>
      <a href="practice.html" class="nav-link">Practice</a>
      <a href="resources.html"class="nav-link">Resources</a>
    </div>

    <div class="nav-actions">
      <button class="nav-icon-btn" id="search-toggle" title="Search (press /)" aria-label="Search">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
      <button class="nav-icon-btn" id="theme-toggle" title="Toggle light/dark" aria-label="Toggle theme">
        <span id="theme-icon">🌙</span>
      </button>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

  </div>
</nav>

<div class="search-overlay" id="search-overlay" role="dialog" aria-label="Search">
  <div class="search-container">
    <input type="text" class="search-input" id="search-input"
           placeholder="Search topics, formulas, concepts…" autocomplete="off" spellcheck="false">
    <button class="search-close" id="search-close" aria-label="Close search">✕</button>
    <div id="search-hint" style="color:var(--text-muted);font-size:0.8rem;margin-top:0.5rem;padding-left:0.25rem;">
      Press <kbd style="background:var(--surface3);padding:0.1rem 0.4rem;border-radius:4px;font-size:0.75rem;border:1px solid var(--border-2)">/</kbd> to open · <kbd style="background:var(--surface3);padding:0.1rem 0.4rem;border-radius:4px;font-size:0.75rem;border:1px solid var(--border-2)">Esc</kbd> to close
    </div>
    <div class="search-results" id="search-results"></div>
  </div>
</div>`;

  /* ---- INJECT ---- */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  /* ---- Make nav links work from any folder depth ---- */
  if (BASE) {
    document.querySelectorAll('#site-nav a[href]').forEach(a => {
      const h = a.getAttribute('href');
      if (h && !/^(https?:|mailto:|#|\.\.\/)/.test(h)) a.setAttribute('href', BASE + h);
    });
  }

  /* ---- ACTIVE LINK ---- */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href').replace(BASE, '') === page) l.classList.add('active');
  });

  /* ---- THEME ---- */
  const html = document.documentElement;
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(t) {
    html.dataset.theme = t;
    localStorage.setItem('phyq-theme', t);
    themeIcon.textContent = t === 'light' ? '☀️' : '🌙';
  }
  applyTheme(localStorage.getItem('phyq-theme') || 'dark');
  themeBtn.addEventListener('click', () =>
    applyTheme(html.dataset.theme === 'dark' ? 'light' : 'dark'));

  /* ---- MOBILE MENU ---- */
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }));

  /* ---- SEARCH ---- */
  const overlay   = document.getElementById('search-overlay');
  const input     = document.getElementById('search-input');
  const closeBtn  = document.getElementById('search-close');
  const results   = document.getElementById('search-results');

  function openSearch() { overlay.classList.add('active'); input.focus(); input.select(); }
  function closeSearch(){ overlay.classList.remove('active'); input.value = ''; results.innerHTML = ''; }

  document.getElementById('search-toggle').addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });

  document.addEventListener('keydown', e => {
    if (e.key === '/' && !overlay.classList.contains('active') &&
        !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });

  function catColor(cat) {
    if (cat.includes('HL')) return 'var(--accent2)';
    if (cat === 'IA')       return 'var(--gold)';
    if (cat === 'Resource') return 'var(--green)';
    if (cat === 'Practice') return 'var(--accent3)';
    if (cat === 'Lesson' || cat === 'Lessons') return 'var(--accent2)';
    return 'var(--accent)';
  }

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { results.innerHTML = ''; return; }

    const hits = SEARCH_DATA.filter(d =>
      d.title.toLowerCase().includes(q) ||
      d.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 9);

    if (!hits.length) {
      results.innerHTML = '<div class="search-no-results">No results — try a different keyword</div>';
      return;
    }

    results.innerHTML = hits.map(h => `
      <a href="${BASE + h.url}" class="search-result-item" onclick="document.getElementById('search-overlay').classList.remove('active')">
        <span class="search-result-title">${h.title}</span>
        <span class="search-result-tags">
          <span style="color:${catColor(h.cat)};font-weight:600;font-size:0.72rem">${h.cat}</span>
          &nbsp;·&nbsp;${h.tags.slice(0,4).join(' · ')}
        </span>
      </a>`).join('');
  });

  /* ---- Lesson-level search entries (loads the lesson directory if absent) ---- */
  function indexLessons() {
    if (!window.PHYQ_TOPICS || SEARCH_DATA.some(d => d.cat === 'Lesson')) return;
    window.PHYQ_TOPICS.forEach(t => t.lessons.forEach(l => {
      SEARCH_DATA.push({
        title: l.t,
        url: 'syllabus-content/' + t.folder + '/' + l.f,
        cat: 'Lesson',
        tags: [t.code, t.name, 'lesson']
      });
    }));
  }
  if (window.PHYQ_TOPICS) indexLessons();
  else {
    const s = document.createElement('script');
    s.src = BASE + 'shared/lessons.js';
    s.onload = indexLessons;
    document.head.appendChild(s);
  }

  /* ---- SCROLL SHADOW ---- */
  window.addEventListener('scroll', () => {
    document.getElementById('site-nav').classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

})();
