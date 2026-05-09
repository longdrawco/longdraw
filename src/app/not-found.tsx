import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-xl flex flex-col gap-6">
        <p className="font-mono text-eyebrow uppercase tracking-widest text-oxide">
          404
        </p>
        <h1 className="font-serif text-h1 text-charcoal leading-tight">
          That page isn&apos;t on the schedule.
        </h1>
        <p className="text-body-lg text-saddle">
          Head back to the homepage and try again.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "self-start")}
        >
          Back to home
        </Link>
      </div>
    </Section>
  );
}
