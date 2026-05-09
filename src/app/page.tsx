import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServicesGrid } from "@/components/services-grid";
import { AboutSection } from "@/components/about-section";
import { ProcessSteps } from "@/components/process-steps";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTABlock } from "@/components/cta-block";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: {
    absolute:
      "Long Draw Home Services — Pressure Washing, Window Washing & Epoxy in Frisco",
  },
  description:
    "Professional home services across the northern DFW suburbs. Pressure washing, window washing, and epoxy garage floor coatings. Serving Frisco, McKinney, Plano, Prosper, Allen, and surrounding suburbs.",
  openGraph: {
    title: "Long Draw Home Services",
    description:
      "Pressure washing, window washing, and epoxy garage floor coatings across the northern DFW suburbs.",
    url: "https://longdraw.co",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Long Draw Home Services",
  description:
    "Residential pressure washing, window washing, and epoxy garage floor coatings across the northern DFW suburbs.",
  url: "https://longdraw.co",
  telephone: "+12144443042",
  email: "info@longdraw.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frisco",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: [
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
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <ProcessSteps />
      <TestimonialsSection />
      <CTABlock />
    </>
  );
}
