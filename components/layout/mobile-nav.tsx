"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mainNav, primaryCta, type NavGroup } from "@/config/site";
import { cn } from "@/lib/utils";

function isGroup(item: (typeof mainNav)[number]): item is NavGroup {
  return "items" in item;
}

const panel = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 320, damping: 34 } },
  exit: { x: "100%", transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
} as const;

const list = {
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } },
} as const;

const listItem = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
} as const;

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  // Body scroll lock while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 text-foreground backdrop-blur transition-colors hover:border-brand hover:text-brand"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
            />
            <motion.div
              id="mobile-nav-panel"
              variants={panel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col border-l border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="text-sm font-semibold text-foreground-muted">Menu</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    aria-label="Dismiss navigation"
                    onClick={() => setOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
                  >
                    <X className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
                <motion.ul variants={list} initial="hidden" animate="visible" className="flex flex-col gap-1">
                  {mainNav.map((item) => {
                    if (isGroup(item)) {
                      const isExpanded = expandedGroup === item.label;
                      return (
                        <motion.li key={item.label} variants={listItem}>
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            onClick={() => setExpandedGroup(isExpanded ? null : item.label)}
                            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-medium text-foreground hover:bg-surface-muted"
                          >
                            {item.label}
                            <ChevronDown
                              aria-hidden
                              className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isExpanded ? (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden pl-3"
                              >
                                {item.items.map((sub) => (
                                  <li key={sub.href}>
                                    <Link
                                      href={sub.href}
                                      onClick={() => setOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-sm text-foreground-muted hover:bg-surface-muted hover:text-brand"
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            ) : null}
                          </AnimatePresence>
                        </motion.li>
                      );
                    }
                    const active = !pathname
                      ? false
                      : item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <motion.li key={item.href} variants={listItem}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "block rounded-xl px-3 py-3 font-medium hover:bg-surface-muted",
                            active ? "bg-brand-soft text-brand" : "text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              <div className="border-t border-border p-4">
                <Link
                  href={primaryCta.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-brand/30 transition-colors hover:bg-brand-strong"
                >
                  {primaryCta.label}
                </Link>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
