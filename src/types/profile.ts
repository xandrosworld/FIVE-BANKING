export type Locale = "en" | "vi";

export type LocalizedCopy = Record<Locale, string>;

export interface ProfileAsset {
  src: string;
  alt: LocalizedCopy;
  width: number;
  height: number;
}

export interface EvidenceLine {
  label: LocalizedCopy;
  value: LocalizedCopy;
}

export interface Responsibility {
  title: LocalizedCopy;
  detail: LocalizedCopy;
}

export interface FlagshipStep {
  id: string;
  meta: LocalizedCopy;
  title: LocalizedCopy;
  body: LocalizedCopy;
  asset: ProfileAsset;
}

export interface ProjectCase {
  name: string;
  repository: string;
  repositoryLabel: string;
  role: LocalizedCopy;
  evidence: LocalizedCopy;
  asset: ProfileAsset;
  featured?: boolean;
}

export interface TimelineItem {
  period: LocalizedCopy;
  organization: string;
  title: LocalizedCopy;
  detail: LocalizedCopy;
}

export interface MarketStage {
  meta: LocalizedCopy;
  title: LocalizedCopy;
  body: LocalizedCopy;
}

export interface ExpertiseCase {
  code: string;
  role: LocalizedCopy;
  title: LocalizedCopy;
  evidence: LocalizedCopy;
  signal: LocalizedCopy;
  visual: "curve" | "liquidity" | "quant";
  visualLines?: [string, string, string];
  featured?: boolean;
}

interface BaseMemberProfile {
  slug: string;
  variant: "technology" | "finance" | "advisory" | "risk" | "project";
  knowsAbout: string[];
  identity: {
    name: string;
    initials: string;
    role: LocalizedCopy;
    hero: LocalizedCopy;
    portrait: ProfileAsset;
    caption: [LocalizedCopy, LocalizedCopy];
  };
  competitionLabel: LocalizedCopy;
  heroCta: {
    label: LocalizedCopy;
    href: string;
  };
  judgeSummary: EvidenceLine[];
  teamContribution: {
    title: LocalizedCopy;
    statement: LocalizedCopy;
    intro: LocalizedCopy;
    responsibilities: Responsibility[];
  };
  background: {
    title: LocalizedCopy;
    intro: LocalizedCopy;
    timeline: TimelineItem[];
    recognition: LocalizedCopy[];
  };
  motivation: {
    title: LocalizedCopy;
    body: LocalizedCopy;
    closing: LocalizedCopy;
  };
  contact: {
    title: LocalizedCopy;
    body: LocalizedCopy;
    ctaLabel: LocalizedCopy;
    email?: string;
    github?: string;
    linkedin?: string;
  };
  seo: {
    title: string;
    description: LocalizedCopy;
  };
}

export interface TechnologyMemberProfile extends BaseMemberProfile {
  variant: "technology";
  flagshipCase: {
    name: string;
    title: LocalizedCopy;
    intro: LocalizedCopy;
    role: LocalizedCopy;
    repository: string;
    repositoryLabel: string;
    facts: Array<{
      label: LocalizedCopy;
      body: LocalizedCopy;
    }>;
    steps: FlagshipStep[];
  };
  projects: {
    title: LocalizedCopy;
    intro: LocalizedCopy;
    items: ProjectCase[];
  };
}

export interface FinanceMemberProfile extends BaseMemberProfile {
  variant: "finance" | "advisory" | "risk" | "project";
  marketCase: {
    name: string;
    sectionLabel: LocalizedCopy;
    title: LocalizedCopy;
    intro: LocalizedCopy;
    role: LocalizedCopy;
    thesis: LocalizedCopy;
    blueprintLabel: LocalizedCopy;
    blueprintMarkers: [LocalizedCopy, LocalizedCopy, LocalizedCopy];
    facts: Array<{
      label: LocalizedCopy;
      body: LocalizedCopy;
    }>;
    stages: MarketStage[];
  };
  expertise: {
    title: LocalizedCopy;
    intro: LocalizedCopy;
    items: ExpertiseCase[];
  };
}

export type MemberProfile = TechnologyMemberProfile | FinanceMemberProfile;
