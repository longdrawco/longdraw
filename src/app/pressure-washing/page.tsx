import type { Metadata } from "next";
import { ServiceHero } from "@/components/service-hero";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { ProcessSteps } from "@/components/process-steps";
import { Faq } from "@/components/faq";
import { BookingForm } from "@/components/booking-form";
import { CrossSellBlock } from "@/components/cross-sell-block";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Pressure Washing in Frisco & Collin County",
  description:
    "Professional pressure washing for driveways, patios, and siding. Serving Frisco, McKinney, Plano, Prosper, Allen, and surrounding Collin and Denton County communities.",
  openGraph: {
    title: "Pressure Washing in Frisco & Collin County",
    description:
      "High-pressure cleaning for driveways, patios, and siding across Collin and Denton counties.",
    url: "https://longdraw.co/pressure-washing",
  },
};

const steps = [
  {
    number: "01",
    title: "We assess",
    blurb:
      "We look at the surface, note any oil stains or problem areas, and choose the right pressure and detergent before we start.",
  },
  {
    number: "02",
    title: "We wash",
    blurb:
      "High pressure on concrete and hardscape. Low-pressure soft wash on siding and painted surfaces. The right tool for each job.",
  },
  {
    number: "03",
    title: "We inspect",
    blurb:
      "Final rinse, walk-through, and a same-day follow-up to confirm you're satisfied. We catch anything we missed before we leave.",
  },
];

const faq = [
  {
    question: "How long does pressure washing take?",
    answer:
      "Most driveways and patios take one to two hours. Larger properties or full exterior siding jobs run two to four hours. We'll give you a specific time estimate when we quote.",
  },
  {
    question: "Will pressure washing damage my driveway or siding?",
    answer:
      "No — when done correctly. Concrete and brick can take high pressure. Vinyl siding, painted wood, and softer materials get a low-pressure soft wash. We adjust the technique to the surface, not the other way around.",
  },
  {
    question: "Do I need to be home during the job?",
    answer:
      "Not necessarily. As long as we have access to the area and a hose bib, you don't need to be on-site. We'll text when we arrive and send photos when we're done.",
  },
  {
    question: "What areas of my property can you wash?",
    answer:
      "Driveways, sidewalks, patios, porches, fences, siding, garage aprons, and retaining walls. If you're not sure whether something's in scope, just ask — we'll tell you straight.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Pressure Washing",
      description:
        "Professional pressure washing for driveways, patios, and siding in Frisco and across Collin County.",
      provider: { "@type": "LocalBusiness", name: "Long Draw Home Services", url: "https://longdraw.co" },
      areaServed: { "@type": "City", name: "Frisco, TX" },
      serviceType: "Pressure Washing",
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longdraw.co" },
        { "@type": "ListItem", position: 2, name: "Pressure Washing", item: "https://longdraw.co/pressure-washing" },
      ],
    },
  ],
};

export default function PressureWashingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServiceHero
        heading={
          <>
            Pressure <em>washing</em> done right.
          </>
        }
        subhead="High-pressure cleaning for driveways, patios, and siding across the northern DFW suburbs."
        image="/pressure-hero.png"
        imageAlt="Illustration of pressure washing service on a suburban driveway"
      />

      {/* What we do */}
      <Section>
        <Eyebrow className="mb-4">What we do</Eyebrow>
        <p className="text-body-lg text-saddle max-w-2xl mb-12">
          We clean concrete, hardscape, and exterior surfaces using the right
          pressure and detergent for each material. No shortcuts, no guesswork.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Driveways &amp; concrete
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Oil stains, tire marks, algae, and years of grime removed from
              concrete, asphalt, and paver surfaces. We pre-treat stubborn
              stains before washing.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Siding &amp; exteriors
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Low-pressure soft wash for vinyl, brick, stucco, and painted
              wood. Removes mold, mildew, and pollen without damaging the
              surface or forcing water behind panels.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Patios &amp; walkways
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Stone, pavers, stamped concrete, and brick restored to clean.
              We pay attention to joints and edges — the spots that make the
              whole surface look unfinished if they&apos;re skipped.
            </p>
          </div>
        </div>
      </Section>

      <ProcessSteps
        heading="How a pressure washing job works."
        steps={steps}
      />

      <Faq items={faq} heading="Questions about pressure washing." />

      {/* Booking form */}
      <Section className="bg-bone border-t border-saddle/10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-h2 text-charcoal mb-8">
            Request a quote.
          </h2>
          <BookingForm defaultService="pressure-washing" />
        </div>
      </Section>

      <CrossSellBlock service="pressure-washing" />
    </>
  );
}
