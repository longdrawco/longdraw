import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";

const services = [
  {
    title: "Pressure Washing",
    blurb:
      "High-pressure cleaning for driveways, patios, and siding. Removes years of buildup in an afternoon.",
    href: "/pressure-washing",
    image: "/power-wash.png",
    imageAlt: "Pressure washer",
  },
  {
    title: "Window Washing",
    blurb:
      "Streak-free exterior and interior cleaning. We reach what you can't safely from the ground.",
    href: "/window-washing",
    image: "/window.png",
    imageAlt: "Window with squeegee",
  },
  {
    title: "Garage Floor Epoxy",
    blurb:
      "Durable epoxy coating that transforms a stained floor into a finished space. Installed in one day.",
    href: "/garage-floor-epoxy",
    image: "/floor-grinder.png",
    imageAlt: "Floor grinder",
  },
];

export function ServicesGrid() {
  return (
    <Section className="pt-10 md:pt-14">
      <SectionHeading
        eyebrow="Services"
        heading={
          <>
            Three services. <em>One</em> crew. Done right.
          </>
        }
        className="mb-12"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
    </Section>
  );
}
