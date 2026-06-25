/* =========================================================
   ToonLab — Shared Fun Effects
   • confetti burst
   • cursor sparkles
   • Web-Audio synth sound effects (no audio files needed)
   • achievement toasts
   • wiring for [data-sound] and [data-confetti] buttons
   ========================================================= */
(function(){
  // ---- canvas overlay ----
  const cvs = document.createElement('canvas');
  cvs.id = 'fx-canvas';
  document.body.appendChild(cvs);
  const ctx = cvs.getContext('2d');
  function size(){ cvs.width = innerWidth; cvs.height = innerHeight; }
  size(); addEventListener('resize', size);

  const particles = [];
  const COLORS = ['#ec4899','#7c3aed','#06b6d4','#84cc16','#fbbf24','#fb923c','#ff7ad9','#34d399'];

  function spawn(x, y, opts={}){
    const n = opts.count || 1;
    const kind = opts.kind || 'sparkle';
    for (let i=0;i<n;i++){
      const ang = (opts.spread !== false) ? Math.random()*Math.PI*2 : -Math.PI/2 + (Math.random()-.5)*0.6;
      const sp = (opts.speed || 4) * (0.5 + Math.random());
      particles.push({
        x, y,
        vx: Math.cos(ang)*sp,
        vy: Math.sin(ang)*sp - (opts.upward ? 4 : 0),
        g: opts.gravity ?? 0.15,
        life: opts.life || 60,
        max: opts.life || 60,
        size: opts.size || (4 + Math.random()*4),
        color: opts.color || COLORS[Math.floor(Math.random()*COLORS.length)],
        kind,
        rot: Math.random()*Math.PI*2,
        vr: (Math.random()-.5)*.3,
      });
    }
  }

  function tick(){
    ctx.clearRect(0,0,cvs.width,cvs.height);
    for (let i=particles.length-1; i>=0; i--){
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.vy += p.g; p.life--; p.rot += p.vr;
      const a = Math.max(0, p.life/p.max);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = a;
      if (p.kind === 'confetti'){
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size, -p.size*0.4, p.size*2, p.size*0.8);
      } else if (p.kind === 'star'){
        drawStar(0,0,5,p.size,p.size/2, p.color);
      } else { // sparkle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(0,0,p.size,0,Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-p.size*2,0); ctx.lineTo(p.size*2,0);
        ctx.moveTo(0,-p.size*2); ctx.lineTo(0,p.size*2);
        ctx.stroke();
      }
      ctx.restore();
      if (p.life <= 0) particles.splice(i,1);
    }
    requestAnimationFrame(tick);
  }
  function drawStar(cx,cy,spikes,outer,inner,color){
    let rot=Math.PI/2*3, x=cx, y=cy, step=Math.PI/spikes;
    ctx.beginPath(); ctx.moveTo(cx, cy-outer);
    for(let i=0;i<spikes;i++){
      x = cx+Math.cos(rot)*outer; y = cy+Math.sin(rot)*outer; ctx.lineTo(x,y); rot += step;
      x = cx+Math.cos(rot)*inner; y = cy+Math.sin(rot)*inner; ctx.lineTo(x,y); rot += step;
    }
    ctx.lineTo(cx, cy-outer); ctx.closePath();
    ctx.fillStyle = color; ctx.fill();
  }
  tick();

  // ---- public effects ----
  function confettiBurst(x, y){
    if (x == null){ x = innerWidth/2; y = innerHeight/2; }
    for (let i=0;i<70;i++){
      spawn(x, y, { kind:'confetti', size:6, life:80, speed:7, gravity:0.22 });
    }
    for (let i=0;i<20;i++){
      spawn(x, y, { kind:'star', size:8, life:70, speed:6 });
    }
  }
  function sparkleAt(x, y){
    spawn(x, y, { kind:'sparkle', size:3, life:30, speed:1.2, gravity:-0.02, count:6 });
  }
  function toast(msg, emo='✨'){
    let el = document.querySelector('.toast');
    if (!el){
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.innerHTML = `<span class="emo">${emo}</span> ${msg}`;
    requestAnimationFrame(()=> el.classList.add('show'));
    clearTimeout(el._t);
    el._t = setTimeout(()=> el.classList.remove('show'), 2400);
  }

  // ---- Web Audio synth ----
  let actx = null;
  let muted = localStorage.getItem('toonlab-muted') === '1';
  function ensureCtx(){
    if (!actx){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      actx = new AC();
    }
    if (actx.state === 'suspended') actx.resume();
    return actx;
  }
  function tone(freq, dur=0.12, type='sine', vol=0.18){
    if (muted) return;
    const a = ensureCtx(); if (!a) return;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = 0;
    o.connect(g).connect(a.destination);
    const t0 = a.currentTime;
    g.gain.linearRampToValueAtTime(vol, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
  const sounds = {
    click(){ tone(880, .08, 'triangle', .14); },
    pop  (){ tone(700, .06, 'square',   .12); setTimeout(()=>tone(1100,.06,'square',.12),60); },
    ding (){ tone(987, .10, 'sine', .15); setTimeout(()=>tone(1318,.18,'sine',.16),90); },
    woosh(){
      if (muted) return;
      const a = ensureCtx(); if (!a) return;
      const b = a.createBuffer(1, a.sampleRate*0.4, a.sampleRate);
      const d = b.getChannelData(0);
      for (let i=0;i<d.length;i++) d[i] = (Math.random()*2-1) * (1 - i/d.length) * 0.35;
      const src = a.createBufferSource(); src.buffer = b;
      const f = a.createBiquadFilter(); f.type='bandpass'; f.frequency.value=600; f.Q.value=2;
      const g = a.createGain(); g.gain.value=0.3;
      src.connect(f).connect(g).connect(a.destination);
      src.start();
    },
    fanfare(){
      if (muted) return;
      [523, 659, 784, 1046].forEach((f,i)=> setTimeout(()=> tone(f,.18,'triangle',.16), i*80));
    },
    boop(){ tone(440, .08, 'sine', .14); },
  };

  // ---- sound toggle button (injected into nav) ----
  function injectSoundToggle(){
    const nav = document.querySelector('.nav .nav-links');
    if (!nav) return;
    const b = document.createElement('button');
    b.className = 'sound-toggle';
    b.title = 'Toggle sounds';
    b.textContent = muted ? '🔇' : '🔊';
    b.onclick = ()=>{
      muted = !muted;
      localStorage.setItem('toonlab-muted', muted ? '1' : '0');
      b.textContent = muted ? '🔇' : '🔊';
      if (!muted) sounds.click();
    };
    nav.appendChild(b);
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', injectSoundToggle);
  } else injectSoundToggle();

  // ---- global wiring ----
  // [data-sound="ding"] plays sound on click
  // [data-confetti] fires confetti at the click point
  document.addEventListener('click', (e)=>{
    const t = e.target.closest('[data-sound]');
    if (t){
      const k = t.getAttribute('data-sound');
      (sounds[k] || sounds.click)();
    }
    const c = e.target.closest('[data-confetti]');
    if (c){
      confettiBurst(e.clientX, e.clientY);
    }
    // generic button click sound
    if (!t && e.target.closest('.btn')) sounds.click();
  });

  // sparkle cursor trail (light – throttled)
  let lastSparkle = 0;
  document.addEventListener('mousemove', e=>{
    const now = performance.now();
    if (now - lastSparkle < 70) return;
    lastSparkle = now;
    if (e.target.closest('canvas.stage')) return; // don't interfere with drawing
    spawn(e.clientX, e.clientY, { kind:'sparkle', size:2, life:18, speed:0.4, gravity:0, count:1 });
  }, { passive:true });

  // expose
  window.ToonFX = { confettiBurst, sparkleAt, toast, sounds };
})();
