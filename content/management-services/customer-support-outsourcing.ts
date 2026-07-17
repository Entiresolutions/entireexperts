import type { ServiceContent } from "@/content/services/types";

export const customerSupportOutsourcing: ServiceContent = {
  slug: "customer-support-outsourcing",
  name: "Customer Support Outsourcing",
  seoTitle: "Customer Support Outsourcing Services",
  metaDescription:
    "Outsourced customer support across email, chat, and phone — trained agents, documented processes, and reporting, so support scales without an in-house hiring cycle.",
  h1: "Support coverage across email, chat, and phone without the in-house hiring cycle",
  overview:
    "Support volume rarely grows in a straight line — it spikes around launches, campaigns, and renewals. We provide outsourced customer support across email, live chat, and phone, staffed by agents trained on your product and documentation, so ticket volume gets handled on a consistent SLA instead of piling up during busy periods.",
  problems: [
    "Support ticket backlog grows during launches or seasonal peaks",
    "Response times are inconsistent because support is handled by whoever has time",
    "There's no coverage outside standard business hours",
    "Support knowledge lives in one or two people's heads instead of a documented process",
  ],
  deliverables: [
    "A trained support team covering email, live chat, and/or phone",
    "Documented response guidelines and escalation rules built from your existing knowledge base",
    "Agreed response-time and resolution SLAs with regular reporting against them",
    "A structured handoff process for issues that need your internal team",
  ],
  features: [
    "Multi-channel coverage: email, live chat, and phone support",
    "Tiered escalation so routine tickets are resolved directly and complex ones reach the right person",
    "Extended-hours or 24/7 coverage where needed",
    "Ticket tagging and reporting that surfaces recurring issues back to your product team",
  ],
  technologies: ["Helpdesk & ticketing platforms", "Live chat tooling", "Knowledge base systems", "SLA reporting dashboards"],
  process: [
    { title: "Audit your existing support process", description: "We review current tickets, response patterns, and documentation to understand what's actually being asked and answered." },
    { title: "Build the knowledge base and playbooks", description: "Response guidelines are documented from your existing answers, not written from scratch by someone unfamiliar with your product." },
    { title: "Onboard and shadow", description: "Agents shadow live tickets before handling them independently, with your team reviewing early responses." },
    { title: "Report against SLAs", description: "Response time, resolution time, and ticket volume are tracked and reviewed on a regular cadence." },
  ],
  industries: ["SaaS", "E-commerce & Retail", "Professional services"],
  benefits: [
    "Consistent response times instead of support quality that depends on who's available",
    "Support coverage that extends beyond standard business hours",
    "A documented process that doesn't depend on one or two people's memory",
    "Recurring issues surfaced back to your product team through structured reporting",
  ],
  faqs: [
    {
      question: "Will support agents actually know our product?",
      answer:
        "Agents are trained on your documentation and shadow real tickets before handling them independently — this isn't a generic script-reading service.",
    },
    {
      question: "What happens with issues agents can't resolve?",
      answer:
        "A defined escalation path routes complex or sensitive issues to your internal team, with full context attached so nothing has to be re-explained.",
    },
    {
      question: "Can this cover chat and phone as well as email?",
      answer:
        "Yes — channels are scoped during onboarding based on where your customers actually reach out, and can expand over time.",
    },
  ],
  relatedServiceSlugs: ["call-center-services", "back-office-data-entry-services"],
};
