import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";

export interface ProcessStep {
  number: string;
  title: string;
  blurb: string;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Quote",
    blurb: "Tell us what you need. We respond within one business hour with a straightforward price — no haggling.",
  },
  {
    number: "02",
    title: "Schedule",
    blurb: "Pick a date. We confirm by text and show up on time with everything we need.",
  },
  {
    number: "03",
    title: "Done",
    blurb: "We clean up when we finish and follow up the same day. You'll know when it's done.",
  },
];

interface ProcessStepsProps {
  heading?: string;
  steps?: ProcessStep[];
}

export function ProcessSteps({
  heading = "Three steps. No surprises.",
  steps = DEFAULT_STEPS,
}: ProcessStepsProps) {
  return (
    <Section>
      <SectionHeading eyebrow="How it works" heading={heading} className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-3">
            <span
              className="font-mono text-oxide font-medium"
              style={{ fontSize: "2.5rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3 className="font-serif text-h3 text-charcoal">{step.title}</h3>
            <p className="text-body text-saddle leading-relaxed">{step.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
