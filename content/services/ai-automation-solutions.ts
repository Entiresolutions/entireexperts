import type { ServiceContent } from "@/content/services/types";

export const aiAutomationSolutions: ServiceContent = {
  slug: "ai-automation-solutions",
  name: "AI & Automation Solutions",
  seoTitle: "AI Automation Services",
  metaDescription:
    "AI automation for document processing, internal workflows, and repetitive manual tasks — scoped around a specific bottleneck, not AI for its own sake.",
  h1: "AI automation aimed at a specific bottleneck, not a buzzword",
  overview:
    "The automation projects that pay off start with a task someone can name in one sentence — data being re-typed from documents, an approval chain requiring manual cross-checks, a report compiled by hand every week. We scope automation around that specific bottleneck, and we'll tell you directly when a process isn't a good fit for automation yet rather than building it anyway.",
  problems: [
    "Staff spend hours manually re-entering data from documents into internal systems",
    "Approval workflows require manually checking multiple systems before sign-off",
    "Reports are compiled by hand on a recurring schedule",
    "Repetitive customer questions consume support team capacity that could go to harder issues",
  ],
  deliverables: [
    "A scoped automation plan identifying exactly which manual steps are replaced",
    "Working automation integrated with your existing systems, not a standalone tool",
    "A human review step built in wherever error cost is high",
    "Monitoring so automated processes surface failures rather than failing silently",
  ],
  features: [
    "Document and data extraction feeding directly into existing systems",
    "Rule-based and AI-assisted workflow automation, chosen based on the task",
    "Human-in-the-loop review steps for judgment-dependent decisions",
    "Audit logging for every automated action taken",
  ],
  technologies: ["Python", "Node.js", "OpenAI & Anthropic APIs", "LangChain", "PostgreSQL"],
  process: [
    { title: "Identify the specific bottleneck", description: "We name the exact manual task being replaced before any technical design starts." },
    { title: "Evaluate whether it's a good automation candidate", description: "Consistency of the underlying logic and cost of an error are checked before committing budget." },
    { title: "Build with a human checkpoint where it matters", description: "High-stakes decisions keep a review step rather than running fully unattended." },
    { title: "Monitor and iterate post-launch", description: "Automated processes are monitored so failures surface immediately instead of going unnoticed." },
  ],
  industries: ["Fintech", "Professional services", "Healthcare", "Logistics & Field Services"],
  benefits: [
    "Hours of manual work reduced to a review-and-approve step",
    "Automation scoped to tasks it's actually well-suited for",
    "Existing systems kept in sync without manual re-entry",
    "An honest assessment when a process isn't ready for automation yet",
  ],
  faqs: [
    {
      question: "How do you decide if a process is a good fit for automation?",
      answer:
        "By checking how often the task happens, whether the underlying logic is consistent or requires case-by-case judgment, and what an error would cost. If a process doesn't clear that bar, we'll say so rather than building it anyway.",
    },
    {
      question: "Will automation replace our team?",
      answer:
        "The goal is to remove repetitive manual work, not the people doing it — most engagements free up staff time for the judgment-based work automation can't do, rather than reducing headcount.",
    },
    {
      question: "How is this different from AI Chatbot Development?",
      answer:
        "This service covers internal workflow and document automation. AI Chatbot Development is specifically about customer-facing conversational assistants — see that page if a chatbot is your primary interest.",
    },
  ],
  relatedServiceSlugs: ["ai-chatbot-development", "api-development-integration", "custom-software-development"],
};
