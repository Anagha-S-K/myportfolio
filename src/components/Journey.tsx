import { journey } from '../content/site';

export function Journey() {
  return (
    <section className="block tight" id="journey" aria-labelledby="journey-title">
      <div className="head"><h2 id="journey-title">Journey</h2></div>
      <ol className="journey">
        {journey.map(j => (
          <li key={j.title} className={`stop ${j.here ? 'here' : ''}`} aria-current={j.here ? 'step' : undefined}>
            <b>{j.title}</b><span>{j.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
