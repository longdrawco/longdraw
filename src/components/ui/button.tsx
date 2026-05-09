import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sans font-medium transition-colors rounded-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-charcoal text-bone hover:bg-charcoal/90",
        secondary: "bg-oxide text-bone hover:bg-oxide/90",
        ghost: "bg-transparent text-charcoal underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-3 text-sm",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
