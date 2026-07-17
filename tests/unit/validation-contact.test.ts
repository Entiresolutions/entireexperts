import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/validation/contact";

const validPayload = {
  fullName: "Jordan Rivera",
  email: "jordan@example.com",
  phone: "",
  company: "Acme Inc",
  service: "Custom Software Development",
  budget: "$25,000 - $50,000",
  timeline: "1-3 months",
  message: "We need a scheduling tool for our field service technicians.",
  consent: true,
  website: "",
};

describe("contactFormSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = contactFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects when consent is not explicitly true", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects an unrecognized service option", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, service: "Something Else" });
    expect(result.success).toBe(false);
  });

  it("still parses successfully when the honeypot field is filled in", () => {
    // The schema itself must not reject a filled honeypot — rejecting it here
    // would return a distinguishable error to bots. The API route is what
    // inspects `website` and silently short-circuits; see api-contact.test.ts.
    const result = contactFormSchema.safeParse({ ...validPayload, website: "http://spam.example" });
    expect(result.success).toBe(true);
  });

  it("strips newlines from free-text fields to prevent header/log injection", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      fullName: "Jordan\r\nBcc: attacker@example.com",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).not.toMatch(/[\r\n]/);
    }
  });

  it("rejects a message that exceeds the maximum length", () => {
    const result = contactFormSchema.safeParse({ ...validPayload, message: "a".repeat(5000) });
    expect(result.success).toBe(false);
  });
});
