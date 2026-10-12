import type { CaseStudy } from './types';

// Public story. Neutral credit wording (no "I built", solo or team), no AI provider or model names, no repo or demo links.
export const hiremateai: CaseStudy = {
  slug: 'hiremateai',
  name: 'HireMateAI',
  tag: 'Final-year project · 2025',
  tagline: 'One place for job seekers to build a resume, see how well it fits a job, and practise for what comes next.',
  topics: ['Artificial Intelligence', 'LLMs', 'Career Tech', 'Full-Stack Web App'],
  facts: [
    { label: 'My role', value: 'Developer' },
    { label: 'For', value: 'Students and job seekers' },
    { label: 'Type', value: 'Final-year project' }
  ],
  problem:
    'Job seekers juggle separate tools for resumes, job matching, interview prep and aptitude practice, and many of the good ones are paid. Resumes often get filtered out by screening software, and freshers rarely hear why or what to improve.',
  intent:
    'Bring the whole preparation journey into one free, simple app that gives clear, honest feedback at every step.',
  capabilitiesTitle: 'What it does',
  capabilities: [
    { icon: 'resume', title: 'Resume builder', text: 'Clean, ATS-friendly templates, ready as a PDF.' },
    { icon: 'upload', title: 'Upload a resume', text: 'Works with PDF and Word files.' },
    { icon: 'target', title: 'Job match score', text: 'Compares a resume with a job description.' },
    { icon: 'bulb', title: 'Clear feedback', text: 'Strengths, gaps, and what to improve.' },
    { icon: 'chat', title: 'Interview prep', text: 'Technical and behavioural questions for a chosen role.' },
    { icon: 'quiz', title: 'Aptitude tests', text: 'Practice tests that are graded automatically.' }
  ],
  flow: [
    { title: 'Build', text: 'Create a resume, or upload the one you already have.' },
    { title: 'Match', text: 'Paste a job description to see how well the resume fits.' },
    { title: 'Prepare', text: 'Get interview questions tailored to the role.' },
    { title: 'Practise', text: 'Take an aptitude test and see your results straight away.' }
  ],
  builtTitle: 'Key features',
  focusLabel: 'Focus',
  built: [
    {
      icon: 'chat',
      title: 'Interview prep',
      what: "Suggests technical and behavioural questions for the role you're aiming for.",
      why: 'Knowing what to expect makes the real interview less stressful.',
      how: 'Questions that test understanding, not memorised answers.'
    },
    {
      icon: 'target',
      title: 'Resume–job match',
      what: 'Gives a match score with strengths, gaps and suggestions.',
      why: 'Candidates see where they stand before they apply.',
      how: 'Feedback that is clear and useful, not just a number.'
    },
    {
      icon: 'layers',
      title: 'One smooth app',
      what: 'Brings the resume, matching, interviews and aptitude practice together.',
      why: 'No jumping between tools or paying for each one.',
      how: 'A simple flow that feels like one product, not four.'
    }
  ],
  tools: ['react', 'vite', 'tailwind', 'flask', 'python', 'llm', 'reportlab', 'pdfjs', 'pyinstaller'],
  learned: [
    'AI output needs structure. Clear prompts and a consistent format make the results far more useful.',
    'Many small features only feel like one product when the flow between them is designed with care.',
    'Designing for freshers taught me to explain things simply and give feedback people can act on.'
  ]
};
