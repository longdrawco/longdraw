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
  title: "Garage Floor Epoxy in Frisco & Denton County",
  description:
    "One-day epoxy garage floor coatings. Durable, easy-to-clean, and installed in a single visit. Serving Frisco, McKinney, Plano, Prosper, Allen, and surrounding suburbs across Collin and Denton counties.",
  openGraph: {
    title: "Garage Floor Epoxy in Frisco & Denton County",
    description:
      "One-day epoxy coating that transforms your garage floor. Serving the northern DFW suburbs.",
    url: "https://longdraw.co/garage-floor-epoxy",
  },
};

const steps = [
  {
    number: "01",
    title: "We prep the floor",
    blurb:
      "Diamond grinding opens the concrete pores so the coating bonds properly. We also fill cracks and patch spalls before anything goes down.",
  },
  {
    number: "02",
    title: "We apply the coating",
    blurb:
      "Base coat applied, followed by decorative flakes broadcast across the surface. You pick the color. We lay it evenly.",
  },
  {
    number: "03",
    title: "Top coat and cure",
    blurb:
      "Clear top coat seals everything. Light foot traffic in 12–24 hours. Park on it after 48–72 hours. We'll give you the exact timeline before we leave.",
  },
];

const faq = [
  {
    question: "How long does the coating take to cure?",
    answer:
      "Light foot traffic is safe in 12–24 hours. You can park on it after 48–72 hours. We'll give you the exact timeline based on the specific product and weather conditions.",
  },
  {
    question: "Do I need to empty the garage first?",
    answer:
      "Yes — the floor needs to be completely clear before we arrive. No cars, no stored items, no shelving near the walls. We grind the concrete before we coat it, so everything needs to be out. We'll remind you of this when we confirm the appointment.",
  },
  {
    question: "How long does an epoxy floor last?",
    answer:
      "A properly installed epoxy floor lasts eight to fifteen years with normal use. Avoiding harsh chemicals and abrasive scrubbing extends the life considerably. We'll go over care instructions when we finish.",
  },
  {
    question: "Can you coat a floor that already has epoxy on it?",
    answer:
      "Sometimes. It depends on the condition of the existing coat — whether it's peeling, how well it's bonded, and how thick it is. We assess during the quote and tell you straight if it needs to be stripped first.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Garage Floor Epoxy",
      description:
        "One-day epoxy garage floor coatings in Frisco and across the northern DFW suburbs.",
      provider: { "@type": "LocalBusiness", name: "Long Draw Home Services", url: "https://longdraw.co" },
      areaServed: { "@type": "City", name: "Frisco, TX" },
      serviceType: "Garage Floor Epoxy Coating",
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
        { "@type": "ListItem", position: 2, name: "Garage Floor Epoxy", item: "https://longdraw.co/garage-floor-epoxy" },
      ],
    },
  ],
};

export default function GarageFloorEpoxyPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServiceHero
        heading={
          <>
            Garage floor <em>epoxy.</em>
          </>
        }
        subhead="One-day coating that turns a stained concrete floor into a finished space."
        image="/garage-hero.png"
        imageAlt="Illustration of a finished epoxy garage floor"
      />

      {/* What we do */}
      <Section>
        <Eyebrow className="mb-4">What we do</Eyebrow>
        <p className="text-body-lg text-saddle max-w-2xl mb-12">
          We prep, coat, and seal concrete garage floors in a single day.
          The result is durable, easy to clean, and looks finished instead of
          like a floor you&apos;re embarrassed to show people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Floor preparation
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Diamond grinding opens the concrete pores so the coating bonds
              properly — not just sits on top. We fill cracks and patch spalls
              before anything goes down. Prep is what separates a coating
              that lasts from one that peels.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Base coat &amp; flakes
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Epoxy base coat applied to the prepared surface. Decorative
              color flakes broadcast across while the base is wet. You pick
              the color combination — we lay it evenly across the whole floor.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Clear top coat
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              A clear polyaspartic or polyurea top coat seals the flakes and
              gives the floor its durability. UV-stable so it won&apos;t
              yellow. Chemical and abrasion resistant. Easy to clean with a
              mop or hose.
            </p>
          </div>
        </div>
      </Section>

      <ProcessSteps
        heading="How a garage floor epoxy job works."
        steps={steps}
      />

      <Faq items={faq} heading="Questions about garage floor epoxy." />

      {/* Booking form */}
      <Section className="bg-bone border-t border-saddle/10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-h2 text-charcoal mb-8">
            Request a quote.
          </h2>
          <BookingForm defaultService="garage-floor-epoxy" />
        </div>
      </Section>

      <CrossSellBlock service="garage-floor-epoxy" />
    </>
  );
}
