import { useEffect, useRef, useState } from 'react';
import type { Interest } from '../content/site';
import { Icon } from './Icons';

/**
 * Line drawings for interests without photos: one monoline system (ink strokes, one magenta accent,
 * no fills, no faces) on a 120 grid, so the four covers read as a set.
 */
export function InterestArt({ kind }: { kind: NonNullable<Interest['art']> }) {
  return (
    <svg className="ic-art" viewBox="0 0 120 120" aria-hidden="true" fill="none" stroke="var(--ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      {kind === 'playlist' && (
        <>
          <path d="M28 70v-8a32 32 0 0 1 64 0v8" />
          <rect x="20" y="66" width="15" height="28" rx="7" />
          <rect x="85" y="66" width="15" height="28" rx="7" />
          <path d="M46 80v4M53 74v16M60 70v24M67 74v16M74 80v4" stroke="var(--magenta)" />
        </>
      )}
      {kind === 'jhumka' && (
        <>
          <path d="M60 12c-7 0-9 9-2 11" />
          <circle cx="60" cy="31" r="7" stroke="var(--magenta)" />
          <circle cx="60" cy="31" r="2" />
          <path d="M60 38v8" />
          <path d="M34 82c0-20 11-34 26-34s26 14 26 34z" />
          <path d="M43 70c11-6 23-6 34 0M47 59c8-4 18-4 26 0" />
          <path d="M38 82v5M46 82v6M54 82v7M60 82v7M66 82v7M74 82v6M82 82v5" />
          <circle cx="38" cy="90" r="1.6" /><circle cx="46" cy="91" r="1.6" /><circle cx="54" cy="92" r="1.6" />
          <circle cx="60" cy="92" r="1.6" /><circle cx="66" cy="92" r="1.6" /><circle cx="74" cy="91" r="1.6" /><circle cx="82" cy="90" r="1.6" />
        </>
      )}
      {kind === 'colouring' && (
        <>
          {[-22, 0, 22].map((r, i) => (
            <g key={r} transform={`rotate(${r} 60 86)`} stroke={i === 1 ? 'var(--magenta)' : 'var(--ink)'}>
              <path d="M56 30l4-10 4 10" />
              <rect x="54" y="30" width="12" height="56" rx="2.5" />
              <path d="M54 40h12M54 74h12" />
            </g>
          ))}
          <path d="M26 102c8-6 14 6 22 0s14 6 22 0 14 6 22 0" stroke="var(--magenta)" />
        </>
      )}
      {kind === 'learning' && (
        <>
          <path d="M24 50c-6 0-8 6-6 9-6 3-8 8-8 13 0 8 6 13 14 13s14-5 14-13c0-5-2-10-8-13 2-3 0-9-6-9z" />
          <path d="M24 50V24" />
          <rect x="20" y="16" width="8" height="8" rx="2" />
          <circle cx="24" cy="70" r="3.5" stroke="var(--magenta)" />
          <rect x="55" y="28" width="10" height="46" rx="1.5" />
          <path d="M55 74l5 11 5-11M55 36h10" />
          <path d="M80 64h30c0 15-7 22-15 22s-15-7-15-22z" />
          <path d="M85 56c2-3-2-5 0-8M95 56c2-3-2-5 0-8M105 56c2-3-2-5 0-8" />
        </>
      )}
    </svg>
  );
}

function Gallery({ images }: { images: NonNullable<Interest['images']> }) {
  const [i, setI] = useState(0);
  const start = useRef<number | null>(null);
  const n = images.length;
  const go = (d: number) => setI(v => (v + d + n) % n);
  return (
    <div
      className="ic-gallery"
      onPointerDown={e => { start.current = e.clientX; }}
      onPointerUp={e => {
        if (start.current === null) return;
        const dx = e.clientX - start.current; start.current = null;
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
      }}
    >
      <img src={images[i].src} alt={images[i].alt} draggable={false} decoding="async" />
      {n > 1 && (
        <>
          <button type="button" className="ic-nav prev" onClick={() => go(-1)} aria-label="Previous picture"><Icon name="left" /></button>
          <button type="button" className="ic-nav next" onClick={() => go(1)} aria-label="Next picture"><Icon name="right" /></button>
          <div className="ic-dots" aria-label={`Picture ${i + 1} of ${n}`}>
            {images.map((im, k) => (
              <button key={im.src} type="button" aria-label={`Picture ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/** A card that opens over the page: pictures on the front, my words on the back. */
export function InterestDialog({ item, onClose }: { item: Interest | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) { setFlipped(false); d.showModal(); }
    if (!item && d.open) d.close();
  }, [item]);

  if (!item) return <dialog ref={ref} className="ic-dialog" onClose={onClose} />;
  const titleId = `ic-${item.id}`;

  return (
    <dialog
      ref={ref}
      className="ic-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={e => { if (e.target === e.currentTarget) ref.current?.close(); }}
    >
      <div className="ic-shell">
        <header className="ic-head">
          <h3 id={titleId}>{item.title}</h3>
          <button type="button" className="ic-close" onClick={() => ref.current?.close()} aria-label="Close"><Icon name="close" /></button>
        </header>

        <div className={`ic-flip ${flipped ? 'is-flipped' : ''}`}>
          <div className="ic-flip-inner">
            <section className="ic-face ic-front" aria-hidden={flipped} {...(flipped ? { inert: '' } : {})}>
              {item.images ? <Gallery images={item.images} /> : (
                <div className="ic-front-art">
                  {item.art && <InterestArt kind={item.art} />}
                  {item.art === 'playlist' && item.link && (
                    <a className="btn btn-go" href={item.link} target="_blank" rel="noopener">Open the playlist</a>
                  )}
                </div>
              )}
            </section>
            <section className="ic-face ic-back" aria-hidden={!flipped} {...(!flipped ? { inert: '' } : {})}>
              {typeof item.back === 'string' ? <p>{item.back}</p> : (
                <dl>{item.back.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
              )}
            </section>
          </div>
        </div>

        <footer className="ic-foot">
          <button type="button" className="btn btn-quiet ic-turn" aria-pressed={flipped} onClick={() => setFlipped(f => !f)}>
            <Icon name="flip" />{flipped ? 'See the front' : 'Flip it over'}
          </button>
        </footer>
      </div>
    </dialog>
  );
}
