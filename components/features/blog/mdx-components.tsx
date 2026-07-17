import type { ComponentProps } from "react";
import { slugify } from "@/lib/slugify";

function headingText(children: ComponentProps<"h2">["children"]): string {
  return typeof children === "string" ? children : String(children ?? "");
}

export const mdxComponents = {
  h2: ({ children, ...props }: ComponentProps<"h2">) => {
    const id = slugify(headingText(children));
    return (
      <h2 id={id} className="mt-10 scroll-mt-28 font-display text-2xl font-semibold text-foreground" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: ComponentProps<"h3">) => {
    const id = slugify(headingText(children));
    return (
      <h3 id={id} className="mt-8 scroll-mt-28 text-xl font-semibold text-foreground" {...props}>
        {children}
      </h3>
    );
  },
};
