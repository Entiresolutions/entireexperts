# Entire Expert

Production website for Entire Expert, a software development company — Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values as you have them; every field has a safe default
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run test` | Vitest unit tests |
| `npm run test:watch` | Vitest in watch mode |
| `npm run test:e2e` | Playwright end-to-end tests (spins up its own dev server on port 3412) |

## Project structure

```
app/                  Routes (App Router) — pages, layouts, API route handlers, sitemap/robots/manifest/icons
components/
  ui/                 Reusable, unstyled-by-default primitives (Button, Card, Accordion, JsonLd, ...)
  layout/             Header, Footer, mobile nav, announcement bar
  providers/          Theme + Framer Motion providers
  features/           Feature-specific components (home sections, chatbot, forms, blog, service template)
lib/                  Server-side services: email, SEO metadata/schema builders, rate limiting, validation
                       helpers, chatbot provider, blog/MDX loader, motion variants
content/              All owner-editable content: services, industries, case studies, blog posts (MDX),
                       FAQs, company facts (config/site.ts holds structural nav/site config, separately)
config/               site.ts (nav, CTAs, site metadata), env.ts (Zod-validated environment variables)
docs/                 SEO keyword map, internal linking map, deployment guide, production readiness report
tests/
  unit/               Vitest + Testing Library
  e2e/                Playwright
```

## Documentation

- [`docs/deployment.md`](docs/deployment.md) — environment variables, Vercel setup, Google Search Console setup, post-deploy checklist.
- [`docs/production-readiness-report.md`](docs/production-readiness-report.md) — what's done, what's a deliberate placeholder pending real data, and the remaining owner action items before launch. **Read this before treating the site as launch-ready.**
- [`docs/seo-keyword-map.md`](docs/seo-keyword-map.md) — primary/secondary keyword assignment per page.
- [`docs/internal-linking-map.md`](docs/internal-linking-map.md) — how pages link to each other and how orphan pages are prevented.

## Adding content

See "Content-management instructions" at the bottom of [`docs/production-readiness-report.md`](docs/production-readiness-report.md) for how to add a blog post, service page, industry, or case study without touching routing code.

## Environment variables

See [`.env.example`](.env.example) for the full list. Every variable has a safe default or is optional — the app runs locally with no configuration.
