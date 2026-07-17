import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation/quote";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { sendEmail } from "@/lib/email/send";
import { leadNotificationEmail } from "@/lib/email/templates/lead-notification";
import { visitorAcknowledgementEmail } from "@/lib/email/templates/visitor-acknowledgement";
import { serverEnv } from "@/config/env";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`quote:${ip}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = quoteFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form for errors.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { website, turnstileToken, ...values } = parsed.data;

  if (website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const isHuman = await verifyTurnstileToken(turnstileToken, ip);
  if (!isHuman) {
    return NextResponse.json({ error: "Spam verification failed. Please try again." }, { status: 400 });
  }

  const notification = leadNotificationEmail({
    source: "Quote request",
    fullName: values.fullName,
    email: values.email,
    company: values.company,
    service: values.service,
    budget: values.budget,
    timeline: values.timeline,
    message: values.projectDetails,
  });

  const ownerResult = await sendEmail({
    to: serverEnv.CONTACT_TO_EMAIL,
    subject: notification.subject,
    html: notification.html,
    replyTo: values.email,
  });

  if (!ownerResult.ok && ownerResult.reason === "provider_error") {
    return NextResponse.json(
      { error: "We couldn't send your request right now. Please try again shortly or email us directly." },
      { status: 502 }
    );
  }

  const acknowledgement = visitorAcknowledgementEmail(values.fullName);
  await sendEmail({ to: values.email, subject: acknowledgement.subject, html: acknowledgement.html });

  console.info("[api/quote] submission processed", { outcome: ownerResult.ok ? "sent" : "logged_only" });
  return NextResponse.json({ ok: true }, { status: 200 });
}
