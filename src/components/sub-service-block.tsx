import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface SubServiceFaq {
  question: string;
  answer: string;
}

export interface SubServiceBlockProps {
  id: string;
  heading: React.ReactNode;
  blurb: string;
  includes: string[];
  faqs: SubServiceFaq[];
  serviceValue: string;
  isLast?: boolean;
}

export function SubServiceBlock({
  id,
  heading,
  blurb,
  includes,
  faqs,
  serviceValue,
  isLast,
}: SubServiceBlockProps) {
  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-24 py-12 md:py-16",
        !isLast && "border-b border-saddle/20"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">
        {/* Main content */}
        <div className="flex flex-col gap-5">
          <h3 className="font-serif text-h3 text-charcoal leading-snug">
            {heading}
          </h3>

          <p className="font-sans text-body text-saddle leading-relaxed">
            {blurb}
          </p>

          <ul className="flex flex-col gap-2 pl-5 list-disc marker:text-saddle">
            {includes.map((item, i) => (
              <li
                key={i}
                className="font-sans text-body text-charcoal leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-2">
            <Link
              href={`?service=${serviceValue}#booking`}
              className={cn(buttonVariants({ variant: "primary", size: "default" }))}
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-1.5">
          <p
            className="font-mono text-eyebrow uppercase text-saddle mb-4"
            style={{ letterSpacing: "0.1em" }}
          >
            Common questions
          </p>
          <div className="flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 pl-4 border-l border-saddle/20"
              >
                <p className="font-sans text-body font-medium text-charcoal leading-snug">
                  {faq.question}
                </p>
                <p className="font-sans text-body-sm text-saddle leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
