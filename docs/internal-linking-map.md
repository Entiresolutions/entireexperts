# Internal Linking Map

How pages connect to each other. Goals: every service category reachable from the homepage, no orphan pages, natural (non-keyword-stuffed) anchor text.

## Global navigation (every page)

- **Header**: Home, About, Services (dropdown → 9 featured services + "View all services"), Portfolio, Industries, Process, Blog, Contact, plus a persistent "Start Your Project" CTA.
- **Footer**: full list of all 18 services (two columns), Company links (About, Process, Technologies, Industries, Portfolio, Careers, Blog), Support links (Contact, Quote, FAQ, three legal pages).
- Because the footer alone links to all 18 service pages, all industry/portfolio/blog index pages, and all legal pages from **every** page on the site, no page is more than one click from any of those hubs — this is the main anti-orphan mechanism.

## Homepage → category hubs

Home links out to: `/services` (index) and 9 individual service pages (Core Services section), `/portfolio` + 3 featured case studies, `/technologies`, `/process`, `/industries` + 6 industry pages, `/blog` + latest 3 posts, `/faq`, `/contact`, `/quote`.

## Services index → every service detail page

`/services` links to all 18 `/services/[slug]` pages (grid of cards, one per service).

## Service detail page → related content

Each `/services/[slug]` page links to:
- 3 related services (via `relatedServiceSlugs` in `content/services/*.ts`) — e.g. Flutter ↔ iOS ↔ Android ↔ Mobile App Development form a closed cluster.
- `/industries` (contextual link from the "Industries we apply this in" section).
- `/quote` and `/contact` (consultation/estimate CTAs).

## Industry detail page → services and portfolio

Each `/industries/[slug]` page links to:
- Its `relevantServiceSlugs` (2–3 service pages relevant to that industry).
- Any case study on `/portfolio/[slug]` whose `industry` field matches.
- `/quote` and `/contact`.

## Portfolio detail page → services

Each `/portfolio/[slug]` case study links to the service pages listed in its `serviceSlugs` field (e.g. the SaaS billing rebuild case study links to SaaS Product Development, Custom Software Development, and API Development & Integration).

## Blog → services (contextual, in-copy links)

Each article links naturally, in the body copy, to the service pages it discusses:
- *How to Choose a Custom Software Development Company* → `/services/custom-software-development`, `/process`, `/faq`, `/quote`.
- *Flutter vs Native App Development* → `/services/flutter-app-development`, `/services/ios-app-development`, `/services/android-app-development`, `/services/mobile-app-development`, `/quote`.
- *How AI Automation Can Reduce Business Costs* → `/services/ai-automation-solutions`, `/services/ai-chatbot-development`, `/quote`.
- *How Much Does Custom Software Development Cost?* → `/services/custom-software-development`, `/process`, `/quote`.
- *SaaS Product Development: From Idea to Launch* → `/services/saas-product-development`, `/process`, `/quote`.

Each post also appears in a "Related articles" block on other posts sharing its category, and every post links back to `/blog` and its category page (`/blog/category/[category]`) via breadcrumbs and the category badge.

## Breadcrumbs (nested pages)

Every non-home page renders breadcrumbs with `BreadcrumbList` structured data: Home → [section index] → [page]. Example: Home → Services → AI Chatbot Development. This gives every nested page an upward path in addition to the footer's downward links.

## Orphan-page check

Every page in `app/sitemap.ts` is reachable via at least one of: header nav, footer nav, homepage sections, a parent index page (`/services`, `/industries`, `/portfolio`, `/blog`), or contextual in-copy links from blog/case-study/service content. No page exists that is only reachable by typing its URL directly.
