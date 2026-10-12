import type { CaseStudy } from './types';

// Public story. The client stays anonymous ("a US mailbox and shipping store"); no names, addresses or numbers.
export const notifynpick: CaseStudy = {
  slug: 'notifynpick',
  name: 'NotifyNPick',
  tag: 'Client project · 2024–25',
  tagline: "A desktop app that helps a mailbox store log parcels and let customers know they're ready to collect.",
  topics: ['Computer Vision', 'OCR', 'Automation', 'Desktop App'],
  facts: [
    { label: 'My role', value: 'Developer' },
    { label: 'Client', value: 'A US mailbox and shipping store' },
    { label: 'Type', value: 'Student project for a real client' }
  ],
  problem:
    'Every parcel that came in was logged by hand, and customers had to be told one by one that something had arrived. On a busy day that meant slow check-ins and late notifications.',
  intent:
    'Turn check-in into a quick scan, and let the app take care of telling customers their parcel is ready.',
  capabilitiesTitle: 'What it does',
  capabilities: [
    { icon: 'barcode', title: 'Scan parcels', text: 'Reads the tracking barcode with a webcam.' },
    { icon: 'label', title: 'Read labels', text: 'Picks out the mailbox number from the shipping label.' },
    { icon: 'mail', title: 'Notify customers', text: 'Emails them as soon as a parcel is checked in.' },
    { icon: 'ticket', title: 'Pickup barcode', text: 'Each email carries a barcode for collection.' },
    { icon: 'out', title: 'Check-out log', text: 'Scanning that barcode records the pickup and confirms it by email.' },
    { icon: 'cloud', title: 'Safe records', text: 'Customer list, history log and automatic backups.' }
  ],
  flow: [
    { title: 'Scan', text: "A webcam reads the parcel's barcode and label." },
    { title: 'Match', text: 'The mailbox number links the parcel to the right customer.' },
    { title: 'Notify', text: 'The customer gets an email with a pickup barcode.' },
    { title: 'Pick up', text: 'Staff scan that barcode at the counter, and the pickup is logged.' }
  ],
  built: [
    {
      icon: 'barcode',
      title: 'Fast check-in',
      what: 'Turns logging a parcel into a single scan.',
      why: 'The counter stays moving, even on busy days.',
      how: 'Keeping each step quick and simple for store staff.'
    },
    {
      icon: 'mail',
      title: 'Customer notifications',
      what: 'Sends a ready-to-collect email with a pickup barcode.',
      why: 'Customers hear about their parcel without anyone picking up the phone.',
      how: 'Clear, friendly messages that work for every customer.'
    },
    {
      icon: 'cloud',
      title: 'Records & backups',
      what: 'Keeps a history of every check-in and pickup, backed up automatically.',
      why: 'Nothing is lost if the computer has a bad day.',
      how: 'Making it run quietly in the background with no extra effort from staff.'
    }
  ],
  tools: ['python', 'opencv', 'tesseract', 'pyzbar', 'tkinter', 'pandas', 'numpy', 'gmail', 'dropbox', 'pyinstaller'],
  learned: [
    "Building for a real business means designing around how people already work, not how I'd like them to.",
    'Real labels are messy. Reading text from the real world takes far more care than a clean example.',
    'Small automations save real time. A scan and an email replaced a lot of manual steps.'
  ]
};
