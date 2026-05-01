import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("leading-7 [&:not(:first-child)]:mt-6", {
  variants: {
    size: {
      default: "text-base",
      sm: "text-sm font-medium leading-none",
      lg: "text-lg font-semibold",
      xl: "text-xl font-bold",
    },
    textColor: {
      primary: "text-slate-900",
      secondary: "text-slate-500",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "default",
    textColor: "primary",
  },
});

interface ParagraphProps
  extends
    React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = ({
  className,
  size,
  textColor,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(
        paragraphVariants({
          size,
          textColor,
          className,
        }),
      )}
      {...props}
    />
  );
};

export default Paragraph;
