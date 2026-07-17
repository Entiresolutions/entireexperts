"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";
import { mainNav, primaryCta, type NavGroup, type NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

function isGroup(item: (typeof mainNav)[number]): item is NavGroup {
  return "items" in item;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Morph from transparent (over the hero) to glassmorphism after a small scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const isActive = (href: string) =>
    !pathname ? false : href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-border glass shadow-lg shadow-foreground/[0.04]"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-7xl items-center justify-between px-5 transition-[padding] duration-300 sm:px-8",
          scrolled ? "py-3" : "py-4"
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block" onMouseLeave={() => setHovered(null)}>
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) => {
              const key = isGroup(item) ? item.label : item.href;
              const active = isActive(item.href);
              const showHover = hovered === key || (isGroup(item) && openGroup === item.label);

              if (isGroup(item)) {
                const open = openGroup === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => {
                      cancelClose();
                      setOpenGroup(item.label);
                      setHovered(key);
                    }}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      onClick={() => setOpenGroup(open ? null : item.label)}
                      onFocus={() => setOpenGroup(item.label)}
                      onKeyDown={(e) => e.key === "Escape" && setOpenGroup(null)}
                      className={cn(
                        "relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        active || open ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
                      />
                      <NavPill show={showHover} />
                      {active ? <NavActiveDot /> : null}
                    </button>

                    <AnimatePresence>
                      {open ? (
                        <MegaMenu group={item} onNavigate={() => setOpenGroup(null)} />
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => {
                    setHovered(key);
                    setOpenGroup(null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative z-10 block rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <NavPill show={showHover} />
                    {active ? <NavActiveDot /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button href={primaryCta.href} size="sm" className="group hidden sm:inline-flex">
            {primaryCta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/** Sliding hover background shared across nav items via layoutId. */
function NavPill({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.span
          layoutId="nav-hover-pill"
          aria-hidden
          className="absolute inset-0 -z-0 rounded-full bg-surface-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      ) : null}
    </AnimatePresence>
  );
}

function NavActiveDot() {
  return (
    <motion.span
      layoutId="nav-active-dot"
      aria-hidden
      className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand"
    />
  );
}

function MegaMenu({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  const wide = group.items.length > 6;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute left-0 top-full pt-3", wide ? "w-[34rem]" : "w-72")}
    >
      <div className="overflow-hidden rounded-2xl border border-border glass-strong p-2.5 shadow-xl shadow-foreground/5">
        <ul className={cn("grid gap-0.5", wide && "grid-cols-2")}>
          {group.items.map((sub: NavItem) => {
            const isViewAll = sub.href === group.href;
            return (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  onClick={onNavigate}
                  className={cn(
                    "group/mega flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    isViewAll
                      ? "font-semibold text-brand hover:bg-brand-soft"
                      : "text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                  )}
                >
                  <span>{sub.label}</span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/mega:translate-x-0 group-hover/mega:opacity-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
