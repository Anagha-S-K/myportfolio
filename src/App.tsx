import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { IconSprite } from './components/Icons';
import { TopBar } from './components/TopBar';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

/** New page: start at the top. Link with a #hash: land on that section once it has rendered. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo({ top: 0, behavior: 'instant' }); return; }
    let tries = 0;
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
      else if (tries++ < 20) window.setTimeout(go, 50);
    };
    go();
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p>This stop isn't on the line.</p>
      <Link className="btn btn-go" to="/">Back home</Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollManager />
      <IconSprite />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
