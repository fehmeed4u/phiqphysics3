(function(){
const slides=[...document.querySelectorAll('.slide')];
const KEY='fq-deck-'+(document.body.dataset.deck||location.pathname);
const steps=slides.map(s=>{const m=[...s.querySelectorAll('[data-step]')].reduce((a,e)=>Math.max(a,+e.dataset.step||0),0);return m});
let i=0,k=0;
const hud=document.createElement('div');hud.id='hud';document.body.appendChild(hud);
function fit(){const de=document.documentElement,bd=document.body;const w=innerWidth||de.clientWidth||(bd&&bd.clientWidth)||0,h=innerHeight||de.clientHeight||(bd&&bd.clientHeight)||0;let sc=Math.min(w/1920,h/1080);if(!sc||!isFinite(sc)){setTimeout(fit,100);requestAnimationFrame(fit);sc=Math.max(Math.min(w/1920||1,h/1080||1),0.1)}de.style.setProperty('--sc',Math.max(sc,0.1))}
function paint(){slides.forEach((s,n)=>{s.style.display=n===i?'flex':'none';});const s=slides[i];
 s.querySelectorAll('[data-step]').forEach(e=>e.classList.toggle('on',(+e.dataset.step)<=k));
 const ro=s.querySelector('.opt.right');s.classList.toggle('show-answer',!!ro&&k>(+ro.dataset.step||0));
 s.querySelectorAll('[data-step]').forEach(e=>{const d=(+e.dataset.step)===k?[...s.querySelectorAll('[data-step="'+k+'"]')].indexOf(e)*60:0;e.style.transitionDelay=d+'ms'});
 hud.innerHTML='<span>'+(i+1)+' / '+slides.length+'</span><span class="dots">'+Array.from({length:steps[i]},(_,n)=>'<i class="'+(n<k?'on':'')+'"></i>').join('')+'</span>';
 try{localStorage.setItem(KEY,i+':'+k)}catch(e){}
}
function next(){if(k<steps[i]){k++}else if(i<slides.length-1){i++;k=0}paint()}
function prev(){if(k>0){k--}else if(i>0){i--;k=steps[i]}paint()}
function go(n){i=Math.max(0,Math.min(slides.length-1,n));k=0;paint()}
document.addEventListener('keydown',e=>{
 if(e.key==='ArrowRight'||e.key===' '||e.key==='PageDown'){e.preventDefault();next()}
 else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev()}
 else if(e.key==='Home')go(0);else if(e.key==='End')go(slides.length-1);
 else if(e.key==='a'||e.key==='A'){k=steps[i];paint()}
 else if(/^[0-9]$/.test(e.key)){go(+e.key===0?9:+e.key-1)}});
document.addEventListener('click',e=>{if(e.target.closest('#hud'))return;next()});
try{const v=(localStorage.getItem(KEY)||'').split(':');if(v.length===2){i=Math.min(slides.length-1,+v[0]||0);k=Math.min(steps[i],+v[1]||0)}}catch(e){}
window.goTo=go;paint();addEventListener('resize',fit);addEventListener('load',fit);if(window.ResizeObserver){const ro=new ResizeObserver(fit);ro.observe(document.documentElement);if(document.body)ro.observe(document.body)}setTimeout(fit,150);fit();
})();
