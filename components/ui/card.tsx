import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-brand)] border border-border bg-surface p-6 shadow-sm shadow-black/[0.03] transition-shadow duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}
