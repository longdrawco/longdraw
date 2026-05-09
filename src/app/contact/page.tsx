import type { Metadata } from "next";
import { Section } from "@/components/section";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote for pressure washing, window washing, or garage floor epoxy across Collin and Denton counties.",
  openGraph: {
    title: "Contact — Long Draw Home Services",
    description: "Request a quote. We respond within one business hour.",
    url: "https://longdraw.co/contact",
  },
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-serif text-h1 text-charcoal leading-tight">
              Get in touch.
            </h1>
            <p className="mt-4 text-body-lg text-saddle">
              We respond to every request within one business hour.
            </p>
          </div>

          <dl className="flex flex-col gap-6 font-sans text-body text-charcoal">
            <div>
              <dt className="font-mono text-eyebrow uppercase text-saddle tracking-widest mb-1">
                Phone
              </dt>
              <dd>
                <a
                  href="tel:2144443042"
                  className="hover:text-oxide transition-colors"
                  aria-label="Call Long Draw at 214-444-3042"
                >
                  (214) 444-3042
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-eyebrow uppercase text-saddle tracking-widest mb-1">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:info@longdraw.co"
                  className="hover:text-oxide transition-colors"
                >
                  info@longdraw.co
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-eyebrow uppercase text-saddle tracking-widest mb-1">
                Hours
              </dt>
              <dd className="text-saddle">Mon–Fri, 8 AM – 6 PM</dd>
            </div>
            <div>
              <dt className="font-mono text-eyebrow uppercase text-saddle tracking-widest mb-1">
                Service area
              </dt>
              <dd className="text-saddle">
                Frisco, McKinney, Plano, Prosper, Allen, and surrounding
                communities across Collin and Denton counties.
              </dd>
            </div>
          </dl>
        </div>

        {/* Booking form */}
        <div>
          <BookingForm />
        </div>
      </div>
    </Section>
  );
}
