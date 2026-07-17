/**
 * Single source of truth for factual business claims.
 *
 * Every field below is either a safe structural default or explicitly marked
 * TODO(owner). Nothing here should be replaced with an invented number,
 * client name, award, or certification — if a fact isn't verified yet, leave
 * the placeholder and the UI will render an honest fallback instead of a
 * fabricated claim.
 */

/**
 * Department inboxes. Each is a placeholder address on the real domain —
 * TODO(owner): confirm every one of these is actually created and monitored
 * before launch, or remove the ones that don't apply.
 */
export const companyEmails = {
  general: "info@entirexperts.com",
  sales: "sales@entirexperts.com",
  support: "support@entirexperts.com",
  careers: "careers@entirexperts.com",
  billing: "billing@entirexperts.com",
  partnerships: "partnerships@entirexperts.com",
} as const;

export const companyContact = {
  // General inbox shown as the site's primary contact address.
  email: companyEmails.general,
  // TODO(owner): add a real phone number with country code, or remove the field
  // from the UI if the business does not take calls.
  phone: null as string | null,
  // TODO(owner): add a registered business address once available. Leaving this
  // null prevents the site from publishing an unverified address in structured data.
  address: null as {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  } | null,
} as const;

export const companyFacts = {
  // TODO(owner): set the real founding year. Left null so no "Since 20XX" claim
  // is ever rendered without a confirmed date.
  foundedYear: null as number | null,
  // TODO(owner): set a real headcount range (e.g. "10-25") once confirmed.
  teamSizeRange: null as string | null,
} as const;

/**
 * Illustrative, clearly-labelled business stats. Real numbers should replace
 * these once available; until then this stays empty and the stats section
 * renders qualitative capability statements instead of invented figures.
 */
export const companyStats: { label: string; value: string }[] = [];

/**
 * Real client testimonials go here once collected. Kept empty deliberately —
 * the testimonials section detects the empty array and renders an honest
 * "coming soon" state rather than a fabricated quote.
 */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [];

/**
 * Certifications/awards go here once verified. Empty by default.
 */
export const certifications: { name: string; issuer: string }[] = [];
