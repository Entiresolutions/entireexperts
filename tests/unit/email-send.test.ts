// @vitest-environment node
import { describe, expect, it } from "vitest";
import { sendEmail } from "@/lib/email/send";

describe("sendEmail without a configured provider", () => {
  it("reports not_configured instead of throwing, so callers can degrade gracefully", async () => {
    const result = await sendEmail({ to: "someone@example.com", subject: "Test", html: "<p>Hi</p>" });
    expect(result).toEqual({ ok: false, reason: "not_configured" });
  });
});
