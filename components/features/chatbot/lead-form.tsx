"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatbotLeadSchema, type ChatbotLeadValues } from "@/lib/validation/chatbot-lead";
import { budgetRanges, timelines, serviceInterests } from "@/lib/validation/common";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ChatbotLeadForm({ onDone }: { onDone: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChatbotLeadValues>({
    resolver: zodResolver(chatbotLeadSchema),
    defaultValues: { fullName: "", email: "", message: "", website: "" },
  });

  const onSubmit = async (values: ChatbotLeadValues) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
      trackEvent({ name: "chatbot_lead_submit", params: { outcome: "success" } });
    } catch {
      setStatus("error");
      trackEvent({ name: "chatbot_lead_submit", params: { outcome: "error" } });
    }
  };

  if (status === "success") {
    return (
      <div className="p-4 text-sm">
        <p className="font-medium text-foreground">Thanks — that’s been sent to our team.</p>
        <p className="mt-1 text-foreground-muted">
          We reply within one business day. You can close this window whenever you like.
        </p>
        <button type="button" onClick={onDone} className="mt-3 text-sm font-semibold text-brand hover:underline">
          Back to chat
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-foreground-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 p-4 text-sm" noValidate>
      <p className="text-foreground-muted">
        Share a few details and a member of the team will follow up by email.
      </p>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="chatbot-website">Leave this field empty</label>
        <input id="chatbot-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label htmlFor="chatbot-name" className="mb-1 block font-medium text-foreground">
          Name
        </label>
        <input id="chatbot-name" className={inputClass} {...register("fullName")} />
        {errors.fullName ? <p className="mt-1 text-xs text-danger">{errors.fullName.message}</p> : null}
      </div>

      <div>
        <label htmlFor="chatbot-email" className="mb-1 block font-medium text-foreground">
          Email
        </label>
        <input id="chatbot-email" type="email" className={inputClass} {...register("email")} />
        {errors.email ? <p className="mt-1 text-xs text-danger">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="chatbot-service" className="mb-1 block font-medium text-foreground">
          Service
        </label>
        <select id="chatbot-service" className={inputClass} defaultValue="" {...register("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceInterests.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service ? <p className="mt-1 text-xs text-danger">{errors.service.message}</p> : null}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor="chatbot-budget" className="mb-1 block font-medium text-foreground">
            Budget
          </label>
          <select id="chatbot-budget" className={inputClass} defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Select
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="chatbot-timeline" className="mb-1 block font-medium text-foreground">
            Timeline
          </label>
          <select id="chatbot-timeline" className={inputClass} defaultValue="" {...register("timeline")}>
            <option value="" disabled>
              Select
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="chatbot-message" className="mb-1 block font-medium text-foreground">
          Anything else? (optional)
        </label>
        <textarea id="chatbot-message" rows={2} className={inputClass} {...register("message")} />
      </div>

      <p className="text-xs text-foreground-muted">
        We only use these details to respond to your enquiry. See our{" "}
        <a href="/privacy-policy" className="underline hover:text-brand">
          Privacy Policy
        </a>
        .
      </p>

      {status === "error" ? (
        <p className="text-xs text-danger">Something went wrong. Please try again or use the contact page.</p>
      ) : null}

      <div className="flex items-center gap-2 pt-1">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-strong disabled:opacity-60"
          )}
        >
          {status === "submitting" ? "Sending…" : "Send to the team"}
        </button>
        <button type="button" onClick={onDone} className="text-sm font-medium text-foreground-muted hover:text-foreground">
          Cancel
        </button>
      </div>
    </form>
  );
}
