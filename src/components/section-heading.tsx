import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  /** Accepts ReactNode — wrap words in <em> for oxide italic accent */
  heading: React.ReactNode;
  subhead?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  subhead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-serif text-h2 leading-tight">{heading}</h2>
      {subhead && (
        <p className="text-body-lg text-saddle max-w-2xl">{subhead}</p>
      )}
    </div>
  );
}
