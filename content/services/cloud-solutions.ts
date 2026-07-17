import type { ServiceContent } from "@/content/services/types";

export const cloudSolutions: ServiceContent = {
  slug: "cloud-solutions",
  name: "Cloud Solutions",
  seoTitle: "Cloud Infrastructure Services",
  metaDescription:
    "Cloud infrastructure design and migration on AWS and Google Cloud, built to scale predictably and fail gracefully under real production load.",
  h1: "Cloud infrastructure that scales predictably and fails gracefully",
  overview:
    "Infrastructure problems tend to surface at the worst possible time — during a traffic spike, not during a quiet Tuesday. We design cloud infrastructure around your actual traffic and data patterns, with monitoring and alerting in place before launch, so scaling issues are caught by telemetry instead of by users hitting a slow or broken product.",
  problems: [
    "Infrastructure costs are growing faster than usage, with no clear explanation why",
    "The current setup hasn't been tested against realistic traffic spikes",
    "Deployments are manual and risky, discouraging the team from shipping frequently",
    "There's no clear monitoring in place to catch problems before users report them",
  ],
  deliverables: [
    "A cloud architecture designed around your actual traffic and data patterns",
    "Infrastructure-as-code configuration, so environments are reproducible and documented",
    "Monitoring and alerting configured before launch, not after the first incident",
    "A cost review identifying unnecessary spend in the current setup",
  ],
  features: [
    "Auto-scaling configured around real traffic patterns, not guesswork",
    "Infrastructure-as-code so environments can be rebuilt reliably",
    "Backup and disaster recovery planning appropriate to your data's sensitivity",
    "Cost monitoring to catch runaway spend before it shows up on an invoice",
  ],
  technologies: ["AWS", "Google Cloud", "Docker", "Terraform", "Kubernetes"],
  process: [
    { title: "Audit current infrastructure and cost", description: "We review what's running today, why, and what it costs before proposing changes." },
    { title: "Design around real traffic patterns", description: "Scaling rules are based on your actual usage data, not a generic default configuration." },
    { title: "Migrate or build with infrastructure-as-code", description: "Configuration is version-controlled and reproducible, not managed through manual console changes." },
    { title: "Set up monitoring before go-live", description: "Alerting is in place before launch, so the team learns about problems from telemetry, not from users." },
  ],
  industries: ["Fintech", "SaaS", "E-commerce & Retail", "Healthcare"],
  benefits: [
    "Infrastructure that scales with real traffic instead of guesswork",
    "Lower cloud spend once unnecessary resources are identified",
    "Faster, safer deployments through infrastructure-as-code",
    "Problems caught by monitoring before customers notice them",
  ],
  faqs: [
    {
      question: "Can you work with our existing AWS or Google Cloud setup?",
      answer:
        "Yes — most engagements start with an audit of the existing infrastructure rather than a full rebuild, and changes are made incrementally where possible.",
    },
    {
      question: "How do you keep cloud costs under control?",
      answer:
        "Through right-sizing resources to actual usage, identifying unused or oversized services, and setting up cost alerts so unexpected spend is caught early rather than at the end of a billing cycle.",
    },
    {
      question: "Do you handle the migration itself, or just the design?",
      answer:
        "We handle the full migration, typically staged to avoid downtime, with a rollback plan in place until the new infrastructure has proven stable.",
    },
  ],
  relatedServiceSlugs: ["devops-and-deployment", "api-development-integration", "software-maintenance-support"],
};
