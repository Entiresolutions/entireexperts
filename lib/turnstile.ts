import { serverEnv } from "@/config/env";

/**
 * Returns true when Turnstile isn't configured at all (local/dev, or before
 * the owner has added a site+secret key pair), so the form keeps working
 * end-to-end without the anti-spam widget blocking submissions.
 */
export async function verifyTurnstileToken(token: string | undefined, remoteIp: string): Promise<boolean> {
  if (!serverEnv.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: serverEnv.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: remoteIp,
      }),
    });
    const data = (await response.json()) as { success: boolean };
    return data.success;
  } catch {
    // Fail closed on the anti-spam check itself, but the caller decides how
    // to respond — treat a verification-service outage as "not verified"
    // rather than silently accepting every submission.
    return false;
  }
}
