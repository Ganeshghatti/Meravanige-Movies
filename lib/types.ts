export interface ServiceItem {
  title: string;
  description?: string;
}

export interface Film {
  id: number;
  title: string;
  image: string;
  year: string;
  role: string;
}

export interface Voice {
  name: string;
  role: string;
  url: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Topic {
  id: number;
  name: string;
}

export interface Quote {
  text: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  metric: string;
  description: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}
