import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ServiceHero } from "@/components/service-hero";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { SectionHeading } from "@/components/section-heading";
import { ProcessSteps } from "@/components/process-steps";
import { BookingForm } from "@/components/booking-form";
import { SubServiceBlock, type SubServiceBlockProps } from "@/components/sub-service-block";
import { JsonLd } from "@/components/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute:
      "Pressure Washing in Frisco — Driveways, House, Roof, Fence | Long Draw Home Services",
  },
  description:
    "Soft-wash trained and fully insured pressure washing in Frisco and the northern DFW suburbs. Driveways, house washing, roof cleaning, fence washing, and rust stain removal. One crew, five surfaces.",
  openGraph: {
    title: "Pressure Washing in Frisco — Driveways, House, Roof, Fence",
    description:
      "Five pressure washing services in Frisco and Collin County. Driveways, house washing, roof cleaning, fence washing, rust stain removal.",
    url: "https://longdraw.co/pressure-washing",
  },
};

const steps = [
  {
    number: "01",
    title: "We assess",
    blurb:
      "We look at the surface, note any oil stains or problem areas, and choose the right pressure and chemistry before we start.",
  },
  {
    number: "02",
    title: "We wash",
    blurb:
      "High pressure on concrete and hardscape. Soft wash on siding, roofs, and painted surfaces. The right tool for each job.",
  },
  {
    number: "03",
    title: "We inspect",
    blurb:
      "Final rinse, walk-through, and a same-day follow-up to confirm you're satisfied. We catch anything we missed before we leave.",
  },
];

const JUMP_LINKS = [
  { label: "Driveway", href: "#driveway" },
  { label: "House", href: "#house-washing" },
  { label: "Roof", href: "#roof-cleaning" },
  { label: "Fence", href: "#fence-washing" },
  { label: "Rust", href: "#rust-removal" },
];

const subServices: Omit<SubServiceBlockProps, "isLast">[] = [
  {
    id: "driveway",
    heading: (
      <>
        Driveway and concrete cleaned <em>right.</em>
      </>
    ),
    blurb:
      "Oil stains, mildew, red Texas clay tracked across the apron — concrete holds onto everything. We use the right pressure and the right surface cleaner so you don't end up with wand stripes or etched concrete.",
    includes: [
      "Driveways and aprons",
      "Sidewalks and walkways",
      "Patios (concrete and stamped)",
      "Pool decks and coping",
      "Stain pre-treatment for oil, rust, and organic buildup",
    ],
    faqs: [
      {
        question: "Will pressure washing damage my concrete?",
        answer:
          "Not when done right. We use a surface cleaner for even passes and dial the pressure to the surface, so you don't get the wand-stripe look you've seen on neighbors' driveways.",
      },
      {
        question: "Can you remove rust stains from sprinklers?",
        answer:
          "Yes — those need a specific chemical treatment, not just pressure. We carry it standard.",
      },
    ],
    serviceValue: "driveway-cleaning",
  },
  {
    id: "house-washing",
    heading: (
      <>
        House washing, <em>soft</em> and thorough.
      </>
    ),
    blurb:
      "Siding, soffits, eaves, and trim collect mildew and dust that high pressure will damage. We use a soft-wash system — low pressure, surfactant, and rinse — to clean without forcing water behind your siding.",
    includes: [
      "Brick, stucco, hardie, vinyl, and painted siding",
      "Soffits, eaves, and fascia",
      "Window exteriors (rinse only)",
      "Front porch and entry",
      "Mildew and algae treatment",
    ],
    faqs: [
      {
        question: "What's the difference between pressure washing and soft washing?",
        answer:
          "Pressure washing uses force; soft washing uses chemistry. Houses need soft wash so water doesn't get forced behind siding or under shingle edges. We use the right method for each surface.",
      },
      {
        question: "How often should I wash my house?",
        answer:
          "Once a year in North Texas. Pollen, mildew, and dust build up faster than people realize, especially on north-facing walls.",
      },
    ],
    serviceValue: "house-washing",
  },
  {
    id: "roof-cleaning",
    heading: (
      <>
        Roof cleaning that <em>actually</em> lasts.
      </>
    ),
    blurb:
      "Those black streaks on your shingles are algae — gloeocapsa magma — and they're feeding on the limestone in your roofing. Soft washing kills the algae at the root. Pressure washing strips the granules and shortens your roof's life.",
    includes: [
      "Asphalt shingle roofs",
      "Tile and metal roofs",
      "Algae and lichen treatment",
      "Gentle rinse, no high-pressure",
      "Gutter and downspout flush at completion",
    ],
    faqs: [
      {
        question: "Will roof cleaning void my warranty?",
        answer:
          "Soft washing is the method recommended by the Asphalt Roofing Manufacturers Association. High-pressure washing is what voids warranties — we don't do that.",
      },
      {
        question: "How long does a roof cleaning last?",
        answer:
          "Three to five years before streaks return, depending on tree cover and humidity.",
      },
    ],
    serviceValue: "roof-cleaning",
  },
  {
    id: "fence-washing",
    heading: (
      <>
        Fences brought <em>back</em> to wood.
      </>
    ),
    blurb:
      "A few years of North Texas weather turns cedar and pine grey, then black. Cleaning brings the natural color back and preps the wood if you want it sealed. We can do both.",
    includes: [
      "Cedar, pine, and pressure-treated wood",
      "Mildew and tannin removal",
      "Optional sealing (separate quote)",
      "Both sides of the fence",
      "Gates and posts",
    ],
    faqs: [
      {
        question: "Will pressure washing damage my fence?",
        answer:
          "Not when done at the right pressure. We use a wider tip and keep distance, then finish with a brightener that evens the color.",
      },
      {
        question: "Should I seal after washing?",
        answer:
          "If you want the color to last, yes. We do sealing as a separate service so you're not paying for it if you don't want it.",
      },
    ],
    serviceValue: "fence-washing",
  },
  {
    id: "rust-removal",
    heading: (
      <>
        Sprinkler rust stains, <em>gone.</em>
      </>
    ),
    blurb:
      "Iron in North Texas well water and city water leaves orange stains on driveways, walkways, and the bottom courses of brick. Pressure alone won't touch it. We use the chemistry that does.",
    includes: [
      "Driveway and concrete rust",
      "Brick and stone rust",
      "Fertilizer stains",
      "Hard water mineral stains",
      "Stain identification and treatment plan before work starts",
    ],
    faqs: [
      {
        question: "Why won't pressure washing remove rust?",
        answer:
          "Rust is a chemical bond with the surface, not a layer on top. You need an acid-based remover, applied at the right concentration, to break the bond.",
      },
      {
        question: "Will the stains come back?",
        answer:
          "They will if your sprinklers keep hitting the concrete. We can flag which heads are causing the staining so you can adjust them.",
      },
    ],
    serviceValue: "rust-stain-removal",
  },
];

// Flatten all FAQs for the FAQPage schema
const allFaqs = subServices.flatMap((s) => s.faqs);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...subServices.map((s) => ({
      "@type": "Service",
      name: typeof s.heading === "string" ? s.heading : `Pressure Washing — ${s.id}`,
      description: s.blurb,
      provider: {
        "@type": "LocalBusiness",
        name: "Long Draw Home Services",
        url: "https://longdraw.co",
      },
      areaServed: { "@type": "City", name: "Frisco, TX" },
      serviceType: "Pressure Washing",
      url: `https://longdraw.co/pressure-washing#${s.id}`,
    })),
    {
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://longdraw.co" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Pressure Washing",
          item: "https://longdraw.co/pressure-washing",
        },
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
        subhead="Five surfaces. One crew. Fully insured. Serving Frisco and the northern DFW suburbs."
        image="/pressure-hero.png"
        imageAlt="Illustration of pressure washing service on a suburban driveway"
      />

      {/* What we wash */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we wash"
          heading={
            <>
              Five surfaces. <em>One</em> crew. Fully insured.
            </>
          }
          subhead="Every surface needs different pressure, different chemistry, and different technique. We match the method to the material."
          className="mb-8"
        />

        {/* Jump nav */}
        <nav
          className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4 font-mono text-eyebrow"
          aria-label="Jump to service"
          style={{ letterSpacing: "0.08em" }}
        >
          <span className="uppercase text-saddle/60">Jump to:</span>
          {JUMP_LINKS.map(({ label, href }, i) => (
            <Fragment key={href}>
              {i > 0 && (
                <span className="text-saddle/40" aria-hidden>
                  ·
                </span>
              )}
              <a
                href={href}
                className="uppercase text-saddle hover:text-charcoal transition-colors"
              >
                {label}
              </a>
            </Fragment>
          ))}
        </nav>

        {/* Sub-service blocks */}
        {subServices.map((service, i) => (
          <SubServiceBlock
            key={service.id}
            {...service}
            isLast={i === subServices.length - 1}
          />
        ))}
      </Section>

      <ProcessSteps heading="How a pressure washing job works." steps={steps} />

      {/* Booking form */}
      <Section id="booking" className="bg-bone border-t border-saddle/10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-h2 text-charcoal mb-8">
            Request a quote.
          </h2>
          <BookingForm />
        </div>
      </Section>

      {/* Dual cross-sell */}
      <section className="py-16 px-6 md:py-20 bg-bone border-t border-saddle/20">
        <div className="max-w-7xl mx-auto">
          <Eyebrow className="mb-8">While we&apos;re there</Eyebrow>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/window-washing"
              className="group flex flex-col gap-4 border border-saddle/20 p-8 hover:border-saddle/40 transition-colors"
            >
              <h3 className="font-serif text-h3 text-charcoal leading-snug">
                While we&apos;re there, wash the windows.
              </h3>
              <p className="font-sans text-body text-saddle leading-relaxed">
                Clean windows and a clean driveway — it&apos;s hard to notice one without
                the other. We can add window washing to the same visit.
              </p>
              <span className="font-sans text-body-sm text-charcoal mt-auto inline-flex items-center gap-1">
                See window washing
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </span>
            </Link>

            <Link
              href="/garage-floor-epoxy"
              className="group flex flex-col gap-4 border border-saddle/20 p-8 hover:border-saddle/40 transition-colors"
            >
              <h3 className="font-serif text-h3 text-charcoal leading-snug">
                While we&apos;re there, coat the garage floor.
              </h3>
              <p className="font-sans text-body text-saddle leading-relaxed">
                We&apos;re already at your address. Adding an epoxy garage floor coating
                saves a separate trip and gets everything done in one visit.
              </p>
              <span className="font-sans text-body-sm text-charcoal mt-auto inline-flex items-center gap-1">
                See garage floor epoxy
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
