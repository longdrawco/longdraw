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
  title: "Window Washing in Frisco & the DFW Suburbs",
  description:
    "Streak-free window cleaning inside and out. Serving Frisco, McKinney, Plano, Prosper, Allen, and surrounding communities across Collin and Denton counties.",
  openGraph: {
    title: "Window Washing in Frisco & the DFW Suburbs",
    description:
      "Streak-free interior and exterior window cleaning across the northern DFW suburbs.",
    url: "https://longdraw.co/window-washing",
  },
};

const steps = [
  {
    number: "01",
    title: "We count and assess",
    blurb:
      "We walk the property, count windows, and note any hard-to-reach panes or damaged screens before we quote or start.",
  },
  {
    number: "02",
    title: "We clean exterior first",
    blurb:
      "Exterior glass scrubbed and squeegeed clean. We work top-down so drips never land on finished panes.",
  },
  {
    number: "03",
    title: "Interior, tracks, and screens",
    blurb:
      "Interior glass cleaned, window tracks wiped out, screens removed and rinsed. We flag any damaged screens rather than quietly skip them.",
  },
];

const faq = [
  {
    question: "Do you clean interior windows too?",
    answer:
      "Yes. We do full interior and exterior cleaning. Just let us know when you book — interior access affects the time estimate and we'll coordinate around your schedule.",
  },
  {
    question: "How often should I get my windows cleaned?",
    answer:
      "Most homeowners do once or twice a year. If you have a lot of trees nearby, dusty construction in the neighborhood, or a pool, twice a year makes a visible difference. Once is a good baseline for most homes.",
  },
  {
    question: "Do you clean screens and window tracks?",
    answer:
      "Yes — screens and tracks are included. If a screen is bent or has a hole, we'll flag it for you rather than quietly replace it or skip it without saying anything.",
  },
  {
    question: "Can you clean windows I can't reach from the ground?",
    answer:
      "That's most of what we do. We bring the tools to safely reach second-story and high windows. You don't need to worry about ladders or rigging.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Window Washing",
      description:
        "Streak-free interior and exterior window cleaning across Collin and Denton counties.",
      provider: { "@type": "LocalBusiness", name: "Long Draw Home Services", url: "https://longdraw.co" },
      areaServed: { "@type": "City", name: "Frisco, TX" },
      serviceType: "Window Washing",
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
        { "@type": "ListItem", position: 2, name: "Window Washing", item: "https://longdraw.co/window-washing" },
      ],
    },
  ],
};

export default function WindowWashingPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ServiceHero
        heading={
          <>
            Window washing. <em>Streak-free.</em>
          </>
        }
        subhead="Full interior and exterior window cleaning across the DFW suburbs."
        image="/window-washing-hero.png"
        imageAlt="Window washing crew cleaning a home in the DFW suburbs"
      />

      {/* What we do */}
      <Section>
        <Eyebrow className="mb-4">What we do</Eyebrow>
        <p className="text-body-lg text-saddle max-w-2xl mb-12">
          We clean glass, screens, and tracks — interior and exterior — using
          tools built for the job. No streaks, no missed spots.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Exterior windows
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Every pane scrubbed and squeegeed clean. We work top-down across
              the whole house so drips never land on finished glass. Ground
              floor and upper-story windows treated the same way.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Interior windows
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Interior glass cleaned with the same care as exterior. We protect
              sills and frames, move blinds and curtains carefully, and put
              everything back where we found it.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-h3 text-charcoal">
              Screens &amp; tracks
            </h3>
            <p className="text-body text-saddle leading-relaxed">
              Screens removed, rinsed clean, and reinstalled. Tracks wiped out
              — the part most window cleaners skip. If a screen is damaged,
              we&apos;ll tell you before we leave.
            </p>
          </div>
        </div>
      </Section>

      <ProcessSteps
        heading="How a window washing job works."
        steps={steps}
      />

      <Faq items={faq} heading="Questions about window washing." />

      {/* Booking form */}
      <Section className="bg-bone border-t border-saddle/10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-h2 text-charcoal mb-8">
            Request a quote.
          </h2>
          <BookingForm defaultService="window-washing" />
        </div>
      </Section>

      <CrossSellBlock service="window-washing" />
    </>
  );
}
