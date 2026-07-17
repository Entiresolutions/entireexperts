import type { ServiceContent } from "@/content/services/types";

export const dmeBillingServices: ServiceContent = {
  slug: "dme-billing-services",
  name: "DME Billing Services",
  seoTitle: "DME Billing Services for Equipment Suppliers",
  metaDescription:
    "Durable medical equipment billing support — documentation tracking, claims submission, and reimbursement follow-up handled so suppliers spend less time on paperwork.",
  h1: "DME billing and documentation handled so equipment gets paid for on time",
  overview:
    "Durable medical equipment billing carries its own documentation burden — proof of delivery, medical necessity paperwork, and prior authorization requirements that vary by payer and equipment type. We handle the billing and documentation-tracking workload behind DME claims, from intake through reimbursement follow-up, so suppliers spend less time chasing paperwork and more time serving patients.",
  problems: [
    "Claims get denied for missing or incomplete documentation (proof of delivery, medical necessity, authorization)",
    "Prior authorization requirements vary by payer and equipment type, and tracking them manually is error-prone",
    "Rental and recurring-supply billing cycles are easy to miss without a dedicated process",
    "There's limited visibility into which claims are pending, denied, or paid",
  ],
  deliverables: [
    "Documentation intake and tracking against each payer's requirements before submission",
    "Claims submission for both one-time and recurring rental/supply billing",
    "Denial follow-up focused on documentation gaps and authorization issues",
    "Reporting on claim status, denial reasons, and outstanding reimbursement",
  ],
  features: [
    "Documentation checklists matched to equipment type and payer requirements",
    "Recurring billing cycle tracking for rentals and resupply items",
    "Denial follow-up with a focus on correctable documentation issues",
    "Status reporting so pending and denied claims are visible, not just paid ones",
  ],
  technologies: ["DME billing & documentation software", "Clearinghouse integrations", "Reporting dashboards"],
  process: [
    { title: "Review current documentation and billing workflow", description: "We assess how documentation is currently collected and where claims are getting stuck before proposing changes." },
    { title: "Build payer-specific documentation checklists", description: "Requirements are mapped per payer and equipment category so nothing is submitted incomplete." },
    { title: "Run billing and recurring cycles", description: "One-time and recurring claims are submitted and tracked on a defined schedule." },
    { title: "Follow up and report", description: "Denials are followed up with a focus on documentation gaps, and status is reported regularly." },
  ],
  industries: ["Healthcare"],
  benefits: [
    "Fewer denials caused by missing or incomplete documentation",
    "Recurring rental and resupply billing that doesn't get missed",
    "Clear visibility into pending, denied, and paid claim status",
    "Less staff time spent chasing paperwork instead of serving patients",
  ],
  faqs: [
    {
      question: "How is DME billing different from general medical billing?",
      answer:
        "DME billing carries additional documentation requirements — proof of delivery, medical necessity, and prior authorization — that vary by equipment type and payer, and recurring rental/resupply billing cycles that general medical billing doesn't typically involve.",
    },
    {
      question: "Can you help reduce denials caused by missing documentation?",
      answer:
        "Yes — documentation checklists are built per payer and equipment category so claims are reviewed for completeness before submission, which is where most preventable DME denials originate.",
    },
    {
      question: "Do you handle recurring rental billing?",
      answer:
        "Yes, recurring rental and resupply billing cycles are tracked on a defined schedule so they aren't missed or submitted late.",
    },
  ],
  relatedServiceSlugs: ["medical-billing-services", "back-office-data-entry-services"],
};
