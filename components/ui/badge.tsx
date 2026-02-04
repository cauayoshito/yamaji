import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0B0F14]",
  {
    variants: {
      variant: {
        default: "border-transparent bg-teal-400/15 text-teal-300",
        cyan: "border-transparent bg-cyan-400/15 text-cyan-300",
        success: "border-transparent bg-emerald-400/15 text-emerald-300",
        warning: "border-transparent bg-amber-400/15 text-amber-300",
        danger: "border-transparent bg-rose-400/15 text-rose-300",
        outline: "text-white/80 border-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
