import { escapeHtml } from "@/lib/email/escape-html";
import { emailLayout } from "@/lib/email/templates/layout";

export type LeadNotificationInput = {
  source: "Contact form" | "Quote request" | "Chatbot";
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

function row(label: string, value: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:6px 0;color:#4b4b5a;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:#14141f;font-size:14px;">${escapeHtml(value)}</td>
  </tr>`;
}

export function leadNotificationEmail(input: LeadNotificationInput): { subject: string; html: string } {
  const subject = `New ${input.source.toLowerCase()} lead: ${input.fullName}`;

  const bodyHtml = `
    <h1 style="font-size:18px;margin:0 0 16px;">New lead from the ${escapeHtml(input.source)}</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", input.fullName)}
      ${row("Email", input.email)}
      ${row("Phone", input.phone ?? "")}
      ${row("Company", input.company ?? "")}
      ${row("Service", input.service)}
      ${row("Budget", input.budget)}
      ${row("Timeline", input.timeline)}
    </table>
    <p style="margin:20px 0 6px;color:#4b4b5a;font-size:13px;">Message</p>
    <p style="margin:0;padding:14px;background:#f3f4f8;border-radius:10px;color:#14141f;font-size:14px;white-space:pre-wrap;">${escapeHtml(
      input.message
    )}</p>
  `;

  return { subject, html: emailLayout({ title: subject, bodyHtml }) };
}
