import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  variant = "brand",
}: {
  children: ReactNode;
  className?: string;
  variant?: "brand" | "accent" | "neutral";
}) {
  const variants = {
    brand: "bg-brand-soft text-brand-strong",
    accent: "bg-accent-soft text-accent-strong",
    neutral: "bg-surface-muted text-foreground-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
