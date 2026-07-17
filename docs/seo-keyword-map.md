# SEO Keyword Map

One primary keyword per indexable page, assigned so no two pages compete for the same term. Location-based keywords (e.g. "software house in Pakistan") were deliberately excluded per the site's global/remote-first positioning — see `docs/production-readiness-report.md` for that decision.

Legend: **Intent** — I = Informational, C = Commercial investigation, T = Transactional.

## Main pages

| Page | Primary keyword | Secondary / long-tail | Intent | Slug | SEO Title | H1 |
|---|---|---|---|---|---|---|
| Home | software development company | custom software partner, remote software team | C | `/` | Custom Software Development Company \| EntireXperts | Ship the product your roadmap keeps pushing back. |
| About | software development company culture | remote-first engineering team | I | `/about` | About EntireXperts | A remote-first team built around a specific way of working |
| Services (index) | software development services | full list of software services | C | `/services` | Software Development Services | Eighteen disciplines, each led by engineers who specialize in it |
| Management Services (index) | outsourced business process services | BPO services, managed operations support | C | `/management-services` | Management Services | Outsourced operations support, run as an extension of your team |
| Portfolio | software development case studies | example software projects | C | `/portfolio` | Portfolio & Case Studies | The kind of projects we take on |
| Our Process | software development process | agile development process | I | `/process` | Our Software Development Process | A process built for visible progress, not status meetings |
| Technologies | software development technology stack | tech stack we use | I | `/technologies` | Technologies We Use | A consistent core stack, chosen deliberately per project |
| Industries (index) | software development by industry | industries we serve | C | `/industries` | Industries We Serve | Domain context shapes the build as much as the tech stack |
| Blog | software development blog | software buying guides | I | `/blog` | Blog | Notes on building and buying software |
| Contact | contact software development company | talk to a software expert | T | `/contact` | Contact Us | Talk to a software expert |
| Request a Quote | software development quote | get a project estimate | T | `/quote` | Request a Quote | Get a project estimate |
| Careers | software developer careers | software company jobs | I | `/careers` | Careers | No open roles listed right now |
| FAQ | software development company FAQ | software project pricing questions | I | `/faq` | Frequently Asked Questions | Frequently asked questions |
| Privacy Policy | (non-competing, utility) | — | — | `/privacy-policy` | Privacy Policy | Privacy Policy |
| Terms and Conditions | (non-competing, utility) | — | — | `/terms-and-conditions` | Terms and Conditions | Terms and Conditions |
| Cookie Policy | (non-competing, utility) | — | — | `/cookie-policy` | Cookie Policy | Cookie Policy |

## Service pages

| Service | Primary keyword | Secondary / long-tail | Intent | Slug |
|---|---|---|---|---|
| Custom Software Development | custom software development company | bespoke software development | C | `/services/custom-software-development` |
| Website Development | website development company | business website development | C | `/services/website-development` |
| Web Application Development | web application development company | custom web app development | C | `/services/web-application-development` |
| Mobile App Development | mobile app development company | iOS and Android app development | C | `/services/mobile-app-development` |
| Android App Development | Android app development company | native Android development | C | `/services/android-app-development` |
| iOS App Development | iOS app development company | native iOS development, Swift development | C | `/services/ios-app-development` |
| Cross-Platform Flutter Development | Flutter app development company | cross-platform mobile development | C | `/services/flutter-app-development` |
| SaaS Product Development | SaaS product development company | SaaS MVP development | C | `/services/saas-product-development` |
| AI & Automation Solutions | AI automation services | business process automation | C | `/services/ai-automation-solutions` |
| AI Chatbot Development | AI chatbot development company | custom chatbot development | C | `/services/ai-chatbot-development` |
| E-commerce Development | e-commerce development company | online store development | C | `/services/ecommerce-development` |
| UI/UX Design | UI/UX design services | product design services | C | `/services/ui-ux-design` |
| API Development & Integration | API development services | third-party API integration | C | `/services/api-development-integration` |
| Cloud Solutions | cloud infrastructure services | AWS / Google Cloud consulting | C | `/services/cloud-solutions` |
| DevOps & Deployment | DevOps services | CI/CD pipeline setup | C | `/services/devops-and-deployment` |
| Software Maintenance & Support | software maintenance services | application support services | C | `/services/software-maintenance-support` |
| Search Engine Optimization | SEO services for software companies | technical SEO services | C | `/services/search-engine-optimization` |
| Digital Marketing | digital marketing for software companies | conversion tracking setup | C | `/services/digital-marketing` |

## Management service pages

A separate business line (outsourced operations, not software development) with its own keyword universe so it never competes with the software service pages above.

| Service | Primary keyword | Secondary / long-tail | Intent | Slug |
|---|---|---|---|---|
| Call Center Services (Inbound & Outbound) | call center services | inbound outbound call center outsourcing | C | `/management-services/call-center-services` |
| Customer Support Outsourcing | customer support outsourcing | outsourced help desk services | C | `/management-services/customer-support-outsourcing` |
| Medical Billing Services | medical billing services | outsourced medical billing company | C | `/management-services/medical-billing-services` |
| DME Billing Services | DME billing services | durable medical equipment billing company | C | `/management-services/dme-billing-services` |
| Trucking & Dispatch Services | trucking dispatch services | outsourced truck dispatch company | C | `/management-services/trucking-dispatch-services` |
| Back-Office & Data Entry Services | back office outsourcing services | data entry outsourcing company | C | `/management-services/back-office-data-entry-services` |

## Industry pages

| Industry | Primary keyword | Slug |
|---|---|---|
| Healthcare | healthcare software development | `/industries/healthcare` |
| Fintech | fintech software development | `/industries/fintech` |
| E-commerce & Retail | e-commerce software development | `/industries/ecommerce-retail` |
| Logistics & Field Services | field service software development | `/industries/logistics-field-services` |
| Professional Services | professional services software | `/industries/professional-services` |
| Education & EdTech | education software development | `/industries/education-edtech` |

## Blog posts

| Post | Primary keyword | Intent | Slug |
|---|---|---|---|
| How to Choose a Custom Software Development Company | how to choose a software development company | I | `/blog/how-to-choose-a-custom-software-development-company` |
| Flutter vs Native App Development | Flutter vs native app development | I | `/blog/flutter-vs-native-app-development` |
| How AI Automation Can Reduce Business Costs | AI automation cost savings | I | `/blog/how-ai-automation-can-reduce-business-costs` |
| How Much Does Custom Software Development Cost? | custom software development cost | I/C | `/blog/how-much-does-custom-software-development-cost` |
| SaaS Product Development: From Idea to Launch | SaaS product development process | I | `/blog/saas-product-development-from-idea-to-launch` |

## Cannibalization checks performed

- "software development" alone is not targeted by any single page — every page pairs it with a qualifier (company, process, cost, by industry) so they don't compete.
- "SEO" and "digital marketing" are split into two distinct service pages with non-overlapping primary keywords, cross-linked via "Related services" rather than merged.
- "Mobile app development" (the umbrella page) targets the platform-decision keyword, while Android/iOS/Flutter each target their own platform-specific keyword — the umbrella page links out to the three rather than duplicating their content.
- "Services" and "Management Services" are kept as two separate keyword universes ("software development company" vs. "outsourced business process services") on purpose, so a search for a BPO term like "medical billing services" doesn't compete against or dilute the software-development positioning, and vice versa.
