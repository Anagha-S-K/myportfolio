// All site copy lives here. Edit this file to change what the page says.
// Anything marked `placeholder` is waiting on real content from Anagha.

export const profile = {
  name: 'Anagha S K',
  firstName: 'Anagha',
  role: 'AI Engineer',
  company: 'Techcrafter',
  location: 'Bengaluru, India',
  degree: "B.E. CSE (AI & ML), JSSATE '26",
  status: 'Open to interesting AI projects',
  email: 'anagha.sakaray@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anagha-s-k-88aa0a259/',
  github: 'https://github.com/Anagha-S-K',
  /** the source code of this site */
  repo: 'https://github.com/Anagha-S-K/myportfolio',
  /** the PDF lives in /public; set to null to show "soon" instead */
  resumeUrl: '/Anagha-S-K-Resume.pdf' as string | null,
  /** square photo in /public, face centred (used on the ID badge) */
  photoUrl: '/anagha-badge.jpg' as string | null
};

export const hero = {
  lede: "I'm currently building computer-vision solutions for factory floors, so people get home in one piece.",
  currently: [
    'building safety vision',
    'reading computer-vision research',
    'hunting for good food',
    'testing models on real-world footage',
    'practicing the art of noticing',
    'picking up new skills',
    'listening to great music'
  ]
};

export const now = {
  since: 'since May 2026',
  lead: "I'm currently building the vision side of AEGIS, Techcrafter's workplace-safety platform for manufacturing. More solutions for factories are in research.",
  // high level only: AEGIS internals, models and methods stay private
  work: [
    {
      icon: 'posture',
      title: 'Unsafe posture',
      text: 'Flags postures that could cause strain over time, and turns them into a clear weekly picture for safety teams.'
    },
    {
      icon: 'fall',
      title: 'Fall detection',
      text: 'Spots potential falls so help can arrive sooner, without mistaking everyday movement for one.'
    },
    {
      icon: 'helmet',
      title: 'PPE compliance',
      text: 'Checks that the right safety gear is being worn, on the kind of camera setups found on real sites.'
    }
  ],
  learned:
    'an AI product is much more than a model. A lot of the work is making separate parts run reliably together.'
};

/** `slug` links the card to its story page at /projects/<slug>; leave it out until the page exists. Newest first. */
export const projects: { name: string; tag: string; text: string; stack: string[]; year: string; slug?: string }[] = [
  {
    name: 'AEGIS',
    slug: 'aegis',
    tag: 'Techcrafter product',
    text: 'Workplace-safety platform on the CCTV factories already have. I built its posture, fall and PPE detection modules.',
    stack: ['Artificial Intelligence', 'Computer Vision', 'Industrial Safety', 'Analytics'],
    year: '2026'
  },
  {
    name: 'HireMateAI',
    slug: 'hiremateai',
    tag: 'Final-year project',
    text: 'Scores a resume against any job post, then helps you prep: resume builder, interview and aptitude practice.',
    stack: ['Artificial Intelligence', 'LLMs', 'Career Tech', 'Full-Stack Web App'],
    year: '2025'
  },
  {
    name: 'NotifyNPick',
    slug: 'notifynpick',
    tag: 'Client project',
    text: 'Scan a parcel, read the mailbox number, email the customer. Built for a US mail store.',
    stack: ['Computer Vision', 'OCR', 'Automation', 'Desktop App'],
    year: '2024–25'
  }
];

export const journey = [
  { title: 'JSS Academy of Technical Education', text: 'B.E. CSE (AI & ML) · 2022–26 · CGPA 8.9', here: false },
  { title: 'Hindustan Aeronautics Limited (HAL)', text: 'Project Intern · Apr–May 2025 · built and deployed an offline translation web app', here: false },
  { title: 'Techcrafter, Bengaluru', text: 'AI Engineer · May 2026 to now', here: true }
];

/** One "Off the clock" card. The carousel cover is the drawn `art` (else the first image); inside, the front shows `images` (else the art) and the back shows `back`. */
export interface Interest {
  id: string;
  title: string;
  line: string;
  /** one paragraph, or a list of [label, text] pairs */
  back: string | [string, string][];
  images?: { src: string; alt: string }[];
  art?: 'playlist' | 'jhumka' | 'learning' | 'colouring';
  /** the playlist link; leave null until it exists */
  link?: string | null;
}

export const hobbies: Interest[] = [
  {
    id: 'music',
    title: 'Sufi & folk on repeat',
    line: 'Songs with a story behind them.',
    back: "I love Sufi, Indian folk and traditional music, in as many languages as I can find. I like knowing what a song means, who wrote it and the story behind the lyrics. Fair warning: ask me about one song and you'll get the whole backstory.",
    art: 'playlist',
    link: null
  },
  {
    id: 'jhumkas',
    title: 'The jhumka collection',
    line: '60–70 pairs and counting.',
    back: "I collect Indian jewellery, mostly jhumkas. I'm at around 60–70 pairs. The long-term plan: an antique collection in 20–30 years. The only problem: I still have just two ears.",
    art: 'jhumka'
  },
  {
    id: 'learning',
    title: 'Currently learning',
    line: 'Guitar, clay and sketching.',
    back: [
      ['Guitar', 'my fingers hurt, but the chords are slowly showing up.'],
      ['Air-dry clay', 'tiny things that look handmade (because they very much are).'],
      ['Sketching', 'more pages, fewer erasers.']
    ],
    art: 'learning'
  },
  {
    id: 'colouring',
    title: 'Colouring pages',
    line: 'My favourite way to slow down.',
    art: 'colouring',
    back: 'Colouring is how I do nothing, productively. Put on some music, pick a page, and an hour quietly disappears.',
    images: [
      { src: '/off-the-clock/colouring-2.jpg', alt: 'A red butterfly among pink, blue and orange flowers' },
      { src: '/off-the-clock/colouring-1.jpg', alt: 'A blue and yellow butterfly on bright red and pink flowers' },
      { src: '/off-the-clock/colouring-3.jpg', alt: 'Green leaves and pink blooms in a Jacobean floral pattern' },
      { src: '/off-the-clock/colouring-4.jpg', alt: 'A blue butterfly in a jungle of leaves and hibiscus' }
    ]
  }
];

export const contact = {
  heading: "Let's talk.",
  sub: 'Hiring, collaboration, or a question about my work?',
  reasons: [
    { label: 'Hiring', subject: 'Hiring: AI Engineer role', body: "Hi Anagha,\n\nI'm reaching out about a role at " },
    { label: 'Collaboration', subject: "Let's build something", body: 'Hi Anagha,\n\nI had an idea we could work on together: ' },
    { label: 'Just saying hi', subject: 'Hello from your portfolio', body: 'Hi Anagha,\n\n' }
  ]
};

export const stations = [
  { id: 'hello', label: 'Hello' },
  { id: 'now', label: 'Now' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  // { id: 'off', label: 'Off the clock' },
  { id: 'play', label: 'Play' },
  { id: 'contact', label: 'Contact' }
] as const;
