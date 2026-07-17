import { serverEnv } from "@/config/env";

type Bucket = { count: number; resetAt: number };

// In-memory token bucket. Fine for a single Node.js instance; if the app is
// deployed across multiple serverless instances or regions, swap this module
// for a shared store (Upstash Redis, etc.) without touching call sites, since
// they only depend on `checkRateLimit`'s return shape.
const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const windowMs = serverEnv.RATE_LIMIT_WINDOW_SECONDS * 1000;
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (existing.count >= serverEnv.RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }

  existing.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}
