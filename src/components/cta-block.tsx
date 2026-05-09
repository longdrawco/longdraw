import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTABlockProps {
  heading?: string;
  buttonLabel?: string;
  href?: string;
}

export function CTABlock({
  heading = "Get on the schedule.",
  buttonLabel = "Request a quote",
  href = "/contact",
}: CTABlockProps) {
  return (
    <section className="bg-charcoal py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        <h2
          className="font-serif font-medium text-bone leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          {heading}
        </h2>
        <Link
          href={href}
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-yellow text-charcoal hover:bg-yellow/90"
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
