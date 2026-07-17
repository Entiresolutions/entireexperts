import type { ServiceContent } from "@/content/services/types";

export const aiChatbotDevelopment: ServiceContent = {
  slug: "ai-chatbot-development",
  name: "AI Chatbot Development",
  seoTitle: "AI Chatbot Development Company",
  metaDescription:
    "AI chatbot development for support deflection and lead qualification — trained on your documentation, with a clear handoff to a human when needed.",
  h1: "Chatbots that handle the questions you actually get, and hand off the rest",
  overview:
    "A chatbot that tries to answer every possible question usually answers none of them well. We scope chatbots around the questions your team actually gets most often — support tickets, lead qualification, FAQ deflection — trained on your real documentation, with a clear and honest handoff to a human for anything outside that scope. The bot always identifies itself as automated; it never pretends to be a person.",
  problems: [
    "Support teams answer the same handful of questions dozens of times a day",
    "Leads aren't being qualified before they reach a sales conversation",
    "Website visitors have questions at hours when no one is available to answer",
    "An existing chatbot gives generic or incorrect answers because it isn't grounded in real documentation",
  ],
  deliverables: [
    "A chatbot trained on your actual documentation, FAQs, and service pages",
    "Lead qualification flow capturing name, contact details, and project information",
    "A clear escalation path to a human for anything the bot can't answer confidently",
    "Analytics on what visitors are actually asking, to guide future FAQ content",
  ],
  features: [
    "Provider-independent architecture so the underlying AI model can change without rebuilding the interface",
    "Honest fallback messaging when the assistant can't answer confidently",
    "Privacy-conscious design that avoids collecting sensitive personal information",
    "Full keyboard accessibility and screen reader support",
  ],
  technologies: ["TypeScript", "Node.js", "OpenAI & Anthropic APIs", "React"],
  process: [
    { title: "Audit your actual support volume", description: "We identify the questions that make up the bulk of your ticket or inquiry volume before designing the bot's scope." },
    { title: "Ground responses in real documentation", description: "The bot answers from your actual FAQs and service content, not generic training data." },
    { title: "Design the human handoff clearly", description: "Escalation paths are built in from the start, not added after the bot gives its first wrong answer." },
    { title: "Monitor real conversations post-launch", description: "Conversation logs guide iteration on what the bot handles well and what needs a documented answer added." },
  ],
  industries: ["E-commerce & Retail", "Professional services", "SaaS"],
  benefits: [
    "Support capacity freed up from repetitive, well-documented questions",
    "Leads qualified with consistent information before reaching sales",
    "24/7 coverage for common questions without misrepresenting the bot as human",
    "An architecture that isn't locked to a single AI provider",
  ],
  faqs: [
    {
      question: "Will the chatbot pretend to be a human?",
      answer:
        "No. It always identifies itself as an automated assistant and offers a clear path to a human, consistent with basic transparency expectations for AI-driven support.",
    },
    {
      question: "What happens when the bot doesn't know the answer?",
      answer:
        "It says so directly and offers to connect the visitor with the team by email or a contact form, rather than guessing or giving a generic non-answer.",
    },
    {
      question: "Can this integrate with our existing support platform?",
      answer:
        "Yes — the chatbot can be built to hand qualified conversations directly into an existing helpdesk or CRM rather than operating as a disconnected tool.",
    },
  ],
  relatedServiceSlugs: ["ai-automation-solutions", "web-application-development", "custom-software-development"],
};
