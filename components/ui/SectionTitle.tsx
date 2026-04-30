"use client";

import { ReactNode } from "react";
import Heading, { HeadingProps } from "./Heading";

interface SectionTitleProps extends HeadingProps {
  children: ReactNode;
}

export const SectionTitle = ({
  children,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div className={className}>
      <Heading {...props}>{children}</Heading>
    </div>
  );
};
