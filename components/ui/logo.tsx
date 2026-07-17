import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        src="/entirexperts-logo.png"
        alt="EntireXperts"
        width={1879}
        height={652}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
