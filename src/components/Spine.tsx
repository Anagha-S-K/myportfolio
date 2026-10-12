import { useEffect, useRef, useState } from 'react';
import { stations as homeStations } from '../content/site';

export type Station = { id: string; label: string };

const MIN_GAP = 30; // px between stops so labels never collide

/**
 * The route line. Stops sit where their sections sit in the page, and the fill
 * grows with the scroll position, so the line reads like the browser scroll bar.
 */
export function Spine({ stations = homeStations }: { stations?: readonly Station[] }) {
  const navRef = useRef<HTMLElement>(null);
  const olRef = useRef<HTMLOListElement>(null);
  const [stops, setStops] = useState<number[]>(() => stations.map((_, i) => i * 60));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nav = navRef.current!;
    const ol = olRef.current!;
    // scroll positions at which each section is reached, and the stop y for each
    let at: number[] = [];
    let ys: number[] = [];
    let frame = 0;

    const layout = () => {
      const probe = window.innerHeight * 0.4;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const H = ol.clientHeight;
      at = stations.map((s, i) => {
        const el = document.getElementById(s.id);
        if (i === 0 || !el) return 0;
        return Math.min(maxScroll, Math.max(0, el.getBoundingClientRect().top + window.scrollY - probe));
      });
      at[at.length - 1] = maxScroll;
      ys = at.map(a => (a / maxScroll) * H);
      for (let i = 1; i < ys.length; i++) ys[i] = Math.max(ys[i], ys[i - 1] + MIN_GAP);
      ys[ys.length - 1] = H;
      for (let i = ys.length - 2; i >= 0; i--) ys[i] = Math.min(ys[i], ys[i + 1] - MIN_GAP);
      ys[0] = Math.max(0, ys[0]);
      setStops([...ys]);
      move();
    };

    // rider follows scroll, piecewise-linear between the stops it has to pass
    const move = () => {
      frame = 0;
      if (!ys.length) return;
      const sy = window.scrollY;
      let i = 0;
      while (i < at.length - 1 && sy >= at[i + 1]) i++;
      let y = ys[i];
      if (i < at.length - 1) {
        const span = at[i + 1] - at[i];
        const t = span > 0 ? Math.min(1, Math.max(0, (sy - at[i]) / span)) : 0;
        y = ys[i] + (ys[i + 1] - ys[i]) * t;
      }
      nav.style.setProperty('--ry', `${ol.offsetTop + y}px`);
      setActive(i);
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(move); };
    const ro = new ResizeObserver(() => layout());
    ro.observe(document.body);
    ro.observe(ol);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', layout);
    layout();
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', layout);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className="spine" aria-label="Sections" ref={navRef}>
      <span className="track" aria-hidden="true" />
      <span className="fill" aria-hidden="true" />
      <span className="rider" aria-hidden="true" />
      <ol ref={olRef}>
        {stations.map((s, i) => (
          <li
            key={s.id}
            className={`${i === active ? 'active' : ''} ${i <= active ? 'passed' : ''}`}
            style={{ '--y': `${stops[i]}px` } as React.CSSProperties}
          >
            <a href={`#${s.id}`} aria-current={i === active ? 'location' : undefined}>
              <span className="dot" aria-hidden="true" />
              <span>{s.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
