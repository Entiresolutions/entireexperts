import { escapeHtml } from "@/lib/email/escape-html";
import { emailLayout } from "@/lib/email/templates/layout";
import { siteConfig } from "@/config/site";

export function visitorAcknowledgementEmail(fullName: string): { subject: string; html: string } {
  const subject = `We received your message — ${siteConfig.name}`;

  const bodyHtml = `
    <h1 style="font-size:18px;margin:0 0 16px;">Thanks for reaching out, ${escapeHtml(fullName.split(" ")[0] ?? fullName)}.</h1>
    <p style="margin:0 0 12px;">
      We've received your message and a member of our team will get back to you within one business day
      with next steps or clarifying questions.
    </p>
    <p style="margin:0;">
      In the meantime, feel free to reply directly to this email if you'd like to add anything to your request.
    </p>
  `;

  return { subject, html: emailLayout({ title: subject, bodyHtml }) };
}
