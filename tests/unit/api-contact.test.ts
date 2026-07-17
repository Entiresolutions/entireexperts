// @vitest-environment node
import { describe, expect, it } from "vitest";
import { POST } from "@/app/api/contact/route";

function makeRequest(body: unknown, ip: string) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify(body),
  });
}

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

describe("POST /api/contact", () => {
  it("accepts a valid submission and reports success even without an email provider configured", async () => {
    const response = await POST(makeRequest(validPayload, "10.0.0.1"));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
  });

  it("rejects a payload missing required fields with a 400", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "not-an-email" }, "10.0.0.2"));
    expect(response.status).toBe(400);
  });

  it("silently accepts (without sending) when the honeypot field is filled", async () => {
    const response = await POST(makeRequest({ ...validPayload, website: "http://spam.example" }, "10.0.0.3"));
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
  });

  it("rate limits repeated submissions from the same IP", async () => {
    const ip = "10.0.0.4";
    const responses = [];
    for (let i = 0; i < 6; i += 1) {
      responses.push(await POST(makeRequest(validPayload, ip)));
    }
    const statuses = responses.map((response) => response.status);
    expect(statuses).toContain(429);
  });
});
