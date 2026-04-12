"use client";

import Link from "next/link";
import { JSX, useState, useRef } from "react";

const categories = [
  { id: 2, label: "Makeup", href: "/sections/makeup" },
  { id: 3, label: "Skin", href: "/sections/skin" },
  { id: 4, label: "Hair", href: "/sections/hair" },
  { id: 6, label: "Men", href: "/sections/men" },
  { id: 7, label: "Bath & Body", href: "/sections/bath-body" },
];

type SubCategoryGroup = {
  heading: string;
  items: string[];
};

const subCategories: Record<string, SubCategoryGroup[]> = {
  Makeup: [
    {
      heading: "Face",
      items: [
        "Blush",
        "Bronzer",
        "Compact",
        "Eye Makeup Remover",
        "Eyebrow Enhancer",
        "False Eyelashes",
      ],
    },
    {
      heading: "Eye",
      items: ["Eye Shadow", "Eyeliner", "Mascara", "Eye Primer"],
    },
    {
      heading: "Lip",
      items: [
        "Lip Balm",
        "Lip Crayon",
        "Lip Gloss",
        "Lip Liner",
        "Lip Plumper",
      ],
    },
  ],
  Skin: [
    {
      heading: "Cleansers & Exfoliators",
      items: ["Face Washes & Cleansers", "Scrubs & Exfoliators"],
    },
    {
      heading: "Lip Care",
      items: ["Lip Balm", "Lip Scrub"],
    },
    {
      heading: "Toners & Mist",
      items: ["Toner", "Mist"],
    },
  ],
  Hair: [
    {
      heading: "Hair Care",
      items: ["Conditioner", "Dry Shampoo", "Hair Oil"],
    },
    {
      heading: "Hair Styling",
      items: ["Hair Gels & Waxes", "Hair Sprays & Mists", "Hair Colour"],
    },
    {
      heading: "Shop By",
      items: ["What's New", "Bestsellers", "Minis"],
    },
  ],
  Men: [
    {
      heading: "Beard Care",
      items: ["Beard & Moustache Oil", "Beard Wax & Softeners", "Beard Comb"],
    },
    {
      heading: "Hair Care",
      items: ["Shampoo", "Conditioner", "Hair Oil"],
    },
    {
      heading: "Fragrance",
      items: [
        "Perfume (EDT & EDP)",
        "Deodorants & Roll-Ons",
        "Body Mists & Sprays",
      ],
    },
  ],
  "Bath & Body": [
    {
      heading: "Bath & Shower",
      items: [
        "Bath Salts",
        "Body Scrubs & Exfoliants",
        "Body Washes & Shower Gels",
      ],
    },
    {
      heading: "Hands & Feet",
      items: ["Hand Wash", "Hand Creams & Masks", "Foot Care"],
    },
    {
      heading: "Shaving & Hair Removal",
      items: [
        "Body Razors & Cartridges",
        "Face & Eyebrow Razors",
        "Epilators & Trimmers",
      ],
    },
  ],
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
    }, 300);
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
      {active && subCategories[active] && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-lg z-50 border-t border-gray-200 mt-0"
          onMouseEnter={() => handleEnter(active)}
          onMouseLeave={handleLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-8">
            {subCategories[active].map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-sm font-semibold text-[#211A1E] mb-3 border-b border-gray-100 pb-2">
                  {group.heading}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-[#F00000] transition-colors duration-150"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default CategoryNavbar;
