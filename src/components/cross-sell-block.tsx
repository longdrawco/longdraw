import Link from "next/link";
import { Eyebrow } from "@/components/eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceSlug =
  | "pressure-washing"
  | "window-washing"
  | "garage-floor-epoxy";

interface CrossSellConfig {
  headline: string;
  body: string;
  linkLabel: string;
  href: string;
}

const CROSS_SELL: Record<ServiceSlug, CrossSellConfig> = {
  "pressure-washing": {
    headline: "While we're there, coat your garage floor.",
    body: "We already have your address on the schedule. Adding an epoxy garage floor coating saves you a separate trip and gets both jobs done in one visit.",
    linkLabel: "See garage floor epoxy",
    href: "/garage-floor-epoxy",
  },
  "window-washing": {
    headline: "While we're there, wash the driveway.",
    body: "Clean windows and a clean driveway — it's hard to notice one without the other. We can handle both in the same visit.",
    linkLabel: "See pressure washing",
    href: "/pressure-washing",
  },
  "garage-floor-epoxy": {
    headline: "While we're there, pressure wash the driveway.",
    body: "The driveway leads up to the garage you just coated. Might as well finish the picture. We can add pressure washing to the same visit.",
    linkLabel: "See pressure washing",
    href: "/pressure-washing",
  },
};

interface CrossSellBlockProps {
  service: ServiceSlug;
}

export function CrossSellBlock({ service }: CrossSellBlockProps) {
  const { headline, body, linkLabel, href } = CROSS_SELL[service];

  return (
    <section className="py-16 px-6 md:py-20 bg-bone border-t border-saddle/20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl flex flex-col gap-5">
          <Eyebrow>While we&apos;re there</Eyebrow>
          <h2
            className="font-serif font-medium text-charcoal leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            {headline}
          </h2>
          <p className="text-body text-saddle leading-relaxed">{body}</p>
          <Link
            href={href}
            className={cn(
              buttonVariants({ variant: "ghost", size: "default" }),
              "self-start"
            )}
          >
            {linkLabel} →
          </Link>
        </div>
      </div>
    </section>
  );
}
