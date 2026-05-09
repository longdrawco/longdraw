import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <Section className="bg-tan/20">
      <SectionHeading
        eyebrow="Testimonials"
        heading="What our customers say."
        className="mb-12"
      />

      {/* Empty state — swap for real TestimonialCard components when reviews arrive */}
      <div className="border border-dashed border-saddle/30 p-12 flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
        <p className="font-sans text-body text-saddle">
          Reviews coming after our first jobs.{" "}
          <span className="text-charcoal font-medium">Be the first.</span>
        </p>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
        >
          Request a quote →
        </Link>
      </div>
    </Section>
  );
}
