import { cn } from "@/lib/utils";

interface SectionProps extends React.ComponentPropsWithRef<"section"> {
  children: React.ReactNode;
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 px-6 md:py-24", className)} {...props}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
