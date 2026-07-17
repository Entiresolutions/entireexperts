export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  overview: string;
  problems: string[];
  deliverables: string[];
  features: string[];
  technologies: string[];
  process: ServiceProcessStep[];
  industries: string[];
  benefits: string[];
  faqs: ServiceFaq[];
  relatedServiceSlugs: string[];
};
