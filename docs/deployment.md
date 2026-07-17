# Deployment Guide

## 1. Prerequisites

- Node.js 20.9+ (the project was built and tested on Node 25; Next.js 16 requires 20.9+ minimum).
- A Vercel account (recommended) or any Node-compatible host that supports Next.js App Router (Netlify, Fly.io, a self-managed Node server, etc.).
- A [Resend](https://resend.com) account and a verified sending domain, if you want the contact/quote/chatbot forms to actually deliver email (they work without one — see "Email behavior without Resend" below).

## 2. Environment variables

Copy `.env.example` to `.env.local` for local development, and configure the same variables in your hosting provider's dashboard for production. Reference:

| Variable | Required | Purpose |
|---|---|---|
| `SITE_URL` / `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL used for metadata, sitemap, and OG tags. Set to `https://www.entirexperts.com` in production. |
| `RESEND_API_KEY` | Recommended | Enables real email delivery. Without it, the app logs the event and still returns a success response to the visitor (see below). |
| `CONTACT_TO_EMAIL` | Recommended | Inbox that receives lead notifications from the contact form, quote form, and chatbot. Defaults to `sales@entirexperts.com`. |
| `CONTACT_FROM_EMAIL` | Recommended | Must be on a domain verified with Resend. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Optional | Enables Cloudflare Turnstile anti-spam on forms. Forms work without it. |
| `GOOGLE_SITE_VERIFICATION` | Optional | Search Console HTML-tag verification token (see section 4). |
| `RATE_LIMIT_MAX_REQUESTS` / `RATE_LIMIT_WINDOW_SECONDS` | Optional | Tune the in-memory rate limiter on `/api/contact`, `/api/quote`, `/api/leads`, `/api/chat`. Defaults: 5 requests / 60 seconds per IP. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Enables GA4. |
| `NEXT_PUBLIC_GTM_ID` | Optional | Enables GTM (takes priority over GA4 direct if both are set). |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Optional | Enables Microsoft Clarity. |

### Department inboxes

The site references six inboxes on the domain, defined in `content/company.ts` (`companyEmails`): `info@` (general/footer), `sales@` (contact/quote/chatbot lead notifications — see `CONTACT_TO_EMAIL` above), `support@`, `careers@`, `billing@`, and `partnerships@`. All six need to actually exist and be monitored before launch — the Contact page and Careers page link to them directly.

### Email behavior without Resend

The contact form, quote form, and chatbot lead form are fully functional without `RESEND_API_KEY` — validation, honeypot, and rate limiting all run normally, and the visitor still sees a success state. The only difference is that `lib/email/send.ts` logs `"RESEND_API_KEY not set — skipping send"` instead of actually sending mail. This means the site is safe to deploy and demo before email is wired up, but **lead notifications will not reach anyone until `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are configured with real values** — this is the single most important post-deploy action item.

## 3. Build & deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. In Vercel: **New Project** → import the repository. Framework preset "Next.js" is auto-detected.
3. Build command: `next build` (default). Output directory: default (`.next`).
4. Add the environment variables from the table above under **Project Settings → Environment Variables**, for both Production and Preview environments as appropriate.
5. Deploy. Vercel will run `npm install` and `next build` automatically.
6. Add the custom domain (`www.entirexperts.com`) under **Project Settings → Domains**, and set up the DNS records Vercel provides. Configure a redirect from the apex domain (`entirexperts.com`) to `www.entirexperts.com` (or vice versa — pick one canonical host and redirect the other) in Vercel's domain settings.
7. Verify the sending domain in Resend and point `CONTACT_FROM_EMAIL` at an address on that domain (e.g. `no-reply@entirexperts.com`).

### Deploying elsewhere

The app has no Vercel-specific APIs in the page code — `next build` followed by `next start` runs on any Node 20.9+ host. The dynamic OG/icon image routes (`app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`) use `next/og`, which works in the Node runtime without extra configuration.

## 4. Google Search Console setup

1. In [Google Search Console](https://search.google.com/search-console), add a property for `https://www.entirexperts.com` (Domain property is preferred if you can verify via DNS; URL-prefix property works with the HTML-tag method below).
2. **Verify via HTML tag**: generate a verification token in Search Console, set it as `GOOGLE_SITE_VERIFICATION` in your environment variables, and redeploy — the root layout (`app/layout.tsx`) automatically includes it as a `<meta name="google-site-verification">` tag once the variable is set.
3. **Submit the sitemap**: in Search Console, go to Sitemaps and submit `https://www.entirexperts.com/sitemap.xml` (generated dynamically by `app/sitemap.ts` — it stays current automatically as services, blog posts, and case studies are added).
4. **Request indexing** for the homepage and a handful of priority pages (main service pages) using the URL Inspection tool, to accelerate initial crawling.
5. **Review Core Web Vitals** under the Experience section after the site has accumulated real-user traffic (this needs field data, so allow a few weeks post-launch).
6. **Monitor Coverage and Enhancements** (structured data) periodically — the JSON-LD implemented (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage, Article, ContactPage) should surface under Enhancements without errors; check back a few days after the sitemap is first crawled.

## 5. Post-deployment validation checklist

- [ ] `https://www.entirexperts.com/sitemap.xml` returns 200 and lists all pages.
- [ ] `https://www.entirexperts.com/robots.txt` returns 200 and references the sitemap.
- [ ] Submit a real test message through `/contact` and confirm it arrives at `CONTACT_TO_EMAIL` and the visitor receives an acknowledgement.
- [ ] Toggle light/dark mode and confirm it persists across a reload.
- [ ] Load the site on a real mobile device and open the mobile nav and chatbot.
- [ ] Run Lighthouse (or PageSpeed Insights) against the homepage and one service page.
- [ ] Confirm security headers are present (`curl -I https://www.entirexperts.com` — check for `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`).
- [ ] Add Google Search Console verification and submit the sitemap (section 4).
- [ ] Configure analytics (GA4/GTM/Clarity) if desired, and confirm no console errors appear once enabled.
- [ ] Replace the placeholder facts in `content/company.ts` and real social links in `config/site.ts` once available.
