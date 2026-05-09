import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "You're on the books",
  robots: { index: false },
};

export default function BookingConfirmationPage() {
  return (
    <>
      {/* Forest hero band — spec: confirmation state only */}
      <section className="bg-forest py-16 px-6 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h1
            className="font-serif font-medium text-bone leading-tight"
            style={{ fontSize: "clamp(2.25rem, 4vw, 4.5rem)" }}
          >
            You&apos;re on the books.
          </h1>
          <p className="mt-5 text-body-lg text-bone/80 max-w-xl">
            We&apos;ll text within one business hour to confirm. If you don&apos;t
            hear back, call us at{" "}
            <a
              href="tel:2144443042"
              className="text-bone underline underline-offset-4 hover:text-bone/80 transition-colors"
            >
              (214) 444-3042
            </a>
            .
          </p>
        </div>
      </section>

      {/* What to expect */}
      <Section>
        <div className="max-w-2xl flex flex-col gap-6">
          <h2 className="font-serif text-h3 text-charcoal">
            What happens next.
          </h2>
          <div className="flex flex-col gap-4 font-sans text-body text-saddle leading-relaxed">
            <p>
              We&apos;ll reach out by text to confirm your date and give you
              an arrival window. If you requested a specific date, we&apos;ll
              confirm it or offer an alternative if that slot is taken.
            </p>
            <p>
              The day before your job, we&apos;ll send a reminder with the
              arrival window and anything you need to prepare — like clearing
              the garage floor or making sure a hose bib is accessible.
            </p>
            <p>
              After we finish, we follow up the same day. If anything wasn&apos;t
              right, we&apos;ll make it right.
            </p>
          </div>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "self-start")}
          >
            ← Back to home
          </Link>
        </div>
      </Section>
    </>
  );
}
