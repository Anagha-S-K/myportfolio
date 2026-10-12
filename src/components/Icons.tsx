export type IconName =
  | 'sun' | 'moon' | 'doc' | 'pin' | 'cap' | 'cam' | 'spark' | 'layers' | 'in' | 'gh' | 'mail'
  | 'left' | 'right' | 'up' | 'arrow' | 'copy' | 'check' | 'image'
  | 'helmet' | 'fall' | 'posture' | 'flame' | 'drop' | 'thermo'
  | 'barcode' | 'label' | 'ticket' | 'out' | 'cloud'
  | 'resume' | 'upload' | 'target' | 'chat' | 'quiz' | 'bulb' | 'close' | 'flip';

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></symbol>
      <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></symbol>
      <symbol id="i-doc" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></symbol>
      <symbol id="i-cap" viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></symbol>
      <symbol id="i-cam" viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></symbol>
      <symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></symbol>
      <symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></symbol>
      <symbol id="i-in" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></symbol>
      <symbol id="i-gh" viewBox="0 0 24 24"><path d="M9 19c-4 1.3-4-2-6-2.5m12 4.5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></symbol>
      <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></symbol>
      <symbol id="i-left" viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></symbol>
      <symbol id="i-right" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></symbol>
      <symbol id="i-up" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" /></symbol>
      <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
      <symbol id="i-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 5 5 9-10" /></symbol>
      <symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m21 16-5-5-9 9" /></symbol>
      <symbol id="i-helmet" viewBox="0 0 24 24"><path d="M4 16a8 8 0 0 1 16 0" /><path d="M2.5 16h19v2.5h-19z" /><path d="M10 8.5V6.5h4v2" /></symbol>
      <symbol id="i-fall" viewBox="0 0 24 24"><circle cx="18" cy="15" r="2" /><path d="M4 19.5h16" /><path d="M15.5 16.5 9 17l-3-3" /><path d="m9 17 2.5-4.5 3 1" /><path d="M5 8l2-2M8 9l1-3" /></symbol>
      <symbol id="i-posture" viewBox="0 0 24 24"><circle cx="15.5" cy="5" r="2" /><path d="M14.5 7.5 9 12l1 8" /><path d="m9 12 6 2.5" /><path d="m11.5 10 4 1.5" /><path d="M7 20h6" /></symbol>
      <symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-5 .8 1.2 1.5 1.7 2.5 2C11 8 11.5 5 12 3z" /></symbol>
      <symbol id="i-drop" viewBox="0 0 24 24"><path d="M12 3.5s-5.5 6-5.5 10a5.5 5.5 0 0 0 11 0c0-4-5.5-10-5.5-10z" /><path d="M3 20.5c2 0 2-1 4-1s2 1 4 1" /></symbol>
      <symbol id="i-thermo" viewBox="0 0 24 24"><path d="M10 13.5V5a2 2 0 0 1 4 0v8.5a4 4 0 1 1-4 0z" /><path d="M12 9v6" /><path d="M18 5.5h2M18 9h2" /></symbol>
      <symbol id="i-barcode" viewBox="0 0 24 24"><path d="M4 6v12M7 6v12M10.5 6v12M13 6v12M16.5 6v12M20 6v12" /></symbol>
      <symbol id="i-label" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" /><rect x="13" y="15" width="4" height="2.5" rx=".5" /></symbol>
      <symbol id="i-ticket" viewBox="0 0 24 24"><path d="M3 8a2 2 0 0 0 0 4v0a2 2 0 0 0 0 4v2h18v-2a2 2 0 0 1 0-4 2 2 0 0 1 0-4V6H3z" /><path d="M9 9.5v5M12 9.5v5M15 9.5v5" /></symbol>
      <symbol id="i-out" viewBox="0 0 24 24"><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></symbol>
      <symbol id="i-resume" viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="8.5" r="2" /><path d="M9 13.5h6M9 17h6" /></symbol>
      <symbol id="i-upload" viewBox="0 0 24 24"><path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" /><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" /></symbol>
      <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r=".8" /></symbol>
      <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" /><path d="M8.5 9.5h7M8.5 12.5h4" /></symbol>
      <symbol id="i-quiz" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="m7.5 8 1.5 1.5 2.5-3M7.5 15l1.5 1.5 2.5-3M14 8.5h3M14 15.5h3" /></symbol>
      <symbol id="i-bulb" viewBox="0 0 24 24"><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></symbol>
      <symbol id="i-close" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></symbol>
      <symbol id="i-flip" viewBox="0 0 24 24"><path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.7" /><path d="M20 4v4.7h-4.7" /><path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.3" /><path d="M4 20v-4.7h4.7" /></symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 9.5 4.3 4.3 0 0 1 17.5 18z" /><path d="M12 15.5V11M9.8 13l2.2-2.2 2.2 2.2" /></symbol>
    </svg>
  );
}

export function Icon({ name, className = 'i' }: { name: IconName; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}
