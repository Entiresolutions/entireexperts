"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNav, primaryCta, type NavGroup } from "@/config/site";
import { cn } from "@/lib/utils";

function isGroup(item: (typeof mainNav)[number]): item is NavGroup {
  return "items" in item;
}

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              if (isGroup(item)) {
                const isOpen = openGroup === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(item.label)}
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup(isOpen ? null : item.label)}
                      className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
                      />
                    </button>
                    {isOpen ? (
                      <div className="absolute left-0 top-full w-80 pt-2">
                        <ul className="grid grid-cols-1 gap-0.5 rounded-2xl border border-border bg-surface p-2 shadow-lg">
                          {item.items.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="block rounded-xl px-3 py-2.5 text-sm text-foreground-muted hover:bg-surface-muted hover:text-brand"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-3.5 py-2 text-sm font-medium text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button href={primaryCta.href} size="sm" className="hidden sm:inline-flex">
            {primaryCta.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
