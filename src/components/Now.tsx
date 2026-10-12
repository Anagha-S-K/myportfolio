import { now, profile } from '../content/site';
import { Icon, type IconName } from './Icons';

export function Now() {
  const [before, after] = now.lead.split('AEGIS');
  return (
    <section className="block" id="now" aria-labelledby="now-title">
      <div className="head"><h2 id="now-title">Right now</h2><p>{[profile.role, profile.company, now.since].filter(Boolean).join(' · ')}</p></div>
      <p className="now-lead">{before}<b>AEGIS</b>{after}</p>
      <ul className="work">
        {now.work.map(w => (
          <li key={w.title}>
            <h3><span className="cap-ic"><Icon name={w.icon as IconName} /></span>{w.title}</h3>
            <p>{w.text}</p>
          </li>
        ))}
      </ul>
      <p className="learned"><b>What I'm learning:</b> {now.learned}</p>
    </section>
  );
}
