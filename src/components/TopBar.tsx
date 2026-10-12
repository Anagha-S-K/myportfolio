import { Link, useLocation } from 'react-router-dom';
import { profile } from '../content/site';
import { useTheme } from '../lib/useTheme';
import { Icon } from './Icons';
import { Logo } from './Logo';

export function TopBar() {
  const { theme, toggle } = useTheme();
  const dark = theme === 'dark';
  const { pathname, hash } = useLocation();
  // already on the home page: the link would go nowhere, so scroll back to the start instead
  const toTop = (e: React.MouseEvent) => {
    if (pathname !== '/' || hash) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="bar">
      <Link className="mark" to="/" onClick={toTop} aria-label={`${profile.name}, home`}><Logo /></Link>
      <button
        className={`theme ${dark ? 'is-dark' : ''}`}
        type="button"
        aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        onClick={e => toggle(e.currentTarget)}
      >
        <Icon name="sun" className="i k-sun" />
        <Icon name="moon" className="i k-moon" />
      </button>
    </header>
  );
}
