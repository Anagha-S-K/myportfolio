# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, three.js for the lanyard hero, GSAP for scroll motion. Delegated to Claude and confirmed by the user. Deploy target: Vercel.

## Users

Primary: tech recruiters and hiring managers deciding whether to interview Anagha for AI / ML / computer-vision engineering roles. Secondary: freelance and collaboration clients deciding whether to hire Anagha for an AI project. Both skim; neither wants long reading.

## Product Purpose

A one-page personal portfolio for ANAGHA S K, AI Engineer at Techcrafter, Bengaluru (May 2026 to present); B.E. CSE (AI&ML), JSS Academy of Technical Education, graduated May 2026. Success: a visitor remembers Anagha as a person, understands the computer-vision work in seconds, and reaches the resume or contact links.

## Positioning

A real computer-vision engineer who ships safety systems on factory CCTV, presented with a Bengaluru-rooted personality: a draggable ID-badge lanyard hero, and "Ship it!", a small platformer where visitors collect coins and stomp bugs on the way to a deploy flag. A neighbouring AI portfolio could not copy either truthfully.

## Operating Context

One scrolling home page: hero (lanyard), current role, projects, journey, off-the-clock carousel, "Ship it!" game, contact. A "Play a game?" button in the hero scrolls to the game. Visitors arrive on desktop from a resume or LinkedIn, and on mobile from LinkedIn.

## Capabilities and Constraints

- Hero: React Bits Lanyard (three.js). Badge front holds the photo, back holds info.
- Off the clock: an in-house concave carousel of interest cards that open into a two-sided card (pictures / her words). Illustrations are one consistent line-art style.
- Game: "Ship it!" platformer (coins, bugs, deploy flag) with a points ticket at the end. A food-themed variant was discussed and set aside.
- Tinted magenta arrow and pointer cursor (never changes size). Light and dark themes. Web and mobile.
- No AI chatbot or chat feature anywhere.
- Confidential: never name AI models anywhere on the site (no YOLO, Ultralytics, ByteTrack, SAM or model versions). AEGIS is described at a high level only: no architecture internals, numbers, client or site details, or code.
- Each project can have a story page at /projects/<slug> (content in src/content/projects/); AEGIS exists, NotifyNPick and HireMateAI are waiting on the user's briefs.
- No links to the HireMateAI repo or demo anywhere.
- Projects section must be low-reading and simple: static, non-interactive cards (one or two lines each, plus tech).
- NotifyNPick's client stays anonymous ("a US mailbox and shipping store").
- Design world: Namma Metro wayfinding is inspiration only, kept professional; never a full transit theme.
- Content for the photo, resume PDF and interests is pending (placeholders, clearly marked).

## Brand Commitments

- Name shown as ANAGHA S K.
- Palette (updated 2026-10-10): one magenta accent (#A3245C light, #F06BA0 dark) on warm neutrals; leaf green only for success states; sky blue only inside the game. Light and dark variants.
- Tone: professional first, then cute and playful.
- Humble, early-career voice: Anagha is still learning. AI is the job, not the whole personality; never claim expertise ("I teach machines…"). Prefer "currently building", "learning".
- No Kannada text anywhere (Anagha is not from Karnataka). Bengaluru is only the work location.

## Evidence on Hand

- Contact: anagha.sakaray@gmail.com · linkedin.com/in/anagha-s-k-88aa0a259 · github.com/Anagha-S-K
- AEGIS (Techcrafter product): industrial safety platform on existing CCTV, covering PPE compliance, fall detection, fire/smoke, spills, and WBGT heat-stress from environmental data. Each capability is an independent module emitting structured safety events. Anagha built unsafe-posture detection, fall detection and PPE detection, trained the models, solved PPE compliance being unlearnable from elevated CCTV distance, and evaluated many Ultralytics models. The site copy must be original, not the company description.
- HireMateAI (solo, built entirely by Anagha): React/Vite + Tailwind frontend, Flask backend, LLM (DeepSeek via OpenRouter) resume-to-JD match scoring with feedback, ATS resume builder with ReportLab PDFs, interview question generation, AI aptitude tests with grading.
- NotifyNPick (client project, US mailbox and shipping store): Python/Tkinter desktop app. Webcam barcode scan (pyzbar) captures the tracking ID, Tesseract OCR reads the mailbox number from the label, the customer is matched and emailed a generated pickup barcode, check-out is logged with a confirmation email, plus customer management, a history log and scheduled Dropbox backups. Demo video: OneDrive\Desktop\NotifyNPick.
- Absent, not to be fabricated: metrics, accuracy numbers, testimonials, the photo, the resume, interests.

## Product Principles

- Show the work doing its job; keep reading to a line or two.
- Professional first, personality second, never gimmicky.
- Every playful element must also work by keyboard and touch.
- Nothing invented: placeholders stay visibly marked.

## Accessibility & Inclusion

WCAG AA contrast in both themes; keyboard and touch equivalents for drag, hover and cursor effects; reduced-motion respected.
