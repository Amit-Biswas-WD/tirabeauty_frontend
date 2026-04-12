"use client";

import Link from "next/link";
import { JSX, useState, useRef } from "react";

const categories = [
  { id: 2, label: "Makeup", href: "/makeup" },
  { id: 3, label: "Skin", href: "/skin" },
  { id: 4, label: "Hair", href: "/hair" },
  { id: 6, label: "Men", href: "/men" },
  { id: 7, label: "Bath & Body", href: "/bath-body" },
];

const subCategories: Record<string, string[]> = {
  Makeup: ["Face", "Eyes", "Lips", "Nails"],
  Skin: ["Cleanser", "Moisturizer", "Serum"],
  Hair: ["Shampoo", "Conditioner", "Hair Oil"],
  Men: ["Beard Care", "Shaving", "Body Spray", "Face Wash"],
  "Bath & Body": ["Body Wash", "Scrubs", "Lotions", "Hand Care"],
};

const CategoryNavbar = (): JSX.Element => {
  const [active, setActive] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(label);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 500);
  };

  return (
    <nav className="w-full py-3 lg:block hidden relative">
      <div className="flex items-center xl:gap-14 gap-[55px] overflow-x-auto no-scrollbar xl:px-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => handleEnter(item.label)}
            onMouseLeave={handleLeave}
          >
            <Link
              href={item.href}
              className="text-sm text-[#211A1E] font-medium hover:text-[#F00000] whitespace-nowrap transition-colors duration-200"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>

      {/* Dropdown */}
      {active && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-lg z-50 border mt-2"
          onMouseEnter={() => handleEnter(active)}
          onMouseLeave={handleLeave}
        >
          <div className="max-w-7xl mx-auto p-6 grid grid-cols-4 gap-4">
            {subCategories[active]?.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="text-sm text-gray-700 hover:text-[#F00000]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default CategoryNavbar;
