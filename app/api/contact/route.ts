import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendEmail } from "@/lib/email/send";
import { leadNotificationEmail } from "@/lib/email/templates/lead-notification";
import { visitorAcknowledgementEmail } from "@/lib/email/templates/visitor-acknowledgement";
import { serverEnv } from "@/config/env";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${ip}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { website, turnstileToken, ...values } = parsed.data;

  // Honeypot tripped — respond as if successful so the bot doesn't learn to avoid this field.
  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const isHuman = await verifyTurnstileToken(turnstileToken, ip);
  if (!isHuman) {
    return NextResponse.json({ error: "Spam verification failed. Please try again." }, { status: 400 });
  }

  const notification = leadNotificationEmail({
    source: "Contact form",
    fullName: values.fullName,
    email: values.email,
    phone: values.phone,
    company: values.company,
    service: values.service,
    budget: values.budget,
    timeline: values.timeline,
    message: values.message,
  });

  const ownerResult = await sendEmail({
    to: serverEnv.CONTACT_TO_EMAIL,
    subject: notification.subject,
    html: notification.html,
    replyTo: values.email,
  });

  if (!ownerResult.ok && ownerResult.reason === "provider_error") {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly or email us directly." },
      { status: 502 }
    );
  }

  const acknowledgement = visitorAcknowledgementEmail(values.fullName);
  await sendEmail({ to: values.email, subject: acknowledgement.subject, html: acknowledgement.html });

  console.info("[api/contact] submission processed", { outcome: ownerResult.ok ? "sent" : "logged_only" });
  return NextResponse.json({ ok: true }, { status: 200 });
}
