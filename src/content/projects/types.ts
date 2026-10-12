import type { IconName } from '../../components/Icons';
import type { ToolKey } from '../../components/ToolChip';

/** One project story page at /projects/<slug>. */
export interface CaseStudy {
  slug: string;
  name: string;
  tag: string;
  tagline: string;
  /** subject areas shown as chips in the page hero */
  topics?: string[];
  facts: { label: string; value: string }[];
  problem: string;
  intent: string;
  /** heading over the capability tiles; defaults to "What <name> looks out for" */
  capabilitiesTitle?: string;
  /** what the product covers; `mine` marks the parts I built */
  capabilities: { icon: IconName; title: string; text: string; mine?: boolean }[];
  /** plain-language steps, shown as stops on a route */
  flow: { title: string; text: string }[];
  /** heading and per-box label for the highlights; default "What I worked on" / "My focus" */
  builtTitle?: string;
  focusLabel?: string;
  built: { icon: IconName; title: string; what: string; why: string; how: string }[];
  tools: ToolKey[];
  toolsNote?: string;
  learned: string[];
}
