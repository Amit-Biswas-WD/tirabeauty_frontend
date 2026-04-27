"use client";

import { useState, ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FilterGroupProps {
  title: string;
  children: ReactNode;
  isOpenDefault?: boolean;
}

export function FilterGroup({
  title,
  children,
  isOpenDefault = false,
}: FilterGroupProps) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)} // FIX (safer)
        className="flex items-center justify-between w-full p-4 text-left group transition-all"
      >
        <span className="text-[16px] md:text-[18px] font-medium text-[#1a1a1a] font-sans">
          {title}
        </span>

        <div className="text-gray-500 group-hover:text-black transition-all duration-300">
          <FaChevronDown
            size={16}
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3">{children}</div>
      </div>
    </div>
  );
}
