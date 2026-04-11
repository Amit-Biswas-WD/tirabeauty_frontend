"use client";

import { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function ProductPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSort, setSelectedSort] = useState<string>("Relevance");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const sortOptions: string[] = [
    "Relevance",
    "Price Low to High",
    "Price High to Low",
    "Discount Low to High",
    "Discount High to Low",
    "Ratings",
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      {/* Product List */}
      <div className="flex items-center justify-between gap-2 mb-4 relative">
        <h3 className="text-2xl font-medium">
          Products <span className="text-sm font-normal">(21237 items)</span>
        </h3>

        <div className="relative" ref={dropdownRef}>
          <button
            className="text-sm font-normal text-[#635E61] flex items-center gap-1 cursor-pointer select-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            Sort by:{" "}
            <span className="text-[#211A1E] font-medium">{selectedSort}</span>
            <FaAngleDown
              size={12}
              className={`transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-20 overflow-hidden">
              <ul className="py-1">
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-200 hover:text-red-500 ${
                      selectedSort === option ? "text-red-500" : ""
                    }`}
                    onClick={() => {
                      setSelectedSort(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-12 gap-2">
        {/* left sidebar or search filters */}
        <div className="col-span-3">left sidebar or search filters</div>
        {/* Product Items */}
        <div className="col-span-9">Right Product section</div>
      </div>
    </div>
  );
}
