export interface Cta {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  deliverables: string[];
  cta: string;
  whatsappMsg: string;
  image: string;
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface PlantCategory {
  title: string;
  description: string;
  plants: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SiteContent {
  business: {
    name: string;
    nameShort: string;
    type: string;
    location: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    address: string;
    logo?: string;
    googleMapsUrl?: string;
    googleMapsEmbed?: string;
    workingHoursWeekdays?: string;
    workingHoursFriday?: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    tertiaryCta: Cta;
    stats: Stat[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    vision: { title: string; text: string };
    mission: { title: string; text: string };
    experience: { title: string; text: string };
  };
  services: {
    title: string;
    subtitle: string;
    description: string;
    items: Service[];
  };
  plants: {
    title: string;
    subtitle: string;
    description: string;
    categories: PlantCategory[];
    tipsTitle: string;
    tips: string[];
    closing: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  footer: {
    description: string;
    quickLinks: NavItem[];
    servicesLinks: string[];
    copyright: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
