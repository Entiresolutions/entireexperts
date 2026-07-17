import type { ServiceContent } from "@/content/services/types";

export const softwareMaintenanceSupport: ServiceContent = {
  slug: "software-maintenance-support",
  name: "Software Maintenance & Support",
  seoTitle: "Software Maintenance & Support Services",
  metaDescription:
    "Ongoing software maintenance and support — monitoring, dependency updates, bug fixes, and small enhancements for systems already in production.",
  h1: "Keeping a system you already depend on secure, current, and online",
  overview:
    "Software that's already in production still needs regular attention: dependencies go out of date, traffic patterns shift, and small bugs accumulate if no one owns fixing them. We take on ongoing maintenance for systems already in production — monitoring, security patching, dependency updates, and a steady stream of small fixes and enhancements — so nothing is left to degrade quietly.",
  problems: [
    "Dependencies haven't been updated in a long time and security patches are overdue",
    "There's no one specifically responsible for fixing bugs as they're reported",
    "The original development team is no longer available",
    "Small enhancement requests keep getting deprioritized with no dedicated capacity to handle them",
  ],
  deliverables: [
    "A codebase audit identifying security, dependency, and reliability risks",
    "Ongoing monitoring and alerting for uptime and error rates",
    "Scheduled dependency updates and security patching",
    "A defined process for triaging and fixing reported bugs",
  ],
  features: [
    "Proactive dependency and security updates on a regular cadence",
    "Uptime and error monitoring with alerting",
    "Defined response times for critical issues",
    "Ongoing small feature and enhancement capacity",
  ],
  technologies: ["Node.js", "TypeScript", "PostgreSQL", "AWS", "Sentry"],
  process: [
    { title: "Audit the existing codebase", description: "We review dependencies, security posture, and known issues before taking on ongoing responsibility." },
    { title: "Set up monitoring where it's missing", description: "Uptime and error tracking are put in place immediately if they don't already exist." },
    { title: "Establish response expectations", description: "Response times for critical issues are agreed upfront, not improvised after something breaks." },
    { title: "Run a regular update cadence", description: "Dependency and security updates happen on a predictable schedule rather than being deferred indefinitely." },
  ],
  industries: ["SaaS", "Fintech", "Healthcare", "Professional services"],
  benefits: [
    "A system that stays secure and current instead of accumulating risk",
    "Defined response times for critical issues instead of an ad hoc scramble",
    "Bugs and small enhancements handled on an ongoing basis",
    "Continuity even after the original development team has moved on",
  ],
  faqs: [
    {
      question: "Can you take over maintenance for a system we didn't build?",
      answer:
        "Yes — most maintenance engagements start exactly this way, beginning with a codebase audit to understand what exists before taking on ongoing responsibility.",
    },
    {
      question: "What counts as a critical issue versus a routine request?",
      answer:
        "This is defined explicitly at the start of the engagement — typically anything affecting uptime or data integrity is critical, while feature requests and minor bugs follow a routine queue.",
    },
    {
      question: "Is this the same as your DevOps service?",
      answer:
        "They overlap but aren't identical — DevOps & Deployment focuses on the pipeline and infrastructure itself, while this service covers the ongoing application-level maintenance running on top of it.",
    },
  ],
  relatedServiceSlugs: ["cloud-solutions", "devops-and-deployment", "custom-software-development"],
};
