import { Link } from 'react-router-dom';
import { projects } from '../content/site';
import { Icon } from './Icons';

export function Projects() {
  return (
    <section className="block tight" id="projects" aria-labelledby="projects-title">
      <div className="head"><h2 id="projects-title">Projects</h2><p>Selected work</p></div>
      <ul className="projects">
        {projects.map(p => {
          const body = (
            <>
              <p className="when">{p.year}</p>
              <div className="body">
                <h3>{p.name} <span className="tag">{p.tag}</span></h3>
                <p className="one">{p.text}</p>
                <ul className="chips" aria-label={`${p.name} areas`}>{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
              </div>
              {p.slug
                ? <span className="story">Read the story <Icon name="arrow" /></span>
                : <span className="story soon">Story coming soon</span>}
            </>
          );
          return (
            <li key={p.name}>
              {p.slug
                ? <Link className="proj proj-link" to={`/projects/${p.slug}`} aria-label={`${p.name}: read the story`}>{body}</Link>
                : <div className="proj">{body}</div>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
