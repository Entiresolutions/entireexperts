export const siteConfig = {
  name: "Entire Expert",
  legalName: "Entire Expert",
  domain: "www.entireexpert.com",
  url: "https://www.entireexpert.com",
  tagline: "Software delivery partner for teams shipping real products",
  description:
    "Entire Expert designs and builds custom software, web platforms, mobile apps, and AI-powered automation for companies that need a dependable engineering partner, not just a vendor.",
  social: {
    // TODO(owner): replace with real profile URLs before launch, or remove unused entries.
    linkedin: "https://www.linkedin.com/company/entireexpert",
    twitter: "https://x.com/entireexpert",
    github: "https://github.com/entireexpert",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export const mainNav: (NavItem | NavGroup)[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Web Application Development", href: "/services/web-application-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "SaaS Product Development", href: "/services/saas-product-development" },
      { label: "AI & Automation Solutions", href: "/services/ai-automation-solutions" },
      { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
      { label: "E-commerce Development", href: "/services/ecommerce-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "View all services", href: "/services" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Web Application Development", href: "/services/web-application-development" },
    { label: "Mobile App Development", href: "/services/mobile-app-development" },
    { label: "Android App Development", href: "/services/android-app-development" },
    { label: "iOS App Development", href: "/services/ios-app-development" },
    { label: "Flutter App Development", href: "/services/flutter-app-development" },
    { label: "SaaS Product Development", href: "/services/saas-product-development" },
    { label: "AI & Automation Solutions", href: "/services/ai-automation-solutions" },
    { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
  ],
  moreServices: [
    { label: "E-commerce Development", href: "/services/ecommerce-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "API Development & Integration", href: "/services/api-development-integration" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "DevOps & Deployment", href: "/services/devops-and-deployment" },
    { label: "Software Maintenance & Support", href: "/services/software-maintenance-support" },
    { label: "Search Engine Optimization", href: "/services/search-engine-optimization" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Request a Quote", href: "/quote" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export const primaryCta = { label: "Start Your Project", href: "/quote" };
export const secondaryCta = { label: "View Our Work", href: "/portfolio" };
export const consultationCta = { label: "Book a Free Consultation", href: "/contact" };
