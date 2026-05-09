import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  blurb: string;
  href: string;
  image: string;
  imageAlt: string;
}

export function ServiceCard({ title, blurb, href, image, imageAlt }: ServiceCardProps) {
  return (
    <Link
      href={href}
      aria-label={`Learn more about ${title.toLowerCase()}`}
      className="group flex flex-col border border-saddle/20 p-6 hover:border-saddle/40 transition-colors"
    >
      <div className="relative w-full aspect-square mb-3">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="font-serif text-h3 text-charcoal leading-snug">{title}</h3>

      <p className="text-body text-saddle leading-relaxed mt-3">{blurb}</p>

      <span className="font-sans text-body-sm text-charcoal mt-auto pt-4 inline-flex items-center gap-1">
        Learn more
        <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
