"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={`lg:text-2xl md:text-[22px] text-[20px] text-[#211A1E] font-normal lg:mb-4 md:mb-3 mb-2 ${className}`}
    >
      {children}
    </h2>
  );
};
