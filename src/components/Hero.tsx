import { lazy, Suspense, useEffect, useState } from 'react';
import { hero, profile } from '../content/site';
import { makeBadge } from '../lib/badge';
import { useReducedMotion } from '../lib/useReducedMotion';
import { Icon } from './Icons';

// start fetching the 3D code right away, in parallel with painting the badge faces, instead of after
const loadLanyard = () => import('./Lanyard/Lanyard.jsx');
loadLanyard();
const Lanyard = lazy(loadLanyard);

const hasWebGL = () => {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
};

function Currently() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setI(n => (n + 1) % hero.currently.length), 2600);
    return () => window.clearInterval(id);
  }, [reduced]);
  return (
    <p className="currently">
      Currently
      <span className="swap" aria-live="polite">
        {hero.currently.map((w, n) => (
          <span key={w} className={n === i ? 'on' : ''} aria-hidden={n !== i}>{w}</span>
        ))}
      </span>
    </p>
  );
}

export function Hero() {
  const [badge, setBadge] = useState<{ front: string; back: string; strap: string } | null>(null);
  const [webgl] = useState(hasWebGL);
  const [narrow] = useState(() => window.matchMedia('(max-width: 980px)').matches);
  useEffect(() => {
    let live = true;
    makeBadge().then(b => { if (live) setBadge(b); });
    return () => { live = false; };
  }, []);

  return (
    <section className="hero" id="hello" aria-labelledby="hero-title">
      <div className="intro">
        <h1 id="hero-title">Hi, I'm <span className="name">{profile.firstName}.</span></h1>
        <p className="lede"><b>{profile.role} at {profile.company}.</b> {hero.lede}</p>
        <Currently />
        <div className="actions">
          {profile.resumeUrl ? (
            <a className="btn btn-go" href={profile.resumeUrl} target="_blank" rel="noopener"><Icon name="doc" />Resume</a>
          ) : (
            <a className="btn btn-go" aria-disabled="true" title="Resume coming soon" onClick={e => e.preventDefault()} href="#contact"><Icon name="doc" />Resume <small>soon</small></a>
          )}
          <a className="btn btn-quiet" href="#contact">Say hello</a>
          <a className="play-link" href="#play"><span className="coin-ico" aria-hidden="true" />Play a game?</a>
        </div>
        <p className="facts">
          <span><Icon name="pin" />{profile.location}</span>
          <span><Icon name="cap" />{profile.degree}</span>
        </p>
        {profile.status && <p className="status"><i aria-hidden="true" />{profile.status}</p>}
      </div>
      <div className="stage">
        {badge && webgl ? (
          <Suspense fallback={null}>
            <Lanyard
              frontImage={badge.front}
              backImage={badge.back}
              strapImage={badge.strap}
              strapColor="#3A4560"
              cardColor="#ffffff"
              finish="shimmer"
              metal="silver"
              anchor="center"
              size={narrow ? 0.64 : 0.5}
              strapLength={narrow ? 0 : 0.5}
              strapWidth={0.8}
              breeze={0.35}
              intro
            />
          </Suspense>
        ) : badge ? (
          <img className="badge-fallback" src={badge.front} alt={`${profile.name}'s ID badge`} />
        ) : null}
        <p className="sr-only">An ID badge for {profile.name}, {profile.role} at {profile.company}, hanging on a lanyard. You can drag it, and click it to flip it over.</p>
      </div>
    </section>
  );
}
