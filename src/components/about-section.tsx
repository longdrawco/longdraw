import Image from "next/image";
import { Section } from "@/components/section";
import { Eyebrow } from "@/components/eyebrow";

export function AboutSection() {
  return (
    <Section className="bg-tan/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <Eyebrow>About</Eyebrow>
          <h2
            className="font-serif font-medium text-charcoal leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            One crew. One standard.
          </h2>
          <div className="flex flex-col gap-4 text-body text-saddle leading-relaxed">
            <p>
              Long Draw Home Services is a focused operation based in North
              Dallas. We do three things — pressure washing, window washing, and
              epoxy garage floor coatings — and we do them well.
            </p>
            <p>
              Most home services companies are hard to reach. We&apos;re not. We
              respond within the hour, show up when we said we would, and follow
              up the same day we finish. That&apos;s not a promise — it&apos;s
              just how we run the business.
            </p>
            <p>
              We serve homeowners across Frisco, McKinney, Plano, Prosper, Allen,
              and the surrounding Collin and Denton County suburbs.
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/region-map.png"
            alt="Stylized map of the Collin and Denton County service area"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
}
