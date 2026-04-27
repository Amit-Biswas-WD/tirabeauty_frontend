"use client";

import { useState } from "react";
import { CheckBox } from "@/components/ui/CheckBox";
import { FilterGroup } from "@/components/ui/FilterGroup";
import { FEATURED_PRODUCTS } from "@/components/home/FeaturedProduct";
import ReusableProductCard from "@/components/common/ReusableProductCard";

export default function CollectionPage() {
  const [filters, setFilters] = useState({
    nike: false,
    adidas: false,
    serums: false,
  });

  const handleChange = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    // console.log("value", key);
  };

  return (
    <div className="grid grid-cols-4 lg:gap-4 gap2">
      <div className="col-span-1 border border-gray-200">
        <FilterGroup title="Category" isOpenDefault={true}>
          <CheckBox
            label="Serums & Essence"
            count={719}
            checked={filters.serums}
            onChange={() => handleChange("serums")}
          />
        </FilterGroup>

        <FilterGroup title="Brand">
          <CheckBox
            label="Nike"
            count={12}
            checked={filters.nike}
            onChange={() => handleChange("nike")}
          />
          <CheckBox
            label="Adidas"
            count={8}
            checked={filters.adidas}
            onChange={() => handleChange("adidas")}
          />
        </FilterGroup>
      </div>
      <div className="col-span-3">
        <ReusableProductCard productData={FEATURED_PRODUCTS} />
      </div>
    </div>
  );
}
