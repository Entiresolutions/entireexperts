import "server-only";
import { Resend } from "resend";
import { serverEnv } from "@/config/env";

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export type SendEmailResult = { ok: true } | { ok: false; reason: "not_configured" | "provider_error" };

let resendClient: Resend | null = null;

function getClient(): Resend | null {
  if (!serverEnv.RESEND_API_KEY) return null;
  if (!resendClient) resendClient = new Resend(serverEnv.RESEND_API_KEY);
  return resendClient;
}

/**
 * Sends via Resend when RESEND_API_KEY is configured. Without it (local dev,
 * or before the owner has connected a provider), this logs the event type
 * only — never the message body or contact details — and returns a typed
 * "not_configured" result so callers can still tell the visitor their
 * submission was received while flagging the gap in the readiness report.
 */
export async function sendEmail(input: SendEmailInput): Promise<SendEmailResult> {
  const client = getClient();

  if (!client) {
    console.warn("[email] RESEND_API_KEY not set — skipping send.", { subject: input.subject });
    return { ok: false, reason: "not_configured" };
  }

  try {
    const { error } = await client.emails.send({
      from: serverEnv.CONTACT_FROM_EMAIL,
      to: input.to,
      subject: input.subject,
      html: input.html,
      ...(input.replyTo ? { replyTo: input.replyTo } : {}),
    });

    if (error) {
      console.error("[email] Resend returned an error.", { message: error.message });
      return { ok: false, reason: "provider_error" };
    }

    return { ok: true };
  } catch (error) {
    console.error("[email] Unexpected error sending email.", error instanceof Error ? error.message : error);
    return { ok: false, reason: "provider_error" };
  }
}
