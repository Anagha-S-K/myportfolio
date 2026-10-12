import { useEffect, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Footer } from '../components/Contact';
import { Icon } from '../components/Icons';
import { Spine, type Station } from '../components/Spine';
import { ToolChip } from '../components/ToolChip';
import { caseStudies, findCaseStudy } from '../content/projects';
import { profile } from '../content/site';

const STATIONS: Station[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'watch', label: 'What it does' },
  { id: 'how', label: 'How it works' },
  { id: 'built', label: 'Highlights' },
  { id: 'tools', label: 'Tools' },
  { id: 'learned', label: 'Learned' }
];

/** sections fade up as they arrive; content stays visible without JS or with reduced motion */
function useReveal(dep: string) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = [...root.querySelectorAll<HTMLElement>('.reveal')];
    root.classList.add('reveal-on');
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));
    return () => { io.disconnect(); root.classList.remove('reveal-on'); };
  }, [dep]);
  return ref;
}

export default function ProjectPage() {
  const { slug } = useParams();
  const cs = findCaseStudy(slug);
  const ref = useReveal(slug ?? '');

  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const homeDescription = meta?.content ?? '';
    document.title = cs ? `${cs.name} · ${profile.name}` : `${profile.name} · AI Engineer`;
    if (meta && cs) meta.content = `${cs.name}: ${cs.tagline}`;
    return () => {
      document.title = `${profile.name} · AI Engineer`;
      if (meta) meta.content = homeDescription;
    };
  }, [cs]);

  if (!cs) return <Navigate to="/#projects" replace />;
  const next = caseStudies[(caseStudies.indexOf(cs) + 1) % caseStudies.length];

  return (
    <>
      <Spine key={cs.slug} stations={STATIONS} />
      <main className="cs" ref={ref}>
        <section className="block cs-hero" id="overview" aria-labelledby="cs-title">
          <Link className="back" to="/#projects"><Icon name="left" />Back to projects</Link>
          <div className="cs-title">
            <h1 id="cs-title">{cs.name}</h1>
            <span className="tag">{cs.tag}</span>
          </div>
          <p className="cs-tagline">{cs.tagline}</p>
          {cs.topics && <ul className="chips cs-topics" aria-label="Areas">{cs.topics.map(t => <li key={t}>{t}</li>)}</ul>}
          <dl className="facts-row">
            {cs.facts.map(f => (
              <div key={f.label} className="fact"><dt>{f.label}</dt><dd>{f.value}</dd></div>
            ))}
          </dl>
        </section>

        <section className="block tight" id="problem" aria-labelledby="problem-title">
          <h2 className="sr-only" id="problem-title">The problem and the intent</h2>
          <div className="cs-pair reveal">
            <article className="box">
              <h3>The problem</h3>
              <p>{cs.problem}</p>
            </article>
            <article className="box box-intent">
              <h3>The intent</h3>
              <p>{cs.intent}</p>
            </article>
          </div>
        </section>

        <section className="block tight" id="watch" aria-labelledby="watch-title">
          <div className="head"><h2 id="watch-title">{cs.capabilitiesTitle ?? `What ${cs.name} looks out for`}</h2>{cs.capabilities.some(c => c.mine) && <p><span className="pin-dot" aria-hidden="true" /> marks the parts I worked on</p>}</div>
          <ul className="cs-tiles reveal">
            {cs.capabilities.map(c => (
              <li key={c.title} className={`tile-cap ${c.mine ? 'mine' : ''}`}>
                <span className="cap-ic"><Icon name={c.icon} /></span>
                <b>{c.title}</b>
                <span>{c.text}</span>
                {c.mine && <em className="mine-pin">My part</em>}
              </li>
            ))}
          </ul>
        </section>

        <section className="block tight" id="how" aria-labelledby="how-title">
          <div className="head"><h2 id="how-title">How it works</h2></div>
          <ol className="cs-flow reveal">
            {cs.flow.map(f => (
              <li key={f.title}><b>{f.title}</b><span>{f.text}</span></li>
            ))}
          </ol>
        </section>

        <section className="block tight" id="built" aria-labelledby="built-title">
          <div className="head"><h2 id="built-title">{cs.builtTitle ?? 'What I worked on'}</h2></div>
          <div className="cs-built">
            {cs.built.map(b => (
              <article key={b.title} className="box built reveal">
                <h3><span className="cap-ic"><Icon name={b.icon} /></span>{b.title}</h3>
                <dl>
                  <div><dt>What it does</dt><dd>{b.what}</dd></div>
                  <div><dt>Why it matters</dt><dd>{b.why}</dd></div>
                  <div><dt>{cs.focusLabel ?? 'My focus'}</dt><dd>{b.how}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="block tight" id="tools" aria-labelledby="tools-title">
          <div className="head"><h2 id="tools-title">Tools used</h2>{cs.toolsNote && <p>{cs.toolsNote}</p>}</div>
          <ul className="tools reveal">{cs.tools.map(t => <ToolChip key={t} tool={t} />)}</ul>
        </section>

        <section className="block tight" id="learned" aria-labelledby="learned-title">
          <div className="head"><h2 id="learned-title">What I learned</h2></div>
          <ul className="cs-learned reveal">{cs.learned.map(l => <li key={l}>{l}</li>)}</ul>
        </section>

        <nav className="block tight cs-next" aria-label="More projects">
          <Link className="btn btn-quiet" to="/#projects"><Icon name="left" />All projects</Link>
          {next && next.slug !== cs.slug ? (
            <Link className="btn btn-go" to={`/projects/${next.slug}`}>Next: {next.name}<Icon name="right" /></Link>
          ) : (
            <span className="soon">More stories coming soon</span>
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
