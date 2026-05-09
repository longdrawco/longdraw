import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceHeroProps {
  heading: React.ReactNode;
  subhead: string;
  image?: string;
  imageAlt?: string;
}

export function ServiceHero({ heading, subhead, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="py-16 px-6 md:py-24 bg-bone border-b border-saddle/10">
      <div
        className={cn(
          "max-w-7xl mx-auto",
          image && "grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-0 md:items-stretch"
        )}
      >
        {/* Text block */}
        <div className={cn(image && "flex flex-col justify-center")}>
          <h1
            className="font-serif font-medium text-charcoal leading-tight"
            style={{ fontSize: "clamp(2.25rem, 4vw, 4.5rem)" }}
          >
            {heading}
          </h1>
          <p className="mt-5 text-body-lg text-saddle max-w-xl">{subhead}</p>
          <div className="mt-8">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Image — only rendered when prop is provided */}
        {image && (
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[500px]">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              className="object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
