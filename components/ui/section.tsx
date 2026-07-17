import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  children,
  className,
  containerClassName,
  as: Component = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: ElementType;
  id?: string;
}) {
  return (
    <Component id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <Container className={containerClassName}>{children}</Container>
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: HeadingTag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Use "h1" when this is the page's single main heading, not a sub-section. */
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-lg text-foreground-muted">{description}</p>
      ) : null}
    </div>
  );
}
