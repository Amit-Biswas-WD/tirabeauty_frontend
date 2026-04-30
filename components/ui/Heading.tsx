import React, { ElementType, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "text-[#211A1E] font-normal transition-all leading-tight",
  {
    variants: {
      variant: {
        h1: "lg:text-3xl md:text-4xl text-xl lg:mb-6 md:mb-5 mb-4 font-bold",
        h2: "lg:text-2xl md:text-[22px] text-[20px] lg:mb-4 md:mb-3 mb-2", // main heading
        h3: "lg:text-xl md:text-lg text-base lg:mb-3 md:mb-2 mb-1 font-medium",
        h4: "text-lg md:text-base text-sm font-medium",
        h5: "text-base md:text-sm text-xs font-medium",
        h6: "text-sm md:text-xs text-[10px] font-medium",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "h2",
      align: "left",
    },
  },
);

export interface HeadingProps
  extends
    React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, align, as, ...props }, ref) => {
    const Tag = (as || variant || "h2") as ElementType;

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ variant, align, className }))}
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export default Heading;
