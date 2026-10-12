import { aegis } from './aegis';
import { hiremateai } from './hiremateai';
import { notifynpick } from './notifynpick';
import type { CaseStudy } from './types';

/** Story pages, in the order they appear on the home page. */
export const caseStudies: CaseStudy[] = [aegis, hiremateai, notifynpick];

export const findCaseStudy = (slug: string | undefined) => caseStudies.find(c => c.slug === slug);
