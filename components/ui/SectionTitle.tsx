"use client";

import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="lg:text-2xl md:text-xl text-lg text-[#211A1E] font-normal">
      {children}
    </h2>
  );
};
