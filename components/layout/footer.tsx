import Link from "next/link";
import { LinkedInIcon, GitHubIcon, XIcon } from "@/components/ui/social-icons";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { footerNav, siteConfig } from "@/config/site";
import { companyContact } from "@/content/company";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-foreground-muted hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-3 lg:grid-cols-7">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-foreground-muted">{siteConfig.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              aria-label="EntireXperts on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:border-brand hover:text-brand"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.github}
              aria-label="EntireXperts on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:border-brand hover:text-brand"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.twitter}
              aria-label="EntireXperts on X"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted hover:border-brand hover:text-brand"
            >
              <XIcon className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground-muted">
            <a href={`mailto:${companyContact.email}`} className="hover:text-brand">
              {companyContact.email}
            </a>
          </p>
        </div>

        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="More services" links={footerNav.moreServices} />
        <FooterColumn title="Management services" links={footerNav.managementServices} />
        <FooterColumn title="Company" links={footerNav.company} />
        <FooterColumn title="Support" links={footerNav.support} />
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-foreground-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Designed and built as a remote-first software delivery partner.</p>
        </Container>
      </div>
    </footer>
  );
}
