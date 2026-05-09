import { cn } from "@/lib/utils";

interface EyebrowProps extends React.ComponentPropsWithRef<"p"> {
  children: React.ReactNode;
}

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-mono text-eyebrow uppercase tracking-widest text-saddle",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
