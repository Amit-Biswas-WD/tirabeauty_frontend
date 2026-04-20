"use client";

import ReusableProductCard from "@/components/common/ReusableProductCard";
import { FEATURED_PRODUCTS } from "@/components/home/FeaturedProduct";

export default function CollectionPage() {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <ReusableProductCard productData={FEATURED_PRODUCTS} />
      </div>
    </div>
  );
}
