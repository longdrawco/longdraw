import type { Metadata } from "next";
import { ServiceHero } from "@/components/service-hero";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";
import { CTABlock } from "@/components/cta-block";

export const metadata: Metadata = {
  title: "Service Area — Collin & Denton County",
  description:
    "Long Draw Home Services covers Frisco, McKinney, Plano, Prosper, Allen, Little Elm, The Colony, Lewisville, Carrollton, Coppell, and surrounding communities across Collin and Denton counties.",
  openGraph: {
    title: "Service Area — Long Draw Home Services",
    description:
      "We serve homeowners across Collin and Denton counties — Frisco, McKinney, Plano, Prosper, Allen, and more.",
    url: "https://longdraw.co/service-area",
  },
};

const PRIMARY_CITIES = [
  "Frisco",
  "McKinney",
  "Plano",
  "Prosper",
  "Allen",
  "Little Elm",
  "The Colony",
  "Lewisville",
  "Carrollton",
  "Coppell",
];

const EXTENDED_CITIES = [
  "Celina",
  "Anna",
  "Princeton",
  "Melissa",
  "Fairview",

];

const ZIP_CODES: Record<string, string[]> = {
  Frisco: ["75033", "75034", "75035", "75036"],
  McKinney: ["75069", "75070", "75071", "75072"],
  Plano: ["75023", "75024", "75025", "75074", "75093", "75094"],
  Prosper: ["75078"],
  Allen: ["75002", "75013"],
  "Little Elm": ["75068"],
  "The Colony": ["75056"],
  Lewisville: ["75022", "75028", "75029"],
  Carrollton: ["75006", "75007", "75010"],
  Coppell: ["75019"],
};

export default function ServiceAreaPage() {
  return (
    <>
      <ServiceHero
        heading="Where we work."
        subhead="We cover Collin and Denton counties — Frisco, McKinney, Plano, Prosper, Allen, Lewisville, and the surrounding suburbs."
        image="/hero-map.png"
        imageAlt="Stylized map of the Collin and Denton County service area"
      />

      {/* Primary cities */}
      <Section>
        <Eyebrow className="mb-6">Primary service area</Eyebrow>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-16">
          {PRIMARY_CITIES.map((city) => (
            <div
              key={city}
              className="border border-saddle/20 px-4 py-3 font-sans text-body text-charcoal"
            >
              {city}
            </div>
          ))}
        </div>

        {/* Extended cities */}
        <Eyebrow className="mb-6">Also serving</Eyebrow>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {EXTENDED_CITIES.map((city) => (
            <div
              key={city}
              className="border border-saddle/10 px-4 py-3 font-sans text-body-sm text-saddle"
            >
              {city}
            </div>
          ))}
        </div>

        {/* Zip codes */}
        <Eyebrow className="mb-6">ZIP codes covered</Eyebrow>
        <div className="flex flex-col gap-4 max-w-3xl">
          {Object.entries(ZIP_CODES).map(([city, zips]) => (
            <div key={city} className="flex gap-4 items-baseline">
              <span className="font-sans text-body-sm text-charcoal w-28 shrink-0">
                {city}
              </span>
              <span className="font-mono text-body-sm text-saddle tracking-wide">
                {zips.join("  ·  ")}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 font-sans text-body-sm text-saddle max-w-xl">
          Not sure if we cover your address? Call us at{" "}
          <a
            href="tel:2144443042"
            className="text-charcoal hover:text-oxide transition-colors"
          >
            (214) 444-3042
          </a>{" "}
          or send a message on the contact page. We&apos;ll tell you straight.
        </p>
      </Section>

      <CTABlock
        heading="Ready to get on the schedule?"
        buttonLabel="Request a quote"
      />
    </>
  );
}
