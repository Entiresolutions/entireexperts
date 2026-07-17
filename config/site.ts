export const siteConfig = {
  name: "EntireXperts",
  legalName: "EntireXperts",
  domain: "www.entirexperts.com",
  url: "https://www.entirexperts.com",
  tagline: "Software delivery partner for teams shipping real products",
  description:
    "EntireXperts designs and builds custom software, web platforms, mobile apps, and AI-powered automation for companies that need a dependable engineering partner, not just a vendor.",
  social: {
    // TODO(owner): replace with real profile URLs before launch, or remove unused entries.
    linkedin: "https://www.linkedin.com/company/entirexperts",
    twitter: "https://x.com/entirexperts",
    github: "https://github.com/entirexperts",
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
  {
    label: "Management Services",
    href: "/management-services",
    items: [
      { label: "Call Center Services (Inbound & Outbound)", href: "/management-services/call-center-services" },
      { label: "Customer Support Outsourcing", href: "/management-services/customer-support-outsourcing" },
      { label: "Medical Billing Services", href: "/management-services/medical-billing-services" },
      { label: "DME Billing Services", href: "/management-services/dme-billing-services" },
      { label: "Trucking & Dispatch Services", href: "/management-services/trucking-dispatch-services" },
      { label: "Back-Office & Data Entry Services", href: "/management-services/back-office-data-entry-services" },
      { label: "View all management services", href: "/management-services" },
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
  managementServices: [
    { label: "Call Center Services", href: "/management-services/call-center-services" },
    { label: "Customer Support Outsourcing", href: "/management-services/customer-support-outsourcing" },
    { label: "Medical Billing Services", href: "/management-services/medical-billing-services" },
    { label: "DME Billing Services", href: "/management-services/dme-billing-services" },
    { label: "Trucking & Dispatch Services", href: "/management-services/trucking-dispatch-services" },
    { label: "Back-Office & Data Entry Services", href: "/management-services/back-office-data-entry-services" },
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
