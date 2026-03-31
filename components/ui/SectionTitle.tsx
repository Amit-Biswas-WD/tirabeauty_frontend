"use client";

import { JSX, ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps): JSX.Element => {
  return (
    <h2 className="lg:text-2xl md:text-xl text-lg text-[#211A1E] font-normal">
      {children}
    </h2>
  );
};

export default SectionTitle;
