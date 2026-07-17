import type { ServiceContent } from "@/content/services/types";

export const callCenterServices: ServiceContent = {
  slug: "call-center-services",
  name: "Call Center Services (Inbound & Outbound)",
  seoTitle: "Inbound & Outbound Call Center Services",
  metaDescription:
    "Managed inbound and outbound call center services — order support, appointment setting, lead follow-up, and overflow coverage staffed and reported on by EntireXperts.",
  h1: "Call center coverage that scales with your call volume, not your headcount",
  overview:
    "Standing up an in-house call team means hiring, training, scheduling, and QA before a single call is handled. We run inbound and outbound call center operations as a managed service — agents, scripts, quality monitoring, and reporting — so you get coverage that flexes with seasonal or campaign-driven volume instead of a fixed headcount you have to staff for the worst week of the year.",
  problems: [
    "Inbound call volume spikes during campaigns or peak season and existing staff can't keep up",
    "Outbound follow-up on leads or renewals is inconsistent because it competes with other team priorities",
    "After-hours and overflow calls currently go to voicemail instead of a live agent",
    "There's no consistent call scripting or QA process, so call quality varies by agent",
  ],
  deliverables: [
    "A staffed and trained agent team for inbound support, outbound calling, or both",
    "Call scripts and escalation paths built around your actual product or service",
    "Call recording, QA scoring, and regular performance reporting",
    "Integration with your existing CRM or ticketing system so call outcomes are logged where your team already works",
  ],
  features: [
    "Inbound support, order-taking, and appointment scheduling",
    "Outbound lead follow-up, renewal calls, and survey/feedback campaigns",
    "Overflow and after-hours coverage that hands back to your team seamlessly",
    "Real-time and historical reporting on call volume, handle time, and outcomes",
  ],
  technologies: ["Cloud-based dialer & IVR platforms", "CRM integrations", "Call recording & QA tooling", "Reporting dashboards"],
  process: [
    { title: "Map your call flows", description: "We document how calls should be handled today — scripts, escalation rules, and the systems agents need access to." },
    { title: "Hire and train against your process", description: "Agents are trained on your specific product, tone, and edge cases before taking live calls, not a generic script." },
    { title: "Run a pilot volume", description: "A smaller volume or a single campaign runs first so quality is validated before scaling up." },
    { title: "Report and iterate", description: "Regular QA scoring and outcome reporting drive script and process adjustments over time." },
  ],
  industries: ["E-commerce & Retail", "Healthcare", "Professional services", "Logistics & Field Services"],
  benefits: [
    "Coverage that scales up or down with actual call volume instead of a fixed headcount",
    "Consistent call quality through scripting and ongoing QA",
    "Fewer missed calls and less voicemail during peak periods",
    "Call outcomes logged directly into the systems your team already uses",
  ],
  faqs: [
    {
      question: "Can you handle both inbound and outbound calling for the same account?",
      answer:
        "Yes — many accounts run both, for example inbound support paired with outbound renewal or lead follow-up calls, staffed by the same trained team.",
    },
    {
      question: "Do agents work from our scripts or generic ones?",
      answer:
        "Scripts and escalation paths are built around your specific product and process during onboarding, not a generic call center template.",
    },
    {
      question: "How is call quality monitored?",
      answer:
        "Calls are recorded and scored against agreed QA criteria, with regular reporting so you can see quality trends, not just volume.",
    },
  ],
  relatedServiceSlugs: ["customer-support-outsourcing", "back-office-data-entry-services"],
};
