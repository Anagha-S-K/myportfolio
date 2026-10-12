import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons';

type Mode = 'intro' | 'playing' | 'paused' | 'done';
interface Result { coins: number; total: number; bugs: number; seconds: number; points: number; best: number; newBest: boolean }
interface Engine { start: () => void; press: (k: Key, on: boolean) => void }
type Key = 'left' | 'right' | 'jump';

const H = 360;
const G = 0.55;
const WORLD = 3460;
const FLAG = 3330;
const SOLIDS = [
  [0, 316, 720, 44], [800, 316, 520, 44], [1400, 316, 620, 44], [2100, 316, 520, 44], [2700, 316, 760, 44],
  [280, 236, 120, 14], [500, 186, 120, 14], [900, 226, 140, 14], [1110, 166, 120, 14], [1500, 236, 120, 14],
  [1700, 176, 160, 14], [2160, 226, 120, 14], [2360, 166, 140, 14], [2780, 226, 140, 14], [3000, 170, 120, 14]
].map(([x, y, w, h]) => ({ x, y, w, h }));
const COIN_SPOTS = [[150, 280], [200, 280], [340, 200], [560, 150], [600, 150], [760, 240], [960, 190], [1000, 190], [1170, 130], [1350, 250], [1560, 200],
  [1740, 140], [1800, 140], [2060, 250], [2210, 190], [2420, 130], [2470, 130], [2660, 250], [2840, 190], [3060, 134], [3200, 280]];
const BUG_SPOTS = [[420, 690], [1000, 1290], [1480, 1980], [2200, 2600], [2850, 3250]];

const readBest = () => { try { return Number(localStorage.getItem('shipit-best')) || 0; } catch { return 0; } };
const saveBest = (n: number) => { try { localStorage.setItem('shipit-best', String(n)); } catch { /* best score just won't persist */ } };
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

export function ShipIt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engine = useRef<Engine | null>(null);
  const [mode, setMode] = useState<Mode>('intro');
  const [hud, setHud] = useState({ coins: 0, total: COIN_SPOTS.length, bugs: 0 });
  const [result, setResult] = useState<Result | null>(null);
  const [touch] = useState(() => window.matchMedia('(pointer: coarse)').matches);
  const modeRef = useRef<Mode>('intro');
  modeRef.current = mode;

  useEffect(() => {
    const cv = canvasRef.current!;
    const cx = cv.getContext('2d')!;
    const keys = { left: false, right: false, jump: false };
    let P = { x: 60, y: 200, w: 22, h: 32, vx: 0, vy: 0, ground: false, coyote: 0, face: 1 };
    let coins: { x: number; y: number; got: boolean }[] = [];
    let bugs: { x: number; y: number; w: number; h: number; min: number; max: number; dir: number; dead: number }[] = [];
    let got = 0, squashed = 0, checkpoint = 60, cam = 0, frame = 0, jumpHeld = false, raf = 0, startedAt = 0;
    let scale = 1, VW = 960, dpr = 1;
    let C = { sky: '', far: '', ink: '', surf: '', mag: '', magInk: '', coin: '' };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      const v = (n: string) => s.getPropertyValue(n).trim();
      C = { sky: v('--ground-2'), far: v('--line-soft'), ink: v('--ink'), surf: v('--surface'), mag: v('--magenta'), magInk: v('--magenta-ink'), coin: v('--sky') };
    };
    const resize = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      scale = r.height / H;
      VW = r.width / scale;
      draw();
    };
    const reset = (full: boolean) => {
      if (full) {
        coins = COIN_SPOTS.map(([x, y]) => ({ x, y, got: false }));
        bugs = BUG_SPOTS.map(([a, b]) => ({ x: a + 20, y: 300, w: 28, h: 16, min: a, max: b, dir: 1, dead: 0 }));
        got = 0; squashed = 0; checkpoint = 60;
        setHud({ coins: 0, total: coins.length, bugs: 0 });
      }
      P = { x: checkpoint, y: 200, w: 22, h: 32, vx: 0, vy: 0, ground: false, coyote: 0, face: 1 };
      cam = Math.max(0, P.x - VW * 0.35);
    };
    const hit = (a: { x: number; y: number; w: number; h: number }, b: { x: number; y: number; w: number; h: number }) =>
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

    const finish = () => {
      stop();
      const seconds = (performance.now() - startedAt) / 1000;
      const points = got * 10 + squashed * 25 + Math.max(0, Math.round((120 - seconds) * 3));
      const prev = readBest();
      const best = Math.max(prev, points);
      if (points > prev) saveBest(points);
      setResult({ coins: got, total: coins.length, bugs: squashed, seconds, points, best, newBest: points > prev && prev > 0 });
      setMode('done');
    };

    const step = () => {
      frame++;
      const ax = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
      if (ax) { P.vx += ax * 0.7; P.face = ax; } else P.vx *= 0.78;
      P.vx = Math.max(-4.6, Math.min(4.6, P.vx));
      P.coyote = P.ground ? 6 : P.coyote - 1;
      if (keys.jump && !jumpHeld && P.coyote > 0) { P.vy = -11; P.coyote = 0; jumpHeld = true; }
      if (!keys.jump) { jumpHeld = false; if (P.vy < -4) P.vy = -4; }
      P.vy = Math.min(P.vy + G, 13);
      P.x += P.vx;
      for (const s of SOLIDS) if (hit(P, s)) { P.x = P.vx > 0 ? s.x - P.w : s.x + s.w; P.vx = 0; }
      P.x = Math.max(0, Math.min(WORLD - P.w, P.x));
      P.y += P.vy; P.ground = false;
      for (const s of SOLIDS) if (hit(P, s)) { if (P.vy > 0) { P.y = s.y - P.h; P.ground = true; } else P.y = s.y + s.h; P.vy = 0; }
      for (const s of SOLIDS) if (s.h > 20 && P.ground && P.x > s.x && P.x < s.x + 200 && s.x > checkpoint) checkpoint = s.x + 20;
      if (P.y > H + 60) reset(false);
      for (const c of coins) if (!c.got && Math.abs(P.x + P.w / 2 - c.x) < 18 && Math.abs(P.y + P.h / 2 - c.y) < 22) {
        c.got = true; got++; setHud(h => ({ ...h, coins: got }));
      }
      for (const b of bugs) {
        if (b.dead) { b.dead++; continue; }
        b.x += b.dir * 1.1;
        if (b.x < b.min || b.x + b.w > b.max) b.dir *= -1;
        if (hit(P, b)) {
          if (P.vy > 0 && P.y + P.h - P.vy <= b.y + 8) { b.dead = 1; P.vy = -8; squashed++; setHud(h => ({ ...h, bugs: squashed })); }
          else reset(false);
        }
      }
      cam += (Math.max(0, Math.min(WORLD - VW, P.x - VW * 0.35)) - cam) * 0.12;
      if (P.x > FLAG - 10) finish();
    };

    function draw() {
      if (!C.sky || frame % 30 === 0) readColors();
      cx.setTransform(dpr * scale, 0, 0, dpr * scale, 0, 0);
      cx.fillStyle = C.sky; cx.fillRect(0, 0, VW, H);
      cx.fillStyle = C.far;
      for (let i = 0; i < 60; i++) { const bx = i * 110 - ((cam * 0.3) % 110) - 20, bh = 60 + ((i * 53) % 90); if (bx < VW) cx.fillRect(bx, 316 - bh, 80, bh); }
      cx.save(); cx.translate(-Math.round(cam), 0);
      for (const s of SOLIDS) {
        cx.fillStyle = C.surf; cx.fillRect(s.x, s.y, s.w, s.h);
        cx.fillStyle = C.mag; cx.fillRect(s.x, s.y, s.w, 5);
        if (s.h > 20) { cx.fillStyle = C.far; for (let x = s.x + 14; x < s.x + s.w - 6; x += 40) cx.fillRect(x, s.y + 18, 18, 4); }
      }
      for (const c of coins) if (!c.got) {
        const sq = Math.abs(Math.cos((frame + c.x) * 0.06));
        const y = c.y + Math.sin((frame + c.x) * 0.08) * 3;
        cx.fillStyle = C.coin; cx.beginPath(); cx.ellipse(c.x, y, 8 * sq + 1.5, 9, 0, 0, Math.PI * 2); cx.fill();
        cx.fillStyle = C.surf; cx.fillRect(c.x - 1, y - 4, 2, 8);
      }
      for (const b of bugs) {
        if (b.dead > 30) continue;
        cx.save(); cx.translate(b.x + b.w / 2, b.y + b.h); if (b.dead) cx.scale(1.2, 0.35);
        cx.strokeStyle = C.ink; cx.lineWidth = 2;
        for (let l = -1; l <= 1; l++) { const k = Math.sin(frame * 0.4 + l) * 2; cx.beginPath(); cx.moveTo(l * 7, -6); cx.lineTo(l * 9 + k, 0); cx.stroke(); }
        cx.fillStyle = C.ink; cx.beginPath(); cx.ellipse(0, -9, 14, 9, 0, Math.PI, 0); cx.fill(); cx.fillRect(-14, -9, 28, 3);
        cx.fillStyle = C.surf; cx.beginPath(); cx.arc(b.dir * 8, -11, 3, 0, 7); cx.fill();
        cx.restore();
      }
      cx.fillStyle = C.ink; cx.fillRect(FLAG, 150, 5, 166);
      cx.fillStyle = C.mag; cx.beginPath(); cx.moveTo(FLAG + 5, 154); cx.lineTo(FLAG + 86, 170); cx.lineTo(FLAG + 5, 190); cx.fill();
      cx.fillStyle = C.magInk; cx.font = '700 13px "Hanken Grotesk Variable", sans-serif'; cx.fillText('DEPLOY', FLAG + 12, 177);
      // the player: a little engineer in a magenta hoodie with a badge
      const run = P.ground && Math.abs(P.vx) > 0.4 ? Math.sin(frame * 0.35) : 0;
      cx.save(); cx.translate(P.x + P.w / 2, P.y); cx.scale(P.face, 1);
      cx.strokeStyle = C.ink; cx.lineWidth = 4; cx.lineCap = 'round';
      cx.beginPath(); cx.moveTo(-4, 24); cx.lineTo(-4 + run * 5, 32); cx.moveTo(4, 24); cx.lineTo(4 - run * 5, 32); cx.stroke();
      cx.fillStyle = C.mag; cx.beginPath(); cx.roundRect(-10, 11, 20, 15, 6); cx.fill();
      cx.strokeStyle = C.surf; cx.lineWidth = 1.5; cx.beginPath(); cx.moveTo(-4, 12); cx.lineTo(0, 19); cx.lineTo(4, 12); cx.stroke();
      cx.fillStyle = C.surf; cx.fillRect(-2.5, 18, 5, 6);
      cx.fillStyle = '#E6B48F'; cx.beginPath(); cx.arc(0, 4, 8, 0, 7); cx.fill();
      cx.fillStyle = '#2B1A14'; cx.beginPath(); cx.arc(0, 2, 8.5, Math.PI * 1.05, Math.PI * 2.05); cx.fill();
      cx.beginPath(); cx.arc(-7, -2, 4.5, 0, 7); cx.fill();
      cx.beginPath(); cx.arc(4, 5, 1.3, 0, 7); cx.fill();
      cx.restore();
      cx.restore();
    }

    const loop = () => { if (modeRef.current !== 'playing') return; step(); draw(); raf = requestAnimationFrame(loop); };
    const stop = () => { cancelAnimationFrame(raf); keys.left = keys.right = keys.jump = false; };

    engine.current = {
      start: () => {
        reset(true);
        startedAt = performance.now();
        modeRef.current = 'playing';
        setMode('playing');
        setResult(null);
        cv.focus({ preventScroll: true });
        if (window.matchMedia('(pointer: coarse)').matches) cv.closest('section')?.querySelector('.controls')?.scrollIntoView({ block: 'end', behavior: 'smooth' });
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      },
      press: (k, on) => { keys[k] = on; }
    };

    const map: Record<string, Key> = { ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right', Space: 'jump', ArrowUp: 'jump', KeyW: 'jump' };
    const kd = (e: KeyboardEvent) => { if (modeRef.current !== 'playing' || !map[e.code]) return; e.preventDefault(); keys[map[e.code]] = true; };
    const ku = (e: KeyboardEvent) => { if (map[e.code]) keys[map[e.code]] = false; };
    const offscreen = () => { const r = cv.getBoundingClientRect(); return r.bottom < 0 || r.top > window.innerHeight; };
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting && modeRef.current === 'playing' && offscreen()) { stop(); modeRef.current = 'paused'; setMode('paused'); }
    });
    const ro = new ResizeObserver(resize);
    const mo = new MutationObserver(() => { readColors(); draw(); });

    window.addEventListener('keydown', kd);
    window.addEventListener('keyup', ku);
    io.observe(cv);
    ro.observe(cv);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    reset(true);
    resize();
    return () => {
      stop();
      window.removeEventListener('keydown', kd);
      window.removeEventListener('keyup', ku);
      io.disconnect(); ro.disconnect(); mo.disconnect();
    };
  }, []);

  const pad = (k: Key) => ({
    onPointerDown: (e: React.PointerEvent) => { e.preventDefault(); engine.current?.press(k, true); },
    onPointerUp: () => engine.current?.press(k, false),
    onPointerLeave: () => engine.current?.press(k, false),
    onPointerCancel: () => engine.current?.press(k, false)
  });

  return (
    <section className="block tight" id="play" aria-labelledby="play-title">
      <div className="head"><h2 id="play-title">Ship it!</h2><p>Collect the coins, stomp the bugs, reach the deploy flag.</p></div>
      <div className={`game-wrap ${mode === 'done' ? 'done' : ''}`}>
        <canvas ref={canvasRef} tabIndex={-1} aria-label="Ship it! platformer. Arrow keys or A and D to move, Space to jump." />
        <div className="hud" aria-hidden="true">
          <span><span className="coin-ico" /><b>{hud.coins}</b>&nbsp;/ {hud.total}</span>
          <span><span className="long">Bugs squashed:</span><span className="short">Bugs</span> {hud.bugs}</span>
        </div>
        {mode !== 'playing' && (
          <div className="overlay">
            {mode === 'done' && result ? (
              <div className="box">
                <div className="ticket" role="status">
                  <div className="ticket-top">
                    <h3>{result.coins === result.total ? 'Shipped, with every coin!' : 'Shipped to production!'}</h3>
                  </div>
                  <dl>
                    <dt>Coins</dt><dd>{result.coins} / {result.total}</dd>
                    <dt>Bugs squashed</dt><dd>{result.bugs}</dd>
                    <dt>Time</dt><dd>{fmt(result.seconds)}</dd>
                    <dt>Best</dt><dd>{result.best}</dd>
                  </dl>
                  <div className="tear"><i /></div>
                  <div className="ticket-score">
                    <span>Points</span>
                    <p><b>{result.points}</b>{result.newBest && <em>New best</em>}</p>
                  </div>
                </div>
                <div className="ticket-actions">
                  <button className="btn btn-go" type="button" onClick={() => engine.current?.start()}>Play again</button>
                  <a className="btn btn-quiet" href="#contact">Say hello</a>
                </div>
              </div>
            ) : (
              <div className="box">
                <h3>{mode === 'paused' ? 'Paused' : 'Help me ship to production'}</h3>
                <p>{mode === 'paused' ? 'Your run is waiting.' : 'Run, jump, grab every coin and stomp the bugs on the way to the deploy flag.'}</p>
                <button className="btn btn-go" type="button" onClick={() => engine.current?.start()}>{mode === 'paused' ? 'Start over' : 'Start game'}</button>
                {!touch && <p className="keys"><kbd>←</kbd><kbd>→</kbd> move <kbd>Space</kbd> jump</p>}
              </div>
            )}
          </div>
        )}
      </div>
      {touch && (
        <div className={`controls ${mode === 'playing' ? '' : 'idle'}`} aria-hidden={mode !== 'playing'}>
          <div>
            <button type="button" aria-label="Move left" tabIndex={-1} {...pad('left')}><Icon name="left" /></button>
            <button type="button" aria-label="Move right" tabIndex={-1} {...pad('right')}><Icon name="right" /></button>
          </div>
          <button type="button" className="jump" aria-label="Jump" tabIndex={-1} {...pad('jump')}><Icon name="up" />Jump</button>
        </div>
      )}
    </section>
  );
}
