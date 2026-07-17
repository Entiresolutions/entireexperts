import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-brand text-white">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-2 text-center text-xs font-medium sm:text-sm">
        Now booking discovery calls for Q4 project starts.
        <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
          Book a free consultation
        </Link>
      </p>
    </div>
  );
}
