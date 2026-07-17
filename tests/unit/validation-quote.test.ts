import { describe, expect, it } from "vitest";
import { quoteFormSchema } from "@/lib/validation/quote";

const validPayload = {
  fullName: "Sam Lee",
  email: "sam@example.com",
  company: "",
  service: "SaaS Product Development",
  budget: "$50,000 - $100,000",
  timeline: "3-6 months",
  projectDetails: "We want to rebuild our billing system to support multiple teams per account.",
  consent: true,
  website: "",
};

describe("quoteFormSchema", () => {
  it("accepts a fully valid submission", () => {
    expect(quoteFormSchema.safeParse(validPayload).success).toBe(true);
  });

  it("requires project details", () => {
    const result = quoteFormSchema.safeParse({ ...validPayload, projectDetails: "" });
    expect(result.success).toBe(false);
  });

  it("requires an explicit budget selection", () => {
    const result = quoteFormSchema.safeParse({ ...validPayload, budget: "" });
    expect(result.success).toBe(false);
  });

  it("rejects when consent is missing", () => {
    const withoutConsent: Partial<typeof validPayload> = { ...validPayload };
    delete withoutConsent.consent;
    const result = quoteFormSchema.safeParse(withoutConsent);
    expect(result.success).toBe(false);
  });
});
