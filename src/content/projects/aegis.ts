import type { CaseStudy } from './types';

// Public, high-level story. Keep it free of model names, methods, client or site details, numbers and code:
// AEGIS is a private Techcrafter product.
export const aegis: CaseStudy = {
  slug: 'aegis',
  name: 'AEGIS',
  tag: 'Techcrafter product · 2026',
  tagline: 'An industrial safety platform that makes the cameras a workplace already has more useful.',
  topics: ['Artificial Intelligence', 'Computer Vision', 'Industrial Safety', 'Analytics'],
  facts: [
    { label: 'My role', value: 'AI Engineer' },
    { label: 'My part', value: 'Safety detection modules' },
    { label: 'Status', value: 'In production' }
  ],
  problem:
    'Most workplace safety issues are noticed only after something goes wrong. Many sites already have cameras, but watching every screen all day is not practical.',
  intent:
    'Help safety teams move from reacting to incidents towards spotting risks early, using the systems they already have.',
  capabilities: [
    { icon: 'helmet', title: 'Safety gear', text: 'PPE compliance in work areas that need it.', mine: true },
    { icon: 'fall', title: 'Falls', text: 'Flags likely falls so help arrives sooner.', mine: true },
    { icon: 'posture', title: 'Unsafe posture', text: 'Postures that may strain the body over time.', mine: true },
    { icon: 'flame', title: 'Fire & smoke', text: 'Possible fire and smoke conditions.' },
    { icon: 'drop', title: 'Spills & debris', text: 'Spills and unsafe floor conditions.' },
    { icon: 'thermo', title: 'Heat stress', text: 'Heat stress from environmental readings.' }
  ],
  flow: [
    { title: 'Observe', text: 'Works with existing workplace cameras and environmental data.' },
    { title: 'Analyse', text: 'Independent safety modules each look out for one kind of risk.' },
    { title: 'Structure', text: 'Findings become consistent safety events.' },
    { title: 'Inform', text: 'Events feed alerts and reports for the safety team.' }
  ],
  built: [
    {
      icon: 'posture',
      title: 'Unsafe posture',
      what: 'Flags postures that could lead to strain if they continue.',
      why: 'Strain injuries build up slowly, so early signals help.',
      how: 'Making the results useful for safety teams while respecting worker privacy.'
    },
    {
      icon: 'fall',
      title: 'Fall detection',
      what: 'Identifies potential worker falls.',
      why: 'The sooner someone knows, the sooner help can arrive.',
      how: 'Keeping alerts dependable, so everyday movement is not mistaken for a fall.'
    },
    {
      icon: 'helmet',
      title: 'PPE detection',
      what: 'Checks whether the required safety gear is being worn.',
      why: 'Missing gear is a common and preventable risk.',
      how: 'Making it work well with the kind of camera setups found on real sites.'
    }
  ],
  tools: ['python', 'pytorch', 'opencv', 'numpy', 'fastapi', 'sqlalchemy', 'postgresql'],
  learned: [
    'An AI product is much more than a model. A lot of the work is making separate parts run reliably together.',
    'Keeping detection separate from storage, alerts and reporting makes a system easier to test and grow.',
    'Real-world footage is the best teacher. It shows problems a clean demo never will.'
  ]
};
