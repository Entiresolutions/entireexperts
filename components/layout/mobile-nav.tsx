"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav, primaryCta, type NavGroup } from "@/config/site";
import { cn } from "@/lib/utils";

function isGroup(item: (typeof mainNav)[number]): item is NavGroup {
  return "items" in item;
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

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
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
      >
        {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full z-40 overflow-hidden border-b border-border bg-surface shadow-lg"
          >
            <nav aria-label="Mobile" className="max-h-[75vh] overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  if (isGroup(item)) {
                    const isExpanded = expandedGroup === item.label;
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => setExpandedGroup(isExpanded ? null : item.label)}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-medium text-foreground hover:bg-surface-muted"
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
                              transition={{ duration: 0.2 }}
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
                      </li>
                    );
                  }
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 font-medium text-foreground hover:bg-surface-muted"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={primaryCta.href}
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {primaryCta.label}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
