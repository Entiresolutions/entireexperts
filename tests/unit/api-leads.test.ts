// @vitest-environment node
import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/leads/route";

function makeRequest(body: unknown, ip: string) {
  return new Request("http://localhost/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

const validLead = {
  fullName: "Priya Nair",
  email: "priya@example.com",
  service: "AI Chatbot Development",
  budget: "$10,000 - $25,000",
  timeline: "Flexible",
  message: "Interested in a support bot.",
  website: "",
};

describe("POST /api/leads", () => {
  it("accepts a valid chatbot lead", async () => {
    const response = await POST(makeRequest(validLead, "10.0.1.1"));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
  });

  it("rejects a lead with an invalid service value", async () => {
    const response = await POST(makeRequest({ ...validLead, service: "Not A Real Service" }, "10.0.1.2"));
    expect(response.status).toBe(400);
  });
});
