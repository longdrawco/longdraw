import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItem[];
  heading?: string;
}

export function Faq({ items, heading = "Common questions." }: FaqProps) {
  return (
    <Section className="bg-tan/20">
      <SectionHeading eyebrow="FAQ" heading={heading} className="mb-10" />
      <Accordion multiple={false} className="max-w-3xl">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="font-serif text-h3 text-charcoal text-left leading-snug py-5">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-sans text-body text-saddle leading-relaxed pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
