import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="pt-14 pb-8 px-6 md:pt-20 md:pb-10 bg-bone">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-0 md:items-center">

        {/* Left — headline, subhead, CTAs */}
        <div className="flex flex-col justify-center">
          <h1
            className="font-serif font-medium leading-[1.05] tracking-tight text-charcoal"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
          >
            Driveways washed, garages <em>coated</em>, windows cleared.
          </h1>

          <p className="mt-6 text-body-lg text-saddle max-w-lg">
            For homeowners across the northern DFW suburbs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Request a quote
            </Link>
            <a
              href="tel:2144443042"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              aria-label="Call Long Draw at 214-444-3042"
            >
              Call (214) 444-3042
            </a>
          </div>
        </div>

        {/* Right — transparent PNG illustration, blends with bone page background */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
          <Image
            src="/hero-home.png"
            alt="Illustration of a home in the northern DFW suburbs"
            fill
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
