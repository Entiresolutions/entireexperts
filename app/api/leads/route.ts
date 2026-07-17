import { NextResponse } from "next/server";
import { chatbotLeadSchema } from "@/lib/validation/chatbot-lead";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { sendEmail } from "@/lib/email/send";
import { leadNotificationEmail } from "@/lib/email/templates/lead-notification";
import { serverEnv } from "@/config/env";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`leads:${ip}`);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  const json = await request.json().catch(() => null);
  const parsed = chatbotLeadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // Honeypot tripped: report success to the bot without sending an email.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const { fullName, email, service, budget, timeline, message } = parsed.data;

  const notification = leadNotificationEmail({
    source: "Chatbot",
    fullName,
    email,
    service,
    budget,
    timeline,
    message: message || "(no message provided)",
  });

  const result = await sendEmail({
    to: serverEnv.CONTACT_TO_EMAIL,
    subject: notification.subject,
    html: notification.html,
    replyTo: email,
  });

  if (!result.ok && result.reason === "provider_error") {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try the contact page instead." },
      { status: 502 }
    );
  }

  console.info("[api/leads] chatbot lead captured", { outcome: result.ok ? "sent" : "logged_only" });
  return NextResponse.json({ ok: true }, { status: 200 });
}
