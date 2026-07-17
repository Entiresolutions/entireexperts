import { z } from "zod";
import { budgetRanges, timelines, serviceInterests, sanitizedText, optionalSanitizedText, honeypotField } from "@/lib/validation/common";

export const quoteFormSchema = z.object({
  fullName: sanitizedText(120),
  email: z.string().trim().toLowerCase().email("Enter a valid business email address.").max(200),
  company: optionalSanitizedText(120),
  service: z.enum(serviceInterests, { message: "Select the service you need." }),
  budget: z.enum(budgetRanges, { message: "Select an estimated budget." }),
  timeline: z.enum(timelines, { message: "Select a project timeline." }),
  projectDetails: sanitizedText(4000),
  consent: z.literal(true, {
    message: "You must agree to be contacted before submitting.",
  }),
  website: honeypotField,
  turnstileToken: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
