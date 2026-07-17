import { describe, expect, it } from "vitest";
import { chatbotLeadSchema, chatMessageSchema } from "@/lib/validation/chatbot-lead";

describe("chatbotLeadSchema", () => {
  const validLead = {
    fullName: "Priya Nair",
    email: "priya@example.com",
    service: "AI Chatbot Development",
    budget: "$10,000 - $25,000",
    timeline: "Flexible",
    message: "",
    website: "",
  };

  it("accepts a valid lead with an optional empty message", () => {
    expect(chatbotLeadSchema.safeParse(validLead).success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = chatbotLeadSchema.safeParse({ ...validLead, email: "nope" });
    expect(result.success).toBe(false);
  });

  it("still parses successfully when the honeypot is filled in", () => {
    // Rejection happens in the API route, not the schema — see api-leads.test.ts.
    const result = chatbotLeadSchema.safeParse({ ...validLead, website: "spam" });
    expect(result.success).toBe(true);
  });
});

describe("chatMessageSchema", () => {
  it("accepts a normal chat message", () => {
    expect(chatMessageSchema.safeParse({ message: "How much does this cost?" }).success).toBe(true);
  });

  it("rejects an empty message", () => {
    expect(chatMessageSchema.safeParse({ message: "" }).success).toBe(false);
  });

  it("rejects a message beyond the length cap", () => {
    expect(chatMessageSchema.safeParse({ message: "a".repeat(1000) }).success).toBe(false);
  });
});
