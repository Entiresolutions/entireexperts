import { z } from "zod";
import { budgetRanges, timelines, serviceInterests, sanitizedText, optionalSanitizedText, honeypotField } from "@/lib/validation/common";

export const chatbotLeadSchema = z.object({
  fullName: sanitizedText(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email address.").max(200),
  service: z.enum(serviceInterests, { message: "Select the service you need." }),
  budget: z.enum(budgetRanges, { message: "Select an estimated budget." }),
  timeline: z.enum(timelines, { message: "Select a project timeline." }),
  message: optionalSanitizedText(2000),
  website: honeypotField,
});

export type ChatbotLeadValues = z.infer<typeof chatbotLeadSchema>;

export const chatMessageSchema = z.object({
  message: sanitizedText(500),
});
