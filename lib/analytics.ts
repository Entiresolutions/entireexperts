"use client";

type AnalyticsEvent =
  | { name: "cta_click"; params: { cta_id: string; location: string } }
  | { name: "contact_form_submit"; params: { outcome: "success" | "error" } }
  | { name: "quote_request_submit"; params: { outcome: "success" | "error" } }
  | { name: "chatbot_lead_submit"; params: { outcome: "success" | "error" } };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * No-ops safely when analytics isn't configured (no env vars set), so event
 * calls can be sprinkled through the app without guarding every call site.
 */
export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: event.name, ...event.params });

  if (typeof window.gtag === "function") {
    window.gtag("event", event.name, event.params);
  }
}
