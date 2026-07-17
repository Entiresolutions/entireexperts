import type { ServiceContent } from "@/content/services/types";

export const medicalBillingServices: ServiceContent = {
  slug: "medical-billing-services",
  name: "Medical Billing Services",
  seoTitle: "Medical Billing Services for Healthcare Practices",
  metaDescription:
    "Outsourced medical billing — claims submission, denial follow-up, and payment posting handled with careful, documented processes so practices spend less time chasing reimbursement.",
  h1: "Medical billing handled end-to-end, so claims stop sitting in a queue",
  overview:
    "Billing backlogs cost practices real revenue — every day a claim sits unsubmitted or a denial goes unappealed is money that gets harder to collect. We handle medical billing operations end-to-end: claims preparation and submission, denial tracking and appeals, and payment posting, with clear documentation and reporting so your practice always knows where revenue stands. Every engagement starts with a review of your current billing workflow and payer mix before any process changes are made.",
  problems: [
    "Claims sit unsubmitted or get submitted with errors that trigger denials",
    "Denied claims aren't followed up on consistently, so recoverable revenue goes uncollected",
    "Billing staff turnover leaves gaps in a process no one else fully understands",
    "There's no clear reporting on collection rates, days in A/R, or denial trends",
  ],
  deliverables: [
    "Claims preparation and submission handled on a defined daily or weekly cadence",
    "Denial tracking with follow-up and appeals for recoverable claims",
    "Payment posting and reconciliation against expected reimbursement",
    "Regular reporting on collection rates, days in accounts receivable, and denial trends",
  ],
  features: [
    "Claims submission across common payer types and clearinghouses",
    "Denial management with root-cause tracking, not just resubmission",
    "Payment posting reconciled against the original claim and expected reimbursement",
    "Documented, auditable workflow so billing isn't dependent on a single person",
  ],
  technologies: ["Practice management & billing software", "Clearinghouse integrations", "Reporting dashboards"],
  process: [
    { title: "Review your current billing workflow", description: "We audit existing claims, denial patterns, and payer mix before proposing any process changes." },
    { title: "Set up claims and denial workflows", description: "Submission and follow-up cadences are documented and agreed with your practice before work begins." },
    { title: "Run billing operations", description: "Claims are submitted, tracked, and followed up on the agreed schedule, with issues flagged as they come up rather than discovered later." },
    { title: "Report on collections", description: "Regular reporting shows collection rates, days in A/R, and denial trends so you can see the effect on revenue directly." },
  ],
  industries: ["Healthcare"],
  benefits: [
    "Claims submitted and followed up on consistently instead of sitting in a queue",
    "Denied claims tracked and appealed instead of quietly written off",
    "Billing continuity that doesn't depend on one person's availability",
    "Clear, regular visibility into collection rates and outstanding receivables",
  ],
  faqs: [
    {
      question: "Do you work with our existing practice management or billing software?",
      answer:
        "In most cases, yes — we evaluate your current system during onboarding and work within it rather than requiring a platform switch.",
    },
    {
      question: "How do you handle denied claims?",
      answer:
        "Denials are tracked by reason, followed up on, and appealed where recoverable — with reporting on denial trends so recurring root causes can be addressed, not just resubmitted repeatedly.",
    },
    {
      question: "What reporting do we get?",
      answer:
        "Regular reporting covers claims submitted, collection rates, days in accounts receivable, and denial trends, so billing performance is visible rather than something you have to ask about.",
    },
  ],
  relatedServiceSlugs: ["dme-billing-services", "back-office-data-entry-services"],
};
