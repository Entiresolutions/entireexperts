import { z } from "zod";

/**
 * Every environment variable the app reads is declared here so misconfiguration
 * fails fast at boot instead of surfacing as a silent runtime bug (e.g. a typo'd
 * email API key silently dropping every contact form submission).
 */
const serverEnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  SITE_URL: z.string().url().default("https://www.entirexperts.com"),

  RESEND_API_KEY: z.string().optional(),
  CONTACT_TO_EMAIL: z.string().email().default("hello@entirexperts.com"),
  CONTACT_FROM_EMAIL: z.string().email().default("no-reply@entirexperts.com"),

  TURNSTILE_SECRET_KEY: z.string().optional(),

  GOOGLE_SITE_VERIFICATION: z.string().optional(),

  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(5),
  RATE_LIMIT_WINDOW_SECONDS: z.coerce.number().int().positive().default(60),
});

const publicEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://www.entirexperts.com"),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_CLARITY_PROJECT_ID: z.string().optional(),
});

function parseServerEnv() {
  const parsed = serverEnvSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid server environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid server environment variables. Check .env.example for the expected shape.");
  }
  return parsed.data;
}

function parsePublicEnv() {
  const parsed = publicEnvSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  });
  if (!parsed.success) {
    console.error("Invalid public environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid public environment variables. Check .env.example for the expected shape.");
  }
  return parsed.data;
}

export const serverEnv = parseServerEnv();
export const publicEnv = parsePublicEnv();
