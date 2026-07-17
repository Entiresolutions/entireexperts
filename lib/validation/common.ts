import { z } from "zod";

export const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
] as const;

export const timelines = [
  "Within 1 month",
  "1-3 months",
  "3-6 months",
  "6+ months",
  "Flexible",
] as const;

export const serviceInterests = [
  "Custom Software Development",
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "SaaS Product Development",
  "AI & Automation Solutions",
  "AI Chatbot Development",
  "E-commerce Development",
  "UI/UX Design",
  "API Development & Integration",
  "Cloud Solutions",
  "DevOps & Deployment",
  "Software Maintenance & Support",
  "SEO",
  "Digital Marketing",
  "Call Center Services (Inbound & Outbound)",
  "Customer Support Outsourcing",
  "Medical Billing Services",
  "DME Billing Services",
  "Trucking & Dispatch Services",
  "Back-Office & Data Entry Services",
  "Not sure yet",
] as const;

// Sanitizes free-text fields: strips control characters and caps length so a
// single field can't be used to smuggle oversized payloads or header-injection
// attempts into downstream email content.
export const sanitizedText = (maxLength: number) =>
  z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(maxLength, `Please keep this under ${maxLength} characters.`)
    .transform((value) => value.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " "));

export const optionalSanitizedText = (maxLength: number) =>
  z
    .string()
    .trim()
    .max(maxLength, `Please keep this under ${maxLength} characters.`)
    .transform((value) => value.replace(/[\r\n\t]+/g, " ").replace(/\s{2,}/g, " "))
    .optional()
    .or(z.literal(""));

// Honeypot field: real visitors never fill this in (it's hidden via CSS), but
// it must still validate successfully when a bot *does* fill it in — the
// route handler is what inspects the value and silently short-circuits,
// rather than the schema rejecting it outright and giving the bot a
// distinguishable error response.
export const honeypotField = z.string().max(200).optional().or(z.literal(""));
