// Paints the ID badge faces and strap for the Lanyard as data URLs.
// The card face is 1024 x 1440 (the Lanyard's portrait card at FACE_WIDTH 1024).
// A slot is cut through the card near the top centre, so nothing important sits there.

import { LOGO_PATH } from '../components/Logo';
import { profile } from '../content/site';

const W = 1024;
const H = 1440;
const MAGENTA = '#273043';
const INK = '#273043';
const SOFT = '#5A6180';
const LINE = '#D3DCD3';
const BLUSH = '#E7EAF1';
const LEAF = '#2F7D4F';
const DISPLAY = '"Bricolage Grotesque Variable", system-ui, sans-serif';
const TEXT = '"Hanken Grotesk Variable", system-ui, sans-serif';

const loadImage = (src: string) =>
  new Promise<HTMLImageElement | null>(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous'; // lets a photo hosted on another domain be drawn on the canvas
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const canvas = (w: number, h: number) => {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')!] as const;
};

const spaced = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number, align: 'left' | 'right' = 'left') => {
  ctx.letterSpacing = `${spacing}px`;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
  ctx.letterSpacing = '0px';
};

const wrap = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, max: number, lh: number) => {
  const words = text.split(' ');
  let line = '';
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > max && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lh;
    } else line = test;
  }
  ctx.fillText(line, x, y);
  return y + lh;
};

/** set a font, shrinking it until the text fits `max` px */
const fit = (ctx: CanvasRenderingContext2D, text: string, weight: number, size: number, family: string, max: number) => {
  let px = size;
  ctx.font = `${weight} ${px}px ${family}`;
  while (ctx.measureText(text).width > max && px > 20) { px -= 2; ctx.font = `${weight} ${px}px ${family}`; }
};

const SKY = '#2E7FD1';
const SCRIPT = '"Mrs Saint Delafield", cursive';
const SKILLS = ['Python', 'Computer Vision', 'AI'];

/** a die-cut sticker: white backing with a soft shadow, rotated, art drawn on top */
const sticker = (ctx: CanvasRenderingContext2D, x: number, y: number, deg: number, backing: (c: CanvasRenderingContext2D) => void, art: (c: CanvasRenderingContext2D) => void) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((deg * Math.PI) / 180);
  ctx.shadowColor = 'rgba(0, 0, 0, .3)';
  ctx.shadowBlur = 22;
  ctx.shadowOffsetY = 8;
  ctx.fillStyle = '#FFFFFF';
  backing(ctx);
  ctx.fill();
  ctx.shadowColor = 'transparent';
  ctx.lineWidth = 3;
  ctx.strokeStyle = LINE;
  backing(ctx);
  ctx.stroke();
  art(ctx);
  ctx.restore();
};

const laptopArt = (ctx: CanvasRenderingContext2D) => {
  // lid
  ctx.fillStyle = MAGENTA;
  ctx.beginPath(); ctx.roundRect(-48, -46, 96, 66, 12); ctx.fill();
  // screen
  ctx.fillStyle = BLUSH;
  ctx.beginPath(); ctx.roundRect(-40, -38, 80, 50, 7); ctx.fill();
  // happy face
  ctx.fillStyle = INK;
  ctx.beginPath(); ctx.arc(-14, -17, 5, 0, Math.PI * 2); ctx.arc(14, -17, 5, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, -8, 9, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
  ctx.fillStyle = '#9197AE';
  ctx.beginPath(); ctx.ellipse(-24, -5, 6, 4, 0, 0, Math.PI * 2); ctx.ellipse(24, -5, 6, 4, 0, 0, Math.PI * 2); ctx.fill();
  // base + trackpad notch
  ctx.fillStyle = INK;
  ctx.beginPath(); ctx.moveTo(-60, 26); ctx.lineTo(60, 26); ctx.quadraticCurveTo(62, 40, 48, 40); ctx.lineTo(-48, 40); ctx.quadraticCurveTo(-62, 40, -60, 26); ctx.closePath(); ctx.fill();
  ctx.fillStyle = SOFT;
  ctx.beginPath(); ctx.roundRect(-12, 26, 24, 5, 2.5); ctx.fill();
  // a little sparkle
  ctx.fillStyle = SKY;
  ctx.beginPath(); ctx.moveTo(52, -58); ctx.lineTo(56, -50); ctx.lineTo(64, -46); ctx.lineTo(56, -42); ctx.lineTo(52, -34); ctx.lineTo(48, -42); ctx.lineTo(40, -46); ctx.lineTo(48, -50); ctx.closePath(); ctx.fill();
};

const coffeeArt = (ctx: CanvasRenderingContext2D) => {
  ctx.strokeStyle = SOFT; ctx.lineWidth = 6; ctx.lineCap = 'round';
  for (const dx of [-16, 4, 24]) {
    ctx.beginPath(); ctx.moveTo(dx - 6, -30); ctx.bezierCurveTo(dx + 8, -42, dx - 12, -54, dx + 2, -66); ctx.stroke();
  }
  ctx.fillStyle = SKY;
  ctx.beginPath(); ctx.moveTo(-44, -18); ctx.lineTo(40, -18); ctx.lineTo(32, 46); ctx.quadraticCurveTo(30, 56, 20, 56); ctx.lineTo(-24, 56); ctx.quadraticCurveTo(-34, 56, -36, 46); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = SKY; ctx.lineWidth = 10;
  ctx.beginPath(); ctx.arc(46, 14, 16, -Math.PI / 2, Math.PI / 2); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath(); ctx.ellipse(-2, 16, 16, 12, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = SKY;
  ctx.beginPath(); ctx.arc(-2, 16, 6, 0, Math.PI * 2); ctx.fill();
};

const cameraArt = (ctx: CanvasRenderingContext2D) => {
  ctx.fillStyle = LEAF;
  ctx.beginPath(); ctx.roundRect(-52, -26, 104, 70, 14); ctx.fill();
  ctx.beginPath(); ctx.roundRect(-20, -40, 40, 18, 6); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath(); ctx.arc(0, 9, 22, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = LEAF;
  ctx.beginPath(); ctx.arc(0, 9, 12, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = MAGENTA; ctx.lineWidth = 4; ctx.setLineDash([9, 6]);
  ctx.strokeRect(-66, -52, 132, 108);
  ctx.setLineDash([]);
};

async function front() {
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = MAGENTA;
  ctx.fillRect(0, 0, W, 300);
  ctx.fillStyle = 'rgba(255,255,255,.35)';
  ctx.fillRect(0, 220, W, 8);

  // photo
  const cx = W / 2, cy = 410, r = 225;
  ctx.beginPath();
  ctx.arc(cx, cy, r + 22, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();
  const photo = profile.photoUrl ? await loadImage(profile.photoUrl) : null;
  if (photo) {
    const s = Math.max((r * 2) / photo.width, (r * 2) / photo.height);
    ctx.drawImage(photo, cx - (photo.width * s) / 2, cy - (photo.height * s) / 2, photo.width * s, photo.height * s);
  } else {
    ctx.fillStyle = BLUSH;
    ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    ctx.fillStyle = SOFT;
    ctx.font = `700 34px ${TEXT}`;
    ctx.textAlign = 'center';
    ctx.fillText('PHOTO', cx, cy);
  }
  ctx.restore();

  // name + role
  ctx.textAlign = 'center';
  ctx.fillStyle = INK;
  fit(ctx, profile.name, 800, 110, DISPLAY, W - 220);
  ctx.fillText(profile.name, W / 2, 790);
  ctx.font = `700 46px ${TEXT}`;
  const pillW = ctx.measureText(profile.role).width + 80, pillH = 80, pillY = 822;
  ctx.fillStyle = BLUSH;
  ctx.beginPath();
  ctx.roundRect(W / 2 - pillW / 2, pillY, pillW, pillH, pillH / 2);
  ctx.fill();
  ctx.fillStyle = MAGENTA;
  ctx.textBaseline = 'middle';
  ctx.fillText(profile.role, W / 2, pillY + pillH / 2 + 2);

  // skill chips
  ctx.font = `700 38px ${TEXT}`;
  const gap = 18, padX = 30, chipH = 66, chipY = 944;
  const widths = SKILLS.map(sk => ctx.measureText(sk).width + padX * 2);
  let x = W / 2 - (widths.reduce((a, b) => a + b, 0) + gap * (SKILLS.length - 1)) / 2;
  SKILLS.forEach((sk, i) => {
    ctx.beginPath();
    ctx.roundRect(x, chipY, widths[i], chipH, chipH / 2);
    ctx.lineWidth = 4;
    ctx.strokeStyle = LINE;
    ctx.stroke();
    ctx.fillStyle = INK;
    ctx.fillText(sk, x + widths[i] / 2, chipY + chipH / 2 + 2);
    x += widths[i] + gap;
  });
  ctx.textBaseline = 'alphabetic';

  ctx.setLineDash([16, 12]);
  ctx.strokeStyle = LINE;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(80, 1076);
  ctx.lineTo(W - 80, 1076);
  ctx.stroke();
  ctx.setLineDash([]);

  // signature bottom left, the "a." mark bottom right, both sitting on the same baseline
  const sigX = 250, base = 1300; // near the bottom edge, clear of the camera sticker
  ctx.textAlign = 'center';
  ctx.fillStyle = INK;
  ctx.font = `400 92px ${SCRIPT}`;
  ctx.fillText(profile.firstName, sigX, base);
  ctx.fillStyle = LINE;
  ctx.fillRect(sigX - 150, base + 24, 300, 4);
  ctx.fillStyle = SOFT;
  ctx.font = `600 30px ${TEXT}`;
  ctx.fillText('signature', sigX, base + 68);

  const logoScale = 0.1; // about as tall as the signature
  ctx.save();
  ctx.translate(W - sigX - 364 * logoScale, base); // mirrors the signature
  ctx.scale(logoScale, logoScale);
  ctx.fillStyle = INK;
  ctx.fill(new Path2D(LOGO_PATH));
  ctx.restore();

  // stickers, slapped on the edges
  sticker(ctx, 170, 296, -12, k => { k.beginPath(); k.arc(0, 0, 86, 0, Math.PI * 2); }, laptopArt);
  sticker(ctx, 862, 330, 10, k => { k.beginPath(); k.roundRect(-82, -88, 164, 168, 42); }, coffeeArt);
  sticker(ctx, 912, 1112, 8, k => { k.beginPath(); k.roundRect(-84, -70, 168, 140, 36); }, cameraArt);

  return c.toDataURL('image/png');
}

async function back() {
  const [c, ctx] = canvas(W, H);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = MAGENTA;
  ctx.fillRect(0, 0, W, 210);

  ctx.textAlign = 'left';
  ctx.fillStyle = INK;
  ctx.font = `800 128px ${DISPLAY}`;
  ctx.fillText('Hello!', 72, 360);

  const rows: [string, string][] = [
    ['ROLE', `${profile.role}, ${profile.company}`],
    ['INTERESTS', 'AI, computer vision'],
    ['STUDIED', profile.degree]
  ];
  let y = 500;
  for (const [label, value] of rows) {
    ctx.fillStyle = MAGENTA;
    ctx.font = `700 44px ${TEXT}`;
    spaced(ctx, label, 72, y, 4);
    ctx.fillStyle = INK;
    ctx.font = `600 66px ${TEXT}`;
    y = wrap(ctx, value, 72, y + 80, W - 144, 78) + 56;
  }
  ctx.fillStyle = MAGENTA;
  ctx.font = `700 44px ${TEXT}`;
  spaced(ctx, 'SAY HI', 72, y, 4);
  ctx.fillStyle = INK;
  fit(ctx, profile.email, 600, 66, TEXT, W - 144);
  ctx.fillText(profile.email, 72, y + 80);

  ctx.fillStyle = SOFT;
  ctx.font = `600 44px ${TEXT}`;
  ctx.textAlign = 'center';
  ctx.fillText('Found this badge? Come say hi.', W / 2, 1380);
  return c.toDataURL('image/png');
}

async function strap() {
  // painted sideways: the Lanyard rotates it to run along the band
  const [c, ctx] = canvas(1600, 192);
  ctx.fillStyle = MAGENTA;
  ctx.fillRect(0, 0, 1600, 192);
  ctx.fillStyle = 'rgba(255,255,255,.18)';
  for (let x = 0; x < 1600; x += 22) {
    ctx.fillRect(x, 14, 12, 3);
    ctx.fillRect(x, 175, 12, 3);
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `800 72px ${DISPLAY}`;
  ctx.textBaseline = 'middle';
  spaced(ctx, `${profile.name.toUpperCase()}  ·  ${profile.role.toUpperCase()}  ·`, 40, 100, 10);
  return c.toDataURL('image/png');
}

export async function makeBadge() {
  await Promise.all([
    document.fonts.load(`800 100px ${DISPLAY}`),
    document.fonts.load(`600 50px ${TEXT}`),
    document.fonts.load(`700 40px ${TEXT}`),
    document.fonts.load(`400 100px ${SCRIPT}`)
  ]).catch(() => undefined);
  const [f, b, s] = await Promise.all([front(), back(), strap()]);
  return { front: f, back: b, strap: s };
}
