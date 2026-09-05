/* φQ lesson quiz engine — shared by every lesson page.
   A lesson snippet supplies only its data:
     lcInit({ feedback:{ mcq1:{C:'why C is right'}, ... }, fitb:{ lf1:'velocity', ... } });
   Markup contract: onclick="lcMCQ('mcq1',this,'A','C')", a .lc-fb with id "<id>-fb",
   <button onclick="lcFITB()">, <button onclick="lcToggleModel(this)"> before a .lc-model,
   and a score element with id "lc-score-display". */
(function () {
  var score = 0, answered = {}, feedback = {}, fitbAnswers = {};
  function el(id) { return document.getElementById(id); }
  function bumpScore(n) {
    score += n;
    var d = el('lc-score-display');
    if (d) d.textContent = score;
  }

  window.lcInit = function (cfg) {
    cfg = cfg || {};
    feedback = cfg.feedback || {};
    fitbAnswers = cfg.fitb || {};
  };

  window.lcMCQ = function (id, opt, chosen, correct) {
    if (answered[id]) return;
    answered[id] = true;
    var block = el(id), fb = el(id + '-fb');
    var why = (feedback[id] && feedback[id][correct]) || '';
    block.querySelectorAll('.lc-opt').forEach(function (o) { o.classList.add('disabled'); });
    if (chosen === correct) {
      opt.classList.add('correct');
      fb.textContent = '✓ ' + why;
      fb.className = 'lc-fb show correct';
      bumpScore(2);
    } else {
      opt.classList.add('wrong');
      block.querySelectorAll('.lc-opt').forEach(function (o) {
        if (o.querySelector('.lc-opt-l').textContent === correct) o.classList.add('correct');
      });
      fb.textContent = '✗ Incorrect. Correct: ' + correct + '. ' + why;
      fb.className = 'lc-fb show wrong';
    }
  };

  window.lcFITB = function () {
    var ids = Object.keys(fitbAnswers), right = 0;
    var res = el('lc-fitb-result');
    if (!ids.length) {
      if (res) { res.style.display = 'block'; res.style.color = 'var(--red)'; res.textContent = 'Answer key not loaded — reload the page.'; }
      return;
    }
    ids.forEach(function (id) {
      var input = el(id);
      if (!input) return;
      var val = input.value.trim().toLowerCase(), want = fitbAnswers[id].toLowerCase();
      var ok = val === want || (val.length > 2 && val.indexOf(want) !== -1);
      input.classList.toggle('correct', ok);
      input.classList.toggle('wrong', !ok);
      if (ok) right++;
    });
    if (!res) return;
    res.style.display = 'block';
    if (right === ids.length) {
      res.style.color = 'var(--green)';
      res.textContent = '✓ All correct! (+2 pts)';
      bumpScore(2);
    } else {
      res.style.color = 'var(--red)';
      res.textContent = right + '/' + ids.length + ' correct. Answers: ' +
        ids.map(function (i) { return fitbAnswers[i]; }).join(' · ');
    }
  };

  window.lcToggleModel = function (btn) {
    var model = btn.nextElementSibling;
    model.classList.toggle('show');
    btn.textContent = model.classList.contains('show') ? 'Hide model answer' : 'Show model answer';
  };
})();
