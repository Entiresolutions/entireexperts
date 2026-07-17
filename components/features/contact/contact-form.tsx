"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact";
import { budgetRanges, timelines, serviceInterests } from "@/lib/validation/common";
import { TurnstileWidget } from "@/components/ui/turnstile-widget";
import { Button } from "@/components/ui/button";
import { formControlClass, cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      website: "",
      consent: undefined as unknown as true,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, turnstileToken }),
      });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(data.error ?? "Something went wrong.");

      setStatus("success");
      trackEvent({ name: "contact_form_submit", params: { outcome: "success" } });
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      trackEvent({ name: "contact_form_submit", params: { outcome: "error" } });
    }
  };

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-xl font-semibold text-foreground">Message sent.</p>
        <p className="mt-2 text-foreground-muted">
          Thanks for reaching out — we’ll reply within one business day, and a confirmation email is on its way to
          you now.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-fullName" className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="contact-fullName" className={formControlClass} {...register("fullName")} />
          {errors.fullName ? <p className="mt-1.5 text-sm text-danger">{errors.fullName.message}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
            Business email
          </label>
          <input id="contact-email" type="email" className={formControlClass} {...register("email")} />
          {errors.email ? <p className="mt-1.5 text-sm text-danger">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Phone number <span className="text-foreground-muted">(optional)</span>
          </label>
          <input id="contact-phone" type="tel" className={formControlClass} {...register("phone")} />
        </div>
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium text-foreground">
            Company name <span className="text-foreground-muted">(optional)</span>
          </label>
          <input id="contact-company" className={formControlClass} {...register("company")} />
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium text-foreground">
          Service you need
        </label>
        <select id="contact-service" defaultValue="" className={formControlClass} {...register("service")}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceInterests.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service ? <p className="mt-1.5 text-sm text-danger">{errors.service.message}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-budget" className="mb-1.5 block text-sm font-medium text-foreground">
            Estimated budget
          </label>
          <select id="contact-budget" defaultValue="" className={formControlClass} {...register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget ? <p className="mt-1.5 text-sm text-danger">{errors.budget.message}</p> : null}
        </div>
        <div>
          <label htmlFor="contact-timeline" className="mb-1.5 block text-sm font-medium text-foreground">
            Project timeline
          </label>
          <select id="contact-timeline" defaultValue="" className={formControlClass} {...register("timeline")}>
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
          {errors.timeline ? <p className="mt-1.5 text-sm text-danger">{errors.timeline.message}</p> : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea id="contact-message" rows={5} className={formControlClass} {...register("message")} />
        {errors.message ? <p className="mt-1.5 text-sm text-danger">{errors.message.message}</p> : null}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="contact-consent"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-border text-brand focus-visible:ring-2 focus-visible:ring-brand"
          {...register("consent")}
        />
        <label htmlFor="contact-consent" className="text-sm text-foreground-muted">
          I agree to be contacted by EntireXperts about my enquiry. See our{" "}
          <a href="/privacy-policy" className="underline hover:text-brand">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent ? <p className="text-sm text-danger">{errors.consent.message}</p> : null}

      <TurnstileWidget onVerify={setTurnstileToken} />

      {status === "error" ? (
        <p role="alert" className="text-sm text-danger">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} className={cn("w-full sm:w-auto")}>
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
