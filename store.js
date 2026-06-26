/* =========================================================
   ToonLab — Shared Save System  (ToonStore)
   • autosave each tool's work to localStorage so it does NOT
     disappear when you visit another tool
   • download a project to a .toon file (just JSON)
   • open a .toon file back up
   • a little "Saved ✓" pill that lives in the top nav
   No account, no server — everything stays on this device.
   ========================================================= */
(function(){
  const PREFIX = 'toonlab-save-';
  const VERSION = 1;

  /* ---------- low level ---------- */
  function save(key, data){
    try{
      localStorage.setItem(PREFIX + key, JSON.stringify({ v:VERSION, t:Date.now(), data }));
      flash('Saved');
      return true;
    }catch(e){
      // most likely the drawing was too big for localStorage
      flash('Storage full — download to keep it', true);
      return false;
    }
  }
  function load(key){
    try{
      const raw = localStorage.getItem(PREFIX + key);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && 'data' in parsed ? parsed.data : null;
    }catch(e){ return null; }
  }
  function clear(key){
    localStorage.removeItem(PREFIX + key);
  }
  function savedAt(key){
    try{
      const raw = localStorage.getItem(PREFIX + key);
      if (!raw) return null;
      return JSON.parse(raw).t || null;
    }catch(e){ return null; }
  }

  /* ---------- debounced autosave ---------- */
  const timers = {};
  function autosave(key, getData, ms=600){
    clearTimeout(timers[key]);
    timers[key] = setTimeout(()=> save(key, getData()), ms);
  }

  /* ---------- project file download / open ---------- */
  function download(filename, obj){
    const payload = { app:'ToonLab', kind:obj.kind || 'project', v:VERSION, saved:new Date().toISOString(), data:obj.data ?? obj };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (filename || 'my-toonlab').replace(/[^\w\-]+/g,'_') + '.toon';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 1000);
    flash('Downloaded ✓');
  }
  function open(cb){
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.toon,application/json';
    inp.onchange = ()=>{
      const f = inp.files && inp.files[0];
      if (!f) return;
      const r = new FileReader();
      r.onload = ()=>{
        try{
          const parsed = JSON.parse(r.result);
          cb(parsed.data !== undefined ? parsed.data : parsed, parsed);
        }catch(e){
          flash('That file could not be opened', true);
        }
      };
      r.readAsText(f);
    };
    inp.click();
  }

  /* ---------- tiny "Saved" pill in the nav ---------- */
  let pill = null;
  function ensurePill(){
    if (pill) return pill;
    const nav = document.querySelector('.nav .nav-links');
    pill = document.createElement('span');
    pill.className = 'save-pill';
    pill.setAttribute('aria-live','polite');
    if (nav) nav.appendChild(pill); else document.body.appendChild(pill);
    return pill;
  }
  let pillT = null;
  function flash(msg, warn=false){
    const p = ensurePill();
    p.textContent = (warn ? '⚠ ' : '💾 ') + msg;
    p.classList.toggle('warn', warn);
    p.classList.add('show');
    clearTimeout(pillT);
    pillT = setTimeout(()=> p.classList.remove('show'), warn ? 3200 : 1500);
  }

  /* ---------- helper: build a Save/Open toolbar block ----------
     Drop a <div data-toonbar="key" data-name="My Thing"></div> into a
     panel and call ToonStore.toolbar(el, {download, restore}). It wires
     up Download + Open buttons. Autosave still happens separately. */
  function toolbar(host, opts){
    host.classList.add('save-row');
    host.innerHTML = `
      <button class="btn small blue" data-act="download">⬇ Download my work</button>
      <button class="btn small ghost" data-act="open">📂 Open a file</button>`;
    host.querySelector('[data-act="download"]').onclick = ()=>{
      opts.download && opts.download();
    };
    host.querySelector('[data-act="open"]').onclick = ()=>{
      open((data, meta)=> opts.restore && opts.restore(data, meta));
    };
  }

  window.ToonStore = { save, load, clear, savedAt, autosave, download, open, flash, toolbar, VERSION };
})();
