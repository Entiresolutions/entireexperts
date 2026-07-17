import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground",
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm text-white">
        EX
      </span>
      <span>
        Entire<span className="text-brand">Xperts</span>
      </span>
    </Link>
  );
}
