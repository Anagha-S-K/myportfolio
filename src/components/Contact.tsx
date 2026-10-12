import { useState } from 'react';
import { contact, profile } from '../content/site';
import { Icon } from './Icons';

export function Contact() {
  const [reason, setReason] = useState(0);
  const [toast, setToast] = useState(0);
  const r = contact.reasons[reason];
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(r.body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setToast(t => t + 1);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="block" id="contact" aria-labelledby="contact-title">
      <div className="contact">
        <div className="compose">
          <h2 id="contact-title">{contact.heading}</h2>
          <p>{contact.sub}</p>
          <div className="reasons" role="group" aria-label="What is this about?">
            {contact.reasons.map((x, i) => (
              <button key={x.label} type="button" aria-pressed={i === reason} onClick={() => setReason(i)}>{x.label}</button>
            ))}
          </div>
          <div className="envelope">
            <dl>
              <div><dt>To</dt><dd>{profile.email}</dd></div>
              <div><dt>Subject</dt><dd>{r.subject}</dd></div>
            </dl>
          </div>
          <div className="actions">
            <a className="btn btn-go" href={mailto}><Icon name="mail" />Write to me</a>
          </div>
        </div>

        <div className="elsewhere">
          <h3>Or find me here</h3>
          <ul className="links">
            <li>
              <button className="link-row" type="button" onClick={copy}>
                <span className="ic"><Icon name={toast ? 'check' : 'copy'} /></span>
                <span className="txt"><b>Email</b><small>{profile.email}</small></span>
                <span className="go">Copy</span>
              </button>
            </li>
            <li>
              <a className="link-row" href={profile.linkedin} target="_blank" rel="noopener">
                <span className="ic"><Icon name="in" /></span>
                <span className="txt"><b>LinkedIn</b><small>Say hi or connect</small></span>
                <span className="go"><Icon name="arrow" /></span>
              </a>
            </li>
            <li>
              <a className="link-row" href={profile.github} target="_blank" rel="noopener">
                <span className="ic"><Icon name="gh" /></span>
                <span className="txt"><b>GitHub</b><small>Anagha-S-K</small></span>
                <span className="go"><Icon name="arrow" /></span>
              </a>
            </li>
            <li>
              {profile.resumeUrl ? (
                <a className="link-row" href={profile.resumeUrl} target="_blank" rel="noopener">
                  <span className="ic"><Icon name="doc" /></span>
                  <span className="txt"><b>Resume</b><small>PDF</small></span>
                  <span className="go"><Icon name="arrow" /></span>
                </a>
              ) : (
                <div className="link-row" aria-disabled="true">
                  <span className="ic"><Icon name="doc" /></span>
                  <span className="txt"><b>Resume</b><small>On its way</small></span>
                  <span className="soon-pill">Soon</span>
                </div>
              )}
            </li>
          </ul>
          <p className="where"><Icon name="pin" />Bengaluru, India · IST (UTC+5:30)</p>
        </div>
      </div>
      {toast > 0 && <div className="toast" key={toast} role="status">Email copied</div>}
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-foot">
      <div className="in">
        <span className="terminus">End of the line. Thanks for riding along.</span>
        <button className="to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon name="up" />Back to the start
        </button>
        <span>
          © 2026 {profile.name} · <a href={profile.repo} target="_blank" rel="noreferrer noopener">View source on GitHub</a>
        </span>
      </div>
    </footer>
  );
}
