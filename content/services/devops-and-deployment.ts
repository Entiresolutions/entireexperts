import type { ServiceContent } from "@/content/services/types";

export const devopsAndDeployment: ServiceContent = {
  slug: "devops-and-deployment",
  name: "DevOps & Deployment",
  seoTitle: "DevOps & Deployment Services",
  metaDescription:
    "DevOps and CI/CD pipeline setup so deployments become routine and low-risk, with automated testing and rollback built into every release.",
  h1: "Deployments that are routine, not an event the whole team braces for",
  overview:
    "If shipping a release still feels risky enough that your team schedules it for a quiet Friday night, the deployment process is the bottleneck, not the code. We build CI/CD pipelines with automated testing gates and a fast rollback path, so deployments become a routine part of the day rather than an occasion.",
  problems: [
    "Deployments are manual, slow, and risky enough that the team avoids shipping frequently",
    "There's no automated testing gate before code reaches production",
    "A bad deployment has no fast, reliable rollback path",
    "Environments differ enough between staging and production that bugs slip through",
  ],
  deliverables: [
    "A CI/CD pipeline running automated tests before every deployment",
    "Staging environments that mirror production configuration closely",
    "A documented, fast rollback process for failed deployments",
    "Deployment monitoring so failures are caught immediately",
  ],
  features: [
    "Automated test gates blocking deployment on failure",
    "Zero-downtime deployment strategies where uptime is critical",
    "Environment parity between staging and production",
    "Deployment notifications and health checks integrated into the pipeline",
  ],
  technologies: ["GitHub Actions", "Docker", "AWS", "Terraform", "Vercel"],
  process: [
    { title: "Audit the current deployment process", description: "We identify exactly where manual steps and risk currently live in the release process." },
    { title: "Build automated testing gates", description: "Tests run automatically before any code reaches production, catching regressions before users do." },
    { title: "Match staging to production", description: "Environment parity is addressed so bugs specific to configuration differences stop slipping through." },
    { title: "Add rollback and monitoring", description: "A fast, tested rollback path and deployment monitoring are in place before the new pipeline goes live." },
  ],
  industries: ["SaaS", "Fintech", "E-commerce & Retail"],
  benefits: [
    "Deployments frequent and routine instead of risky, occasional events",
    "Regressions caught by automated tests before reaching production",
    "A fast, reliable rollback path when something does go wrong",
    "Less time lost to environment-specific bugs that only show up in production",
  ],
  faqs: [
    {
      question: "Do we need to change our tech stack to adopt this?",
      answer:
        "No — CI/CD pipelines are built around your existing stack and hosting provider rather than requiring a migration to a different one.",
    },
    {
      question: "How long does it take to set up a proper pipeline?",
      answer:
        "It depends on the current state of the deployment process, but most teams see a working automated pipeline within the first few weeks of the engagement.",
    },
    {
      question: "Can this reduce our cloud costs too?",
      answer:
        "Often, yes — deployment audits frequently surface oversized or redundant infrastructure alongside the pipeline work itself; see our Cloud Solutions service for a dedicated infrastructure and cost review.",
    },
  ],
  relatedServiceSlugs: ["cloud-solutions", "software-maintenance-support", "api-development-integration"],
};
