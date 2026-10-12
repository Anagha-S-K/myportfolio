---
name: ANAGHA S K, Portfolio
description: One route through Anagha's work; a bougainvillea route spine on a warm, softened blush dot-grid ground.
colors:
  bougainvillea: "#B42D68"
  bougainvillea-ink: "#FFFFFF"
  leaf: "#2F7D4F"
  leaf-ink: "#FFFFFF"
  sky: "#2E7FD1"
  blush-ground: "#F7F2F1"
  blush-deep: "#EFE5E6"
  surface: "#FFFDFC"
  plum-ink: "#2A1A22"
  plum-soft: "#66525C"
  petal-line: "#E6D9DC"
  night-bougainvillea: "#FF6FA8"
  night-bougainvillea-ink: "#2A0716"
  night-leaf: "#5FD08A"
  night-leaf-ink: "#0D2417"
  night-sky: "#8CC8FF"
  plum-night: "#1A0F16"
  plum-night-deep: "#231520"
  night-surface: "#2A1A24"
  night-ink: "#F7E9F0"
  night-soft: "#C9A9BA"
  night-line: "#42293A"
  switch-day-sky: "#EDD6DD"
  switch-night-sky: "#2B1730"
  switch-night-shadow: "rgba(0, 0, 0, .6)"
  switch-night-knob: "#3B2533"
  switch-moon: "#FF8FBC"
  switch-stars: "#FFB3D1"
  badge-silver: "#D9DCE2"
  badge-gold: "#E4B965"
  badge-graphite: "#4D4F55"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.2vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.5vw, 1.3rem)"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
  story-title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  terminus:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
  display-mobile:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "2.3rem"
    fontWeight: 800
    lineHeight: 1
  tagline:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.55rem)"
    fontWeight: 500
    lineHeight: 1.4
  overlay-title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)"
    fontWeight: 800
    lineHeight: 1.1
  box-title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.2
  body-lg:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.55
  ui:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    lineHeight: 1.3
  small:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  route-thin: "2px"
  route-sm: "3px"
  route: "4px"
  key: "6px"
  chip: "8px"
  control: "12px"
  card-sm: "16px"
  row: "14px"
  tile: "18px"
  card: "20px"
  stage: "22px"
  panel: "24px"
  pill: "99px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(64px, 10vh, 112px)"
  spine: "148px"
  rail: "38px"
  spine-mobile: "30px"
  rail-mobile: "15px"
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "28px"
components:
  button-primary:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.leaf-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  button-quiet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.control}"
    padding: "11px 18px"
  button-play:
    backgroundColor: "transparent"
    textColor: "{colors.bougainvillea}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
  button-play-hover:
    backgroundColor: "{colors.bougainvillea}"
    textColor: "{colors.bougainvillea-ink}"
  chip-tech:
    backgroundColor: "transparent"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.chip}"
    padding: "5px 9px"
  chip-reason:
    backgroundColor: "transparent"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.pill}"
    padding: "9px 14px"
  chip-reason-selected:
    backgroundColor: "{colors.bougainvillea}"
    textColor: "{colors.bougainvillea-ink}"
  card-project:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "16px"
  find-me-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "clamp(22px, 3vw, 32px)"
  link-row:
    backgroundColor: "transparent"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.row}"
    padding: "10px 10px 10px 0"
  link-row-stop:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.bougainvillea}"
    rounded: "{rounded.pill}"
    size: "40px"
  link-row-stop-hover:
    backgroundColor: "{colors.bougainvillea}"
    textColor: "{colors.bougainvillea-ink}"
  story-box:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "clamp(20px, 2.6vw, 28px)"
  story-box-intent:
    backgroundColor: "{colors.bougainvillea}"
    textColor: "{colors.bougainvillea-ink}"
    rounded: "{rounded.card}"
    padding: "clamp(20px, 2.6vw, 28px)"
  fact-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card-sm}"
    padding: "14px 18px"
  capability-tile:
    backgroundColor: "transparent"
    rounded: "{rounded.tile}"
    padding: "18px"
  tool-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 14px 8px 8px"
  topic-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  compose-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "clamp(22px, 3vw, 36px)"
  score-ticket:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.plum-ink}"
    rounded: "{rounded.card-sm}"
    width: "min(340px, 100%)"
  interest-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.tile}"
  spine-dot:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    size: "14px"
---

# Design System: ANAGHA S K, Portfolio

## Overview

**Creative North Star: "The Bougainvillea Line"**

The site is one route through Anagha's work. A magenta line runs down the left edge as both navigation and scroll progress, and every section is a stop on it. The vocabulary comes from metro wayfinding (rings, dots, short route segments, pill chips), but it stays inspiration only: there are no line numbers, platform signs or transit chrome. The ground is a warm, softened blush dot grid by day (deliberately not bright white or hot pink, so it is easy on the eyes) and a plum night after dark. Bougainvillea magenta carries the line and the identity, leaf green is kept for the one action that matters, and sky blue appears only as the coin in the game.

Density is relaxed and skimmable. Type stays modest; the hero headline tops out at 3.6rem. The voice is friendly and early-career, and the visuals follow it with soft corners, soft plum-tinted shadows and small playful touches (a ping on the status dot, a bounce as the badge drops in, a ticket that tilts into place). The design rejects the default AI portfolio: no dark neon, no neural-net imagery, no skill bars.

Two objects carry the personality: the three.js ID badge on a magenta lanyard in the hero, and the "Ship it!" platformer near the end, which issues a perforated score ticket. Both are painted from the same tokens as the page.

**Key Characteristics:**
- A fixed route spine on the left. Every dot, the fill and the rider sit centred on one rail axis.
- Station-dot language throughout: open rings for stops, a filled ring for "here", 3-4px rounded route segments.
- Three hues with strict jobs: magenta for the line and identity, leaf for primary actions, sky for game coins.
- Warm blush dot-grid ground (22px pitch) by day, plum night by dark. Both themes are complete.
- Two kinds of page: the one-page home route, and a story page per project at /projects/<slug> that reuses the same spine with its own stops.
- Modest grotesque type: Bricolage Grotesque for display, Hanken Grotesk for text.
- Soft depth with plum-tinted shadows. No hard edges or offset shadows.

## Colors

The palette is Bougainvillea: one deep magenta, a leaf green and a sky blue on warm, low-chroma pink-tinted neutrals. The light theme was softened on purpose: the magenta is a touch deeper and less neon (#B42D68), and the ground is a warm off-white (#F7F2F1) rather than a bright blush, so large areas never glare. Each colour has a dark-theme twin that is lighter and more luminous rather than inverted.

### Primary
- **Bougainvillea** (bougainvillea / night-bougainvillea): the route itself. Used for the spine fill and rider, station rings, route segments, the name in the hero, link and focus outlines, selected chips, the status dot, the cursor, and the strap and header of the badge. Text on it uses bougainvillea-ink.

### Secondary
- **Leaf** (leaf / night-leaf): primary actions only. Used for Resume, Write to me, Start game and Play again, and nothing else on the page. On the printed badge it appears only as the camera sticker.

### Tertiary
- **Sky** (sky / night-sky): the game coin. It appears as the coin glyph on the "Play a game?" button and as the coins in Ship it!.

### Neutral
- **Blush Ground** (blush-ground / plum-night): the page ground, carrying a radial dot grid in a muted plum at 7% (magenta at 9% at night).
- **Blush Deep** (blush-deep / plum-night-deep): recessed wells such as interest-card art panels, icon wells, tags, the envelope preview, tile icon wells, the game sky and the interest-card art panels.
- **Surface** (surface / night-surface): raised cards, buttons, station-dot fills and the ticket. By day it is a warm white (#FFFDFC), never pure #FFF.
- **Plum Ink** (plum-ink / night-ink): headings and primary text. The toast inverts to ink on ground.
- **Plum Soft** (plum-soft / night-soft): secondary text, captions, inactive spine labels and metadata.
- **Petal Line** (petal-line / night-line): hairlines, card borders, the unvisited spine track, open dot rings, the scrollbar, the ticket perforation and the game's far scenery.

### Named Rules
**The Green Means Go Rule.** Leaf green fills only the primary action in a group, and there is at most one per cluster. Secondary actions use the quiet surface button. The playful action uses the magenta pill outline.

**The One Line Rule.** Magenta is the route. Use it for things on or about the line (stops, progress, selection, identity) and not as a general decorative fill for large surfaces. The badge header and the hero name are the only large magenta areas.

**The Both Themes Rule.** Every colour is a token with a night twin. Page components read tokens and never hardcode hex. The canvas game reads the live custom properties so it re-themes as well. The only fixed colours are the printed badge, which keeps its day palette (plus its silver, gold and graphite clip metals), the theme switch's own day and night sky (switch-day-sky, switch-night-sky, switch-night-shadow, switch-night-knob, switch-moon, switch-stars), and the skin and hair of the game character.

## Typography

**Display Font:** Bricolage Grotesque Variable (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk Variable (with system-ui, sans-serif)

**Character:** Bricolage brings a slightly quirky, warm grotesque at heavy weights for the voice. Hanken is a calm, neutral grotesque for everything read. Headings are balanced and tightly tracked.

### Hierarchy
- **Display** (800, clamp(2.4rem, 4.2vw, 3.6rem), 1; 2.3rem on phones): the hero greeting only. The name inside it is magenta.
- **Story title** (800, clamp(2.8rem, 6vw, 4.4rem), -0.04em): the project name at the top of a story page, followed by a **tagline** (Bricolage 500, clamp(1.2rem, 2vw, 1.55rem), max 34ch).
- **Headline** (800, clamp(1.6rem, 2.4vw, 2.1rem), 1.05): section titles. The title sits on a baseline row with an optional plum-soft sentence-case note on the right. The contact panel heading steps up to clamp(2rem, 3.6vw, 3rem) as the terminus.
- **Title** (700-800, 1.02-1.35rem): project names, stop names, interest-card titles and the ticket heading. Story-page box headings use 1.2rem; game overlay titles use clamp(1.3rem, 2.4vw, 1.8rem).
- **Lead** (Bricolage 500, clamp(1.1rem, 1.5vw, 1.3rem), 1.45, max 46ch): the one-sentence lead for the "Right now" section. Bold words in it turn magenta.
- **Body** (Hanken 400, 1rem, 1.6): running text. Secondary paragraphs are 0.9-0.95rem in plum-soft, held to 42-70ch. The intent box steps up to 1.05rem.
- **Label** (Hanken 600-700, on the 0.75 / 0.8 / 0.85 / 0.9rem steps, 1): buttons, chips, spine labels, the HUD and kbd. Sentence case, no tracking. Numbers in the HUD, project years and ticket use tabular figures.

### Named Rules
**The Modest Scale Rule.** No type on the home page exceeds 3.6rem; the only larger type is the story-page project title (up to 4.4rem), which acts as that page's cover. The ticket score (2.2rem) is the largest number. Hierarchy comes from weight and colour, not size jumps.

**The No Eyebrow Rule.** Section titles stand alone. Do not put a small uppercase tracked label, kicker or eyebrow above a heading. Page labels are sentence case with zero tracking. Spaced capitals exist only on the printed ID badge, as its card fields.

**The Plain Words Rule.** All visible text is English. No Kannada script or words appear anywhere, including on decorative objects. Bengaluru appears only as a work location.

## Layout

The layout is a single-column page offset by the fixed spine. On desktop `main` and the footer are padded left by the spine width (148px), with the rail axis at 38px. Under 720px the spine collapses to 30px with a 15px rail: labels become screen-reader-only, dots shrink to 12px, and the rider to 12px. The sticky top bar starts after the spine and uses a 88% ground tint with a 10px backdrop blur.

Horizontal rhythm is a fluid gutter (clamp(16px, 4vw, 56px)). Sections have vertical padding of clamp(64px, 10vh, 112px). The hero is a two-column grid (1.05fr / 0.95fr), at most 640px tall, with the intro column capped at 34rem and the lanyard stage on the right. Below 980px it stacks, and the badge stage moves first at 330px tall. "Right now" is three quiet columns under a hairline each (icon well, title, one line), stacking at 980px; it starts close under the hero. Project cards use a three-track row (96px year / body / story link) that becomes one column at 980px. "Off the clock" is the concave carousel of interest cards (64vw cards on phones). Contact is 1.15fr / 0.85fr (compose panel / find-me panel) and stacks at 980px. Story pages cap content at 1120px and use 3-up grids (fact cards, capability tiles, highlight boxes, learnings) that become 2-up or 1-up at 980px and 720px; the problem / intent pair is 2-up, then stacks.

Gaps follow a loose 6 / 8-10 / 14-18 / 28px rhythm: tight inside chips, medium between controls, larger before section bodies. Scroll anchors offset by 72px for the sticky bar.

## Elevation & Depth

The system uses a soft hybrid. Most surfaces are flat, separated by tone (ground, blush-deep well, white surface) and a 1px petal-line border. Lifted objects (the badge fallback, hovered project and interest cards, the game frame, HUD pills, the ticket, touch pad buttons, the toast) share one plum-tinted ambient shadow. At night the shadow turns black and deepens. Separately, the station dots carry a ring of ground colour so they read as cut out of the line.

### Shadow Vocabulary
- **Ambient lift** (`box-shadow: 0 18px 40px -20px rgba(90, 20, 55, .35), 0 3px 8px -4px rgba(90, 20, 55, .16)`; night `0 18px 40px -20px rgba(0,0,0,.7), 0 3px 8px -4px rgba(0,0,0,.5)`): every floating object.
- **Go button press** (`box-shadow: 0 8px 16px -10px rgba(20, 10, 16, .5)`): under the leaf primary button only.
- **Inset hairline** (`box-shadow: inset 0 0 0 1.5px <line or ink or magenta>`): the border for quiet and play buttons.
- **Ground halo** (`box-shadow: 0 0 0 4px var(--ground)`, 3px on mobile, ): separates the rider from what's under them.

### Named Rules
**The Soft Lift Rule.** There is one ambient shadow, tinted plum. Never use hard offset shadows or neon glows.

## Shapes

All shapes are rounded. Circles are reserved for the station language (spine dots, rider, route stops, round controls, the coin, the ticket punch holes). Rectangles carry soft corners that grow with the size of the container: 6px keycaps, 8px tech chips, 12px buttons and wells, 14px link-row hit areas, 16px fact cards and the ticket, 18px tiles, 20px project cards and story boxes, 22px game frame, 24px compose and find-me panels. Pills (99px) are for status, theme switch, tags, route-flow stops, reason chips and the play button. Route lines are 2-4px bars with rounded ends (2px for the quiet link-row connector, 3-4px for magenta route segments). Borders are 1px petal-line on cards and 1.5px on interactive outlines. Unfilled stops are a 3-4px ring around a surface fill. The stop marked "you are here" is filled solid.

## Components

### Buttons
Buttons are friendly and compact, with a firm press and a small lift.
- **Shape:** gently rounded (12px). The play button is a pill.
- **Primary (Go):** leaf fill, leaf-ink text, Hanken 700 0.92rem, 11px 18px padding, an optional leading 1.1em stroke icon. On hover it lifts 2px with the house easing. Use it for Resume, Write to me, Start game and Play again.
- **Quiet:** surface fill with a 1.5px petal-line inset ring. The ring turns ink on hover. Use it for secondary links such as Say hello.
- **Play:** transparent pill with a magenta 1.5px ring and magenta text, filling solid magenta on hover. It carries the sky coin glyph. There is only one, the hero link to the game.
- **Disabled:** aria-disabled at 55% opacity with a not-allowed cursor and no lift. An inline `small` note ("soon") explains why.
- **Focus:** a global 2.5px magenta outline offset 3px.

### Chips
- **Tech chips:** 8px-radius outline chips (1px petal-line), 0.75rem 600, right-aligned on project cards.
- **Tag:** a blush-deep pill beside a project title.
- **Topic chips:** surface pills (0.85rem, 6px 12px, petal-line border) under a story tagline and on project cards, naming subject areas (for example Computer Vision, OCR) rather than tools.
- **Tool chips:** surface pills with a 30px blush-deep round mark holding a Simple Icons logo drawn in magenta (a neutral terminal glyph when no logo exists), then the tool name.
- **Placeholder note:** a dashed-border pill in plum-soft that marks pending content honestly.

### Cards / Containers
- **Project card:** 20px radius, surface, 1px petal-line border, fluid padding. No thumbnail: a quiet year column (Bricolage 700, plum-soft, tabular), then name, tag, one line and left-aligned topic chips, with "Read the story" on the right. A card with a story page is a link: it lifts 3px with the ambient shadow and a magenta border on hover and ends with a magenta "Read the story" line with an arrow.
- **Story boxes:** 20px surface boxes with a 1.2rem Bricolage heading. The **intent** box is the one large magenta fill on a story page, with ink-on-magenta text. Highlight boxes hold a small definition list (What it does / Why it matters / My focus or Focus) with magenta terms.
- **Fact cards:** three 16px surface cards under the story tagline with a plum-soft label and a bold value.
- **Capability tiles:** 18px tiles with a dashed petal-line border and a 40px blush-deep icon well. Tiles marked as the author's part get a solid magenta border and a magenta "My part" pin.
- **Story flow:** four stops on a 4px magenta route (horizontal on desktop, vertical under 980px), the last stop filled.
- **Compose panel:** 24px radius, surface, bordered, fluid padding.
- **Envelope:** a 16px blush-deep well that previews the drafted email as a definition list.

### Inputs / Fields
- **Reason picker:** a group of pill toggle buttons (aria-pressed) with a 1.5px petal-line ring. The ring turns magenta on hover, and a selected pill fills magenta. It replaces a form and rewrites the envelope preview.

### Navigation
- **Route spine:** a fixed left column. A 4px petal-line track runs full height, a 4px magenta fill grows to the scroll position, and a 16px magenta rider with a ground halo leads it. Every part is centred on the rail axis. Stops are 14px surface dots with 3px rings: passed stops ring magenta, and the active stop scales to 1.25 with its label in ink. Labels are Hanken 600 0.8rem in plum-soft.
- **Top bar:** sticky and blurred. It holds the wordmark (Bricolage 800 1.05rem), a status line with a magenta dot pinging every 2.6s, and a 62 x 32 theme switch (role="switch", icons only, no words). The track is a little sky: pink by day with a faint moon at the far end, deep plum by night with three stars. A white knob carrying a magenta sun slides across and turns into a plum knob with a pink moon. On click the knob slides first; after 260ms the new theme spreads out in a circle from the switch through a View Transition (750ms, cubic-bezier(.65,0,.35,1)). Without View Transitions, or under reduced motion, the theme switches instantly. The track and knob use fixed sky colours on purpose: the switch depicts day and night rather than following the theme tokens.
- **Footer terminus:** an open magenta ring ends the line ("End of the line."), followed by a back-to-top link.

### Logo
The mark is a lowercase **"a."** in Bricolage Grotesque at weight 500, outlined to SVG paths (src/components/Logo.tsx), all in one colour: plum ink by day, night ink after dark (currentColor). It replaces the name in the top bar at 26px tall, with the full name kept as the link's accessible label. Clear space is at least the height of the dot on every side; minimum size 16px. Never recolour part of the mark, add a second colour, outline it or set it in another face. Icons: `favicon.svg` (switches ink by colour scheme), `favicon.ico` fallback, and cream-ground PNGs for touch, PWA and maskable icons (the mark at 62% width, 50% for maskable). The link-preview card (og-image.png, 1200x630) sets the mark, the name in Bricolage 800, "AI Engineer · Bengaluru" and a short route line on the dotted cream ground.

### Tinted Cursor
The regular arrow and pointing hand, drawn in bougainvillea #B42D68 with a 1.5px white outline (public/cursors/arrow.svg and pointer.svg, set through the `--cur-arrow` and `--cur-link` tokens) so they read on both themes. The cursor never changes size. Text fields keep the text caret, and the lanyard badge shows the system grab hand. If the SVG cursors cannot load, the system arrow and pointer are used.

### Lanyard Badge
React Bits Lanyard in the hero stage, configured with a white card in the "shimmer" finish (holographic foil at 0.12 strength, a faint pearly sheen as it tilts without hurting legibility), silver metal, a magenta strap (#B42D68 plus a painted strap texture), a centre anchor, size 0.5 (0.74 when narrow), strap length 0.12 (0 when narrow), strap width 0.8, breeze 0.35, and the intro drop. Two local changes, noted in the file header: dragging is clamped to the visible frame, and the "shimmer" finish was added. The front is painted to canvas at 1024 x 1440 from the light palette as a sticker-covered badge: a magenta header, a large circular photo (public/anagha-badge.jpg, face centred), the name in Bricolage 800 at about 110px, the role in a blush pill, three outlined skill chips (Python, Computer Vision, AI), a dashed divider, and a small handwritten signature in Mrs Saint Delafield, centred at the bottom (badge only, never page UI). Three die-cut vector stickers sit on the edges and never cover text: a smiling magenta laptop, a sky coffee cup, and a leaf camera with a dashed detection box. The back holds field labels and values (Role, Interests, Studied, Say hi). Without WebGL it falls back to the front image (220px, 18px radius, ambient lift). The badge keeps its day palette in both themes because it is a printed object.

### Concave Carousel
The interest cards stand on a concave wall: perspective 900px, translateX/Z and rotateY per card on a radius derived from the card width, side mask fades at 9% / 91%, and a faint floor reflection. Cards are 4:5, 18px radius; the front card gets a magenta border and its "Tap to open" line. It can be dragged, turned with the arrow keys or the 42px round controls (with a tabular count), autoplays gently until touched, and pans vertically on touch. A tap that is not a drag (under 6px) opens the front card or brings a side card forward; Enter or Space opens the front card.

### Interest Cards (open and flip)
Each interest card shows a cover drawn in the **line-art system** (monoline 1.75px strokes in ink, exactly one magenta accent, rounded joins, no fills, no faces, on a 120 grid: headphones with a sound wave, a jhumka, guitar/pencil/clay bowl, three fanned felt pens over a scribble), or a photo when one exists, plus a "N pictures" pill. It opens a native `<dialog>` (max 560px, 24px surface shell, blurred ink backdrop, 0.45s rise-in). Inside, a two-sided card flips on rotateY over 0.6s with the house easing: the **front** is a contained photo gallery on blush-deep (arrows, swipe, dot pager; photos are never cropped), the **back** is her words in Bricolage 500 on the ground colour with a dashed petal-line border (a definition list with magenta terms when the back is a list). A quiet "Flip it over / See the front" button toggles it (aria-pressed); the hidden face is inert. Under reduced motion the faces cross-fade. Esc, the close button or a backdrop click closes it and focus returns to the carousel.

### Ship it! Game and Score Ticket
A canvas platformer in a 22px blush-deep frame (16:6, 4:3 on mobile) with ambient lift. It is drawn entirely from live tokens: ground-2 sky, surface platforms with a magenta top edge, sky-blue coins, an ink bug, and a magenta DEPLOY flag. The cartoon human player is the only place with fixed skin and hair tones. The HUD is surface pills, and the overlay is a 72% blush-deep wash with a 3px blur. Keycaps (kbd) have a 3px bottom border. Touch pads are 54px round buttons, with a 64px magenta jump button. Finishing issues the **score ticket**: a 340px surface stub with a 16px radius that tilts in from -3deg over 0.7s. Its stats use a definition list with tabular figures. A perforation line (2px dashed petal-line with 18px punch holes cut in ground-2 at each edge) separates the stats from a 2.2rem magenta Bricolage score with an optional magenta "best" pill. The ticket ends with Play again (Go) and Say hello (Quiet).

### Find-me Panel
A 24px surface panel beside the compose panel, headed "Or find me here". Inside, four compact link rows (Email, LinkedIn, GitHub, Resume) hang off a 2px petal-line connector, like stops on a quiet branch line. Each row has a 40px round stop (surface fill, 2px petal-line ring, magenta stroke icon), a bold label, a plum-soft detail line, and a trailing arrow ("Copy" for email). On hover the stop fills magenta and the arrow nudges 3px right. Email copies to the clipboard, swaps its line to "Copied!" and shows the ink toast. An unavailable link shows a dashed stop and a "Soon" pill. A dashed hairline separates a location line (pin icon, Bengaluru, India, IST) at the foot of the panel.

### Story Pages
Each project has a page at /projects/<slug> built from one `CaseStudy` content file. Order: overview (back link, story title, tag, tagline, topic chips, fact cards), problem / intent pair, capability tiles, flow, three highlight boxes, tool chips, learnings, then All projects / Next project buttons. Sections fade up 18px once as they arrive and stay visible without JS or under reduced motion. Copy stays high level: no model names, client names, metrics or internals.

## Do's and Don'ts

### Do:
- **Do** centre every spine element (track, fill, rider, dots) on the single rail axis (38px desktop, 15px mobile).
- **Do** keep leaf green for the one primary action in a group. Secondary actions are quiet surface buttons.
- **Do** express sequence and progress with the station language: open rings, a filled "here" ring, 3-4px rounded route segments.
- **Do** read every colour from tokens so light and plum-night themes stay complete, canvas included.
- **Do** use the single house easing (cubic-bezier(.16, 1, .3, 1)) for lifts, scale changes and entrances, and collapse all motion under prefers-reduced-motion.
- **Do** give every playful element (badge drag, carousel, game, cursor) a keyboard and touch equivalent.
- **Do** mark pending content with the dashed placeholder pill rather than inventing it.

### Don't:
- **Don't** add eyebrows, kickers or small uppercase tracked labels above headings.
- **Don't** set type larger than 3.6rem or use oversized display numerals.
- **Don't** use Kannada script or words anywhere.
- **Don't** turn metro inspiration into a transit theme: no line numbers, platform signage, route maps as decoration, or ticket-gate chrome beyond the game's score stub.
- **Don't** use dark neon, glowing gradients, neural-net imagery or skill bars.
- **Don't** draw cartoon clip art (faces on objects, filled blobs, mixed styles). Illustrations use the one line-art system; real photos beat drawings.
- **Don't** stack route-line motifs: the spine and the journey are the only routes. No pipeline chips, and no AEGIS internals anywhere.
- **Don't** use hard offset shadows. Depth is the one soft plum ambient lift.
- **Don't** fill large areas with magenta, or use green or sky for anything other than their jobs.
