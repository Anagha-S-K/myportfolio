import { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

const systemDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
const read = (): Theme => {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return systemDark() ? 'dark' : 'light';
};

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => { if (!document.documentElement.dataset.theme) setTheme(read()); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  /** switch theme; the new one spreads out in a circle from `origin` (the switch) */
  const toggle = useCallback((origin?: HTMLElement | null) => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch { /* storage blocked: theme still applies for this visit */ }
      flushSync(() => setTheme(next));
    };

    const doc = document as ViewTransitionDoc;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!doc.startViewTransition || reduced) { apply(); return; }
    if (document.documentElement.classList.contains('theme-switching')) return;

    const r = origin?.getBoundingClientRect();
    const x = r ? r.left + r.width / 2 : window.innerWidth - 40;
    const y = r ? r.top + r.height / 2 : 30;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    // the new theme washes out from the button
    document.documentElement.classList.add('theme-switching');
    const done = () => document.documentElement.classList.remove('theme-switching');
    const t = doc.startViewTransition!(apply);
    t.ready.then(() => {
      const anim = document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.65, 0, .35, 1)', pseudoElement: '::view-transition-new(root)' }
      );
      anim.finished.finally(done);
    }).catch(done);
  }, []);

  return { theme, toggle };
}
