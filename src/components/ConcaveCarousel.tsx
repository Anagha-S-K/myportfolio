import { useCallback, useEffect, useRef, useState } from 'react';
import type { Interest } from '../content/site';
import { Icon } from './Icons';
import { InterestArt, InterestDialog } from './InterestCard';

const STEP = 0.42; // radians between panels
const VISIBLE = 3.2; // panels each side before they fade out

/** Panels hang on the inside of a curved wall: the centre one faces you, the sides wrap towards you. */
export function ConcaveCarousel({ items, label }: { items: Interest[]; label: string }) {
  const n = items.length;
  const wrapRef = useRef<HTMLDivElement>(null);
  const pos = useRef(0);
  const vel = useRef(0);
  const target = useRef<number | null>(0);
  const drag = useRef<{ x: number; start: number; moved: number; last: number; t: number; card: number | null } | null>(null);
  const interacted = useRef(false);
  const [, setFrame] = useState(0);
  const [radius, setRadius] = useState(520);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<Interest | null>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const wrapIndex = (v: number) => ((Math.round(v) % n) + n) % n;

  useEffect(() => {
    const el = wrapRef.current!;
    // neighbours sit about one panel-width apart along the curve
    const ro = new ResizeObserver(() => {
      const pw = el.querySelector<HTMLElement>('.cc-item')?.offsetWidth ?? 240;
      setRadius((pw * 1.02) / Math.sin(STEP));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // physics loop: inertia, then spring to the nearest panel
  useEffect(() => {
    let raf = 0;
    let drawn = Infinity;
    const tick = () => {
      if (!drag.current) {
        if (Math.abs(vel.current) > 0.002) {
          pos.current += vel.current;
          vel.current *= 0.92;
        } else {
          if (target.current === null) target.current = Math.round(pos.current);
          const d = target.current - pos.current;
          pos.current += reduced ? d : d * 0.14;
          if (Math.abs(d) < 0.0005) pos.current = target.current;
        }
      }
      if (Math.abs(pos.current - drawn) > 1e-4) {
        drawn = pos.current;
        setIndex(wrapIndex(pos.current));
        setFrame(f => (f + 1) % 1e6);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n, reduced]);

  // gentle autoplay until someone touches it
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      const el = wrapRef.current;
      if (interacted.current || open || !el || el.matches(':hover, :focus-within')) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      target.current = Math.round(pos.current) + 1;
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduced, open]);

  const go = useCallback((delta: number) => {
    interacted.current = true;
    vel.current = 0;
    target.current = Math.round(pos.current) + delta;
  }, []);

  const panelWidth = () => (wrapRef.current?.querySelector<HTMLElement>('.cc-item')?.offsetWidth ?? 240) * 1.05;

  const onDown = (e: React.PointerEvent) => {
    if (e.button > 0) return;
    interacted.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    const card = (e.target as Element).closest<HTMLElement>('.cc-item')?.dataset.i;
    drag.current = { x: e.clientX, start: pos.current, moved: 0, last: e.clientX, t: performance.now(), card: card === undefined ? null : Number(card) };
    vel.current = 0;
    target.current = null;
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    const now = performance.now();
    const dx = e.clientX - d.last;
    d.moved += Math.abs(dx);
    pos.current = d.start - (e.clientX - d.x) / panelWidth();
    vel.current = (-dx / panelWidth()) * (16 / Math.max(1, now - d.t));
    d.last = e.clientX;
    d.t = now;
  };
  const onUp = () => {
    const d = drag.current;
    if (!d) return;
    drag.current = null;
    // a tap (not a drag): open the front card, or bring a side card to the front
    if (d.moved < 6 && d.card !== null) {
      vel.current = 0;
      pos.current = d.start;
      if (d.card === index) { target.current = Math.round(pos.current); setOpen(items[d.card]); }
      else {
        let rel = d.card - Math.round(pos.current);
        rel = ((((rel + n / 2) % n) + n) % n) - n / 2;
        target.current = Math.round(pos.current) + Math.round(rel);
      }
      return;
    }
    vel.current = Math.max(-0.35, Math.min(0.35, vel.current));
    target.current = null;
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(items[index]); }
  };
  const close = () => { setOpen(null); wrapRef.current?.focus({ preventScroll: true }); };

  return (
    <div>
      <div
        className="cc"
        ref={wrapRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={`${label}. Use the arrow keys to turn, Enter to open.`}
        tabIndex={0}
        onKeyDown={onKey}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <div className="cc-stage">
          {items.map((item, i) => {
            let rel = i - pos.current;
            rel = ((((rel + n / 2) % n) + n) % n) - n / 2;
            const a = rel * STEP;
            const hidden = Math.abs(rel) > VISIBLE;
            const x = Math.sin(a) * radius;
            const z = (1 - Math.cos(a)) * radius * 0.55;
            const opacity = hidden ? 0 : Math.max(0, 1 - Math.max(0, Math.abs(rel) - 1.4) / (VISIBLE - 1.4));
            return (
              <article
                key={item.id}
                data-i={i}
                className={`cc-item ${i === index ? 'is-front' : ''}`}
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}: ${item.title}`}
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) rotateY(${-a}rad)`,
                  opacity,
                  zIndex: 100 - Math.round(Math.abs(rel) * 10),
                  visibility: hidden ? 'hidden' : 'visible',
                  filter: `brightness(${1 - Math.min(0.25, Math.abs(rel) * 0.08)})`
                }}
              >
                <div className="art">
                  {item.art ? <InterestArt kind={item.art} /> : item.images && <img src={item.images[0].src} alt="" draggable={false} loading="lazy" decoding="async" />}
                  {item.images && item.images.length > 1 && <span className="cc-count">{item.images.length} pictures</span>}
                </div>
                <div className="cap"><b>{item.title}</b><span>{item.line}</span><em className="cc-open">Tap to open <Icon name="arrow" /></em></div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="cc-ctrl">
        <button type="button" onClick={() => go(-1)} aria-label="Previous"><Icon name="left" /></button>
        <span className="count" aria-live="polite">{index + 1} / {n}</span>
        <button type="button" onClick={() => go(1)} aria-label="Next"><Icon name="right" /></button>
      </div>
      <InterestDialog item={open} onClose={close} />
    </div>
  );
}
