import Link from "next/link";

const services = [
  { label: "Pressure Washing", href: "/pressure-washing" },
  { label: "Window Washing", href: "/window-washing" },
  { label: "Garage Floor Epoxy", href: "/garage-floor-epoxy" },
];

const serviceArea = [
  { label: "Frisco", href: "/service-area" },
  { label: "McKinney", href: "/service-area" },
  { label: "Plano", href: "/service-area" },
  { label: "Prosper", href: "/service-area" },
  { label: "Allen", href: "/service-area" },
  { label: "Little Elm", href: "/service-area" },
  { label: "The Colony", href: "/service-area" },
  { label: "Lewisville", href: "/service-area" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-mono text-eyebrow uppercase text-bone/50 mb-4"
      style={{ letterSpacing: "0.1em" }}
    >
      {children}
    </p>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="font-sans text-body-sm text-bone/70 hover:text-bone transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-bone">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Four-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2">
              {services.map((s) => (
                <FooterLink key={s.href + s.label} href={s.href}>
                  {s.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <FooterHeading>Service Area</FooterHeading>
            <ul className="space-y-2">
              {serviceArea.map((s) => (
                <FooterLink key={s.label} href={s.href}>
                  {s.label}
                </FooterLink>
              ))}
              <li>
                <Link
                  href="/service-area"
                  className="font-sans text-body-sm text-saddle hover:text-tan transition-colors"
                >
                  View all cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:2144443042"
                  className="font-sans text-body-sm text-bone/70 hover:text-bone transition-colors"
                  aria-label="Call Long Draw at 214-444-3042"
                >
                  (214) 444-3042
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@longdraw.co"
                  className="font-sans text-body-sm text-bone/70 hover:text-bone transition-colors"
                >
                  info@longdraw.co
                </a>
              </li>
              <li className="font-sans text-body-sm text-bone/70">
                Mon–Fri, 8 AM – 6 PM
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <FooterHeading>Legal</FooterHeading>
            <ul className="space-y-2">
              {legal.map((l) => (
                <FooterLink key={l.href} href={l.href}>
                  {l.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-bone/10 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <p className="font-sans text-body-sm text-bone/50">
            © {new Date().getFullYear()} Long Draw Home Services
          </p>
          <p className="font-sans text-body-sm text-bone/40">
            A Long Draw Ventures LLC company
          </p>
        </div>
      </div>
    </footer>
  );
}
