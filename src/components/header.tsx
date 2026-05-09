import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Pressure Washing", href: "/pressure-washing" },
  { label: "Window Washing", href: "/window-washing" },
  { label: "Epoxy", href: "/garage-floor-epoxy" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bone border-b border-saddle/20 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/longdraw.svg"
            alt="Long Draw"
            width={36}
            height={36}
            className="shrink-0"
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-h3 font-medium text-charcoal leading-none">
              LONG DRAW
            </span>
            <span
              className="font-mono text-eyebrow uppercase text-saddle leading-none mt-0.5"
              style={{ letterSpacing: "0.1em" }}
            >
              HOME SERVICES
            </span>
          </div>
        </Link>

        {/* Nav + phone CTA */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-body-sm text-charcoal hover:text-saddle transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2144443042"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            aria-label="Call Long Draw at 214-444-3042"
          >
            (214) 444-3042
          </a>
        </nav>
      </div>
    </header>
  );
}
